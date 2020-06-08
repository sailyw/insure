<template>
  <div class="home">
    <Nav />
    <div class="container">
      <div class="wrapper">
        <p class="title">欢迎使用重要客户在线理赔客户端</p>
        <el-button plain style="height: 45px;">下载文件模板</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Home",
  components: { Nav },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.home {
  .container {
    width: 100%;
    height: 100vh;
    background-color: rgb(249,249,249);
    .wrapper{
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    padding-top: 60px;
      .title {
        margin-top: 200px;
        margin-bottom: 50px;
        text-align: center;
      }
    }
  }
}
</style>