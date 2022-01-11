<template>
  <div class="count-unselect" @click="countStore.add">Login<span>{{countStore.count}}</span><span>{{countStore.doubleCount}}</span></div>
</template>

<script setup>
import { UseCountStore } from '@/store/'
const countStore = UseCountStore()
const updateCount = () => {
    // console.log(countStore.count)
    countStore.$patch({
        count: countStore.count + 1
    })
}
</script>

<style>
.count-unselect {
    user-select: none;
}
</style>