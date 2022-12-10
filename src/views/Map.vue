<template>
  <div>
    <div id="container" class="map"></div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      addressText: null,
      tableData: [],
      geometries: [],
      map: null,
      infoWindow: null,
      marker: null,
      type:"display",
    };
  },
  mounted() {
    this.initMap();
    if (this.$route.params.type == "quary") {
      this.addressText = this.$store.state.testText;
      this.type = "quary";
      if (this.addressText != null) {
        console.log(typeof this.addressText + "  " + this.addressText);
        this.convert2(this.addressText);
      }
    } else {
      this.tableData = this.$store.state.InfoList;
      this.type = "display";
      this.display();
    }
    console.log(this.type);
  },
  methods: {
    initMap() {
      var center = new TMap.LatLng(39.984104, 116.307503); //设置中心点坐标
      //初始化地图
      this.map = new TMap.Map("container", {
        center: center,
        zoom:6
      });
      this.createMarker();
    },
    createMarker() {
      if (this.marker == null) {
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
      }
    },
    removeMarker() {
      if (this.marker != null) {
        this.marker.setMap(null);
        this.marker = null;
      }
    },

    //地址解析
    convert(i) {
      var theMap = this.map;
      var geocoder = new TMap.service.Geocoder(); // 新建一个正逆地址解析类
      // 将给定的地址转换为坐标位置
      geocoder
        .getLocation({
          address: i.address,
          servicesk: "vPGsh5j1tzygzWILvhNtWTMpsUi9VEha",
        })
        .then((result) => {
          this.geometries.push({
            position: result.result.location,
            properties: {
              content:i.type=="文字"?`<div>${i.address}</div><div>${i.date}</div><div>${i.disaster}</div><div>${i.disasterIndi}</div>`:`<div>${i.address}</div><div>${i.date}</div><div>${i.disaster}</div><div>${i.disasterIndi}</div><img src='http://localhost:8080/${i.media}'>`
            },
          });
          this.removeMarker();
          this.createMarker();
        });
    },
    convert2(address) {
      var theMap = this.map;
      var geocoder = new TMap.service.Geocoder(); // 新建一个正逆地址解析类
      // 将给定的地址转换为坐标位置
      geocoder
        .getLocation({
          address: address,
          servicesk: "vPGsh5j1tzygzWILvhNtWTMpsUi9VEha",
        })
        .then((result) => {
          this.geometries.push({
            position: result.result.location,
            properties: {
              content:`<div>${address}</div>`
            },
          });
          this.removeMarker();
          this.createMarker();
        });
    },
    display() {
      if (this.tableData.length != 0) {
        for (let i in this.tableData) {
          console.log(this.tableData[i])
          this.convert(this.tableData[i]);
        }
      }
    },
  },
};
</script>
<style scoped>
.map {
  margin: 0;
  width: 100%;
}
</style>