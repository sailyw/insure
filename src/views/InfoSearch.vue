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
          <!-- <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="policyno" label="保单号：">
              <el-input
                v-model="ruleForm.policyno"
                placeholder="请输入保单号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="temporaryno" label="临时报案号：">
              <el-input
                v-model="ruleForm.temporaryno"
                placeholder="请输入临时报案号"
              ></el-input>
            </el-form-item>
            <el-form-item class="pr" style="border:none">
              <el-button plain @click="onSubmit">搜索</el-button>
            </el-form-item>
          </el-form> -->
          <search-form :formConfig="formConfig" :value="form"></search-form>
        </div>
        <div class="tablecase">
          <el-table
            :data="tableData"
            border
            stripe
            style="width: 100%"
            :header-cell-style="{ background: '#eef1f6' }"
          >
            <el-table-column
              show-overflow-tooltip
              v-for="item in tableLabel"
              :key="item.prop"
              :label="item.label"
              :prop="item.prop"
            >
            </el-table-column>
            <!-- <el-table-column prop="caseState" label="按键状态" ></el-table-column>
            <el-table-column prop="temporaryno" label="临时报案号"></el-table-column>
            <el-table-column prop="policyno" label="保单号"></el-table-column> -->
          </el-table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: "InfoSearch",
  components: { Nav, SearchForm },
  data() {
    return {
      // ruleForm: {
      //   policyno: "",
      //   temporaryno: "",
      // },
      formConfig: {
        formItemList: [
          {
            type: "input",
            prop: "policyno",
            label: "保单号:",
            placeholder: "请输入保单号",
          },
          {
            type: "input",
            prop: "temporaryno",
            label: "临时报案号:",
            placeholder: "请输入临时报案号",
          }
        ],
        operate: [
          {
            icon: "el-icon-search",
            type: "plain",
            name: "搜索",
            handleClick: this.search,
          },
        ],
      },
      form: {},
      tableData: [
        {
          caseState: "1",
          temporaryno: "1234",
          policyno: "1518",
        },
        {
          caseState: "2",
          temporaryno: "1234",
          policyno: "1519",
        },
        {
          caseState: "3",
          temporaryno: "1234",
          policyno: "1520",
        },
        {
          caseState: "4",
          temporaryno: "1234",
          policyno: "1521",
        },
      ],
      tableLabel: [
        {
          prop: "caseState",
          label: "按键状态",
        },
        {
          prop: "temporaryno",
          label: "临时报案号",
        },
        {
          prop: "policyno",
          label: "保单号",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    search() {
      console.log(this.form);
    },
  },
};
</script>
<style lang="less">
@import "../assets/base.less";
#registration {
  background-color: rgb(249, 249, 249);
  height: 100vh;
  main {
    // margin: 60px auto;
    padding-top: 60px;
    background-color: rgba(249, 249, 249);
    .wrapper {
      .insure-search {
        background-color: rgba(249, 249, 249);
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
          margin: 0 10px;
        }
        .el-form-item {
          width: 100%;
          margin-bottom: 8px;
          border-bottom: 1px solid #e5e5e5;
          .el-input__inner {
            border: none;
            background-color: rgba(249, 249, 249);
            // border-bottom: 1px solid #e5e5e5 !important;
            border-radius: 0;
            font-size: 14px;
            // padding:0 0 0 159px
          }
          .el-form-item__label {
            text-align: left;
            width: 110px;
          }
          
        }
        // .pr > .el-form-item__content {
        //   margin-left: 0 !important;
        //   margin-bottom: 20px;
        // }
      }

      .tablecase {
        margin: 0 10px;
      }
    }
  }
}
</style>
