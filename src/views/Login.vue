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
        <el-form ref="ruleForm" :rules="rules" :model="loginForm" label-width="0" class="login_form">
          <el-form-item prop="phoneNum" class="pr">
            <el-input v-model="loginForm.phoneNum" type="text" placeholder="输入手机号"></el-input>
            <button @click.prevent="getCode()" class="code-btn" :disabled="!show">
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{count}} s</span>
            </button>
          </el-form-item>
          <el-form-item prop="phoneCode">
            <el-input v-model="loginForm.phoneCode" type="password" placeholder="输入手机验证码"></el-input>
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
      rules:{
        phoneNum:[
          
        ]
      },
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
      console.log(111)
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
    background-color: rgb(227, 69, 80);
    border-bottom: 1px solid #e6e6e6;
    .el-icon-arrow-left {
      color: #ffffff;
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
      color: #ffffff;
      text-align: center;
    }
  }
  main {
    .picclogo {
      margin: 40px auto;
      width: 80px;
      height: 80px;
      // background: rgb(247, 105, 104);
      border-radius: 50%;
      box-sizing: border-box;
      border: 3px solid rgb(247, 105, 104);
      //  box-shadow: rgba(241, 119, 119, 0.308) 0px 4px 6px 1px;
      position: relative;
      img {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 50%;
        margin-left: -15px;
        margin-top: -15px;
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
      }
      .el-input__inner {
        border: none;
        border-bottom: 1px solid #bebcbc;
        border-radius: 0;
      }
      .btns {
        margin-top: 20px;
        .el-button {
          background-color: rgb(247, 105, 104);
          box-shadow: rgba(241, 119, 119, 0.308) 0px 4px 6px 1px;
          width: 100%;
          height: 45px;
          border: none;
        }
      }
    }
  }
}
</style>