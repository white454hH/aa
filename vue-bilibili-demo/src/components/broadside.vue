<template>
    <div>
        <div class="border">
            <div class="border-1">
                <div>
                    <img src="../assets/img/1.png" alt="" class="img-4">
                </div>
                <div class="border-2">
                    <img src="../assets/img/104.png" alt="">
                    <img src="../assets/img/105.png" alt="">
                </div>
                <div>
                    <div  class="wenzi">
                        <h5>半城殇雪半城烟</h5>
                        <a>Lv2</a>
                        <span>正式会员</span>
                    </div>
                    <div class="bi">
                        <span>B币:0.0</span>
                        <span>硬币:45.0</span>
                    </div>
                </div>
            </div>
            <div class="border-3">
                <div>
                    <span>我的大会员</span>
                    <a>了解更多权益</a>
                    <p>开通大会员常看番剧国创</p>
                </div>
                <span class="sp2">></span>
            </div>
            <div class="border-4">
                <a>0 <br><span>动态</span></a>
                <a>3 <br><span>关注</span></a>
                <a>0 <br><span>粉丝</span></a>
            </div>

            <bilibili-listli :data="item.matter" :index="index"  v-for="(item,index) in list" :key="index"></bilibili-listli>
            <div class="_div">
                <div class="border-6">
                    <a><img src="../assets/img/114.png" alt=""><span>设置</span></a>
                    <a><img src="../assets/img/115.png" alt=""><span>主题</span></a>
                    <a><img src="../assets/img/116.png" alt=""><span>夜间</span></a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import listli from './dongtai-content/listli'
    export default {
        name: "broadside",
        components:{
            'bilibili-listli':listli
        },
        data(){
            return{
                list:[
                    {
                        matter:[
                            {
                                img: require('@/assets/img/106.png'),
                                desc:'首页'
                            },
                            {
                                img: require('@/assets/img/107.png'),
                                desc:'历史记录'
                            },
                            {
                                img: require('@/assets/img/108.png'),
                                desc:'下载管理'
                            },
                            {
                                img: require('@/assets/img/109.png'),
                                desc:'我的收藏'
                            },
                            {
                                img: require('@/assets/img/110.png'),
                                desc:'稍后再看'
                            },
                        ]
                    },
                    {
                        matter:[
                            {
                                img: require('@/assets/img/111.png'),
                                desc:'投稿'
                            },
                            {
                                img: require('@/assets/img/112.png'),
                                desc:'创作中心'
                            },
                            {
                                img: require('@/assets/img/113.png'),
                                desc:'热门活动'
                            }
                        ]
                    },
                    {
                        matter:[
                            {
                                img: require('@/assets/img/117.png'),
                                desc:'直播中心'
                            },
                            {
                                img: require('@/assets/img/118.png'),
                                desc:'我的课程'
                            },
                            {
                                img: require('@/assets/img/119.png'),
                                desc:'免流量服务'
                            },
                            {
                                img: require('@/assets/img/120.png'),
                                desc:'我的订单'
                            },
                            {
                                img: require('@/assets/img/121.png'),
                                desc:'会员购中心'
                            },
                            {
                                img: require('@/assets/img/122.png'),
                                desc:'联系客服'
                            },
                            {
                                img: require('@/assets/img/123.png'),
                                desc:'青少年模式'
                            }
                        ]
                    }

                ]
            }
        }
    }
</script>

<style scoped>

</style>