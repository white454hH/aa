<template>
    <div>
        <zhiHeader></zhiHeader>
        <zhiMatter></zhiMatter>
        <zhiFooter></zhiFooter>
    </div>
</template>

<script>
    import zhiHeader from '../components/zhiHeader'
    import zhiMatter from '../components/zhiMatter'
    import zhiFooter from '../components/zhiFooter'
    export default {
        name: "zhibo",
        components:{
            zhiHeader,
            zhiMatter,
            zhiFooter
        }
    }
</script>

<style scoped>
    @import "../assets/zhibo.css";
</style>