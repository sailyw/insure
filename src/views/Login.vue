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
        <el-form
          ref="ruleForm"
          :rules="rules"
          :model="loginForm"
          label-width="0"
          class="login_form"
        >
          <el-form-item prop="phoneNum" class="pr">
            <el-input v-model="loginForm.phoneNum" type="text" placeholder="输入手机号"></el-input>
            <!-- @click.prevent="getCode()"  -->
            <el-button @click="dialogVisible = true" class="code-btn" :disabled="!show">
              <span v-show="show">获取验证码</span>
              <span v-show="!show" class="count">{{count}} s</span>
            </el-button>
            <el-dialog :visible.sync="dialogVisible" width="100%" :before-close="handleClose">
              <slide-verify
                :l="42"
                :r="10"
                :w="310"
                :h="155"
                slider-text="向右滑动"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
              ></slide-verify>
              <!-- <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>-->
            </el-dialog>
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
    //手机号是否合法
    let validPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    //验证码是否为空
    let validSmscode = (rule, value, callback) => {
      // eslint-disable-line no-unused-vars
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else {
        const reg = /\d{6}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的验证码"));
        }
      }
    };
    return {
      //这是登录表单的数据绑定对象
      loginForm: {
        phoneNum: "",
        phoneCode: ""
      },
      rules: {
        phoneNum: [
          { validator: validPhone, trigger: "blur" },
          { min: 11, max: 11, trigger: "blur" }
        ],
        phoneCode: [
          { validator: validSmscode, trigger: "blur" },
          { min: 6, max: 6, trigger: "blur" }
        ]
      },
      show: true,
      count: 0,
      timer: "",
      disabled: false, //是否可点击
      dialogVisible: false
    };
  },
  computed: {
    //手机号和验证码都不能为空
    isClick() {
      console.log(this.loginForm.phoneNum);
      if (!this.loginForm.phoneNum || !this.loginForm.phoneCode) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    handleLogin() {
      console.log(111);
      if (this.phoneNum === null && this.phoneCode === null) {
        alert("请输入手机号或验证码");
      } else {
        this.$router.push("/home");
      }
    },
    send() {
      // console.log("dsg")
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    onSuccess() {
      this.dialogVisible = false;
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
    },
    onFail() {
      // this.msg = ''
    },
    onRefresh() {
      // this.msg = ''
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