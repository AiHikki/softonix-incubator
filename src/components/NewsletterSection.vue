<template>
  <section id="blog" class="py-[70px]">
    <div
      class="bg bg-soft-orange bg-no-repeat bg-cover py-[75px] rounded-3xl text-center"
    >
      <h3 class="text-[40px] leading-none font-semibold mb-4">Sign up to our newsletter</h3>
      <p
        class="text-secondary mb-10 max-w-[415px] mx-auto"
      >
        Receive latest news, update, and many other things every week.
      </p>

      <form class="w-[450px] mx-auto relative" @submit.prevent>
        <input
          class="rounded-xl h-[60px] w-full pl-[26px] pr-16 placeholder:text-secondary text-sm"
          type="text" placeholder="Enter Your email address"
        >

        <button
          class="w-10 h-10 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3
        bg-ignis rounded-xl text-white shadow-[#F7674340] shadow-lg hover:scale-95 focus-visible:scale-95 transition-transform"
          type="submit"
        >
          <svg class="w-4 h-4">
            <use :xlink:href="sprite + '#plane'" />
          </svg>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import sprite from '../assets/icons/sprite.svg'

</script>

<style lang="scss" scoped>
.bg {
  background-image: url('../assets/img/newsletter/bg-lines.png');
}
</style>
