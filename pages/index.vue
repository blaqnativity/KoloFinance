<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <section class="mb-10">
    <div class="flex justify-between items-center space-x-10">
      <!-- left item -->
      <div class="space-y-4">
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-600">
          Welcome to Antimii - Simplifying Your Financial Life
        </h1>
        <p class="font-bold text-blue-600">
          Say goodbye to logging into multiple banking apps with Antimii,
          everything you need is in one place.
        </p>

        <UButton label="Get Started" color="blue" size="lg" to="/register" />
      </div>

      <!-- right item -->
      <div>
        <img src="/assets/img/transaction.jpg" alt="" class="rounded-md" />
      </div>
    </div>
  </section>
</template>
