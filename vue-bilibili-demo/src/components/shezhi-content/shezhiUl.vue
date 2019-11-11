<template>
    <div class="install">
        <ul>
            <shezhiLi :data="a" :index="index" v-for="(a,index) in data" :key="index"></shezhiLi>
        </ul>
    </div>
</template>

<script>
    import shezhiLi from './shezhiLi'
    export default {
        name: "shezhiUl",
        components:{
            shezhiLi
        },
        props:["data","index"]
    }
</script>

<style scoped>

</style>