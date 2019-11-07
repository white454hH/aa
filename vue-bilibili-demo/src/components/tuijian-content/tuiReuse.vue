<template>
    <a href="#" class="module">
        <img :src="data.pic" alt=""><br>
        <p>{{data.introduce}}</p>
        <p>{{data.details}}</p>
        <div>
            <span>{{data.analyze}}</span>
            <img src="../../assets/img/73.png" alt="">
        </div>
    </a>
</template>

<script>
    export default {
        name: "tuiReuse",
        props:['data','index']
    }
</script>

<style scoped>

</style>