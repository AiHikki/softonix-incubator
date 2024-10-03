<template>
  <div class="flex-shrink-0">
    <el-avatar
      :src="contactImage"
      @error="onImageError"
    >
      {{ nameAbbrv }}
    </el-avatar>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  contactName: string
  contactImage?: string
}>()

const nameAbbrv = computed(() => {
  return props.contactName?.split(' ').reduce((acc, cur) => {
    if (cur && cur[0]) {
      if (acc.length < 2) {
        acc = acc.concat(cur[0])
      }
    }
    return acc.toUpperCase()
  }, '')
})

const imageUrl = ref(props.contactImage)

const onImageError = () => {
  imageUrl.value = ''
}
</script>
