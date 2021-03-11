<template>
  <div class="user-box">
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名:">
              <span>{{ scope.row.nickname }}</span>
            </el-form-item>
            <el-form-item label="邮箱:">
              <span>{{ scope.row.email }}</span>
            </el-form-item>
            <el-form-item label="用户 ID:">
              <span>{{ scope.row.id }}</span>
            </el-form-item>
            <el-form-item label="粉丝数:">
              <span>{{ scope.row.fans_nums }}</span>
            </el-form-item>
            <el-form-item label="关注数:">
              <span>{{ scope.row.follow_nums }}</span>
            </el-form-item>
            <el-form-item label="职业:">
              <span>{{ scope.row.job }}</span>
            </el-form-item>
            <el-form-item label="描述:">
              <span>{{ scope.row.describe }}</span>
            </el-form-item>
            <el-form-item label="等级:">
              <span>{{ scope.row.level }}</span>
            </el-form-item>
            <el-form-item label="创建日期:">
              <span>{{ scope.row.createdAt }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column width="width" label="作者">
        <template slot-scope="scope">
          <div>{{scope.row.nickname}}</div>
        </template>
      </el-table-column>
      <el-table-column width="width" label="职业">
        <template slot-scope="scope">
          <div>{{scope.row.job}}</div>
        </template>
      </el-table-column>
      <el-table-column width="width" label="描述">
        <template slot-scope="scope">
          <div>{{scope.row.describe}}</div>
        </template>
      </el-table-column>
      <el-table-column width="width" label="最后一次登录日期">
        <template slot-scope="scope">
          <div><time-diff :date="scope.row.lastDate"></time-diff></div>
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
  </div>
</template>

<script>
import { getUserList } from "@/api/user";
import TimeDiff from '@/utils/TimeDiff'
export default {
  data() {
    return {
      tableData: [],
      search: "",
    };
  },
  created() {
    getUserList().then((res) => {
      console.log(res);
      this.tableData = res.data.rows;
    });
  },
  components:{
    TimeDiff
  },
  mounted() {},
  methods: {
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
.user-box {
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
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