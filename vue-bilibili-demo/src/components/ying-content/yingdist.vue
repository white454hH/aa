<template>
    <div class="labe">
        <div class="div-4">
            <h5>{{data.na}}</h5>
            <span>查看更多&nbsp;></span>
        </div>
        <yingParaphrase :data="data.od" :index="index"></yingParaphrase>
        <p><img src="../../assets/img/100.png" alt=""><span>换一换</span></p>
    </div>
</template>

<script>
    import yingParaphrase from './yingParaphrase'
    export default {
        name: "yingdist",
        components:{
            yingParaphrase
        },
        props:['data','index']
    }
</script>

<style scoped>

</style>