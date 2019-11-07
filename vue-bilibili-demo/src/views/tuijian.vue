<template>
    <div>
        <tuiHeader></tuiHeader>
        <tuiMatter></tuiMatter>
        <tuiFooter></tuiFooter>
    </div>
</template>

<script>
    import tuiHeader from '../components/tuiHeader'
    import tuiMatter from '../components/tuiMatter'
    import tuiFooter from '../components/tuiFooter'
    export default {
        name: "tuijian",
        components:{
            tuiHeader,
            tuiMatter,
            tuiFooter
        }
    }
</script>

<style scoped>
    @import "../assets/tuijian.css";
</style>