<template>
  <div class="clearfix">
    <div class="header-box">
      <div class="title">知食后台管理系统</div>
      <div class="logout">
        <i class="el-icon-switch-button"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.clearfix{
  height: 60px;
}
.header-box {
  height: 60px;
  position: fixed;
  z-index: 2000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(84, 92, 100);
  color: #dacccc;
  .title {
    font-weight: 600;
    font-size: 18px;
    padding-left: 20px;
  }
  .logout {
    padding-right: 20px;
  }
}
</style>