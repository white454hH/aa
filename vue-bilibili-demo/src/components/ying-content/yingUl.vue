<template>
    <ul class="television">
        <li @click="hrefgo">直播</li>
        <li @click="hrefto">推荐</li>
        <li>热门</li>
        <li>追番</li>
        <li class="_li">影视</li>
        <li>70年</li>
    </ul>
</template>

<script>
    export default {
        name: "yingUl",
        methods:{ //跳转页面
            hrefto(){
                this.$router.push({ path:'/'  })
            },
            hrefgo(){
                this.$router.push({ path:'/zhibo'  })
            }
        }
    }
</script>

<style scoped>

</style>