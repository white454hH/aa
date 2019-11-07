<template>
    <div class="head">
        <pinHeader></pinHeader>
        <pinmatter></pinmatter>
        <pinFooter></pinFooter>
    </div>
</template>

<script>
    import pinHeader from '../components/pinHeader'
    import pinmatter from '../components/pinmatter'
    import pinFooter from '../components/pinFooter'
    export default {
        name: "pindao",
        components: {
            pinHeader,
            pinmatter,
            pinFooter
        }
    }
</script>

<style scoped>
    @import "../assets/pindao.css";
</style>