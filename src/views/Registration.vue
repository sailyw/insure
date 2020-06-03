<template>
  <div id="registration">
    <!-- <header class="header">
      <i class="el-icon-arrow-left" @click="comeBack"></i>
      <p>预报案登记</p>
    </header>-->
    <Nav />
    <div class="forminfo">
      <!-- 保单信息 -->
      <div class="information-data">
        <div class="infomation-title">
          <span></span>
          <p>保单信息</p>
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="141px"
          class="demo-ruleForm"
        >
          <el-form-item prop="tel" label="联系人电话">
            <el-input v-model="ruleForm.tel" placeholder="请输入联系人电话"></el-input>
            <!-- <el-button type="primary" class="code-btn">联系人电话</el-button> -->
          </el-form-item>
          <el-form-item prop="number" label="保单号">
            <el-input v-model="ruleForm.number" placeholder="请输入保单号"></el-input>
            <!-- <el-button type="primary" class="code-btn">保单号</el-button> -->
          </el-form-item>
          <el-form-item prop="origin" label="保险购买平台/来源" style="border-bottom:none">
            <el-select v-model="ruleForm.origin" placeholder="请点击选择" style="width:100%">
              <el-option label="中小学生平安保险" value="student"></el-option>
              <el-option label="南钢集团补充医疗" value="nangang"></el-option>
              <el-option label="保险E家雇主险" value="Ejia"></el-option>
              <el-option label="途牛旅游网" value="tuniu"></el-option>
              <el-option label="开心保平台" value="happyplat"></el-option>
              <el-option label="新一站（含天猫旗舰店）" value="newone"></el-option>
              <el-option label="其他" value="others"></el-option>
            </el-select>
            <!-- <el-button type="primary" class="code-btn">保险购买平台/来源</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <!-- 报案人信息 -->
      <div class="information-data">
        <div class="infomation-title">
          <span></span>
          <p>报案人信息</p>
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="141px"
          class="demo-ruleForm"
        >
          <el-form-item label="报案人姓名" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入您的姓名"></el-input>
            <!-- <el-button type="primary" class="code-btn">报案人姓名</el-button> -->
          </el-form-item>
          <el-form-item label="您与保险人关系" prop="relation">
            <el-select v-model="ruleForm.relation" placeholder="请点击选择" style="width:100%">
              <el-option label="本人" value="oneself"></el-option>
              <el-option label="家属" value="familymembers"></el-option>
              <el-option label="朋友" value="friend"></el-option>
              <el-option label="同事" value="colleague"></el-option>
              <el-option label="修理厂" value="repairdepot"></el-option>
              <el-option label="代理人" value="agent"></el-option>
              <el-option label="PICC员工" value="PICC"></el-option>
              <el-option label="被保险人单位员工" value="Employees"></el-option>
              <el-option label="线上平台" value="onlineplatform"></el-option>
              <el-option label="其他" value="others"></el-option>
            </el-select>
            <!-- <el-button type="primary" class="code-btn">您与保险人关系</el-button> -->
          </el-form-item>
          <el-form-item label="报案人电话" prop="phone" style="border-bottom:none">
            <el-input v-model="ruleForm.phone">15150570995</el-input>
            <!-- <el-button type="primary" class="code-btn">报案人电话</el-button> -->
          </el-form-item>
        </el-form>
      </div>
      <!-- 出险信息 -->
      <div class="information-data">
        <div class="infomation-title">
          <span></span>
          <p>出险信息</p>
        </div>
        <!-- 出险日期 -->
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="141px"
          class="demo-ruleForm3"
        >
          <el-form-item label="出险日期" required>
            <el-col :span="11">
              <el-form-item prop="date1" style="border:none">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 210%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <!-- <el-button type="primary" class="code-btn">出险日期</el-button> -->
          </el-form-item>
          <!-- 出险时间 -->
          <el-form-item label="出险时间" required>
            <el-col class="line" :span="2"></el-col>
            <el-col :span="11">
              <el-form-item prop="date2" style="border:none">
                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 210%;"></el-time-picker>
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
              style="width:96%"
            ></el-cascader>
            <el-input
              v-model="ruleForm.address"
              placeholder="请补充完整出险地点"
              style="padding-bottom:10px"
            ></el-input>
          </el-form-item>
          <!-- 出险经过 -->
          <el-form-item label="出险经过" prop="desc">
            <!-- <el-input type="textarea" v-model="ruleForm.desc" placeholder="描述不得超过120字" @input="widthCheck($event.target, 120)"></el-input> -->
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
          <el-form-item label="索赔总金额" prop="totalmoney">
            <el-input v-model="ruleForm.totalmoney" placeholder="点击录入">元</el-input>
          </el-form-item>
        </el-form>
        <div class="btns">
          <el-button type="primary">提交</el-button>
        </div>
      </div>
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
    return {
      options: regionData,
      selectedOptions: [],
      ruleForm: {
        tel: "",
        number: "",
        name: "",
        origin: "",
        relation: "",
        date1: "",
        date2: "",
        resource: "",
        address: "",
        desc: ""
      },
      rules: {
        tel: [{ required: true, message: "请输入联系人电话", trigger: "blur" }],
        number: [{ required: true, message: "请输入保单号", trigger: "blur" }],
        origin: [
          { required: true, message: "请选择购买平台/来源", trigger: "change" }
        ],
        name: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
        relation: [
          { required: true, message: "请选择您与保险人关系", trigger: "change" }
        ],
        address: [
          { required: true, message: "请补充完整出险地点", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写出现经过", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
    // 返回
    comeBack() {
      this.$router.push("/home");
    },
    // 提交
    registsubmit() {},
    //打开提示
    open() {
      this.$alert(
        "预报案信息提交后请不要退出，稍后需要您上传影像资料（文件格式为图片或者pdf），若您不小心退出，请在信息查询进行补传，否则案件预报案可能会被驳回！",
        "信息",
        {
          confirmButtonText: "确定"
          // callback: action => {
          //   this.$message({
          //     type: "info",
          //     // message: `action: ${action}`
          //   });
          // }
        }
      );
    }
  }
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
.forminfo {
  background-color: rgb(249, 249, 249);
  padding-bottom: 180px;
  margin: 60px auto;
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
    margin: 0 8px;
  }
  .el-form-item {
    margin-bottom: 15px;
    border-bottom: 1px solid #e5e5e5;
    .el-input__inner {
      border: none;
      // border-bottom: 1px solid #e5e5e5 !important;
      border-radius: 0;
      // padding:0 0 0 159px
    }
    .el-form-item__label {
      text-align: left;
    }
    .el-textarea__inner{
      border: none;
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
    margin-top: 20px;
    .el-button {
      background-color: rgb(247, 105, 104);
      width: 89%;
      height: 45px;
      margin: 20px;
      border: none;
    }
  }
}
</style>