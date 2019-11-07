<template>
    <div>
        <pinChannels></pinChannels>
        <pinClassify></pinClassify>
        <pinchannel></pinchannel>
    </div>
</template>

<script>
    import pinChannels from './pinChannels'
    import pinClassify from './pinClassify'
    import pinchannel from './pinchannel'
    export default {
        name: "list",
        components:{
            pinChannels,
            pinClassify,
            pinchannel
        }
    }
</script>

<style scoped>

</style>