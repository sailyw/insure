<template>
  <div class="nav">
    <el-menu
      :default-active="this.$route.path"
      router
      mode="horizontal"
      class="nav-menu"
      @select="handleSelect"
    >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{item.navItem}}</el-menu-item>
      <!-- <el-menu-item index="1" @click="handleHome">首页</el-menu-item>
      <el-menu-item index="2" @click="handleRegistration">预报案登记</el-menu-item>
      <el-menu-item index="3" @click="handleInfo">信息查询</el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      navList: [
        { name: "/home", navItem: "首页" },
        { name: "/registration", navItem: "预报案登记" },
        { name: "/infoSearch", navItem: "信息查询" }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    open() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定"
      });
    }
  }
};
</script>

<style scoped lang="less">
// @import "../assets/base.less";
.nav {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  .el-menu {
    background-color: #e34550;
    display: flex;
    justify-content: center;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    color: #dbdbdc;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    color: #ffffff;
    border-bottom: 0;
    font-size: 15px;
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: #e34550;}
}
</style>
