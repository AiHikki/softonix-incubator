<template>
  <section id="top-destinations" class="py-[70px]">
    <div class="text-center mb-7">
      <h2 class="font-semibold text-[56px] leading-tight mb-4">Top Destinations</h2>
      <p class="text-base text-secondary">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
    </div>

    <ul class="flex justify-center gap-[14px] mb-[50px]">
      <template v-for="(place, i) in places" :key="i">
        <li> 
          <button @click="() => selectPlace(i)" class="py-[10px] px-5 rounded-full border border-primary text-sm leading-none font-aurora text-center transition-colors" :class="i === selectedIndex && 'bg-primary text-white'">
            {{ place }}
          </button>
        </li>
      </template>
    </ul>

    <ul class="places-grid grid grid-flow-dense justify-center gap-x-[30px] gap-y-[26px]">
      <li class="col-span-1 row-span-1 relative rounded-3xl overflow-hidden">
        <img 
          src="../assets/img/top-destinations/wood-house.png" 
          srcset="../assets/img/top-destinations/wood-house.png 1x, ../assets/img/top-destinations/wood-house@2x.png 2x"
          alt="Wood house"
          class="w-[270px] h-[250px]"
          >
          <div class="absolute top-6 left-6 bg-white rounded-xl font-medium text-sm leading-none px-[10px] py-[5px] first-letter:text-center ">
            3.5
          </div>

          <div class="absolute bottom-6 left-6 text-white">
            <div class="font-semibold text-xl leading-none mb-[10px]">Vientam</div>
            <div class="text-sm">Worefall</div>
          </div>
      </li>

      <li class="col-span-1 row-span-2 relative rounded-3xl overflow-hidden">
        <img 
          src="../assets/img/top-destinations/triangle-house.png" 
          srcset="../assets/img/top-destinations/triangle-house.png 1x, ../assets/img/top-destinations/triangle-house@2x.png 2x"
          alt="House"
          class="w-[370px] h-[526px]"
          >
          <div class="absolute top-6 left-6 bg-primary text-white rounded-xl font-medium text-sm leading-none px-[10px] py-[5px] first-letter:text-center ">
            3.5
          </div>

          <div class="absolute bottom-6 left-6 text-white">
            <div class="font-semibold text-xl leading-none mb-[10px]">Vientam</div>
            <div class="text-sm">Worefall</div>
          </div>
      </li>

      <li class="col-span-2 row-span-1 relative rounded-3xl overflow-hidden mb-[13px]">
        <img 
          src="../assets/img/top-destinations/bridge.png" 
          srcset="../assets/img/top-destinations/bridge.png 1x, ../assets/img/top-destinations/bridge@2x.png 2x"
          alt="Bridge"
          class="w-[470px] h-[250px]"
          >
          <div class="absolute top-6 left-6 bg-primary text-white rounded-xl font-medium text-sm leading-none px-[10px] py-[5px] first-letter:text-center ">
            3.5
          </div>

          <div class="absolute bottom-6 left-6 text-white">
            <div class="font-semibold text-xl leading-none mb-[10px]">Vientam</div>
            <div class="text-sm">Worefall</div>
          </div>
      </li>

      <li class="col-span-1 row-span-1 relative rounded-3xl overflow-hidden">
        <img 
          src="../assets/img/top-destinations/castle.png" 
          srcset="../assets/img/top-destinations/castle.png 1x, ../assets/img/top-destinations/castle@2x.png 2x"
          alt="Castle"
          class="w-[270px] h-[250px]"

          >
          <div class="absolute top-6 left-6 rounded-xl bg-white font-medium text-sm leading-none px-[10px] py-[5px] first-letter:text-center ">
            3.5
          </div>

          <div class="absolute bottom-6 left-6 text-white">
            <div class="font-semibold text-xl leading-none mb-[10px]">Vientam</div>
            <div class="text-sm">Worefall</div>
          </div>
      </li>

      <li class="col-span-1 row-span-1 relative rounded-3xl overflow-hidden">
        <img 
          src="../assets/img/top-destinations/tower.png" 
          srcset="../assets/img/top-destinations/tower.png 1x, ../assets/img/top-destinations/tower@2x.png 2x"
          alt="Tower"
          class="w-[170px] h-[250px]"

          >
          <div class="absolute top-6 left-6 rounded-xl bg-primary text-white font-medium text-sm leading-none px-[10px] py-[5px] first-letter:text-center ">
            3.5
          </div>

          <div class="absolute bottom-6 left-6 text-white">
            <div class="font-semibold text-xl leading-none mb-[10px]">Vientam</div>
            <div class="text-sm">Worefall</div>
          </div>
      </li>

      <li class="col-span-1 row-span-1 relative rounded-3xl overflow-hidden">
        <img 
          src="../assets/img/top-destinations/big-ben.png" 
          srcset="../assets/img/top-destinations/big-ben.png 1x, ../assets/img/top-destinations/big-ben@2x.png 2x"
          alt="Big-ben"
          class="w-[270px] h-[250px]"

          >
          <div class="absolute top-6 left-6 rounded-xl bg-primary text-white font-medium text-sm leading-none px-[10px] py-[5px] first-letter:text-center ">
            3.5
          </div>

          <div class="absolute bottom-6 left-6 text-white">
            <div class="font-semibold text-xl leading-none mb-[10px]">Vientam</div>
            <div class="text-sm">Worefall</div>
          </div>
      </li>
     
    </ul>
  </section>
</template>

<script lang="ts" setup>
const places = ['London', 'Bangkok', 'England', 'Singapore', 'Italy']

const selectedIndex = ref(0)

const selectPlace = (i) => {
  selectedIndex.value = i
} 
</script>

<style scoped>
.places-grid {
  grid-template-columns: 270px 370px 170px 270px;
  grid-template-rows: 250px 250px;
}
</style>