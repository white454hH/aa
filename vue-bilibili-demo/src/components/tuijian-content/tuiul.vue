<template>
    <ul class="list">
        <li @click="hrefgo">直播</li>
        <li class="_li">推荐</li>
        <li>热门</li>
        <li>追番</li>
        <li @click="hrefto">影视</li>
        <li>70年</li>
    </ul>
</template>

<script>
    export default {
        name: "tuiul",
        methods:{ //跳转页面
            hrefto(){
            this.$router.push({ path:'/yingshi'  })
            },
            hrefgo(){
                this.$router.push({ path:'/zhibo'  })
            }
        }
    }
</script>

<style scoped>

</style>