<template>
  <div ref="joystickContainer">
    1111
  </div>
</template>

<script>
import nipplejs from 'nipplejs'

export default {
  mounted () {
    console.log('1111')
    const container = this.$refs.joystickContainer
    this.joystick = nipplejs.create({
      zone: container,
      mode: 'dynamic',
      color: 'grey',
      size: 250,
      multitouch: true
    })
    // 监听移动事件
    // this.joystick.on('move', (evt, data) => {
    //   console.log('Joystick moved:', data)
    // }
    // )
  },
  beforeDestroy () {
    // 在组件销毁前销毁 Nipple.js 实例
    if (this.joystick) {
      this.joystick.destroy()
    }
  }
}
</script>

<style>

</style>
