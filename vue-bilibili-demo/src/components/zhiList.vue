<template>
    <div>
    <zhiUl></zhiUl>
    <zhiSlideshow></zhiSlideshow>
    <zhiFocus></zhiFocus>
    <div class="bottom">
    <zhiLive :data="n" :index="index" v-for="(n,index) in da" :key="index"></zhiLive>
    </div>
    </div>
</template>

<script>
    import zhiLive from './zhiLive'
    import zhiSlideshow from './zhiSlideshow'
    import zhiUl from './zhiUl'
    import zhiFocus from './zhiFocus'
    export default {
        name: "zhiList",
        components:{
            zhiUl,
            zhiSlideshow,
            zhiFocus,
            zhiLive
        },
        data(){
            return{
                da:[
                    {
                        name:'推荐直播',
                        lol:[
                            {
                                pic: require('@/assets/img/101.png'),
                                film:'今天也要快乐呀',
                                introduce:'王者荣耀!'
                            },
                            {
                                pic: require('@/assets/img/102.png'),
                                film:'突击!',
                                introduce:'虚拟主播'
                            },
                            {
                                pic: require('@/assets/img/143.png'),
                                film:'啊,是我啊。',
                                introduce:'唱见电台。'
                            },
                            {
                                pic: require('@/assets/img/144.png'),
                                film:'平平无奇的夜晚',
                                introduce:'唱见电台'
                            },
                            {
                                pic: require('@/assets/img/145.png'),
                                film:'今日说法',
                                introduce:'中国人的法律午餐'
                            },
                            {
                                pic: require('@/assets/img/146.png'),
                                film:'无影灯下',
                                introduce:'手术两百年网络版'
                            },
                        ]
                    },
                    {
                        name:'使命召唤：现代战争',
                        lol:[
                            {
                                pic: require('@/assets/img/149.png'),
                                film:'《无敌》',
                            },
                            {
                                pic: require('@/assets/img/150.png'),
                                film:'【日语直播】[COD16]···',
                            },
                            {
                                pic: require('@/assets/img/151.png'),
                                film:'飞刀爱好者',
                            },
                            {
                                pic: require('@/assets/img/152.png'),
                                film:'[露脸]超清画质 老年人玩···',
                            },
                        ]
                    },
                    {
                        name:'电台',
                        lol:[
                            {
                                pic: require('@/assets/img/143.png'),
                                film:'啊,是我啊。',
                                introduce:'唱见电台。'
                            },
                            {
                                pic: require('@/assets/img/144.png'),
                                film:'平平无奇的夜晚',
                                introduce:'唱见电台'
                            },
                            {
                                pic: require('@/assets/img/145.png'),
                                film:'[声控福利]一字一句只···',
                                introduce:'唱见电台'
                            },
                            {
                                pic: require('@/assets/img/146.png'),
                                film:'伪低音炮青叔音在线唱歌···',
                                introduce:'唱见电台'
                            },
                        ]
                    },
                    {
                        name:'视频唱见',
                        lol:[
                            {
                                pic: require('@/assets/img/147.png'),
                                film:'争取当一个哑巴喔',
                            },
                            {
                                pic: require('@/assets/img/148.png'),
                                film:'封面和本人一样 ~',
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