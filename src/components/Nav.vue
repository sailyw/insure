<template>
  <div class="navBtn">
    <router-link to="/registration">
      预报案登记
    </router-link>
    <router-link to="/infoSearch">
      信息查询
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped lang="less">
@import "../assets/base.less";
.navBtn {
  background-color: #333;
  width: 100%;
  color: #ffffff;
  font-size: 30px;
  text-align: center;
}
</style>
