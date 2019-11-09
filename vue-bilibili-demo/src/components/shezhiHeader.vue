<template>
    <div class="set">
        <span  @click="goBack">←</span>
        <h4>设置</h4>
    </div>
</template>

<script>
    export default {
        name: "shezhiHeader",
        methods:{ //跳转页面
            goBack(){
                this.$router.push({ path:'/'  })
            }
        }
    }
</script>

<style scoped>

</style>