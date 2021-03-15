<template>
  <div class="article-box">
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="文章名:">
              <span>{{ scope.row.title }}</span>
            </el-form-item>
            <el-form-item label="文章Id:">
              <span>{{ scope.row.id }}</span>
            </el-form-item>
            <el-form-item label="分类:">
              <span>{{ scope.row.classify_name }}</span>
            </el-form-item>
            <el-form-item label="点赞数:">
              <span>{{ scope.row.fav_nums }}</span>
            </el-form-item>
            <el-form-item label="评论数:">
              <span>{{ scope.row.com_nums }}</span>
            </el-form-item>
            <el-form-item label="阅读数:">
              <span>{{ scope.row.read_nums }}</span>
            </el-form-item>
            <el-form-item label="作者:">
              <span>{{ scope.row.nickname }}</span>
            </el-form-item>
            <el-form-item label="用户ID:">
              <span>{{ scope.row.uid }}</span>
            </el-form-item>
            <el-form-item label="发表日期:">
              <span>{{ scope.row.createdAt }}</span>
            </el-form-item>
            <el-form-item label="所属组织ID:">
              <span>{{ scope.row.organize_id | getOrganizeId}}</span>
            </el-form-item>
            <el-form-item label="是否公开:">
              <span>{{ scope.row.public | getPublic}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column width="width" label="文章名">
        <template slot-scope="scope">
          <div>{{scope.row.title}}</div>
        </template>
      </el-table-column>
      <el-table-column width="width" label="类型">
        <template slot-scope="scope">
          <div>{{scope.row.classify_name}}</div>
        </template>
      </el-table-column>
      <el-table-column width="width" label="作者">
        <template slot-scope="scope">
          <div>{{scope.row.nickname}}</div>
        </template>
      </el-table-column>
      <el-table-column width="width" label="发布日期">
        <template slot-scope="scope">
          <div>{{getFormatDate(scope.row.createdAt)}}</div>
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="primary">查看</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.uid, scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="删除文章" :visible.sync="dialogVisible" width="width">
      <div>
        <span style="margin-right:10px">该文章是否存在违规</span>
        <el-checkbox v-model="checked" @change="handleVio"></el-checkbox>
      </div>
      <div v-show="vioShow">
        <div style="margin:15px 0">
          <span>请选择违规类型: </span>
          <el-select v-model="model" placeholder size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span>请填写违规信息: </span>
          <el-input v-model="vioInfo" placeholder></el-input>
        </div>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="current">确 定</el-button>
      </div>
    </el-dialog>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>

<script>
import { getArticleList,adminDeleteArticle } from "@/api/article";
import { handleViolation,handleViolationTime } from "@/api/user";
import { SetSysApply } from "@/api/notice";
import { getFormatDate } from "@/utils/utils";
export default {
  data() {
    return {
      tableData: [],
      search: "",
      dialogVisible: false,
      checked: false,
      vioInfo: "",
      viouid:0,
      vioid:0,
      vioShow: false,
      options:[
        {
          label:"色情",
          value:"色情",
        },
        {
          label:"辱骂",
          value:"辱骂",
        },
        {
          label:"反动",
          value:"反动",
        },
        {
          label:"诈骗",
          value:"诈骗",
        },
        {
          label:"广告",
          value:"广告",
        },
        {
          label:"不实信息",
          value:"不实信息",
        }
      ],
      model:""
    };
  },
  created() {
    this.initArtileList()
  },
  filters: {
    getOrganizeId(val) {
      if (val) {
        return val;
      }
      return "暂无";
    },
    getPublic(val) {
      if (val == 1) {
        return "公开";
      }
      return "不公开";
    },
  },
  mounted() {},
  methods: {
    async current(){
      this.dialogVisible = false
      if(this.checked){
        let data = {
          uid:this.viouid,
          id:this.vioid,
          info:this.vioInfo,
          type:this.model
        }
        await handleViolation(data).then( async res=>{
          await SetSysApply(data).then(res=>{
            console.log(res)
          })
        })
      }
      await adminDeleteArticle({id:this.vioid}).then(async res=>{
        await this.initArtileList()
      })
    },
    initArtileList(){
      getArticleList().then((res) => {
        this.tableData = res.data.rows;
      });
    },
    getFormatDate(date) {
      return getFormatDate(date);
    },
    tableRowClassName() {
      return "light-row";
    },
    handleDelete(uid,id) {
      this.viouid = uid
      this.vioid = id
      this.dialogVisible = true;
    },
    handleVio(val) {
      if(val){
        this.vioShow = true
      }else{
        this.vioShow = false
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-table th,
.el-table tr {
  background-color: rgba(0, 0, 0, 0.1);
}
::v-deep .el-table .light-row {
  color: #000;
  // background-color: $primary-table;
}
::v-deep .el-table__expanded-cell {
  background-color: rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
}
.article-box {
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 10px 5px 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .pagination {
    margin: 25px 0;
  }
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>