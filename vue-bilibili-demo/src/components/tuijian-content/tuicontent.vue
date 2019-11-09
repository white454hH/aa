<template>
    <div class="recommended">
        <tuiSlideshow></tuiSlideshow>
        <tuiCycle></tuiCycle>
    </div>
</template>

<script>
    import tuiSlideshow from './tuiSlideshow'
    import tuiCycle from './tuiCycle'
    export default {
        name: "tuicontent",
        components:{
            tuiSlideshow,
            tuiCycle
        }
    }
</script>

<style scoped>

</style>