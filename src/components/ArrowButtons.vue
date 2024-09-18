<template>
  <div class="flex gap-4">
    <button
      :class="[
        `w-[${buttonSize}px]`,
        `h-[${buttonSize}px]`,
        'flex items-center justify-center border border-primary rounded-full'
      ]"
      @click="onLeftClick"
    >
      <svg :class="[`w-[${iconWidth}px] h-[${iconHeight}px]`]">
        <use :xlink:href="sprite + '#arrow-left'" />
      </svg>
    </button>
    <button
      :class="[
        `w-[${buttonSize}px]`,
        `h-[${buttonSize}px]`,
        'flex items-center justify-center border border-primary rounded-full text-white bg-primary'
      ]"
      @click="onRightClick"
    >
      <svg :class="[`w-[${iconWidth}px] h-[${iconHeight}px]`]">
        <use :xlink:href="sprite + '#arrow-right'" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import sprite from '../assets/icons/sprite.svg';

const props = defineProps({
  buttonSize: {
    type: Number,
    default: 54,
  },
  iconWidth: {
    type: Number,
    default: 6,
  },
  iconHeight: {
    type: Number,
    default: 12,
  }
});

const emit = defineEmits(['scrollLeft', 'scrollRight']);

const onLeftClick = () => {
  emit('scrollLeft');
};

const onRightClick = () => {
  emit('scrollRight');
};
</script>
