<template>
  <div>
    {{ title }}
    <br />
    <count :count="countStore.count" @tapCount="countStore.add"></count>
    <br />
    {{ countStore.doubleCount }}
  </div>
</template>
<script lang="ts">
import Count from '@/components/Count.vue'
import { defineComponent, ref } from 'vue'
import { UseCountStore as useCount } from '@/store/'
export default defineComponent({
  components: {
    Count,
  },
  setup() {
    const title = ref('Login')
    const countStore = useCount()
    return {
      title,
      countStore,
    }
  },
})
</script>
