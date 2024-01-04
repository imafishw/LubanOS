<template>
    <div>
      <!-- <template v-if="!isShowMultiple && show">
        <vue-aliplayer-v2
          :source="source"
          ref="VueAliplayerV2"
          :options="options"
        />
      </template>
      <div v-if="isShowMultiple && show" class="show-multiple">
        <template v-for="x in 5">
          <vue-aliplayer-v2
            class="multiple-player"
            :key="x"
            :source="source"
            ref="VueAliplayerV2"
            :options="options"
          />
        </template>
      </div>
      <p class="remove-text" v-if="!show">播放器已销毁!</p>
      <div class="player-btns">
        <template v-if="!isShowMultiple && show">
          <span @click="play()">播放</span>
          <span @click="pause()">暂停</span>
          <el-button @click="websocketonopen()">测试按钮</el-button> -->
          <!-- <span @click="replay()">重播</span>
          <span @click="getCurrentTime()">播放时刻</span> -->
          <!-- <span @click="getStatus()">获取播放器状态</span> -->
        <!-- </template> -->
        <!-- <span @click="show = !show">{{ show ? '销毁' : '重载' }}</span> -->
        <!-- <span @click="options.isLive = !options.isLive"
          >{{ options.isLive ? '切换普通模式' : '切换直播模式' }}</span
        > -->
        <!-- <span @click="showMultiple()"
          >{{isShowMultiple ? '显示1个播放器' : '显示多个播放器'}}</span
        > -->
      <!-- </div> -->
      <!-- <div class="source-box">
        <span class="source-label">ChangeVideo:</span>
        <select v-model="source" name="source" id="source">
          <option value="//player.alicdn.com/video/aliyunmedia.mp4"
            >Video1</option
          >
          <option value="//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4"
            >Video2</option
          >
          <option
            value="//tbm-auth.alicdn.com/e7qHgLdugbzzKh2eW0J/kXTgBkjvNXcERYxh2PA@@hd_hq.mp4?auth_key=1584519814-0-0-fc98b2738f331ff015f7bf5c62394888"
            >Video3</option
          >
          <option value="//ivi.bupt.edu.cn/hls/cctv1.m3u8">LiveVideo</option>
        </select>
      </div> -->
      <!-- <div class="source-box">
        <span class="source-label">InputVideo</span>
        <input class="source-input" type="text" v-model="source" />
      </div> -->
      <!-- <control-settings></control-settings> -->
      <!-- <div>按钮操作区域</div> -->
      <p>
        <img src="http://luban2333.natapp1.cc/?action=stream" action=stream id="streamimage">
      </p>
      <div class="control">
        <div id="zone_joystick"></div>
        <div id="zone_joystick2"></div>
      </div>
    </div>
  </template>
<script>
// import ControlSettings from './ControlSettings.vue'
import nipplejs from 'nipplejs'
// vue部分
// ws 部分

export default {
  components: {
    // ControlSettings
  },
  name: 'VideoPage',
  data () {
    return {
      options: {
        // source: 'http://[2409:8087:2001:20:2800:0:df6e:eb24]/ott.mobaibox.com/PLTV/3/224/3221228527/index.m3u8',
        isLive: true,
        format: 'm3u8' // 切换为直播流的时候必填
      },
      source: 'https://muiplayer.js.org/media/media.m3u8',
      show: true,
      isShowMultiple: false,
      useFlashPrism: true// 开启flash播放模式
    }
  },
  methods: {
    play () {
      this.$refs.VueAliplayerV2.play()
    },
    pause () {
      this.$refs.VueAliplayerV2.pause()
    },
    replay () {
      this.$refs.VueAliplayerV2.replay()
    },
    getCurrentTime () {
      this.source = 'http://ivi.bupt.edu.cn/hls/cctv1.m3u8'
    },
    getStatus () {
      const status = this.$refs.VueAliplayerV2.getStatus()
      console.log('getStatus:', status)
      alert(`getStatus:${status}`)
    },
    ShowMultiple () {
      this.isShowMultiple = !this.isShowMultiple
    },
    handleWsOpen () {
      console.log(1)
    },
    handleWsClose () {
      console.log(1)
    },
    handleWsError () {
      console.log(1)
    },
    handleWsMessage () {
      console.log(1)
    }
  },
  create () {
    // this.initWebSocket()
  },
  mounted () {
    // 定义这4个方法
    // 1号摇杆
    setTimeout(function () {
      const newoptions = {
        position: { left: '80%', top: '75%' },
        mode: 'static',
        catchDistance: 100,
        color: 'gray',
        zone: document.getElementById('zone_joystick')
      }
      const manager = nipplejs.create(newoptions)
      manager.on('dir', function (evt, data) {
        console.log('button1')
        console.log(data)
        // Do something.
      })
    }, 1000)
    // 2号摇杆
    setTimeout(function () {
      const newoptions2 = {
        position: { left: '30%', top: '75%' },
        mode: 'static',
        catchDistance: 100,
        color: 'skyblue',
        zone: document.getElementById('zone_joystick2')
      }
      const manager2 = nipplejs.create(newoptions2)
      manager2.on('dir', function (evt, datanj) {
        console.log('button2')
        console.log(datanj)
      })
    }, 1000)
  }
}

</script>
  <style lang="scss" scoped>
   * {
      margin: 0;
      padding: 0;
    }
    .remove-text {
      text-align: center;
      padding: 20px;
      font-size: 24px;
    }
    .show-multiple {
      display: flex;
      .multiple-player {
        width: calc(100% / 4);
        margin: 20px;
      }
    }
    .player-btns {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      span {
        margin: 0 auto;
        display: inline-block;
        padding: 5px 10px;
        width: 150px;
        height: 50px;
        line-height: 40px;
        // border: 1px solid #eee;
        background-image: linear-gradient(to right,rgb(45,216,246),rgb(26,162,222));
        border-radius: 10px;
        text-align: center;
        margin: 5px;
        cursor: pointer;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      }
    }
    .source-box {
      padding: 5px 10px;
      margin-bottom: 20px;
      .source-label {
        margin-right: 20px;
        font-size: 16px;
        display: block;
      }
      #source {
        margin-top: 10px;
      }
      .source-input {
        margin-top: 10px;
        padding: 5px 10px;
        width: 80%;
        border: 1px solid #ccc;
      }
      img {
      float: left;
      margin: 0 15px 15px 0;
      padding: 1px;
      border: 1px solid #d0d0d0;
      overflow-clip-margin: content-box;
      overflow: clip;
      #streamimage {
    width: 520px;
    height: 390px;
}
}
    }
</style>
