<template>
    <div>
        <yingHeader></yingHeader>
        <yingMatter></yingMatter>
        <yingFooter></yingFooter>
    </div>
</template>

<script>
    import yingHeader from '../components/yingHeader'
    import yingMatter from '../components/yingMatter'
    import yingFooter from '../components/yingFooter'
    export default {
        name: "yingshi",
        components:{
            yingHeader,
            yingMatter,
            yingFooter
        }
    }
</script>

<style scoped>
    @import "../assets/yingshi.css";
</style>