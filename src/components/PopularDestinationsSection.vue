<template>
  <section id="tours" class="py-[70px]">
    <div class="flex justify-between items-center mb-9">
        <h2 class="font-semibold text-[56px] leading-tight w-[400px]">Find Popular Destination</h2>

        <ArrowButtons 
          @scrollLeft="scrollLeft"
          @scrollRight="scrollRight" 
        />
    </div>

    <ul ref="scrollContainer" class="flex gap-[30px] overflow-x-auto snap-mandatory snap-x pb-6">
      <li class="rounded-2xl border-2 border-white flex-shrink-0">
        <div class="px-3 pt-3 mb-6">
          <img 
          src="../assets/img/popular-destinations/mountain-hiking.png" 
          srcset="../assets/img/popular-destinations/mountain-hiking.png 1x, ../assets/img/popular-destinations/mountain-hiking@2x.png 2x" 
          alt="Ocean"
          loading="lazy"
          >
        </div>
        <div class="px-6 pb-9">
          <h3 class="mb-[14px] text-2xl font-semibold leading-none">Mountain Hiking Tour</h3>
          <p class="text-secondary text-sm mb-7 leading-none">Mountain Hiking Tour</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl font-semibold leading-none">
                $89
              </span> 
              <span class="text-secondary">
                /Person
              </span>
            </div>
            <button class="py-3 px-4 rounded-full border border-primary text-sm leading-none hover:text-white hover:bg-primary focus-visible:text-white focus-visible:bg-primary transition-colors">Book Now</button>
          </div>
        </div>
      </li>
      
      <li class="rounded-2xl border-2 border-white flex-shrink-0">
        <div class="px-3 pt-3 mb-6">
          <img 
          src="../assets/img/popular-destinations/machu-picchu.png" 
          srcset="../assets/img/popular-destinations/machu-picchu.png 1x, ../assets/img/popular-destinations/machu-picchu@2x.png 2x" 
          alt="Machu Picchu"
          loading="lazy"
          >
        </div>
        <div class="px-6 pb-9">
          <h3 class="mb-[14px] text-2xl font-semibold leading-none">Machu Picchu, Peru</h3>
          <p class="text-secondary text-sm mb-7 leading-none">Machu Picchu, Peru</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl font-semibold leading-none">
                $99
              </span> 
              <span class="text-secondary">
                /Person
              </span>
            </div>
             <button class="py-3 px-4 rounded-full border border-primary text-sm leading-none hover:text-white hover:bg-primary focus-visible:text-white focus-visible:bg-primary transition-colors">Book Now</button>
          </div>
        </div>
      </li>

      <li class="rounded-2xl border-2 border-white flex-shrink-0">
        <div class="px-3 pt-3 mb-6">
          <img 
          src="../assets/img/popular-destinations/grand-canyon.png" 
          srcset="../assets/img/popular-destinations/grand-canyon.png 1x, ../assets/img/popular-destinations/grand-canyon@2x.png 2x" 
          alt="Grand Canyon"
          loading="lazy"
      
          >
        </div>
        <div class="px-6 pb-9">
          <h3 class="mb-[14px] text-2xl font-semibold leading-none">The Grand Canyon, Arizona</h3>
          <p class="text-secondary text-sm mb-7 leading-none">Mountain Hiking Tour</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl font-semibold leading-none">
                $70
              </span> 
              <span class="text-secondary">
                /Person
              </span>
            </div>
             <button class="py-3 px-4 rounded-full border border-primary text-sm leading-none hover:text-white hover:bg-primary focus-visible:text-white focus-visible:bg-primary transition-colors">Book Now</button>
          </div>
        </div>
      </li>

      <li class="rounded-2xl border-2 border-white flex-shrink-0">
        <div class="px-3 pt-3 mb-6">
          <img 
          src="../assets/img/popular-destinations/rome.png" 
          srcset="../assets/img/popular-destinations/rome.png 1x, ../assets/img/popular-destinations/rome@2x.png 2x" 
          alt="Rome, Italy"
          loading="lazy"
          >
        </div>
        <div class="px-6 pb-9">
          <h3 class="mb-[14px] text-2xl font-semibold leading-none">Rome, Italy</h3>
          <p class="text-secondary text-sm mb-7 leading-none">Mountain Hiking Tour</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl font-semibold leading-none">
                $99
              </span> 
              <span class="text-secondary">
                /Person
              </span>
            </div>
             <button class="py-3 px-4 rounded-full border border-primary text-sm leading-none hover:text-white hover:bg-primary focus-visible:text-white focus-visible:bg-primary transition-colors">Book Now</button>
          </div>
        </div>
      </li>
      <li class="rounded-2xl border-2 border-white flex-shrink-0">
        <div class="px-3 pt-3 mb-6">
          <img 
          src="../assets/img/popular-destinations/mountain-hiking.png" 
          srcset="../assets/img/popular-destinations/mountain-hiking.png 1x, ../assets/img/popular-destinations/mountain-hiking@2x.png 2x" 
          alt="Ocean"
          loading="lazy"
          >
        </div>
        <div class="px-6 pb-9">
          <h3 class="mb-[14px] text-2xl font-semibold leading-none">Mountain Hiking Tour</h3>
          <p class="text-secondary text-sm mb-7 leading-none">Mountain Hiking Tour</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl font-semibold leading-none">
                $89
              </span> 
              <span class="text-secondary">
                /Person
              </span>
            </div>
            <button class="py-3 px-4 rounded-full border border-primary text-sm leading-none hover:text-white hover:bg-primary focus-visible:text-white focus-visible:bg-primary transition-colors">Book Now</button>
          </div>
        </div>
      </li>
      
      <li class="rounded-2xl border-2 border-white flex-shrink-0">
        <div class="px-3 pt-3 mb-6">
          <img 
          src="../assets/img/popular-destinations/machu-picchu.png" 
          srcset="../assets/img/popular-destinations/machu-picchu.png 1x, ../assets/img/popular-destinations/machu-picchu@2x.png 2x" 
          alt="Machu Picchu"
          loading="lazy"
          >
        </div>
        <div class="px-6 pb-9">
          <h3 class="mb-[14px] text-2xl font-semibold leading-none">Machu Picchu, Peru</h3>
          <p class="text-secondary text-sm mb-7 leading-none">Machu Picchu, Peru</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl font-semibold leading-none">
                $99
              </span> 
              <span class="text-secondary">
                /Person
              </span>
            </div>
             <button class="py-3 px-4 rounded-full border border-primary text-sm leading-none hover:text-white hover:bg-primary focus-visible:text-white focus-visible:bg-primary transition-colors">Book Now</button>
          </div>
        </div>
      </li>

      <li class="rounded-2xl border-2 border-white flex-shrink-0">
        <div class="px-3 pt-3 mb-6">
          <img 
          src="../assets/img/popular-destinations/grand-canyon.png" 
          srcset="../assets/img/popular-destinations/grand-canyon.png 1x, ../assets/img/popular-destinations/grand-canyon@2x.png 2x" 
          alt="Grand Canyon"
          loading="lazy"
          >
        </div>
        <div class="px-6 pb-9">
          <h3 class="mb-[14px] text-2xl font-semibold leading-none">The Grand Canyon, Arizona</h3>
          <p class="text-secondary text-sm mb-7 leading-none">Mountain Hiking Tour</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl font-semibold leading-none">
                $70
              </span> 
              <span class="text-secondary">
                /Person
              </span>
            </div>
             <button class="py-3 px-4 rounded-full border border-primary text-sm leading-none hover:text-white hover:bg-primary focus-visible:text-white focus-visible:bg-primary transition-colors">Book Now</button>
          </div>
        </div>
      </li>

      <li class="rounded-2xl border-2 border-white flex-shrink-0">
        <div class="px-3 pt-3 mb-6">
          <img 
          src="../assets/img/popular-destinations/rome.png" 
          srcset="../assets/img/popular-destinations/rome.png 1x, ../assets/img/popular-destinations/rome@2x.png 2x" 
          alt="Rome, Italy"
          loading="lazy"
          >
        </div>
        <div class="px-6 pb-9">
          <h3 class="mb-[14px] text-2xl font-semibold leading-none">Rome, Italy</h3>
          <p class="text-secondary text-sm mb-7 leading-none">Mountain Hiking Tour</p>
          <div class="flex justify-between items-center">
            <div>
              <span class="text-2xl font-semibold leading-none">
                $99
              </span> 
              <span class="text-secondary">
                /Person
              </span>
            </div>
             <button class="py-3 px-4 rounded-full border border-primary text-sm leading-none hover:text-white hover:bg-primary focus-visible:text-white focus-visible:bg-primary transition-colors">Book Now</button>
          </div>
        </div>
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


