<template>
  <div>
    <div class="homewrapper">
      <header class="header">
        <i class="el-icon-arrow-left"></i>
        <p>VIP客户理赔平台</p>
      </header>
      <div class="wrapper">
        <router-link to="/registration">
          <el-button type="plain" @click="open">预报案登记</el-button>
        </router-link>
        <router-link to="/infoSearch">
          <el-button type="plain">信息查询</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
};
</script>
<style lang="less" scoped>
.homewrapper {
  .header {
    width: 100%;
    // background-color: #fff;
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
  .wrapper {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .el-button {
      margin-top: 20px;
    }
    .el-message-box{
      width: 100%;
    }
  }
}
</style>