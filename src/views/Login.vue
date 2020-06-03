<template>
  <div id="login">
    <!-- 头部 -->
    <header class="header">
      <i class="el-icon-arrow-left"></i>
      <p>VIP客户理赔平台</p>
    </header>
    <main>
      <div class="picclogo">
        <img src="img/logo.png" alt="logo" />
      </div>
      <!-- 登陆表单 -->
      <div class="wrapper">
        <el-form :model="loginForm" :rules="loginFormRules" label-width="0" class="login_form">
          <el-form-item prop="phoneNum">
            <el-input v-model="loginForm.phoneNum" placeholder="输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="phoneCode" class="pr">
            <el-input v-model="loginForm.phoneCode" type="password" placeholder="输入手机验证码"></el-input>
            <button @click.prevent="getCode()" class="code-btn" :disabled="!show">
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{count}} s</span>
            </button>
          </el-form-item>
          <!-- 按钮区域 -->
          <el-form-item class="btns">
            <el-button type="primary" @click="handleLogin" :disabled="isClick">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      //这是登录表单的数据绑定对象
      loginForm: {
        phoneNum: "",
        phoneCode: ""
      },
      rules:[{

      }],
      show: true,
      count: 0,
      timer: "",
      disabled: false //是否可点击
    };
  },
  computed: {
    //手机号和验证码都不能为空
    isClick() {
      if (!this.loginForm.phoneNum || !this.loginForm.phoneCode) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    handleLogin() {
      if (this.usercode === null && this.password === undefined) {
        alert("请输入手机号");
      } else {
        this.$router.push("/home");
      }
    },
    send() {
      // console.log("dsg")
    },
    getCode() {
      console.log(this.loginForm.phoneNum);
      // 验证码倒计时
      if (!this.timer) {
        this.count = 60;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= 60) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    }
  }
};
</script>
<style lang="less">
@import "../assets/base.less";
#login {
  .header {
    width: 100%;
    // background-color: #fff;
    border-bottom: 1px solid #bebcbc;
    .el-icon-arrow-left {
      color: #bebcbc;
      position: absolute;
      top: 9px;
      left: 0;
      display: inline-block;
      padding-left: 5px;
      font-size: 30px;
    }
    p {
      margin: 0;
      line-height: 49px;
      font-size: 16px;
      text-align: center;
    }
  }
  main {
    .picclogo{
      margin: 30px auto;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 1px solid #cccccc;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -30px;
        margin-top: -30px;
      }
    }
    .wrapper {
      width: 340px;
      margin: 0 auto;
      .pr {
        position: relative;
      }
      .code-btn {
        width: 100px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 5px;
        z-index: 222;
        color: #ef8466;
        font-size: 14px;
        border: none;
        background-color: #fff;
        outline: none;
        cursor: pointer;
      }
      .el-input__inner {
        border: none;
        border-bottom: 1px solid #bebcbc;
        border-radius: 0;
      }
      .btns {
        margin-top: 20px;
        .el-button {
          background-color: #bebcbc;
          width: 100%;
          border: none;
        }
      }
    }
  }
}
</style>