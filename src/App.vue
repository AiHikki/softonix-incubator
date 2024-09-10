<template>
  <div class="p-4 text-black">
    Hello {{ data.name }}!
  </div>
</template>

<script lang="ts" setup>
import { eslintExample } from '@/examples/eslint-example'

const data = reactive({ name: 'Player' })

onMounted(() => {
  eslintExample.renderList()
})
</script>
