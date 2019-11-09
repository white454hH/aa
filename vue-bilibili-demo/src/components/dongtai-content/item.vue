<template>
    <li><img :src="data.img" alt=""><span>{{data.desc}}</span></li>
</template>

<script>
    export default {
        name: "item",
        props:["data","index"]
    }
</script>

<style scoped>

</style>