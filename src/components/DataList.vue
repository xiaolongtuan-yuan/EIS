<template>
  <div>
    <el-card style="width: 80vw;" >
    <el-table :data="tableData" stripe fit>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="date" label="时间"> </el-table-column>
      <el-table-column prop="disaster" label="灾情"> </el-table-column>
      <el-table-column prop="disasterIndi" label="灾情指标"> </el-table-column>
      <el-table-column prop="origin" label="来源"> </el-table-column>
      <el-table-column prop="type" label="载体"> </el-table-column>
    </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "DataList",
  components: {},
  props: [],
  data() {
    return {
      tableData: [],
    };
  },
  methods: {},
  mounted() {
    var InfoList = this.$store.state.InfoList;
    if (InfoList.length != 0) {
      this.tableData = InfoList;
    }else{
      this.tableData = [
        {
          address: "果洛新村黄河乡玛多县果洛藏族自治州青海省",
          date: "2021-05-22 02:04:00",
          disaster: "房屋破坏-砖木",
          disasterIndi: "一般损坏面积",
          origin: "后方地震应急指挥部",
          type: "文字",
        },
      ]
    }
  },
};
</script>

<style>
</style>