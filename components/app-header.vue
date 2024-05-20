<script setup>
const user = useSupabaseUser();
</script>

<template>
  <header
    class="flex justify-between items-center mt-10 text-center shadow-md mx-auto"
  >
    <NuxtLink to="/dashboard/" class="text-2xl font-extrabold text-black"
      >Antimii</NuxtLink
    >

    <div v-if="user">
      <AvatarProfile />
    </div>
  </header>
</template>
