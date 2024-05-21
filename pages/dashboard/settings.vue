<script setup>
import { types, transactionsViewOptions } from "~/constants";
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-gray-500 text-sm font-medium">
      Select dashboard default view
    </h2>
    <form class="space-y-4" @submit.prevent>
      <UFormGroup label="Default category">
        <USelect :options="types" placeholder="Select category" class="w-fit" />
      </UFormGroup>
      <UFormGroup label="Default view category">
        <USelect
          :options="transactionsViewOptions"
          placeholder="Select default view"
          class="w-fit"
        />
      </UFormGroup>

      <UButton label="Save" />
    </form>
  </div>
</template>
