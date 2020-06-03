<template>
  <div class="home">
    <Nav />
    <div class="container">
      <p class="title">欢迎使用重要客户在线理赔客户端</p>
      <el-button plain>下载文件模板</el-button>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue';
export default {
  name:'Home',
  components:{Nav},
  data() {
    return {
      
    };
  },
  methods: {
    
    
  }
};
</script>
<style lang="less" scoped>
.home {
  .container{
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 60px auto;
    .title{
      margin-top: 200px;
      margin-bottom: 50px;
      text-align: center;
    }
  }
}
</style>