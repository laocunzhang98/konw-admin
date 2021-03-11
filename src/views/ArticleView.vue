<template>
  <div class="article-box">
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="文章名:">
              <span>{{ scope.row.title }}</span>
            </el-form-item>
            <el-form-item label="文章 Id:">
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
            <el-form-item label="发表日期:">
              <span>{{ scope.row.createdAt }}</span>
            </el-form-item>
            <el-form-item label="组织归属:">
              <span>{{ scope.row.organize_id }}</span>
            </el-form-item>
            <el-form-item label="是否公开:">
              <span>{{ scope.row.public }}</span>
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
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getArticleList } from "@/api/article";
import {getFormatDate} from "@/utils/utils";
export default {
  data() {
    return {
      tableData: [],
      search: "",
    };
  },
  created() {
    getArticleList().then((res) => {
      console.log(res);
      this.tableData = res.data.rows;
      console.log(this.tableData);
    });
  },
  mounted() {},
  methods: {
    getFormatDate(date){
      return getFormatDate(date)
    },
    tableRowClassName() {
      return "light-row";
    },
    handleDelete() {},
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
  .pagination{
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