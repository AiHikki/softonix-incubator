<template>
  <section class="py-[70px]">
    <div class="flex gap-[156px] items-end">
      <div class="flex-shrink-0 relative">
        <img
          src="../assets/img/experience/image.png"
          srcset="../assets/img/experience/image.png 1x, ../assets/img/experience/image@2x.png 2x"
          alt="Photographer"
          class="w-[490px] h-[562px]"
        >

        <div class="bg-white rounded-[14px] py-5 text-center px-[14px] absolute bottom-[87px] left-[-51px]">
          <img
            src="../assets/img/experience/icon.png"
            srcset="../assets/img/experience/icon.png 1x, ../assets/img/experience/icon@2x.png 2x"
            alt="Icon"
            class="w-20 h-20 mx-auto"
          >

          <div class="mt-[30px]">
            <div class="text-[30px] font-semibold leading-none mb-2 font-aurora text-ignis">600%</div>
            <span class="text-gray-200 text-[19px]">Destinations</span>
          </div>
        </div>

        <div class="bg-white rounded-[10px] py-5 px-4 min-w-[171px] absolute -bottom-5 right-4">
          <div class="flex mb-[10px] gap-3">
            <div class="shadow-[#9263001C] shadow w-[30px] h-[30px] rounded-md flex items-center justify-center">
              <!-- <svg class="text-ignis w-[22px] h-[22px]">
                <use :xlink:href="sprite + '#signal'" />
              </svg> -->
              <NetworkIcon class="text-ignis w-[22px] h-[22px]" />
            </div>
            <div class="text-[28px] leading-none font-aurora font-semibold">5000+</div>
          </div>
          <div class="font-aurora text-xs text-secondary leading-none text-center">Customers</div>
        </div>
      </div>

      <div>
        <div class="font-semibold text-xl leading-none tracking-[0.2em] mb-5 text-ignis">Our Experience</div>
        <h2 class="font-semibold text-[56px] leading-tight mb-5">Our Stories Have Adventures</h2>
        <p class="text-secondary mb-10 max-w-[467px]">
          We are experienced in bringing adventures to stay their journey,
          with all outdoor destinations in the world as our specialties.
          Start your adventure now! Nature has already called you!
        </p>

        <ul class="flex gap-5">
          <li
            v-for="({title, text}, i) in achievements"
            :key="i"
            class="bg-white rounded-xl pt-[30px] pb-[26px] pl-7 pr-5 w-[166px]"
          >
            <div class="font-semibold text-[46px] leading-none mb-[18px] text-ignis">{{ title }}</div>
            <p class="text-gray-200 text-[21px] leading-7">{{ text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// import sprite from '../assets/icons/sprite.svg'
import NetworkIcon from './NetworkIcon.vue'

const achievements = [
  {
    title: '12K+',
    text: 'Success Journey'
  },
  {
    title: '16+',
    text: 'Awards Winning'
  },
  {
    title: '20+',
    text: 'Years Of Experience'
  }
]
</script>

<style lang="">

</style>
