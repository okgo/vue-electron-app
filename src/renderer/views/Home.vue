<template lang="pug">
  div
    system-information
    .row
      md-button.md-raised.md-primar(@click='startScript') Start
      p {{ msg }}
</template>

<script>
  import SystemInformation from '../components/SystemInformation'
  import { execFile } from 'child_process'

  export default {
    name: 'home',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      SystemInformation
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      startScript () {
        console.log(this.$electron)
        console.log(process)
        const cmd = './test.sh'
        console.log(`cmd: ${cmd}`)
        let child = execFile(cmd, ['-l'])

        child.on('error', err => this.appendOutput(err))
        child.stdout.on('data', data => this.appendOutput(data))
        child.stderr.on('data', data => this.appendOutput(data))
        child.on('close', code => {
          console.log(code)
          if (code === 0) {
            console.log('child process complete.')
          } else {
            console.log('child process exited with code ' + code)
          }
        })
      },
      appendOutput (msg) {
        console.log(`output msg: ${msg}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
  }
</style>
