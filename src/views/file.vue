<template>
  <el-upload
      class="upload-demo"
      action="#"
      :http-request="handleChange"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-exceed="handleExceed"
      :file-list="fileList">
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过10M</div>
  </el-upload>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    handleChange(param) {
      const data = new FormData();
      data.append('file', param.file);
      axios.
      post("http://10.128.236.33:8080/upload/file/excel", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>
