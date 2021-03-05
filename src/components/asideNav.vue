<template>
  <div class="aside-box">
    <el-menu 
    :default-active="activeIndex" 
    mode="vertical" 
    @select="menuSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    >
      <div class="logo"><img src="../assets/logo.png" alt=""></div>
      <el-menu-item index="1"><i class="el-icon-s-home"></i> 首页</el-menu-item>
      <el-menu-item index="2"><i class="el-icon-menu"></i> 菜单</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-s-data"></i> 数据展示</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-user"></i> 用户管理</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-data-analysis"></i> 操作日志</el-menu-item>
      <el-menu-item index="6"><i class="el-icon-reading"></i> 文章管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:"asideNav",
  data() {
    return {
      activeIndex:"1"
    }
  },
  methods: {
    menuSelect(){

    }
  },
}
</script>

<style lang="scss" scoped>
.aside-box{
  height: 100%;
}
.el-menu{
  height: 100%;
  border-right: 0;
}
::v-deep {
  .el-menu-item.is-active{
    background-color: rgb(53,63,79)!important;
  }
}
.logo{
  display: flex;
  justify-content: center;
  img{
    width: 100px;
    height: 100px;
  }
}
</style>