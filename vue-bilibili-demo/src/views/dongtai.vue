<template>
  <div id="app">
    <bilibili-header @click="show=!show"></bilibili-header>
    <bilibili-matter></bilibili-matter>
    <bilibili-footer></bilibili-footer>
    <bilibili-broadside :class="show?'show':'hide'"></bilibili-broadside>
  </div>
</template>

<script>
    import header from '../components/header'
    import matter  from '../components/matter'
    import footer from '../components/footer'
    import broadside from '../components/broadside'
    export default {
        name: "app",
        components: {
            'bilibili-header': header,
            'bilibili-matter': matter,
            'bilibili-footer': footer,
            'bilibili-broadside':broadside,
        },
        data(){
            return{
                show:false
            }

        }



    }

</script>

<style scoped>
  @import "../assets/dongtai.css";
  .hide{
    display: none;
  }
</style>