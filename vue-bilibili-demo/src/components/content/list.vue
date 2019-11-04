<template>
    <div>
        <bilibili-navigation></bilibili-navigation>
        <bilibili-input></bilibili-input>
        <bilibili-topic></bilibili-topic>
        <bilibili-block></bilibili-block>
        <bilibili-details></bilibili-details>
        <bilibili-update></bilibili-update>
        <bilibili-contribute></bilibili-contribute>
        <bilibili-block2></bilibili-block2>
    </div>
</template>

<script>
    import navigation from './navigation'
    import listInput from './listInput'
    import topic from './topic'
    import block from './block'
    import details from './details'
    import update from './update'
    import contribute from './contribute'
    import block2 from './block2'
    export default {
        name: "list",
        components: {
            'bilibili-navigation': navigation,
            'bilibili-input': listInput,
            'bilibili-topic':topic,
            'bilibili-block':block,
            'bilibili-details':details,
            'bilibili-update':update,
            'bilibili-contribute':contribute,
            'bilibili-block2':block2
        }
    }
</script>

<style scoped>

</style>