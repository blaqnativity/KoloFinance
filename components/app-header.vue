<script setup>
const user = useSupabaseUser();
</script>

<template>
  <div class="w-[100%] h-[10vh] bg-white shadow sticky top-0 z-20 px-6">
    <header
      class="h-[100%] max-w-7xl mx-auto flex justify-between items-center"
    >
      <NuxtLink to="/dashboard/" class="text-2xl font-extrabold text-black"
        >Antimii</NuxtLink
      >

      <div>
        <DashboardAvatar />
      </div>
    </header>
  </div>
</template>
