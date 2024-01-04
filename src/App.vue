<!-- <template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->

<template>
  <div id ='app'>
    <el-container class="home-container">
  <el-header>
    <!-- 页眉布局 无需设置路由 -->
    <div>
      <img src="../src/assets/logo.png" alt="" height="40px"/>
      <span>LubanControlTerminal</span>
    </div>
    <el-button type="primary" size="medium" id="Topbuttoncolor" @click="connection_btn">连接</el-button>
  </el-header>
  <el-container>
    <!--侧面写个导航-->
    <el-aside width="200px">
      <aside-navigation></aside-navigation>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>
<script>
import AsideNavigation from './components/AsideNavigation.vue'
export default {
  components: {
    AsideNavigation
  },
  name: 'APP',
  data () {
    return {
    }
  },
  methods: {
    connection_btn () {
      // this.$socket.connect()
      console.log('主动链接')
      alert('连接成功')
      // 切换状态
      this.$store.commit('state_change')
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>

  .el-header {
  background-color: rgb(19, 40, 61);
  display: flex; // 设置显示为flex布局
  justify-content: space-between;//设置为flex左右布局
  padding-left: 10;//左内边距为0（Logo贴左边）
  height: 60px;
  align-items: center;//元素上下居中（防止右边按钮贴上下边）
  color: #fff;
  font-size: 20px;
  > div {
  background-color: rgb(19, 40, 61);
  //内嵌的div样式
  display: flex;
  align-items: center;//Logo和文字上下居中
  span {
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  margin-left: 20px;//文字左侧设置间距，防止与Logo紧贴
  }
}
}
  #Topbuttoncolor {
  background-image: linear-gradient(to right,rgb(45,216,246),rgb(26,162,222));
}
.el-container{
  height: calc(100% - 60px);
}
.el-main{
  padding: 0;
  width: calc(100vh - 200px);
}

</style>
