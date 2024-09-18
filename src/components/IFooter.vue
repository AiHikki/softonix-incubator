<template>
  <footer class="flex justify-between pt-[70px] pb-20">
    <div>
      <ILogo class="mb-5" />
      <p class="mb-10">
        Enjoy the touring
        <br>
        with Salty
      </p>

      <ul class="flex gap-[14px] text-secondary">
        <li >
          <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="/">
            <svg class="w-8 h-8">
              <use :xlink:href="sprite + '#facebook'" />
            </svg>
          </a>
        </li>
        <li >
          <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="/">
            <svg class="w-8 h-8">
              <use :xlink:href="sprite + '#instagram'" />
            </svg>
          </a>
        </li>
        <li >
          <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="/">
            <svg class="w-8 h-8">
              <use :xlink:href="sprite + '#x'" />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <ul class="flex gap-[114px]">
      <li>
        <h4 class="mb-[22px] font-medium text-lg">Resources</h4>
        <ul class="text-gray-300 text-sm flex flex-col gap-3">
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Download</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Help Center</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Guide Book</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">App Directory</a>
          </li>
        </ul>
      </li>
      <li>
        <h4 class="mb-[22px] font-medium text-lg">Travellers</h4>
        <ul class="text-gray-300 text-sm flex flex-col gap-3">
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Why Travellers</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Enterprice</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Customer Stories</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Instagram post</a>
          </li>
        </ul>
      </li>
      <li>
        <h4 class="mb-[22px] font-medium text-lg">Company</h4>
        <ul class="text-gray-300 text-sm flex flex-col gap-3">
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Travelling</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">About Locato</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Success</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Information</a>
          </li>
        </ul>
      </li>
      <li>
        <h4 class="mb-[22px] font-medium text-lg">Get App</h4>
        <ul class="text-gray-300 text-sm flex flex-col gap-3">
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">App store</a>
          </li>
          <li >
            <a class="hover:text-ignis focus-visible:text-ignis transition-colors" href="">Google Play Store</a>
          </li>
        </ul>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import sprite from '../assets/icons/sprite.svg'
import ILogo from './ILogo.vue'

</script>