<template>
  <select
    v-model="model"
    multiple
    class="rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm p-2 w-[150px] h-[90px]"
  >
    <option value="" disabled>Select Roles</option>
    <option v-for="role in roles" :key="role" class="truncate" :value="role"> {{ role }}</option>
  </select>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store'

const store = useContactsStore()
const { roles } = storeToRefs(store)
const model = defineModel<string[]>()
</script>
