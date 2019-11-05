<template>
    <div class="border-5">
    <ul>
    <bilibili-item :data="matter" :pid="pid" :index="index" v-for="(matter,pid) in data" :key="pid"></bilibili-item>
    </ul>
    </div>
</template>

<script>
    import item from './item'
    export default {
        name: "listli",
        components:{
            "bilibili-item":item
        },
        props:["data","index"]
    }
</script>

<style scoped>

</style>