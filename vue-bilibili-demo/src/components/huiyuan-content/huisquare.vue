<template>
    <div class="box-4">
        <div class="div-4" v-for="(i,li) in lite" :key="li">
            <div>
                <h5>{{i.h5}}</h5>
                <span>{{i.span}}</span>
            </div>
            <img :src="i.item" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "huisquare",
        data(){
            return{
                lite:[
                    {
                        h5:'今日上新',
                        span:'也可能不上新',
                        item:require('@/assets/img/13.png'),
                    },
                    {
                        h5:'圈子社区',
                        span:'一起来胶♂流',
                        item:require('@/assets/img/15.png'),
                    },
                    {
                        h5:'人气排行',
                        span:'因为你的热爱',
                        item:require('@/assets/img/14.png'),
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>