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
  <Banner />
  <header class="sticky top-0 w-full h-20 grid bg-white">
    <div class="container max-w-7xl mx-auto flex justify-between items-center">
      <NuxtLink
        ><span class="text-3xl font-extrabold text-blue-950"
          >Antimii</span
        ></NuxtLink
      >

      <div class="flex justify-between items-center space-x-10">
        <!-- Adjusted spacing class here -->
        <div class="space-x-6">
          <NuxtLink>About us</NuxtLink>
          <NuxtLink>Contact</NuxtLink>
        </div>

        <UButton
          label="Sign in"
          color="blue"
          variant="solid"
          size="lg"
          to="/login"
        />
      </div>
    </div>
  </header>

  <div class="container mx-auto max-w-7xl mt-10">
    <!-- Adjusted spacing class here -->
    <slot />
  </div>
</template>
