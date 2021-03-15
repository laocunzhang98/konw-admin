<template>
  <div class="user-detail">
    <el-card class="card-box">
      <div slot="header">
        <el-page-header @back="goBack" content="用户详情页面"></el-page-header>
      </div>
      <div class="user-info">
        <div class="avatar">
          <el-upload
            class="avatar-uploader"
            action="/api/uploads/addpic"
            :show-file-list="false"
            :headers="headers"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="userInfo.avatar" :src="userInfo.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
         </div>
        <div class="nickname flex"><span>用户名</span><el-input v-model="userInfo.nickname" placeholder="" size="mini"></el-input></div>
        <div class="emial flex"><span>邮箱</span><el-input v-model="userInfo.email" placeholder="" size="mini" disabled></el-input></div>
        <div class="nickname flex"><span>职业</span><el-input v-model="userInfo.job" placeholder="" size="mini"></el-input></div>
        <div class="nickname flex"><span>描述</span><el-input v-model="userInfo.describe" placeholder="" size="mini"></el-input></div>
        <div class="nickname flex"><span>粉丝数</span><el-input v-model="userInfo.fans_nums" placeholder="" size="mini" disabled></el-input></div>
        <div class="nickname flex"><span>关注数</span><el-input v-model="userInfo.follow_nums" placeholder="" size="mini" disabled></el-input></div>
        <div class="nickname flex"><span>封禁</span><el-input v-model="userInfo.nickname" placeholder="" size="mini"></el-input></div>
        <div class="nickname flex"><span>等级</span><el-input v-model="userInfo.level" placeholder="" size="mini"></el-input></div>
        <div><el-button type="primary" @click="updateInfo">更新</el-button></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import {Base64} from "js-base64"
import {getUserInfo,updateUserInfo} from "@/api/user"
export default {
  data() {
    return {
      headers: {
        Authorization:
          "Basic " + Base64.encode(localStorage.getItem("token") + ":"),
      },
      userInfo:{}
    }
  },
  created(){
    getUserInfo({uid:this.$route.params.uid}).then(res=>{
      this.userInfo = res.data
    })
  },
  methods:{
    goBack(){
      this.$router.push("/home/users")
    },
    handleAvatarSuccess(res){
      this.userInfo.avatar = res.data
    },
    beforeAvatarUpload(){

    },
    updateInfo(){
      console.log(this.userInfo)
      updateUserInfo(this.userInfo).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    margin: auto;
    border-radius: 10px;
  }
.user-detail{
  
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 10px 5px 5px 5px rgba(0, 0, 0, 0.1);
  width: 70%;
  .card-box{
    .user-info{
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
      // align-items: center;
      padding: 0 100px;
    .flex{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
      span{
        flex: 0 0 70px;
      }
    }
  }
  }
}
</style>