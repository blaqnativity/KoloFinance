<script setup>
const user = useSupabaseUser();
</script>

<template>
  <header class="flex justify-between items-center mt-10">
    <NuxtLink to="/" class="text-2xl font-bold">Antimi</NuxtLink>

    <div v-if="user">
      <AvatarProfile />
    </div>

    <ul v-else class="justify-end">
      <NuxtLink>Login</NuxtLink>
    </ul>
  </header>
</template>
