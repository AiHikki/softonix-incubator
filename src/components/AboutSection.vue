<template>
  <section id="about" class="py-[70px]">
    <div class="flex gap-[175px] items-center">
      <div class="flex-shrink-0">
        <img
          src="../assets/img/about/photographer.png"
          srcset="../assets/img/about/photographer.png 1x, ../assets/img/about/photographer@2x.png 2x"
          alt="Photographer"
          class="w-[390px] h-[540px]"
        >
      </div>
      <div>
        <hr class="w-[67px] h-2 rounded bg-orange-gradient drop-shadow-[0px_2px_6px_#E5891826] border-none mb-3">
        <h2 class="font-semibold text-[56px] leading-tight mb-[26px] w-[468px] capitalize">A customer said about us:</h2>

        <ul ref="scrollContainer" class="w-[540px] overflow-x-hidden flex gap-[30px] pb-4">
          <li class="p-8 bg-white rounded-xl min-w-full">
            <p class="mb-7 text-secondary text-lg">
              Salty helped me a lot in finding the best place for our first outdoor adventure trip.
              They responded very quickly and gave me a detailed account of the place—its history,
              as well as its best features.
            </p>
            <div class="mb-4">
              <svg class="text-[#ffc14b] w-[107px] h-[17px]">
                <use :xlink:href="sprite + '#stars'" />
              </svg>
            </div>

            <div class="flex justify-between">
              <div>
                <div class="mb-2 text-xl leading-none font-medium">Andrew Sarma</div>
                <div class="text-xs text-secondary">Enterpreneur</div>
              </div>
              <div class="flex gap-4">
                <button
                  class="w-10 h-10 flex items-center justify-center border border-primary rounded-full"
                  @click="scrollLeft"
                >
                  <svg class="w-[6px] h-[10px]">
                    <use :xlink:href="sprite + '#arrow-left'" />
                  </svg>
                </button>
                <button
                  class="w-10 h-10 flex items-center justify-center border border-primary rounded-full bg-primary text-white"
                  @click="scrollRight"
                >
                  <svg class="w-[6px] h-[10px]">
                    <use :xlink:href="sprite + '#arrow-right'" />
                  </svg>
                </button>
              </div>
            </div>
          </li>

          <li class="p-8 bg-white rounded-xl min-w-full">
            <p class="mb-7 text-secondary text-lg">
              Salty helped me a lot in finding the best place for our first outdoor adventure trip.
              They responded very quickly and gave me a detailed account of the place—its history,
              as well as its best features.
            </p>
            <div class="mb-4">
              <svg class="text-[#ffc14b] w-[107px] h-[17px]">
                <use :xlink:href="sprite + '#stars'" />
              </svg>
            </div>

            <div class="flex justify-between">
              <div>
                <div class="mb-2 text-xl leading-none font-medium">Andrew Sarma</div>
                <div class="text-xs text-secondary">Enterpreneur</div>
              </div>
              <div class="flex gap-4">
                <button
                  class="w-10 h-10 flex items-center justify-center border border-primary rounded-full"
                  @click="scrollLeft"
                >
                  <svg class="w-[6px] h-[10px]">
                    <use :xlink:href="sprite + '#arrow-left'" />
                  </svg>
                </button>
                <button
                  class="w-10 h-10 flex items-center justify-center border border-primary rounded-full bg-primary text-white"
                  @click="scrollRight"
                >
                  <svg class="w-[6px] h-[10px]">
                    <use :xlink:href="sprite + '#arrow-right'" />
                  </svg>
                </button>
              </div>
            </div>
          </li>

          <li class="p-8 bg-white rounded-xl min-w-full">
            <p class="mb-7 text-secondary text-lg">
              Salty helped me a lot in finding the best place for our first outdoor adventure trip.
              They responded very quickly and gave me a detailed account of the place—its history,
              as well as its best features.
            </p>
            <div class="mb-4">
              <svg class="text-[#ffc14b] w-[107px] h-[17px]">
                <use :xlink:href="sprite + '#stars'" />
              </svg>
            </div>

            <div class="flex justify-between">
              <div>
                <div class="mb-2 text-xl leading-none font-medium">Andrew Sarma</div>
                <div class="text-xs text-secondary">Enterpreneur</div>
              </div>
              <div class="flex gap-4">
                <button
                  class="w-10 h-10 flex items-center justify-center border border-primary rounded-full"
                  @click="scrollLeft"
                >
                  <svg class="w-[6px] h-[10px]">
                    <use :xlink:href="sprite + '#arrow-left'" />
                  </svg>
                </button>
                <button
                  class="w-10 h-10 flex items-center justify-center border border-primary rounded-full bg-primary text-white"
                  @click="scrollRight"
                >
                  <svg class="w-[6px] h-[10px]">
                    <use :xlink:href="sprite + '#arrow-right'" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import sprite from '../assets/icons/sprite.svg'
import ArrowButtons from './ArrowButtons.vue'
import { useScroll } from '../composables/useScroll.js'

const { scrollContainer, scrollLeft, scrollRight } = useScroll(30);
</script>

