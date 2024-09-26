<template>
  <select
    v-model="model"
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 block w-[150px]"
  >
    <option disabled value="">Sort</option>
    <option value="default">Default</option>
    <option value="ascending">Ascending</option>
    <option value="descending">Descending</option>
  </select>
</template>

<script lang="ts" setup>

const model = defineModel<string>()
</script>
