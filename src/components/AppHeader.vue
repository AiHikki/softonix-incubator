<template>
  <header class="border-b border-b-gray-medium pb-6">
    <nav>
      <ul class="flex justify-center gap-6 text-primary">
        <li>
          <RouterLink active-class="text-blue-500" :to="{name: $routeNames.contacts}">Contacts</RouterLink>
        </li>
        <li>
          <RouterLink active-class="text-blue-500" :to="{name: $routeNames.jobOpenings}">Job openings</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>
