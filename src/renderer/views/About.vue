<template lang="pug">
  .page-container
    img#logo(src="~@/assets/logo.png" alt="electron-vue")
    main
      .left-side
        span.title Welcome to your new project!
        system-information
      .right-side
        .doc
          .title Getting Started
          p electron-vue comes packed with detailed documentation that covers everything from internal configurations, using the project structure, building your application, and so much more.
          button(@click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')") Read the Docs
        .doc
          .title.alt Other Documentation
          button.alt(@click="open('https://electron.atom.io/docs/')") Electron
          button.alt(@click="open('https://vuejs.org/v2/guide/')") Vue.js
</template>

<script>
  import SystemInformation from '../components/SystemInformation'

  export default {
    name: 'about',
    components: {
      SystemInformation
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
