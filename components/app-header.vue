<script setup>
const user = useSupabaseUser();
</script>

<template>
  <div class="w-[100%] h-[10vh] bg-gray-100 shadow">
    <header
      class="h-[100%] max-w-7xl mx-auto flex justify-between items-center"
    >
      <NuxtLink to="/dashboard/" class="text-2xl font-extrabold text-black"
        >Antimii</NuxtLink
      >

      <div>
        <DashboardAvatar />
      </div>

      <!-- <div v-if="user">
      <AvatarProfile />
    </div> -->
    </header>
  </div>
</template>
