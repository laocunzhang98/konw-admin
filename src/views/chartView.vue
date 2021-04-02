<template>
  <div class="box">
    <div class="title">总览</div>
    <div class="mem-stat">
      <div class="card">
        <div class="card-left">
          <span class="circle"></span>
          <span>当前在线人数</span>
          <div class="number">{{onlineMember}}</div>
        </div>
        <el-progress type="circle" 
        :percentage="parseInt(onlineMember*100/dayMember)"
        v-if="!isNaN(parseInt(onlineMember*100/dayMember))"
        ></el-progress>
      </div>
      <div class="card">
        <div class="card-left">
          <span class="circle"></span>
          <span>当日在线人数</span>
          <div class="number">{{dayMember}}</div>
        </div>
        <el-progress type="circle" 
        :percentage="parseInt(dayMember*100/allMember)"
        v-if="parseInt(dayMember*100/allMember)"
        ></el-progress>
      </div>
      <div class="card">
        <div class="card-left">
          <span class="circle"></span>
          <span>用户总人数</span>
          <div class="number">{{allMember}}</div>
        </div>
        <el-progress type="circle" :percentage="100"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import {getSameDayMember,getUserAllMember,getNowOnlineMember} from "@/api/user"
import {getArticleNumber,getFileNumber} from "@/api/statis"
export default { 
  data() {
    return {
      onlineMember:0,
      dayMember:0,
      allMember:0
    }
  },
  components: {},
  created(){
    getSameDayMember().then(res=>{this.dayMember = res.data.count})
    getUserAllMember().then(res=>{this.allMember = res.data})
    getNowOnlineMember().then(res=>{this.onlineMember = res.data.count})
    getArticleNumber({day:0}).then(res=>{console.log(res)})
    getFileNumber({day:1}).then(res=>{console.log(res)})
  },
  methods:{}
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