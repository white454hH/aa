<template>
    <div>
        <shezhiHeader></shezhiHeader>
        <shezhiMatter></shezhiMatter>
        <shezhiFooter></shezhiFooter>
    </div>
</template>

<script>
    import shezhiHeader from '../components/shezhiHeader'
    import shezhiMatter from '../components/shezhiMatter'
    import shezhiFooter from '../components/shezhiFooter'
    export default {
        name: "shezhi",
        components:{
            shezhiHeader,
            shezhiMatter,
            shezhiFooter
        },

    }
</script>

<style scoped>
    @import "../assets/shezhi.css";
</style>