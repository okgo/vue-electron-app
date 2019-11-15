<template lang="pug">
  #app
    .page-container
      md-app(style="min-height: 100vh")
        md-app-drawer(md-permanent="full")
          md-toolbar.md-transparent(md-elevation="0") Navigation
          md-list
            md-list-item
                md-icon.fa.fa-home home
                .md-list-item-text
                  router-link(to="/home") Home
            md-list-item
                md-icon.fa.fa-info info
                span.md-list-item-text
                  router-link(to="/docs") Docs
        md-app-toolbar.md-primary
          span.md-title Vue Electron app
        md-app-content
          transition(name="fade")
            router-view
</template>

<script>
  export default {
    name: 'electron-app'
  }
</script>

<style lang="scss" scoped>
  main > .md-app-toolbar { flex-basis: auto; }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
