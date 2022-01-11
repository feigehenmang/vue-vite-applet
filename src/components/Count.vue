<template>
    <span @click="tapCount">{{count}}</span>
</template>

<script setup>
    import { defineProps, defineEmits} from 'vue'
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