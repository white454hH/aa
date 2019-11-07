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
                ]
            }
        }
    }
</script>

<style scoped>

</style>