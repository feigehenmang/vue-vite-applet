<template>
    <span @click="tapCount">{{count}}</span>
</template>

<script setup>
    const props = defineProps({
        count: Number
    })
    const emite = defineEmits(['tapCount'])
    const tapCount = () => {
        emite('tapCount')
    }
</script>

<style lang="scss" scoped>

</style>