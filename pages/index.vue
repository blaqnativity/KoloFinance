<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <section class="mb-10">
    <div class="flex justify-between items-center space-x-10">
      <!-- left item -->
      <div class="space-y-8">
        <h1
          class="text-3xl md:text-5xl font-extrabold text-blue-950 leading-10 tracking-wider"
        >
          Antimii - Simplifying Your Financial Life
        </h1>
        <p class="font-bold text-gray-600 leading-6 tracking-wide">
          Say goodbye to logging into multiple banking apps with Antimii,
          everything you need is in one place.
        </p>

        <UButton
          label="Go to Dashboard"
          color="blue"
          size="lg"
          to="/register"
        />
      </div>

      <!-- right item -->
      <div>
        <img src="/assets/img/transaction.jpg" alt="" class="rounded-md" />
      </div>
    </div>
  </section>
</template>
