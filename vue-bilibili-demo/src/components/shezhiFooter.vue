<template>
    <div class="exit" @click="Dialog">
        <span>退出登录</span>
    </div>

</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "shezhiFooter",
        data(){
            return{
                msg:''
            }
        },
        methods:{
            //（确认、取消）的弹出框
            Dialog(){
                this.$dialog.confirm({
                    title:'退出',
                    message:'乃确定不是手滑了么？',
                    confirmButtonColor:'red'
                })
            }

        },
        mounted() {

        },
        components:{
            [Dialog.name]:name
        }

    }
</script>

<style scoped>

</style>