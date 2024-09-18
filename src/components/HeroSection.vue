<template>
  <section class="pb-[70px]">
    <div class="flex gap-[68px] items-center">
      <div>
        <h1
          class="font-horizon text-[84px] font-bold
         leading-none max-w-[577px] mb-[26px]"
        >
          Discover the Best Lovely Places
        </h1>
        <p class="text-secondary text-lg mb-11 max-w-[500px]">
          Plan and book your perfect trip with expert advice,
          travel tips, destination information and inspiration from us.
        </p>

        <div class="flex justify-between items-center max-w-[500px] rounded-full bg-gray-50 pl-7 pr-5 min-h-[76px]">
          <div class="flex">
            <div class="pr-[34px] border-r border-r-gray-75">
              <div class="font-medium text-lg leading-none mb-2">Where</div>
              <div class="flex items-center">
                <p class="text-xs text-gray-100 mr-[26px] max-w-[102px] truncate">Center Point, London</p>
                <svg class="text-ignis w-[9px] h-[13px]">
                  <use :xlink:href="sprite + '#location'" />
                </svg>
              </div>
            </div>
            <div class="pl-[34px]">
              <div class="font-medium text-lg mb-2 leading-none">Date</div>
              <div class="flex items-center ">
                <p class="text-xs text-gray-100 mr-[26px] max-w-[140px] truncate">09th March,2021</p>
                <svg class="text-ignis w-[13px] h-[13px]">
                  <use :xlink:href="sprite + '#calendar'" />
                </svg>
              </div>
            </div>
          </div>

          <div class="text-white w-[54px] h-[54px] flex items-center justify-center bg-ignis rounded-full">
            <svg class="w-7 h-7">
              <use :xlink:href="sprite + '#magnifying-glass'" />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex-shrink-0">
        <img
          class="h-[555px] w-[534px] object-cover"
          src="../assets/img/hero/hero.png"
          srcset="../assets/img/hero/hero.png 1x, ../assets/img/hero/hero@2x.png 2x"
          alt="Happy man with a phone"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import sprite from '../assets/icons/sprite.svg'

</script>
