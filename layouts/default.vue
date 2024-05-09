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
  <div class="container mx-auto max-w-5xl px-4">
    <AppHeader />
    <main class="my-10">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: "Inter";
  scroll-behavior: smooth;
}

body {
  @apply dark:bg-gray-900 bg-white;
}
</style>
