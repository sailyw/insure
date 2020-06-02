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
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
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
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
};
</script>
<style lang="less" scoped>
@import "../assets/base.less";
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
main{
  background-color: #f0eff4;
  padding: 8px;
  .insure-search{
    margin-top: 50px;
    background-color: #fff;
    padding: 8px;
  }
}
</style>