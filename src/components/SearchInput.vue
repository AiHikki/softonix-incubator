<template>
  <input
    v-model="model"
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 w-[250px]"
    placeholder="Search Contacts"
  >
</template>

<script lang="ts" setup>

const model = defineModel<string>()
</script>
