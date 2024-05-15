<script setup>
definePageMeta({
  layout: "custom",
});

const q = ref("");
</script>

<template>
  <section class="mb-10">
    <div
      class="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4"
    >
      <!-- left item -->
      <div class="space-y-4">
        <span
          class="bg-blue-100 px-4 py-2 font-normal items-center flex w-fit gap-1 text-sm text-gray-500 rounded-full"
        >
          <UIcon name="i-heroicons-light-bulb" />
          Giving your business a new face</span
        >
        <h1
          class="text-3xl md:text-5xl font-extrabold text-black leading-10 tracking-wider"
        >
          Antimii - Simplifying Your Financial Life
        </h1>
        <p class="w-[400px] font-normal text-gray-500 leading-6 tracking-wide">
          Say goodbye to logging into multiple banking apps with Antimii,
          everything you need is in one place.
        </p>

        <UButton
          label="Go to Dashboard"
          color="black"
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

  <section>
    <div>
      <h2 class="text-3xl md:text-5xl font-medium">
        Essential Tools for Your Business
      </h2>
    </div>
  </section>
</template>
