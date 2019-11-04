<template>
  <div id="app">
    <bilibili-header></bilibili-header>
    <bilibili-matter></bilibili-matter>
    <bilibili-footer></bilibili-footer>
  </div>
</template>

<script>
    import header from './components/header'
    import matter  from './components/matter'
    import footer from './components/footer'
    export default {
        name: "app",
        components: {
            'bilibili-header': header,
            'bilibili-matter': matter,
            'bilibili-footer': footer
        }
    }

</script>

<style scoped>
  @import "assets/dongtai.css";
</style>