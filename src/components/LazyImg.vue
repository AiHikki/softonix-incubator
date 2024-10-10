<template>
  <!-- <el-skeleton :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" />
      </template>
      <template #default> -->
  <img
    v-bind="$attrs"
    ref="imgRef"
    @load="onLoad"
    @error="onError"
  >
  <!-- </template>
    </el-skeleton> -->

  <!-- Infinite loading with el-skeleton? -->
</template>

<script lang="ts" setup>
interface IProps {
  src: string
  fallback?: string
}

const imgRef = ref<HTMLImageElement | null>(null)
const loading = ref(false)

const props = withDefaults(defineProps<IProps>(), {
  src: '',
  fallback: 'https://picsum.photos/id/237/200/300'
})

defineOptions({
  inheritAttrs: false
})

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(entries => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      loading.value = true
      imgRef.value.src = props.src
      observer.disconnect()
    }
  }, {
    rootMargin: '300px'
  })
  observer.observe(imgRef.value)
})

onUnmounted(() => {
  observer.disconnect()
})

function onLoad () {
  loading.value = false
}

function onError () {
  loading.value = false
  imgRef.value.src = props.fallback
}
</script>
