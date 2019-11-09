<template>
    <div class="slideshow">
        <yingAdvertising></yingAdvertising>
        <yingGenre></yingGenre>
    </div>
</template>

<script>
    import yingGenre from './yingGenre'
    import yingAdvertising from './yingAdvertising'
    export default {
        name: "yingSlideshow",
        components:{
            yingGenre,
            yingAdvertising
        }
    }
</script>

<style scoped>

</style>