<template>
  <div id="registration">
    <!-- 导航头 -->
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
    <!-- 信息查询 -->
    <main>
      <div class="insure-search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="保单号：">
            <el-input v-model="formInline.policyno"></el-input>
          </el-form-item>
          <el-form-item label="临时报案号:">
            <el-input v-model="formInline.temporaryno"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      <div class="tablecase">
        <el-table :data="tableData" stripe style="width: 100%" :header-cell-style="{background:'#eef1f6'}" border>
           <el-table-column prop="kong" label="" width="180"></el-table-column>
          <el-table-column prop="caseState" label="按键状态" width="180"></el-table-column>
          <el-table-column prop="temporaryno" label="临时报案号" width="180"></el-table-column>
          <el-table-column prop="policyno" label="保单号" width="180"></el-table-column>
           <el-table-column prop="kong" label="" width="180"></el-table-column>
        </el-table>
      </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "InfoSearch",
  data() {
    return {
      formInline: {
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
<style lang="less" scoped>
@import "../assets/base.less";
#registration{
  // min-height: 100vh;
  .navBtn {
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
        p.selectbtn {
          color: orange;
        }
      }
    }
  }
  main {
    background-color: #f0eff4;
    padding: 8px;
    min-height: 100vh;
    .insure-search {
      margin-top: 50px;
      background-color: #fff;
      padding: 8px;
    }
    .tablecase{
      background: #ffffff;
      margin-top: 15px;
    }
  }
}
</style>