<template>
    <div>
        <bilibili-navigation></bilibili-navigation>
        <bilibili-input></bilibili-input>
        <bilibili-topic></bilibili-topic>
        <bilibili-block></bilibili-block>
        <bilibili-details :data="n" :index="index" v-for="(n,index) in list " :key="index"></bilibili-details>
        <bilibili-cont></bilibili-cont>
    </div>
</template>

<script>
    import navigation from './navigation'
    import listInput from './listInput'
    import topic from './topic'
    import block from './block'
    import details from './details'
    import cont from './cont'
    export default {
        name: "list",
        components: {
            'bilibili-navigation': navigation,
            'bilibili-input': listInput,
            'bilibili-topic':topic,
            'bilibili-block':block,
            'bilibili-details':details,
            'bilibili-cont':cont
        },
        data(){
            return{
                list:[
                    {

                                time:'2小时前',
                                span:'更新到77天了',
                                h5:'[ 路飞学诚 ] 2019最新Python+人工智能工程师第21期···'

                    },
                    {

                                time:'昨天',
                                span:'更新到76天了',
                                h5:'[ 路飞学诚 ] 2019最新Python+人工智能工程师第20期···'

                    },
                    {

                                time:'11.3',
                                span:'更新到75天了',
                                h5:'[ 路飞学诚 ] 2019最新Python+人工智能工程师第19期···'

                    },
                    {

                                time:'11.2',
                                span:'更新到74天了',
                                h5:'[ 路飞学诚 ] 2019最新Python+人工智能工程师第18期···'

                    },
                    {

                                time:'11.1',
                                span:'更新到73天了',
                                h5:'[ 路飞学诚 ] 2019最新Python+人工智能工程师第17期···'

                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>