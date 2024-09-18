<template>
  <header class="flex justify-between items-center py-6 mb-2">
    <div class="flex items-center">
      <ILogo />

      <nav>
        <ul class="flex gap-9 font-aurora text-slate-blue">
          <li class="relative after:absolute after:-bottom-1 after:left-0.5 after:w-3 after:h-0.5 after:bg-ignis">
            <a class="py-2 hover:text-ignis focus-visible:text-ignis transition-colors " href="/">Home</a>
          </li>
          <li><a class="py-2 hover:text-ignis focus-visible:text-ignis transition-colors" href="#about">About us</a></li>
          <li><a class="py-2 hover:text-ignis focus-visible:text-ignis transition-colors" href="#top-destinations">Destinations</a></li>
          <li><a class="py-2 hover:text-ignis focus-visible:text-ignis transition-colors" href="#tours">Tours</a></li>
          <li><a class="py-2 hover:text-ignis focus-visible:text-ignis transition-colors" href="#blog">Blog</a></li>
        </ul>
      </nav>
    </div>

    <button
      class="flex gap-[6px] items-center border border-ignis min-w-[170px] rounded-full h-[54px] px-[34px]
     text-ignis font-aurora font-medium hover:scale-95 focus-visible:scale-95 transition-transform"
    >
      Book Now

      <svg class="w-4 h-4">
        <use :xlink:href="sprite + '#plane'" />
      </svg>
    </button>
  </header>
</template>

<script setup>
import sprite from '../assets/icons/sprite.svg'
import ILogo from './ILogo.vue'

</script>

<style lang="">

</style>
