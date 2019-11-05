<template>
    <div id="app">
        <huiHeader></huiHeader>
        <huimatter></huimatter>
        <huifooter></huifooter>
    </div>

</template>

<script>
    import huiHeader from '../components/huiHeader'
    import huimatter from '../components/huimatter'
    import huifooter from '../components/huifooter'
    export default {
        name: "huiyuan",
        components: {
            huiHeader,
            huimatter,
            huifooter
        }
    }


</script>

<style scoped>
    @import "../assets/huiyuan.css";
</style>