<template>
  <div>
    <el-table :data="tableData" style="" stripe fit>
      <el-table-column prop="code" label="编码"> </el-table-column>
      <el-table-column prop="text" label="解码文本">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DataList",
  components: {},
  props: [],
  data() {
    return {
      tableData: [
        {
          code: "123654789987456321741258963963258741",
          text: "刘月屁股大",
        },
        {
          code: "123654789987456321741258963963258741",
          text: "刘月屁股大",
        },
        {
          code: "123654789987456321741258963963258741",
          text: "刘月屁股大",
        },
        {
          code: "123654789987456321741258963963258741",
          text: "刘月屁股大",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>