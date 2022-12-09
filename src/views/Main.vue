<template>
  <div>
    <el-container>
      <el-header>
        <el-row class="header">
          <el-col :span="14">
            <el-menu default-active="1" mode="horizontal" class="menu" router>
              <el-menu-item index="1" route="/input">上传编码</el-menu-item>
                 <el-menu-item index="4" route="/file">上传文件</el-menu-item>
              <el-menu-item index="2" route="/textdata">文本数据</el-menu-item>
              <el-menu-item index="3" route="/map">GIS</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="5" :offset="5">
            <el-input type="text" v-model="testText" placeholder="36位数字" @change="enterUp"></el-input>
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
import store from '@/store';
export default {
  name: "Main",
  components: {},
  data() {
    return {
      testText: "",
    }
  },
  methods: {
    enterUp(e) {
      alert("submit!"+e);
      this.$store.commit('SET_testText',this.testText);
      this.$router.push("Map")
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style scoped>
.inputForm {
  background: #566;
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
.header{
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
}
.menu {
  border: none;
}
.el-main {
  height: 90vh;
}
</style>
