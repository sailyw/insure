<template>
  <div id="registration">
    <!-- <header class="header">
      <i class="el-icon-arrow-left" @click="comeBack"></i>
      <p>预报案登记</p>
    </header>-->
    <Nav />

    <div class="forminfo">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="141px"
        class="demo-ruleForm"
      >
        <!-- 保单信息 -->
        <div class="information-data">
          <div class="infomation-title">
            <span></span>
            <p>保单信息</p>
          </div>
          <el-form-item prop="tel" label="联系人电话">
            <el-input
              v-model="ruleForm.tel"
              placeholder="请输入联系人电话"
            ></el-input>
          </el-form-item>
          <el-form-item prop="policyno" label="保单号">
            <el-input
              v-model="ruleForm.policyno"
              placeholder="请输入保单号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="origin"
            label="保险购买平台/来源"
            style="border-bottom:none;padding-bottom:20px;"
          >
            <el-select
              v-model="ruleForm.origin"
              placeholder="请点击选择"
              style="width:100%"
            >
            <el-option v-for="item in originList" :label="item.label" :value="item.value" :key="item.id"></el-option>
              <!-- <el-option label="中小学生平安保险" value="student"></el-option>
              <el-option label="南钢集团补充医疗" value="nangang"></el-option>
              <el-option label="保险E家雇主险" value="Ejia"></el-option>
              <el-option label="途牛旅游网" value="tuniu"></el-option>
              <el-option label="开心保平台" value="happyplat"></el-option>
              <el-option
                label="新一站（含天猫旗舰店）"
                value="newone"
              ></el-option>
              <el-option label="其他" value="others"></el-option> -->
            </el-select>
          </el-form-item>
        </div>
        <!-- 报案人信息 -->
        <div class="information-data">
          <div class="infomation-title">
            <span></span>
            <p>报案人信息</p>
          </div>
          <el-form-item label="报案人姓名" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入您的姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="您与保险人关系" prop="relation">
            <el-select
              v-model="ruleForm.relation"
              placeholder="请点击选择"
              style="width:100%"
            >
              <el-option
                v-for="item in relationList"
                :label="item.label"
                :value="item.value"
                :key="item.id"
              ></el-option>
              <!-- <el-option label="本人" value="oneself"></el-option>
              <el-option label="家属" value="familymembers"></el-option>
              <el-option label="朋友" value="friend"></el-option>
              <el-option label="同事" value="colleague"></el-option>
              <el-option label="修理厂" value="repairdepot"></el-option>
              <el-option label="代理人" value="agent"></el-option>
              <el-option label="PICC员工" value="PICC"></el-option>
              <el-option label="被保险人单位员工" value="Employees"></el-option>
              <el-option label="线上平台" value="onlineplatform"></el-option>
              <el-option label="其他" value="others"></el-option> -->
            </el-select>
          </el-form-item>
          <el-form-item
            label="报案人电话"
            prop="phone"
            style="border-bottom:none"
          >
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </div>
        <!-- 出险信息 -->
        <div class="information-data">
          <div class="infomation-title">
            <span></span>
            <p>出险信息</p>
          </div>
          <!-- 出险日期 -->
          <el-form-item label="出险日期" required>
            <el-col :span="11">
              <el-form-item prop="date1" style="border:none;margin-bottom: 0;">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 210%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- 出险时间 -->
          <el-form-item label="出险时间" required>
            <el-col class="line" :span="2"></el-col>
            <el-col :span="11">
              <el-form-item prop="date2" style="border:none;margin-bottom: 0;">
                <el-time-picker
                  placeholder="选择时间"
                  v-model="ruleForm.date2"
                  style="width: 210%;"
                ></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- 出险地点 -->
          <el-form-item label="出险地点" prop="address">
            <el-cascader
              size="large"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
              style="width:96%;margin-bottom:0;"
            ></el-cascader>
            <el-input
              v-model="ruleForm.address"
              placeholder="请补充完整出险地点"
              style="padding-bottom:10px"
            ></el-input>
          </el-form-item>
          <!-- 出险经过 -->
          <el-form-item label="出险经过" prop="desc">
            <el-input
              type="text"
              placeholder="描述不得超过120字"
              v-model="ruleForm.desc"
              maxlength="120"
              show-word-limit
              style="width:96%;border:none;"
            ></el-input>
          </el-form-item>
          <!-- 索赔总金额 -->
          <el-form-item
            label="索赔总金额"
            prop="totalmoney"
            style="border:none"
          >
            <el-input v-model="ruleForm.totalmoney" placeholder="点击录入"
              ></el-input
            >
          </el-form-item>
        </div>
        <div class="btns">
          <el-button
            :plain="true"
            type="primary"
            @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </div>
      </el-form>
    </div>
    <!-- 提交按钮 -->
  </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
import Nav from "@/components/Nav.vue";

export default {
  name: "Registration",
  components: { Nav },
  data() {
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
    return {
      options: regionData,
      selectedOptions: [],
      originList:[
        { id: 0, label: "中小学生平安保险" ,value:"student"},
        { id: 1, label: "南钢集团补充医疗",value:"nangang" },
        { id: 2, label: "保险E家雇主险",value:"Ejia" },
        { id: 3, label: "途牛旅游网" ,value:"tuniu"},
        { id: 4, label: "开心保平台" ,value:"happyplat"},
        { id: 5, label: "新一站（含天猫旗舰店）" ,value:"newone"},
        { id: 6, label: "其他" ,value:"others"},
      ],
      relationList: [
        { id: 0, label: "本人" ,value:"oneself"},
        { id: 1, label: "家属",value:"familymembers" },
        { id: 2, label: "朋友",value:"friend" },
        { id: 3, label: "同事" ,value:"colleague"},
        { id: 4, label: "修理厂" ,value:"repairdepot"},
        { id: 5, label: "代理人" ,value:"agent"},
        { id: 6, label: "PICC员工" ,value:"PICC"},
        { id: 7, label: "被保险人单位员工" ,value:"Employees"},
        { id: 8, label: "线上平台" ,value:"onlineplatform"},
        { id: 9, label: "其他" ,value:"others"},
      ],
      ruleForm: {
        tel: "", //联系人电话
        policyno: "", //保单号
        origin: "", //保险购买平台/来源
        name: "", //报案人姓名
        relation: "", //与保险人关系
        date1: "", //出险日期
        date2: "", //出险时间
        address: "", //出险地点
        desc: "", //出现经过
      },
      rules: {
        tel: [{ required: true, validator: validPhone, trigger: "blur" }],
        policyno: [
          { required: true, message: "请输入保单号", trigger: "blur" },
        ],
        origin: [
          { required: true, message: "请选择购买平台/来源", trigger: "change" },
        ],
        name: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
        relation: [
          {
            required: true,
            message: "请选择您与保险人关系",
            trigger: "change",
          },
        ],
        address: [
          { required: true, message: "请补充完整出险地点", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        desc: [{ required: true, message: "请填写出现经过", trigger: "blur" }],
      },
    };
  },
  created() {
    console.log("create------------------");
    this.$alert(
      "预报案信息提交后请不要退出，稍后需要您上传影像资料（文件格式为图片或者pdf），若您不小心退出，请在信息查询进行补传，否则案件预报案可能会被驳回！",
      "信息",
      {
        confirmButtonText: "确定",
        // callback: action => {
        //   this.$message({
        //     type: "info",
        //     // message: `action: ${action}`
        //   });
        // }
      }
    );
  },
  mounted() {
    // 拿手机号
    this.ruleForm.phone = sessionStorage;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          this.$request.post("url", this.ruleForm).then((res) => {
            console.log(res);
            if (res.code === 200) {
              this.$message({
                message: "提交成功",
                type: "success",
              });
              // 清空表单
              this.$refs[formName].resetFields();
            } else {
              this.$message({
                message: "提交失败",
                type: "warning",
              });
            }
          });
        }
        // else {
        //   console.log("error submit!!");
        //   return false;
        // }
      });
    },
    handleChange() {
      // console.log(value); // value值为区域码
      // // 用CodeToText转换成中文
      // console.log(CodeToText[value[0]]);
      // console.log(CodeToText[value[1]]);
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }
      console.log(loc);
    },
    // // 返回
    // comeBack() {
    //   this.$router.push("/home");
    // },
    // 提交
    registsubmit() {},
    //打开提示
  },
};
</script>
<style lang="less">
@import "../assets/base.less";
.header {
  width: 100%;
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
.el-message-box {
  margin-top: 30px;
  width: 93%;
}
.forminfo {
  background-color: rgb(249, 249, 249);
  padding-bottom: 180px;
  margin: 60px auto 0;
  .information-data {
    background-color: #ffffff;
    margin-bottom: 8px;
    .infomation-title {
      display: flex;
      // justify-content: center;
      align-items: center;
      span {
        display: inline-block;
        width: 3px;
        height: 12px;
        margin: 10px;
        background: #f82222;
      }
      p {
        display: inline;
      }
    }
  }
  .el-form {
    background-color: rgb(249, 249, 249);
  }
  .el-form-item {
    border-bottom: 1px solid #e5e5e5;
    margin: 0 10px 14px;
    .el-input__inner {
      border: none;
      // border-bottom: 1px solid #e5e5e5 !important;
      border-radius: 0;
      // padding:0 0 0 159px
    }
    .el-form-item__label {
      text-align: left;
      // line-height: 33px;
    }
    .el-textarea__inner {
      border: none;
    }
    .el-form-item__error {
      left: 14px;
    }
  }
  .el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label::after {
    content: "*";
    color: #f56c6c;
  }
  .el-form-item.is-required:not(.is-no-asterisk)
    > .el-form-item__label::before {
    content: "";
  }
  .pr {
    position: relative;
  }
  .code-btn {
    width: 100px;
    height: 20px;
    position: absolute;
    top: 3px;
    left: 10px;
    z-index: 222;
    color: #303133;
    font-size: 14px;
    border: none;
    background-color: #fff;
    outline: none;
  }
  .btns {
    margin: 50px 10px 0;
    .el-button {
      background-color: #fe5958;
      width: 100%;
      height: 45px;
      // margin: 20px 10px 40px;
      border: none;
      color: #ffffff;
    }
  }
}
</style>
