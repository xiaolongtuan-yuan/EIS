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
      theMap: "",
    };
  },
  mounted() {
    this.init();
    this.addressText = this.$store.state.testText;
    console.log(this.addressText);
    if (typeof this.addressText != "undefined") {
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
      this.theMap = map;
    },
    initMap() {
      var center = new TMap.LatLng(39.984104, 116.307503); //设置中心点坐标
      //初始化地图
      var map = new TMap.Map("container", {
        center: center,
      });

      //初始marker
      var marker = new TMap.MultiMarker({
        id: "marker-layer",
        map: map,
        styles: {
          marker: new TMap.MarkerStyle({
            width: 24,
            height: 35,
            anchor: { x: 12, y: 35 },
            src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png",
          }),
        },
        geometries: [
          {
            id: "demo1",
            styleId: "marker",
            position: new TMap.LatLng(39.984104, 116.307503),
            properties: {
              title: "marker",
            },
          },
          {
            id: "demo2",
            styleId: "marker",
            position: new TMap.LatLng(39.974104, 116.347503),
            properties: {
              title: "marker",
            },
          },
        ],
      });
      //初始化infoWindow
      var infoWindow = new TMap.InfoWindow({
        map: map,
        position: new TMap.LatLng(39.984104, 116.307503),
        offset: { x: 0, y: -32 }, //设置信息窗相对position偏移像素
      });
      infoWindow.close(); //初始关闭信息窗关闭
      //监听标注点击事件
      marker.on("click", function (evt) {
        //设置infoWindow
        infoWindow.open(); //打开信息窗
        infoWindow.setPosition(evt.geometry.position); //设置信息窗位置
        infoWindow.setContent(evt.geometry.position.toString()); //设置信息窗内容
      });
    },
    convert(address) {
      var theMap = this.theMap;
      var geocoder = new TMap.service.Geocoder(); // 新建一个正逆地址解析类
      var markers = new TMap.MultiMarker({
        map: theMap,
        geometries: [],
      });
      markers.setGeometries([]);
      // 将给定的地址转换为坐标位置
      geocoder
        .getLocation({
          address: address,
          servicesk: "vPGsh5j1tzygzWILvhNtWTMpsUi9VEha",
        })
        .then((result) => {
          markers.updateGeometries([
            {
              id: "main",
              position: result.result.location, // 将得到的坐标位置用点标记标注在地图上
            },
          ]);
          theMap.setCenter(result.result.location);
        });
    },
  },
};
</script>
<style>
</style>