<template>
    <div class="box-3">
        <div class="div-3" v-for="(n,index) in list" :key="index">
            <a href="#"><img :src="n.pic" alt=""><br>{{n.name}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "huitopic",
        data(){
            return{
                list:[
                    {
                        pic:require('@/assets/img/5.png'),
                        name:'手办'
                    },
                    {
                        pic:require('@/assets/img/6.png'),
                        name:'周边'
                    },
                    {
                        pic:require('@/assets/img/7.png'),
                        name:'漫展'
                    },
                    {
                        pic:require('@/assets/img/8.png'),
                        name:'测欧气'
                    },
                    {
                        pic:require('@/assets/img/9.png'),
                        name:'模型'
                    },
                    {
                        pic:require('@/assets/img/10.png'),
                        name:'潮玩扭蛋'
                    },
                    {
                        pic:require('@/assets/img/11.png'),
                        name:'演出'
                    },
                    {
                        pic:require('@/assets/img/12.png'),
                        name:'全部分类'
                    },
                ]
            }

        }
    }
</script>

<style scoped>

</style>