<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">文本数据</el-menu-item>
          <el-menu-item index="2">GIS</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <text-data></text-data>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Map from "./views/Map.vue";
import TextData from "./views/TextData.vue";

export default {
  name: "App",
  components: {
    Map,
    TextData,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
