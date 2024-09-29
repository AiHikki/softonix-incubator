<template>
  <el-select
    v-model="model"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.name"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>

interface IOptions {
  name: string
  value: string
}

const model = defineModel<[]>()

defineProps<{
  options: IOptions[]
}>()
</script>
