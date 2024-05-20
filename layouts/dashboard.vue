<script setup>
// useHead({
//   link: [
//     {
//       rel: "preconnect",
//       href: "https://fonts.googleapis.com",
//     },
//     {
//       rel: "stylesheet",
//       href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
//       crossorigin: "",
//     },
//   ],
// });
</script>

<template>
  <AppHeader />
  <div class="mx-auto px-4">
    <main class="my-6">
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
