<template>
  <div class="center">
    <el-card style="width: 50vw">
      <el-form :model="Form" status-icon ref="Form" class="Form">
        <el-form-item
          label="编码"
          :rules="[{ validator: checkCode, trigger: 'blur' }]"
        >
          <el-input type="text" v-model="Form.code"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm">提交编码</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="testGet">GET</el-button>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";

export default {


  name: "Input",
  components: {},
  data() {
    return {
      Form: {
        code: "",
        file: "",
      },
    };
  },
  methods: {
    checkCode(rule, value, callback) {
      console.log("验证");
      const regex = new RegExp("[0-9]{36}");
      var res = regex.test(str);
      console.log(res);
      if (!res) {
        callback(new Error("请输入36位数字"));
      } else {
        callback();
      }
    },
    submitForm() {
      if (this.Form.code != "") {
        axios
          .post("http://10.128.236.33:8080/upload/code", {
            code: this.Form.code,
          },{
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then((res) => {
            console.log("res:" + res.data);
            if (res.data === "upload success") {
              this.$notify.success({
                title: "code发送成功",
                result: "解码结果" + res.data,
              });
              // axios
              //   // 3.1url地址
              //   .get("http://10.128.236.33:8080/data/all")
              //   // 3.2成功时回调函数
              //   .then((data) => {
              //     console.log(data.data);
              //     this.$store.commit("SET_InfoList",data.data);
              //     this.$router.push("TextData");
              //     return;
              //   })
              //   //3.3失败时回调函数
              //   .catch((err) => {
              //     console.log(err);
              //     return;
              //   });
              return;
            }
            this.$notify.error({
              title: "失败",
            });
          });
      } else {
        this.$notify.error({
          title: "未输入编码",
        });
      }
    },

    testGet() {
      axios
        // 3.1url地址
        .get("http://10.128.236.33:8080/data/all")
        // 3.2成功时回调函数
        .then((data) => {
          console.log(data.data);
          this.$store.commit("SET_InfoList",data.data);
          this.$router.push("TextData");
          return;
        })
        //3.3失败时回调函数
        .catch((err) => {
          console.log(err);
          return;
        });
    },
  },
};
</script>

<style scoped>
.center {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.Form {
}
</style>
