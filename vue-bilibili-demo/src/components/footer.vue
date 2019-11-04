<template>
    <div class="foter">
        <bilibili-tally :key="sid" :data="a" :sed="sid" :v-for="(a,sid) in cartInfo.information"></bilibili-tally>
    </div>
</template>

<script>
    import tally from './content/tally'
    export default {
        name: "my-footer",
         components: {
            'bilibili-tally':tally
        },
        props:['a','sid'],
        data(){
            return {
                cartInfo:{
                   "information":[
                       {
                           pic:'img/33.png',
                           name:'首页'
                       },
                       {
                           pic:'img/34.png',
                           name:'频道'
                       },
                       {
                           pic:'img/35.png',
                           name:'动态'
                       },
                       {
                           pic:'img/36.png',
                           name:'会员购'
                       },
                                ]

                      }
                   }

        }
    }
</script>

<style scoped>

</style>