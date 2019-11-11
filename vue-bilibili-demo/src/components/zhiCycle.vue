<template>
    <div class="div-5">
        <a href="#" class="module" v-for="(n,sid) in data" :key="sid">
            <img :src="n.pic" alt="">
            <span>{{n.film}}</span>
            <p>{{n.introduce}}</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "zhiCycle",
        props:["data","index"]
    }
</script>

<style scoped>

</style>