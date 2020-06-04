<template>
  <div id="registration">
    <Nav />
    <!-- 信息查询 -->
    <main class="maincontainer">
      <div class="wrapper">
        <div class="insure-search">
          <div class="infomation-title">
            <span></span>
            <p>信息查询</p>
          </div>
          <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="policyno" label="保单号：">
              <el-input v-model="ruleForm.policyno" placeholder="请输入保单号"></el-input>
            </el-form-item>
            <el-form-item prop="temporaryno" label="临时报案号：">
              <el-input v-model="ruleForm.temporaryno" placeholder="请输入临时报案号"></el-input>
            </el-form-item>
            <el-form-item class="pr">
              <el-button plain @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="tablecase">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            :header-cell-style="{background:'#eef1f6'}"
            border
          >
            <el-table-column prop="caseState" label="按键状态" ></el-table-column>
            <el-table-column prop="temporaryno" label="临时报案号"></el-table-column>
            <el-table-column prop="policyno" label="保单号"></el-table-column>
          </el-table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "InfoSearch",
  components: { Nav },
  data() {
    return {
      ruleForm: {
        policyno: "",
        temporaryno: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style lang="less">
@import "../assets/base.less";
#registration {
  main {
    margin: 60px auto;
    background-color: rgba(249, 249, 249);
    .wrapper {
      .insure-search {
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
        .el-form {
          margin: 0 8px;
        }
        .el-form-item {
          margin-bottom: 0;
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
          .el-button {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            width: 100%;
          }
        }
        .pr > .el-form-item__content {
          margin-left: 0 !important;
          margin-bottom: 20px;
        }
        .el-table th>.cell{
          text-align: center;
        }
      }
      .tablecase{
        margin: 0 10px;
      }
    }
  }
}
</style>