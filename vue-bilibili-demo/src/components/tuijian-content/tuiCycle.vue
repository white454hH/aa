<template>
    <div class="contains">
        <tuiReuse :data="n" :index="index" v-for="(n,index) in information" :key="index"></tuiReuse>
    </div>
</template>

<script>
    import tuiReuse from './tuiReuse'
    export default {
        name: "tuiCycle",
        components:{
            tuiReuse
        },
        data(){
            return{
                information:[
                    {
                        pic:require('@/assets/img/71.png'),
                        introduce:'[ 燕双鹰 ]装逼 ',
                        details:'disco,高帅预警(野···',
                        analyze:'鬼畜·点赞飙升'
                    },
                    {
                        pic:require('@/assets/img/72.png'),
                        introduce:'[装机大赛bilibili]主机 ',
                        details:'还是充电宝  打造一···',
                        analyze:'电脑装机  装机大···'
                    },
                    {
                        pic:require('@/assets/img/74.png'),
                        introduce:'十四分钟,让你重新认识 ',
                        details:'div(上)',
                        analyze:'野生技术协会  css'
                    },
                    {
                        pic:require('@/assets/img/75.png'),
                        introduce:'这部国漫竟美到极致! ',
                        details:'外国人看了都傻眼···',
                        analyze:'2万点赞'
                    },
                    {
                        pic:require('@/assets/img/153.png'),
                        introduce:'[爱情公寓]鬼灭值 ',
                        details:'刃/激燃',
                        analyze:'1万点赞'
                    },
                    {
                        pic:require('@/assets/img/154.png'),
                        introduce:'《天气之子》中,东京',
                        details:'因3年暴雨被淹,现···',
                        analyze:'科技·点赞飙升'
                    },
                    {
                        pic:require('@/assets/img/155.png'),
                        introduce:'[奥利给]遇到坤坤',
                        details:'我好怕怕',
                        analyze:'鬼畜调教·冬泳怪鸽'
                    },
                    {
                        pic:require('@/assets/img/156.png'),
                        introduce:'RUNNINGMAN-李光',
                        details:'洙蚊子舞特辑搞笑···',
                        analyze:'综艺·RUNNINGMAN···'
                    },
                    {
                        pic:require('@/assets/img/157.png'),
                        introduce:'[地下交通站]贾队',
                        details:'张单曲:《追光者》',
                        analyze:'编辑推荐'
                    },
                    {
                        pic:require('@/assets/img/158.png'),
                        introduce:'我在异世界当皇帝!',
                        details:'竟然···',
                        analyze:'迷人反派'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>