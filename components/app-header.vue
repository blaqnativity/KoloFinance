<script setup>
const user = useSupabaseUser();
</script>

<template>
  <header class="flex justify-between items-center mt-10 text-center">
    <NuxtLink to="/" class="text-2xl font-extrabold text-black"
      >Antimii</NuxtLink
    >

    <div v-if="user">
      <AvatarProfile />
    </div>
  </header>
</template>
