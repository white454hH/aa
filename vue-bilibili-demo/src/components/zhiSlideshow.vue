<template>
    <div class="designation">
        <zhiShuffling></zhiShuffling>
        <zhiGame></zhiGame>
    </div>
</template>

<script>
    import zhiShuffling from './zhiShuffling'
    import zhiGame from './zhiGame'
    export default {
        name: "zhiSlideshow",
        components:{
            zhiShuffling,
            zhiGame
        }
    }
</script>

<style scoped>

</style>