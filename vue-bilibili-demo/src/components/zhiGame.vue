<template>
    <div class="div-3">
        <a href="#" v-for="(n,index) in list" :key="index"><img :src="n.pic" alt="">{{n.desc}}</a>
    </div>
</template>

<script>
    export default {
        name: "zhiGame",
        data(){
            return{
                list:[
                    {
                        pic: require('@/assets/img/90.png'),
                        desc:'英雄联盟'
                    },
                    {
                        pic: require('@/assets/img/91.png'),
                        desc:'lol云顶之弈'
                    },
                    {
                        pic: require('@/assets/img/92.png'),
                        desc:'王者荣耀'
                    },
                    {
                        pic: require('@/assets/img/93.png'),
                        desc:'娱乐'
                    },
                    {
                        pic: require('@/assets/img/94.png'),
                        desc:'单机'
                    },
                    {
                        pic: require('@/assets/img/95.png'),
                        desc:'电台'
                    },
                    {
                        pic: require('@/assets/img/96.png'),
                        desc:'怪物猎人'
                    },
                    {
                        pic: require('@/assets/img/97.png'),
                        desc:'唱见电台'
                    },
                    {
                        pic: require('@/assets/img/98.png'),
                        desc:'第五人格'
                    },
                    {
                        pic: require('@/assets/img/99.png'),
                        desc:'全部标签'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>