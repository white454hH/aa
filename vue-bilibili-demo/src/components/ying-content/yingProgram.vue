<template>
    <div class="bord">
        <yingCycle :data="n" :index="index" v-for="(n,index) in da" :key="index"></yingCycle>
        <yingdist :data="a" :index="i" v-for="(a,i) in list" :key="i"></yingdist>
    </div>
</template>

<script>
    import yingCycle from './yingCycle'
    import yingdist from './yingdist'
    export default {
        name: "yingProgram",
        components:{
            yingCycle,
            yingdist
        },
        data(){
            return{
                da:[
                        {
                            name:'记录片热播',
                            lol:[
                                {
                                    pic: require('@/assets/img/86.png'),
                                    film:'守护解放西',
                                    introduce:'警动星城!'
                                },
                                {
                                    pic: require('@/assets/img/87.png'),
                                    film:'人生一串2',
                                    introduce:'上串开吃!'
                                },
                                {
                                    pic: require('@/assets/img/88.png'),
                                    film:'食为天',
                                    introduce:'地狱魔厨美食教学!'
                                },
                                {
                                    pic: require('@/assets/img/181.png'),
                                    film:'未至之境',
                                    introduce:'11月19日正式开播'
                                },
                                {
                                    pic: require('@/assets/img/182.png'),
                                    film:'今日说法',
                                    introduce:'中国人的法律午餐'
                                },
                                {
                                    pic: require('@/assets/img/184.png'),
                                    film:'无影灯下',
                                    introduce:'手术两百年网络版'
                                },
                            ]
                        },
                    {
                        name:'电影热播',
                        lol:[
                            {
                                pic: require('@/assets/img/163.png'),
                                film:'名侦探柯南:绀青之拳',
                                introduce:'真相只有一个!'
                            },
                            {
                                pic: require('@/assets/img/164.png'),
                                film:'哪吒值魔童降世',
                                introduce:'年度国产动画电影!'
                            },
                            {
                                pic: require('@/assets/img/165.png'),
                                film:'盗梦空间',
                                introduce:'烧脑科幻经典!'
                            },
                            {
                                pic: require('@/assets/img/166.png'),
                                film:'大侦探皮卡丘',
                                introduce:'前方高萌预警'
                            },
                            {
                                pic: require('@/assets/img/167.png'),
                                film:'八部半',
                                introduce:'费里尼代表作'
                            },
                            {
                                pic: require('@/assets/img/168.png'),
                                film:'惊魂记',
                                introduce:'母亲是男孩最好···'
                            },
                        ]
                    },


                    ],
                list:[
                    {
                        na:'电视剧热播',
                        od:[
                            {
                                pic: require('@/assets/img/169.png'),
                                film:'秃鹫',
                                introduce:'碇司令式坐姿!'
                            },
                            {
                                pic: require('@/assets/img/170.png'),
                                film:'让我叫声“爹”',
                                introduce:'老实女婿和傲娇岳父'
                            },
                            {
                                pic: require('@/assets/img/171.png'),
                                film:'深夜食堂 第五季',
                                introduce:'B太胜地凉也来食堂啦~'
                            },
                            {
                                pic: require('@/assets/img/172.png'),
                                film:'露营物语',
                                introduce:'边切肉边流口水'
                            },
                            {
                                pic: require('@/assets/img/173.png'),
                                film:'校阅女孩河野悦子',
                                introduce:'我也想亲亲'
                            },
                            {
                                pic: require('@/assets/img/174.png'),
                                film:'非自然死亡',
                                introduce:'时至今日 你依旧是我的光'
                            },
                        ]
                    },
                    {
                        na:'综艺热播',
                        od:[
                            {
                                pic: require('@/assets/img/175.png'),
                                film:'穿越吧·剧情版',
                                introduce:'憨憨兄弟在线垃圾分类'
                            },
                            {
                                pic: require('@/assets/img/176.png'),
                                film:'穿越吧·互动版',
                                introduce:'解锁李白隐藏身份'
                            },
                            {
                                pic: require('@/assets/img/177.png'),
                                film:'2019主持人大赛',
                                introduce:'小撒这反应能力真是绝了'
                            },
                            {
                                pic: require('@/assets/img/178.png'),
                                film:'我和我的祖国',
                                introduce:'看“老戏骨”对戏太过瘾了'
                            },
                            {
                                pic: require('@/assets/img/179.png'),
                                film:'梦想改造家 第6季',
                                introduce:'哭了！老破小竟能变成这样?'
                            },
                            {
                                pic: require('@/assets/img/180.png'),
                                film:'哔计划Vlog',
                                introduce:'王嘉尔：我的"车技"很好?'
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