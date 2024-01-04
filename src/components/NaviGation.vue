<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" id="font1">Videostream</el-menu-item>
    <el-submenu index="2">
    <template slot="title">LubanOS</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" >LogInformation</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">RobotBodyControl</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NaviGation',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#font1{
  font-family: 'Roboto', sans-serif;
  background: skyblue;
  font-weight: bold;
}
</style>
