<template>
  <div id="login">
    <!-- 头部 -->
    <header class="header">
      <i class="el-icon-arrow-left"></i>
      <p>
        <img src="img/logo.png" alt="logo" />&nbsp;VIP客户理赔平台
      </p>
    </header>
    <main>
      <div class="register" style="background:#f0eff4">
        <div class="res-item">
          <input type="tel" v-model="usercode" placeholder="手机号" class="input-item mobile" />
          <i class="el-icon-phone res-icon"></i>
        </div>
        <div class="res-item">
          <input type="text" v-model="password" placeholder="验证码" class="input-item yanzheng" />
          <i class="el-icon-mobile-phone res-icon"></i>
          <button type="button" class="yanzhengma" @click="send">点击获取验证码</button>
        </div>
      </div>
      <slide-verify
        :l="42"
        :r="10"
        :w="310"
        :h="155"
        slider-text="向右滑动滑块填充拼图"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
      ></slide-verify>
      <div class="res-btn">
        <button type="button" id="res-btn" :disabled="dis" @click="denglu">{{msg}}</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: "",
      msg: "一键登录",
      dis: true,
      usercode: "",
      password: ""
    };
  },
  methods: {
    onSuccess() {
      this.msg = "验证成功，点击登录";
      this.dis = false;
    },
    onFail() {
      this.msg = "一键登录";
    },
    onRefresh() {
      this.msg = "一键登录";
    },
    denglu() {
      if (this.usercode === null && this.password === undefined) {
        alert("请输入手机号");
      }else{
        this.$router.push("/registration");
      }
    },
    send() {
      // console.log("dsg")
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/base.less";
#login {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    background-color: #333;
    color: #ffffff;
    .el-icon-arrow-left {
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
      img {
        box-sizing: border-box;
        vertical-align: middle;
      }
    }
  }
  main {
    background: #f0eff4;
    padding: 8px;
    min-height: 651px;
    .register {
      background: #f0eff4;
      margin-top: 53px;
      .res-item {
        position: relative;
        width: 100%;
        border-radius: 4px;
        margin-bottom: 8px;
        background-color: #fff;
        .input-item {
          display: inline-block;
          width: 92%;
          padding-left: 31px;
          height: 40px;
          border: red;
          font-size: inherit;
          vertical-align: middle;
        }
        .res-icon {
          position: absolute;
          left: 8px;
          top: 11px;
          z-index: 100;
          display: inline-block;
          font-size: 18px;
          color: #9c9c9c;
        }
        .yanzhengma {
          position: absolute;
          right: 10px;
          top: 5px;
          z-index: 100;
          display: inline-block;
          padding: 0.5rem 0.8rem;
          font-size: 14px;
          border: none;
          background-color: #e21945;
          color: #ffffff;
          border-radius: 8px;
        }
      }
    }
  }
  .res-btn {
    margin-top: 10px;
    padding: 0 5px;
    #res-btn {
      display: block;
      background-color: #e21945;
      font-size: 14px;
      color: #ffffff;
      border-radius: 8px;
      width: 100%;
      height: 36px;
      line-height: 36px;
      opacity: 0.45;
      border: none;
    }
  }
}
</style>