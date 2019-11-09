<template>
    <div class="label">
        <div class="div-4">
            <h5>{{data.name}}</h5>
            <span>查看更多&nbsp;></span>
        </div>
        <yingShow :data="data.lol" :index="index"></yingShow>
        <p><img src="../../assets/img/100.png" alt=""><span>换一换</span></p>
    </div>
</template>

<script>
    import yingShow from './yingShow'
    export default {
        name: "yingCycle",
        components:{
            yingShow
        },
        props:['data','index']
    }
</script>

<style scoped>

</style>