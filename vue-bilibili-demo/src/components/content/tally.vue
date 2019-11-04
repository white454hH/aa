<template>
    <div>
        <a href="#"><img :src="a.pic" alt=""><br>{{a.name}}</a>
    </div>
</template>

<script>
    export default {
        name: "tally",
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