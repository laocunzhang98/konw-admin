<template>
  <div class="login">
    <div class="title">知食后台管理系统</div>
    <el-card class="card-box">
      <div class="card">
        <div class="logo"><img src="../assets/logo.png" alt=""></div>
        <div class="account">
          <el-input v-model="account" placeholder="管理员账号">
              <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
          </el-input>
        </div>
        <div class="secret">
          <el-input v-model="secret" placeholder="管理员密码">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </div>
      </div>
      <div class="btn"><el-button type="primary" size="small" @click="ManagerLogin">登录</el-button></div>
    </el-card>
  </div>
</template>

<script>
import { Login } from "@/api/login"
export default {
  data() {
    return {
      account:"",
      secret:""
    }
  },
  methods: {
    ManagerLogin(){
      console.log(this.account)
      let data = {
        type:8080,
        account:this.account,
        secret:this.secret
      }
      Login(data).then(res=>{
        localStorage.setItem('token',res.data)
          let path ="/home"
          if (this.$route.query.redirect) {
            path = this.$route.query.redirect   // 跳到之前的页面
            console.log(path)
          }
          this.$router.push({
              path: path
          });
      })
    }
  },
}
</script>

<style lang="scss" scoped>

  .login{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
    .title{
      font-weight: 600;
      font-size: 30px;
    }
    .card-box{
      margin-top: 20px;
      height: 400px;
      width: 360px;
      .card{
        .logo{
          img{
            display: block;
            margin:auto;
            height: 80px;
            width: 80px;
          }
        }
        .account,.secret{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 30px;
          span{
            display: inline-block;
            width: 60px;
          }
        }
      }
      .btn{
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>