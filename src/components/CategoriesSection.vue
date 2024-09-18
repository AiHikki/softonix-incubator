<template>
  <section class="py-[70px]">
    <div class="flex justify-between mb-[60px]">
      <div>
        <h2 class="font-semibold text-[56px] leading-none mb-6">Categories</h2>
        <p class="max-w-[370px] text-secondary">
          Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
        </p>
      </div>

      <ArrowButtons 
          @scrollLeft="scrollLeft"
          @scrollRight="scrollRight" 
        />
    </div>

    <ul ref="scrollContainer" class="flex gap-[30px] overflow-x-auto snap-x snap-mandatory pb-6">
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/beach.png"
            srcset="../assets/img/categories/beach.png 1x, ../assets/img/categories/beach@2x.png 2x"
            alt="Beach"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Beach</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/desert.png"
            srcset="../assets/img/categories/desert.png 1x, ../assets/img/categories/desert@2x.png 2x"
            alt="Desert"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Desert</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/mountain.png"
            srcset="../assets/img/categories/mountain.png 1x, ../assets/img/categories/mountain@2x.png 2x"
            alt="Mountain"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Mountain</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/pyramid.png"
            srcset="../assets/img/categories/pyramid.png 1x, ../assets/img/categories/pyramid@2x.png 2x"
            alt="Pyramid"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Pyramid</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/temple.png"
            srcset="../assets/img/categories/temple.png 1x, ../assets/img/categories/temple@2x.png 2x"
            alt="Temple"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Temple</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/tower.png"
            srcset="../assets/img/categories/tower.png 1x, ../assets/img/categories/tower@2x.png 2x"
            alt="Tower"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Tower</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/beach.png"
            srcset="../assets/img/categories/beach.png 1x, ../assets/img/categories/beach@2x.png 2x"
            alt="Beach"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Beach</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/desert.png"
            srcset="../assets/img/categories/desert.png 1x, ../assets/img/categories/desert@2x.png 2x"
            alt="Desert"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Desert</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/mountain.png"
            srcset="../assets/img/categories/mountain.png 1x, ../assets/img/categories/mountain@2x.png 2x"
            alt="Mountain"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Mountain</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/pyramid.png"
            srcset="../assets/img/categories/pyramid.png 1x, ../assets/img/categories/pyramid@2x.png 2x"
            alt="Pyramid"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Pyramid</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/temple.png"
            srcset="../assets/img/categories/temple.png 1x, ../assets/img/categories/temple@2x.png 2x"
            alt="Temple"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Temple</h3>
      </li>
      <li class="flex-shrink-0">
        <div class="mb-[18px]">
          <img
            src="../assets/img/categories/tower.png"
            srcset="../assets/img/categories/tower.png 1x, ../assets/img/categories/tower@2x.png 2x"
            alt="Tower"
          loading="lazy"
            >
        </div>
        <h3 class="font-medium leading-none text-[26px] text-center">Tower</h3>
      </li>
    </ul>
  </section>
</template>

<script setup>
import sprite from '../assets/icons/sprite.svg'
import ArrowButtons from './ArrowButtons.vue'
import { useScroll } from '../composables/useScroll.js'

const { scrollContainer, scrollLeft, scrollRight } = useScroll();
</script>
