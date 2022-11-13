<template>
  <div class="main">
    <data-list></data-list>
  </div>
</template>

<script>
import DataList from "../components/DataList.vue";
export default {
  name: "TextData",
  components: { DataList },
  props: [],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.main{
  display: flex;
  justify-content: center;
}
</style>