<template>
    <div>
        <tuiul></tuiul>
        <tuicontent></tuicontent>
    </div>
</template>

<script>
    import tuiul from './tuiul'
    import tuicontent from './tuicontent'
    export default {
        name: "tuilist",
        components:{
            tuiul,
            tuicontent
        }
    }
</script>

<style scoped>

</style>