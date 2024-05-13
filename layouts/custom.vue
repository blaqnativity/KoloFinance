<script setup>
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<template>
  <header class="sticky top-0 w-full h-20 grid bg-white">
    <div class="container max-w-5xl mx-auto flex justify-between items-center">
      <NuxtLink
        ><span class="text-3xl font-extrabold text-blue-600"
          >Antimi</span
        ></NuxtLink
      >

      <div class="flex justify-between items-center space-x-10">
        <!-- Adjusted spacing class here -->
        <div>
          <NuxtLink>About us</NuxtLink>
          <NuxtLink>Contact</NuxtLink>
        </div>

        <UButton label="Login" color="blue" variant="solid" to="/login" />
      </div>
    </div>
  </header>

  <div class="container mx-auto max-w-5xl mt-4">
    <!-- Adjusted spacing class here -->
    <slot />
  </div>
</template>
