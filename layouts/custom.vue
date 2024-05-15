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
  <!-- <Banner /> -->
  <header class="sticky top-0 w-full h-20 grid bg-white px-6">
    <div class="container max-w-7xl mx-auto flex justify-between items-center">
      <NuxtLink to="/"
        ><span class="text-3xl font-extrabold text-black"
          >Antimii</span
        ></NuxtLink
      >

      <div class="flex justify-between items-center space-x-10">
        <!-- Adjusted spacing class here -->
        <div class="space-x-6 font-medium text-gray-500 text-md">
          <NuxtLink>About us</NuxtLink>
          <NuxtLink>Services</NuxtLink>
        </div>

        <UButton
          label="Get Started"
          color="black"
          variant="solid"
          size="lg"
          to="/login"
        />
      </div>
    </div>
  </header>

  <div class="container mx-auto max-w-7xl mt-10 px-6">
    <!-- Adjusted spacing class here -->
    <slot />
  </div>
</template>
