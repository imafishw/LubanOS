<template>
  <div>
    <div class="boxflex">
    <p>当前模式: {{ currentMode }}</p>
    <p>连接状态: {{ Status[currentStatusIndex] }}</p>
    <el-button size="small" type="primary" icon="el-icon-sort" @click="toggleMode" class="button1">切换模式</el-button>
    </div>
    <div class="boxflex">
      <el-input placeholder="请输入机器人ip地址" v-model="input">
      <template slot="prepend">输入ip地址</template>
      </el-input>
      <el-button>连接</el-button>
    </div>
    <div class="boxflex">
      <p>MotorMode:{{ MotorMode[MotorStatusIndex]}}</p>
      <el-button size = "small" type="primary" icon="el-icon-sort" @click="changeMotorModle">切换</el-button>
    </div>
    <div class="boxflex">
      <p>RobotDirection:{{ RobotDirection[RobotDirectionIndex]}}</p>
      <el-button size = "small" type="primary" icon="el-icon-sort" @click="changeRobotDirection">切换</el-button>
    </div>
    <div class="boxflex">
      <p>RobotPos:{{ RobotPos[RobotPosIndex]}}</p>
      <el-button size = "small" type="primary" icon="el-icon-sort" @click="changeRobotPos">切换</el-button>
    </div>
    <div class="boxflex">
      <p>Status:{{ Status[currentStatusIndex]}}</p>
      <el-button size = "small" type="primary" icon="el-icon-sort" @click="changeconnection">切换</el-button>
    </div>

    <el-radio-group v-model="labelPosition" size="small">
  <!-- <el-radio-button label="left">左对齐</el-radio-button>
  <el-radio-button label="right">右对齐</el-radio-button>
  <el-radio-button label="top">顶部对齐</el-radio-button> -->
</el-radio-group>
<div style="margin-left: 10px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="AnkleAngle">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="FootAngele">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="DebugServoID">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
  <el-form-item label="DebugServoAngle">
    <el-input v-model="formLabelAlign.angle"></el-input>
  </el-form-item>
</el-form>
<el-button> 提交数据 </el-button>
  </div>
</template>

<script>

export default {
  // 挂载数据
  mounted () {
    this.$axios.get('http://lubandatas.natapp1.cc/robotData/vue_data')
      .then(res => {
        console.log(res)
      })
  },
  data () {
    return {
      input: '',
      currentModeIndex: 0,
      currentStatusIndex: 0,
      MotorStatusIndex: 1,
      RobotDirectionIndex: 1,
      RobotPosIndex: 2,
      RobotModes: ['track', 'trot'],
      Status: ['connection', 'unconection'],
      MotorMode: ['auto', 'manual'],
      RobotPos: ['up', 'down', 'trackb'],
      RobotDirection: ['0', '1', '2'],
      AnkleAngle: 181,
      FootAngele: 181,
      DebugServoID: 0,
      DebugServoAngle: 0,
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        angle: ''
      }
    }
  },
  computed: {
    currentMode () {
      return this.RobotModes[this.currentModeIndex]
    }
  },
  methods: {
    toggleMode () {
      this.currentModeIndex = (this.currentModeIndex + 1) % this.RobotModes.length
      this.post_Buttondata()
    },
    changeconnection () {
      this.currentStatusIndex = (this.currentStatusIndex + 1) % this.Status.length
      this.post_Buttondata()
    },
    changeRobotDirection () {
      this.RobotDirectionIndex = (this.RobotDirectionIndex + 1) % this.RobotDirection.length
      this.post_Buttondata()
    },
    changeMotorModle () {
      this.MotorStatusIndex = (this.MotorStatusIndex + 1) % this.MotorMode.length
      this.post_Buttondata()
    },
    changeRobotPos () {
      this.RobotPosIndex = (this.RobotPosIndex + 1) % this.RobotPos.length
      this.post_Buttondata()
    },
    post_Buttondata () {
      console.log(1)
      const postData = {
        RobotMode: this.RobotModes[this.currentModeIndex],
        MotorMode: this.MotorMode[this.MotorStatusIndex],
        RobotPos: this.RobotPos[this.RobotPosIndex],
        RobotDirection: this.RobotDirection[this.RobotDirectionIndex],
        DebugServoID: 0
      }
      this.$axios({
        method: 'post',
        url: 'http://localhost:8088/Robot/vue_data',
        data: postData
      })
        .then(response => {
          // 请求成功时的处理逻辑
          console.log(response.data)
        })
        .catch(error => {
          // 请求失败时的处理逻辑
          console.error(error)
          console.log(postData)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
/* 根据需要添加样式 */
.boxflex{
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;//元素上下居中（防止右边按钮贴上下边）
  margin-left: 10px;//文字左侧设置间距，防止与Logo紧贴
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
