<template>
  <div id="login">
    <!-- 头部 -->
    <header>
      <i class="el-icon-arrow-left"></i>
      <p>VIP客户理赔平台</p>
    </header>
    <main>
      <!-- 登陆表单 -->
      <div class="wrapper">
        <div class="picclogo">
          <img src="img/logo.png" alt="logo" />
        </div>
        <div class="formcontainer">
          <el-form
            ref="ruleForm"
            status-icon
            :rules="rules"
            :model="loginForm"
            label-width="0"
            class="login_form"
          >
            <el-form-item prop="phoneNum" class="pr">
              <el-input
                v-model="loginForm.phoneNum"
                type="text"
                auto-complete="off"
                placeholder="输入手机号"
              ></el-input>
              <el-dialog
                :visible.sync="dialogVisible"
                width="92%"
                :before-close="handleClose"
              >
                <slide-verify
                  ref="slideblock"
                  :l="42"
                  :r="10"
                  :w="310"
                  :h="155"
                  slider-text="向右滑动"
                  @success="onSuccess"
                ></slide-verify>
              </el-dialog>
            </el-form-item>
            <el-form-item prop="phoneCode" class="code">
              <el-input
                v-model="loginForm.phoneCode"
                placeholder="输入手机验证码"
              ></el-input>
              <el-button
                type="primary"
                :disabled="isDisabled"
                @click="sendCode"
                >{{ buttonText }}</el-button
              >
            </el-form-item>
            <!-- 按钮区域 -->
            <el-form-item class="btns">
              <el-button
                type="primary"
                :plain="true"
                @click="submitForm('ruleForm')"
                :disabled="isClick"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
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
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else if (!this.checkMobile(value)) {
        callback(new Error("手机号码不合法"));
      } else {
        callback();
      }
    };
    //验证码是否为空
    let validSmscode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("验证码不能为空"));
      } else {
        callback();
      }
    };
    return {
      errors: {},
      //这是登录表单的数据绑定对象
      loginForm: {
        phoneNum: "", //手机号
        phoneCode: "", //验证码
      },
      rules: {
        phoneNum: [
          { validator: validPhone, trigger: "change" },
          // { min: 11, max: 11, trigger: "blur" }
        ],
        phoneCode: [
          { validator: validSmscode, trigger: "change" },
          // { min: 6, max: 6, trigger: "blur" }
        ],
      },
      buttonText: "发送验证码",
      isDisabled: false, //是否可点击
      dialogVisible: false,
      flag: true,
    };
  },
  computed: {
    //手机号和验证码都不能为空
    isClick() {
      // console.log(this.loginForm.phoneNum);
      if (!this.loginForm.phoneNum || !this.loginForm.phoneCode) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    //发送验证码
    sendCode() {
      if(this.checkMobile()){
        this.$axios.post("/api/posts/sms_send",{
          phone:this.loginForm.phoneNum
        })
        .then(res=>{
          console.log(res);
        this.dialogVisible = true;
        })
      }
      // let tel = this.loginForm.phoneNum;
      // if (this.checkMobile(tel)) {
      //   console.log(tel);
        //  this.$refs.slideblock.reset();
    },
    //弹出框确认关闭
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    // 图片验证码验证成功
    onSuccess() {
      this.dialogVisible = false;
      let time = 60;
      this.buttonText = "已发送";
      this.isDisabled = true;
      if (this.flag) {
        this.flag = false;
        let timer = setInterval(() => {
          time--;
          this.buttonText = time + " 秒";
          if (time === 0) {
            clearInterval(timer);
            this.buttonText = "重新获取";
            this.isDisabled = false;
            this.flag = true;
          }
        }, 1000);
      }
    },
    //提交登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /*进行跨域请求*/
          // this.axios({
          //   method:"post",
          //   url:''
          // })
          // this.$message({
          //   message: "登录成功",
          //   type: "success",
          // });
          // this.$router.push("/home");
          // session保存手机号
          this.$axios
            .post("/api/posts/sms_back", {
              phone: this.loginForm.phoneNum,
              code: this.loginForm.phoneCode,
            })
            .then((res) => {
              console.log(res);
              // 检验成功,设置登录状态并且跳转到/
              localStorage.setItem("picc_login", true);
              this.$router.push("/home");
            })
            .catch((err) => {
              this.$message({
                message: err.response.data.msg,
                type: "warning",
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 验证手机号
    // checkMobile(str) {
    //   let re = /^1[3|4|5|7|8][0-9]\d{8}$/;
    //   if (re.test(str)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    checkMobile(){
       if (!this.loginForm.phoneNum) {
        this.errors = {
          phoneNum: "手机号码不能为空",
        };
        return false;
      } else if (!/^1[345678]\d{9}$/.test(this.loginForm.phoneNum)) {
        this.errors = {
          phoneNum: "请填写正确的手机号码",
        };
        return false;
      } else {
        this.errors = {};
        return true;
      }
    }
  },
};
</script>
<style lang="less">
@import "../assets/base.less";
#login {
  background: url("../assets/bg@3x.png");
  min-height: 100vh;
  header {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
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
      line-height: 50px;
      font-size: 18px;
      color: #ffffff;
      text-align: center;
    }
  }
  main {
    .wrapper {
      width: 94%;
      margin: 0 auto;
      .picclogo {
        margin: 40px auto 60px;
        width: 80px;
        height: 80px;
        background: rgb(249, 249, 249);
        border-radius: 50%;
        box-sizing: border-box;
        border: 3px solid rgb(247, 105, 104);
        box-shadow: rgba(241, 119, 119, 0.308) 0px 4px 6px 1px;
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
      .formcontainer {
        padding: 40px 10px;
        background-color: #fff;
        border-radius: 20px;
      }
      .code {
        position: relative;
        .el-button--primary {
          border: none;
          color: #ef8466;
          background-color: #fff;
          position: absolute;
          top: 0px;
          right: 0;
          outline: none;
        }
      }
      .el-input__inner {
        border: none;
        border-bottom: 1px solid #bebcbc;
        border-radius: 0;
      }
      .btns {
        margin-top: 20px;
        .el-button {
          color: #ffffff;
          background-color: #fe5958;
          box-shadow: rgba(241, 119, 119, 0.308) 0px 4px 6px 1px;
          width: 100%;
          height: 45px;
          border: none;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
