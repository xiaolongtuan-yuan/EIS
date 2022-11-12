<template>
  <div>
    <el-container style="border: 1px solid #eee">
      <el-header>
        <el-row class="header">
          <el-col :span="14">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              router
            >
              <el-menu-item index="1" @click="showTextData" route="/textdata"
                >文本数据</el-menu-item
              >
              <el-menu-item index="2" @click="showGIS" route="/map"
                >GIS</el-menu-item
              >
            </el-menu>
          </el-col>
          <el-col :span="10">
            <el-form
              :inline="true"
              :model="formInline"
            >
              <el-form-item label="编码">
                <el-input
                  v-model="formInline.user"
                  placeholder="36位数字"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Map from "./Map.vue";
import TextData from "./TextData.vue";

export default {
  name: "Main",
  components: {
    Map,
    TextData,
  },
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    showTextData() {},
    showGIS() {},
    onSubmit() {
      console.log("submit!");
    },
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
<style scoped>
.inputForm{
    background: #566;
    display: flex;
    justify-content: flex-end;
    align-content: center;
}
</style>
