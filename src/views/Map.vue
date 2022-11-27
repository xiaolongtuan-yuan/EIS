<template>
  <div>
    <div id="container" style="width: 100wv; height: 600px"></div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      addressText: null,
      geometries: [
        {
          styleId: "marker",
          position: new TMap.LatLng(39.984104, 116.307503),
          properties: {
            content: "果洛新村黄河乡玛多县果洛藏族自治州青海省",
          },
        },
        {
          styleId: "marker",
          position: new TMap.LatLng(39.984104, 116),
          properties: {
            content: "asdasdasf",
          },
        },
      ],
      map: null,
      infoWindow: null,
      marker: null,
    };
  },
  mounted() {
    this.initMap();
    this.addressText = this.$store.state.testText;
    console.log(this.addressText);
    if (this.addressText != null) {
      console.log(typeof this.addressText + "  " + this.addressText);
      this.convert(this.addressText);
    }
  },
  methods: {
    initMap() {
      var center = new TMap.LatLng(39.984104, 116.307503); //设置中心点坐标
      //初始化地图
      this.map = new TMap.Map("container", {
        center: center,
      });

      //初始marker
      this.marker = new TMap.MultiMarker({
        id: "marker-layer",
        map: this.map,
        styles: {
          marker: new TMap.MarkerStyle({
            width: 24,
            height: 35,
            anchor: { x: 12, y: 35 },
            src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png",
          }),
        },
        geometries: this.geometries,
      });

      var infoWindow = new TMap.InfoWindow({
        map: this.map,
        position: new TMap.LatLng(39.984104, 116.307503),
        offset: { x: 0, y: -32 }, //设置信息窗相对position偏移像素
      });

      infoWindow.close(); //初始关闭信息窗关闭
      //监听标注点击事件
      this.marker.on("click", function (evt) {
        //设置infoWindow
        infoWindow.open(); //打开信息窗
        infoWindow.setPosition(evt.geometry.position); //设置信息窗位置
        infoWindow.setContent(evt.geometry.properties.content); //设置信息窗内容
      });
    },

    //地址解析
    convert(address) {
      var theMap = this.map;
      var geocoder = new TMap.service.Geocoder(); // 新建一个正逆地址解析类
      // 将给定的地址转换为坐标位置
      geocoder
        .getLocation({
          address: address,
          servicesk: "vPGsh5j1tzygzWILvhNtWTMpsUi9VEha",
        })
        .then((result) => {
          this.marker.geometries.push({
            position: result.result.location,
            properties: {
              content: address,
            },
          });
          theMap.setCenter(result.result.location);
        });
    },
  },
};
</script>
<style>
</style>