<template>
  <div class="max-w-[1440px] px-[135px] mx-auto">
    <IHeader />
    <main>
      <HeroSection />
      <CategoriesSection />
      <ExperienceSection />
      <PopularDestinationsSection />
      <TopDestinationsSection />
      <AboutSection />
      <NewsletterSection />
    </main>
    <IFooter />
  </div>
</template>

<script setup>
import IHeader from './components/IHeader.vue'
import HeroSection from './components/HeroSection.vue'
import CategoriesSection from './components/CategoriesSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import PopularDestinationsSection from './components/PopularDestinationsSection.vue'
import TopDestinationsSection from './components/TopDestinationsSection.vue'
import AboutSection from './components/AboutSection.vue'
import NewsletterSection from './components/NewsletterSection.vue'
import IFooter from './components/IFooter.vue'

</script>

<style lang="scss">

</style>
