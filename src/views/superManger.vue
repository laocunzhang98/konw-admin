<template>
  <div class="manager-box">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="用户名" width="width">
        <template slot-scope="scope">
          <div>{{scope.row.nickname}}</div>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="width">
        <template slot-scope="scope">
          <div>{{scope.row.email}}</div>
        </template>
      </el-table-column>
      <el-table-column label="身份" width="width">
        <template slot-scope="scope">
          <div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                {{scope.row.level | getIdentity}}
                <i class="el-icon-d-caret"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="modifyUserLimit(scope.row.id,16)">管理员</el-dropdown-item>
                <el-dropdown-item @click.native="modifyUserLimit(scope.row.id,8)">成员</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getManagerList,modifyUserLimit } from "@/api/user";
export default {
  created() {
    this.initManagerList()
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    initManagerList(){
      getManagerList().then((res) => {
      this.tableData = res.data;
    });
    },
    modifyUserLimit(id,level){
      modifyUserLimit({id,level}).then(res=>{
        console.log(res)
        this.initManagerList()
     })
    }
  },
  filters: {
    getIdentity(val) {
      if (val == 16) {
        return "管理员";
      } else {
        return "超级管理员";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
.manager-box {
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
</style>