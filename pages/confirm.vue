<script setup>
useRedirectIfAuth("/");
</script>

<template>
  <div class="text-center">
    <UCard>
      <template #header> Wait a moment while we sign you in ... ... </template>

      <USkeleton class="h-8 w-full mb-2" v-for="i in 5" :key="i" />
    </UCard>
  </div>
</template>
