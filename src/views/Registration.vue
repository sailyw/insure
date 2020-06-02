<template>
  <div id="registration">
    <div class="navBtn">
      <ul>
        <li>
          <router-link to="/registration">
            <p class="regbtn">预报案登记</p>
          </router-link>
        </li>
        <li>
          <router-link to="/infoSearch">
            <p class="selectbtn">信息查询</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="forminfo">
      <div class="information-data">
        <h2>保单信息</h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="联系人电话" prop="tel">
            <el-input v-model="ruleForm.tel" placeholer="请输入联系人电话"></el-input>
          </el-form-item>
          <el-form-item label="保单号" prop="number">
            <el-input v-model="ruleForm.number" placeholer="请输入保单号"></el-input>
          </el-form-item>
          <el-form-item label="保险购买平台/来源" prop="origin">
            <el-select v-model="ruleForm.origin" placeholder="请点击选择">
              <el-option label="中小学生平安保险" value="student"></el-option>
              <el-option label="南钢集团补充医疗" value="nangang"></el-option>
              <el-option label="保险E家雇主险" value="Ejia"></el-option>
              <el-option label="途牛旅游网" value="tuniu"></el-option>
              <el-option label="开心保平台" value="happyplat"></el-option>
              <el-option label="新一站（含天猫旗舰店）" value="newone"></el-option>
              <el-option label="其他" value="others"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="information-data">
        <h2>报案人信息</h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="报案人姓名" prop="name">
            <el-input v-model="ruleForm.name" placeholer="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="您与保险人关系" prop="relation">
            <el-select v-model="ruleForm.relation" placeholder="请点击选择">
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
          </el-form-item>
          <el-form-item label="报案人电话" prop="phone">
            <el-input v-model="ruleForm.phone">15150570995</el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="information-data">
        <h2>出险信息</h2>
        <!-- 出险日期 -->
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="出险日期" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 200%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- 出险时间 -->
          <el-form-item label="出险时间" required>
            <el-col class="line" :span="2"></el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 200%;"></el-time-picker>
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
            ></el-cascader>
            <el-input v-model="ruleForm.address" placeholder="请补充完整出险地点"></el-input>
          </el-form-item>
          <!-- 出险经过 -->
          <el-form-item label="出险经过" prop="desc">
            <!-- <el-input type="textarea" v-model="ruleForm.desc" placeholder="描述不得超过120字" @input="widthCheck($event.target, 120)"></el-input> -->
            <el-input
  type="textarea"
  placeholder="描述不得超过120字"
  v-model="ruleForm.desc"
  maxlength="120"
  show-word-limit
>
</el-input>
          </el-form-item>
          <!-- 索赔总金额 -->
          <el-form-item label="索赔总金额" prop="totalmoney">
            <el-input v-model="ruleForm.totalmoney" placeholder="点击录入"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 提交按钮 -->
    <div class="submitbutton" @click="registsubmit">提交</div>
  </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";
export default {
  name: "Registration",
  data() {
    return {
      options: regionData,
      selectedOptions: [],
      ruleForm: {
        tel: "",
        number: "",
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
        name: [
          { required: true, message: "请输入您的姓名", trigger: "change" }
        ],
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
      console.log(loc)
    },
    // 限制输入框输入的字符数
    widthCheck (str, len) {
      var temp = 0
      for (var i = 0; i < str.value.length; i++) {
        if (/[\u4e00-\u9fa5]/.test(str.value[i])) {
          temp += 2
        } else {
          temp++
        }
        if (temp > len) {
          str.value = str.value.substr(0, i)
        }
      }
    },
    // 提交
    registsubmit(){

    }
  }
};
</script>
<style lang="less">
@import "../assets/base.less";
.navBtn {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  color: #f8f8f8;
  background: #333;
  width: 100%;
  height: 50px;
  ul {
    display: flex;
    li {
      display: inline-block;
      height: 50px;
      flex: 1;
      text-align: center;
      line-height: 50px;
      p {
        color: #f8f8f8;
        font-size: 14px;
      }
      p.regbtn {
        color: orange;
      }
    }
  }
}
.forminfo {
  margin-top: 50px;
  background-color: #f0eff4;
  padding-bottom: 180px;
  h2 {
    padding: 2px;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
  }
  .information-data {
    background-color: #ffffff;
    margin-bottom: -10px;
  }
}
.submitbutton{
  background: url("/img/bottom.png") 100% no-repeat;
  width: 100%;
  height: 60px;
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
}
</style>