<script setup>
definePageMeta({
  layout: "dashboard",
});
const links = [
  {
    label: "Dashboard",
    icon: "i-heroicons-home",
    to: "/dashboard/",
  },
  {
    label: "Profile",
    icon: "i-heroicons-user",
    to: "/dashboard/profile",
  },
  {
    label: "Add Accounts",
    icon: "i-heroicons-plus-circle",
    to: "/dashboard/account",
  },
  {
    label: "Settings",
    icon: "i-heroicons-cog-8-tooth",
    to: "/dashboard/settings",
  },
  {
    label: "Logout",
    icon: "i-heroicons-arrow-left-on-rectangle-solid",
    to: "/",
  },
];
</script>

<template>
  <div class="grid grid-cols-8 gap-8 mx-auto max-w-7xl">
    <UVerticalNavigation :links="links" class="col-span-2" />
    <div class="col-span-6">
      <NuxtPage />
    </div>
  </div>
</template>
