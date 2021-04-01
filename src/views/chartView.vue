<template>
  <div class="box">
    <div class="title">总览</div>
    <div class="mem-stat">
      <div class="card">
        <div class="card-left">
          <span class="circle"></span>
          <span>当前在线人数</span>
          <div class="number">123</div>
        </div>
        <el-progress type="circle" :percentage="30"></el-progress>
      </div>
      <div class="card">
        <div class="card-left">
          <span class="circle"></span>
          <span>当日在线人数</span>
          <div class="number">123</div>
        </div>
        <el-progress type="circle" :percentage="30"></el-progress>
      </div>
      <div class="card">
        <div class="card-left">
          <span class="circle"></span>
          <span>用户总人数</span>
          <div class="number">123</div>
        </div>
        <el-progress type="circle" :percentage="30"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
::v-deep .el-progress-circle{
  width: 100px !important;
  height: 100px !important;
}
.number{
  font-size: 24px;
  font-weight: 600;
  margin: 25px;
}
.card {
  display: flex;
  justify-content: space-around;
  padding:20px 10px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 30%;
  box-shadow: 5px 5px 5px #888888;
}
.circle {
  display: inline-block;
  border-radius: 50%;
  background-color: skyblue;
  margin-right: 10px;
  height: 10px;
  width: 10px;
}
.box{
  .title {
    height: 50px;
    padding-left: 20px;
    line-height: 40px;
    font-weight: 600;
    font-size: 24px;
    background-color: rgba(221, 202, 202, 0.2);
  }
  .mem-stat {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
}

</style>