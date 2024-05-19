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

const isOpen = ref(false);

const links = [
  {
    label: "About Us",
    icon: "i-heroicons-information-circle",
    to: navigateTo("/"),
  },
  {
    label: "Contact Support",
    icon: "i-heroicons-chat-bubble-left",
    to: navigateTo("/"),
  },
];
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

      <div class="px-10">
        <UButton
          icon="i-heroicons-bars-3-center-left"
          @click="isOpen = true"
          color="white"
        >
          <USlideover v-model="isOpen">
            <div class="mt-10 flex flex-col space-y-6">
              <UVerticalNavigation :links="links" />
              <UButton class="w-fit ml-4" label="Sign in" />
            </div>
          </USlideover>
        </UButton>
      </div>
    </div>
  </header>

  <div class="container mx-auto max-w-7xl mt-10 md:mt-20 px-6">
    <!-- Adjusted spacing class here -->
    <slot />
  </div>
</template>
