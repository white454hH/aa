<template>
    <div>
        <div class="box-6">
            <div class="div-5">
                <a href="#" class="_a">
                    <img src="../../assets/img/26.png" alt="">
                </a>
                <div>
                    <a href="#">逆风微笑的代码狗</a><br>
                    <span>{{data.time}}</span>
                </div>
            </div>
            <img src="../../assets/img/37.png" alt="" class="img-3" @click="show=!show">
        </div>
        <div class="bod" :class="show?'show':'hide'">
            <ul>
                <li>点击收藏</li>
                <li>取消关注</li>
                <li>点击举报</li>
            </ul>
        </div>
        <div class="box-7">
            <p>已经更新了哦&nbsp;&nbsp;&nbsp;<span>{{data.span}}</span><img src="../../assets/img/27.png" alt=""><img src="../../assets/img/27.png" alt=""></p>
        </div>
        <div class="box-8">
            <div class="con">
                <a href="#" class="_a-1"><img src="../../assets/img/28.png" alt=""></a>
                <div>
                    <a href="#">逆风微笑的代码狗</a>
                    <span>的投稿</span>
                </div>
            </div>
            <div class="div-6">
                <img src="../../assets/img/29.png" alt="">
            </div>
            <div class="div-7">
                <h5>{{data.h5}}</h5>
            </div>
            <div class="box-9">
                <div>
                    <a href="#"><img src="../../assets/img/30.png" alt="">&nbsp;&nbsp;转发</a>
                </div>
                <div>
                    <a href="#"><img src="../../assets/img/31.png" alt="">&nbsp;&nbsp;2</a>
                </div>
                <div>
                    <a href="#"><img src="../../assets/img/32.png" alt="">&nbsp;&nbsp;19</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mydetails",
        props:["data","index"],
        data(){
            return{
                show:false
            }
        }
    }
</script>

<style scoped>
    .show{
        display: block;
    }
    .hide{
        display: none;
    }
</style>