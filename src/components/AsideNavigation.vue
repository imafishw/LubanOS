<template>
<div>
<el-col :span="24">
<el-menu default-active="this.$router.path"
 class="el-menu-vertical-demo"
 @open="handleOpen"
 @close="handleClose"
 :collapse="isCollapse"
 :router='true'
 background-color = 'rgb(11, 23, 37)'
 text-color='rgb(98,110,114)'
 active-text-color="#fff">
  <el-menu-item index="/FirstPage" id="custom-menu-item">
    <i class="el-icon-cpu"></i>
    <span slot="title" class="menu-item-text">机器人</span>
  </el-menu-item>
  <el-menu-item index="PageSettings" id="custom-menu-item">
    <i class="el-icon-link"></i>
    <span slot="title" class="menu-item-text">连接</span>
  </el-menu-item>
  <el-menu-item index="/VideoPage" id="custom-menu-item">
    <i class="el-icon-video-camera"></i>
    <span slot="title" class="menu-item-text">显示</span>
  </el-menu-item>
</el-menu>
</el-col>
</div>
</template>

<style>
.el-menu{
 border:0!important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /* height: 100vh - 20px; */
    min-height: 93vh;
    background: rgb(11, 23, 37);
}
.el-menu-item .menu-item-text {
  font-size: 23px; /* 你想要的字体大小 */
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  align-items: center; /* 垂直方向居中 */
}
#custom-menu-item {
  height: 100px; /* 调整高度，根据需要修改 */
  line-height: 90px; /* 确保垂直居中，根据需要修改 */
  font-weight: bold;
}
</style>
<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
