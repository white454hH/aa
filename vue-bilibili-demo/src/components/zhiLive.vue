<template>
    <div class="live">
        <div class="div-4">
            <h5>{{data.name}}</h5>
            <span>换一换<img src="img/100.png" alt=""></span>
        </div>
        <zhiCycle :data="data.lol" :index="index"></zhiCycle>
    </div>
</template>

<script>
    import zhiCycle from './zhiCycle'
    export default {
        name: "zhiLive",
        components:{
            zhiCycle
        },
        props:["data","index"]
    }
</script>

<style scoped>

</style>