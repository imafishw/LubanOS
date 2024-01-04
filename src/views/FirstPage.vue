<template>
  <div>
    <el-main>
      <!-- Carousel 区域 -->
      <el-carousel :interval="4000"
      type="card"
      height="350px"
      >
        <el-carousel-item v-for="item in carouselItems" :key="item.id">
          <!-- <h3 class="medium">{{item.fileName}}</h3> -->
          <!-- 使用相对路径指定本地图像地址 -->
          <!-- <img :src="`../assets/${item.fileName}`" :alt="item.altText"> -->
          <img :src="item.url">
        </el-carousel-item>
      </el-carousel>

      <!-- 数据展示区域 -->
      <div class="data-container">
        <div class="data-item">
          <i class="el-icon-location"></i>
          <h3 class="data-h">驾驶里程</h3>
          <p class="data-p">{{ drivingDistance }}</p>
        </div>
        <div class="data-item">
          <i class="el-icon-location"></i>
          <h3 class="data-h">使用时长</h3>
          <p class="data-p">{{ usageTime }}</p>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carouselItems: [
        { id: 1, url: require('../assets/firstpage/1.png'), altText: 'LuBanModel1' },
        { id: 2, url: require('../assets/firstpage/2.png'), altText: 'LuBanModel2' },
        { id: 3, url: require('../assets/index3.png'), altText: 'LuBanMode3' },
        { id: 4, url: require('../assets/index4.png'), altText: 'LuBanMode4' }
        // 添加更多轮播项...
      ],
      drivingDistance: '1000 km', // 替换为实际的数据
      usageTime: '50 hours'// 替换为实际的数据
    }
  }
}
</script>
<style>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #fff;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
  }
  .data-container {
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
}
div {
  background: rgb(11, 23, 37);
  color: #fff;
}
.el-carousel-item img {
  /* 自定义图片样式 */
  max-width: 100%; /* 图片最大宽度为容器的100% */
  height: auto;    /* 高度自适应，保持宽高比例 */
}
.data-h {
  font-size: 23px; /* 你想要的字体大小 */
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  align-items: center; /* 垂直方向居中 */
}
.data-p{
  font-size: 15px; /* 你想要的字体大小 */
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  align-items: center; /* 垂直方向居中 */
}
</style>
