<template>
    <div class="box-6">
        <ul>
            <li v-for="(n,index) in sites" :key="index">{{n.name}}</li>
        </ul>
        <div class="div-5">
            <img src="../../assets/img/17.png" alt="">
            <div class="con">
                <h5>MAX FACTORY figma<br>少女前线 UMP45 可动</h5>
                <span class="_sp">预售</span>  <span class="_sp">新品</span><br>
                <p>¥<span>535</span>  <span class="_sp-2">4422人想要</span></p>
            </div>
        </div>
        <div class="div-6">
            <img src="../../assets/img/18.png" alt="">
            <div class="con">
                <h5>西安·飞鸟音乐鬼市1.0</h5>
                <p class="xian">11.22-11.23 西安市</p>
                <p class="_p">¥<span>40</span>起  <span class="_sp-2">8人想去</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "huiul",
        data(){
            return{
                sites:[
                    {name:'推荐'},
                    {name:'商品'},
                    {name:'美图'},
                    {name:'情报'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>