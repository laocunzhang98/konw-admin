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
      <el-menu-item index="4" @click.native="ManageUser"><i class="el-icon-user"></i> 用户管理</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-data-analysis"></i> 操作日志</el-menu-item>
      <el-menu-item index="6" @click.native="ManageArticle" ><i class="el-icon-reading"></i> 文章管理</el-menu-item>
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
    ManageArticle(){
      this.$router.push("/home/article")
    },
    ManageUser(){
      this.$router.push("/home/users")
    },
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
    background-color: rgb(13, 21, 34)!important;
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