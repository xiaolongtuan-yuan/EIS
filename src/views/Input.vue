<template>
  <div class="center">
    <el-card style="width:50vw;">
      <el-form
        :model="Form"
        status-icon
        :rules="rules"
        ref="Form"
        class="Form"
      >
        <el-form-item label="编码">
          <el-input type="text" v-model="Form.code"></el-input>
        </el-form-item>
        <el-form-item label="文件">
          <el-upload class="upload-demo" drag action="">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              只能上传csv文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('Form')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Input",
  components: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      Form: {
        code: "",
      },
      rules: {
        code: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.center{
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
.Form{
    
}
</style>