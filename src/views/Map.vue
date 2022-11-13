<template>
  <div>
    <div id="container" style="width: 100wv; height: 600px"></div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      addressText: "",
      map,
    };
  },
  mounted() {
    this.init();
    this.addressText = this.$store.state.testText;
    console.log(this.addressText);
    if (typeof(this.addressText)!='undefined'){
      console.log("convert!");
      this.convert(this.addressText);
    }
  },
  methods: {
    init() {
      var map = new TMap.Map("container", {
        zoom: 14,
        center: new TMap.LatLng(39.986785, 116.301012),
      });
      this.map = map;
    },
    convert(address) {
      var map = new TMap.Map("container", {
        zoom: 14,
        center: new TMap.LatLng(39.986785, 116.301012),
      });
      var geocoder = new TMap.service.Geocoder(); // 新建一个正逆地址解析类
      var markers = new TMap.MultiMarker({
        map: map,
        geometries: [],
      });
      markers.setGeometries([]);
      // 将给定的地址转换为坐标位置
      geocoder.getLocation({ address }).then((result) => {
        markers.updateGeometries([
          {
            id: "main",
            position: result.result.location, // 将得到的坐标位置用点标记标注在地图上
          },
        ]);
        map.setCenter(result.result.location);
      });
    },
  },
};
</script>
<style>
</style>