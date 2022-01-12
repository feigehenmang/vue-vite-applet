<template>
  <div class="count-unselect">
      Login
      <div>
          <CountItem :count="countStore.count" @tapCount="countStore.add"></CountItem>
      </div>
      <!-- <span>{{countStore.count}}</span> -->
      <span>{{countStore.doubleCount}}</span>
      <br />
      <el-button @click="updateCount">Count+</el-button>
  </div>
</template>

<script setup>
import CountItem from '@/components/Count.vue'
import { UseCountStore } from '@/store/'
console.log(import.meta.env.VITE_BASE_API)
const countStore = UseCountStore()
const updateCount = () => {
    console.log(countStore.count)
    countStore.$patch({
        count: countStore.count + 1
    })
}
</script>

<style lang="scss" scoped>
.count-unselect {
    user-select: none;
    cursor: pointer;
    background: $default-bg-color;
}
</style>