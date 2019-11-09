<template>
    <div>
        <yingUl></yingUl>
        <yingSlideshow></yingSlideshow>
        <yingProgram></yingProgram>
    </div>
</template>

<script>
    import yingProgram from './yingProgram'
    import yingUl from './yingUl'
    import yingSlideshow from './yingSlideshow'
    export default {
        name: "yingList",
        components:{
            yingUl,
            yingSlideshow,
            yingProgram
        }
    }
</script>

<style scoped>

</style>