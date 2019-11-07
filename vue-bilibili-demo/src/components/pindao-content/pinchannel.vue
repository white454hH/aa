<template>
    <div class="renewal">
        <p class="biaotou">我订阅的1个频道有更新</p>
        <div class="guichu">
            <div>
                <h4>鬼畜</h4>
                <span>7小时前 更新了优质视频</span>
            </div>
            <span class="but" id="notify">
                <p type="primary" @click="toNotify">点击订阅</p>
            </span>
        </div>
        <div class="video">
            <a href="#">
                <img src="../../assets/img/139.png" alt=""><br>
                <p>[ JOJO＆奇妙美声 ] 我DIO <br>太阳</p>
            </a>
            <a href="#">
                <img src="../../assets/img/140.png" alt=""><br>
                <p>揭秘和平精英推广曲作者:神<br>曲《烤面筋》《faded》,···</p>
            </a>
        </div>
        <div class="day">
            <a>今日共63个最新投稿></a>
        </div>
    </div>
</template>

<script>
    import { Notify } from 'vant';
    export default {
        name: "pinchannel",
        components:{
            [Notify.name]:Notify
        },
        methods:{
            toNotify(){
                this.$notify({
                    message:'订阅成功',
                    background:'pink',
                    duration: 1000
                })
            }
        }
    }
</script>

<style scoped>

</style>