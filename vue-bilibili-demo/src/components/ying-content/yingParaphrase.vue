<template>
    <div class="div-5">
        <a href="#" v-for="(n,sid) in data" :key="sid"><img :src="n.pic" alt=""><br><span>{{n.film}}</span><p>{{n.introduce}}</p></a>
    </div>
</template>

<script>
    export default {
        name: "yingParaphrase",
        props:['data','index']
    }
</script>

<style scoped>

</style>