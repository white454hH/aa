<template>
    <div>
        <shezhiUl :data="n.matter" :index="index" v-for="(n,index) in details" :key="index"></shezhiUl>
    </div>
</template>

<script>
    import shezhiUl from './shezhi-content/shezhiUl'
    export default {
        name: "shezhiMatter",
        components:{
            shezhiUl
        },
        data(){
            return{
                details:[
                    {
                        matter:[
                            {
                                con:'账号信息'
                            },
                            {
                                con:'安全隐私'
                            },
                            {
                                con:'收货信息'
                            },
                        ]
                    },
                    {
                        matter:[
                            {
                                con:'播放设置'
                            },
                            {
                                con:'解码设置'
                            },
                            {
                                con:'弹幕设置'
                            },
                            {
                                con:'离线设置'
                            },
                            {
                                con:'追番设置'
                            },
                        ]
                    },
                    {
                        matter:[
                            {
                                con:'动态设置'
                            },
                            {
                                con:'推送设置'
                            },
                            {
                                con:'消息设置'
                            },
                            {
                                con:'清理存储空间'
                            },
                            {
                                con:'其他设置'
                            },
                        ]
                    },
                    {
                        matter:[
                            {
                                con:'我的客服'
                            },
                            {
                                con:'帮助'
                            },
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>