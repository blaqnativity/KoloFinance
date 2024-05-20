<script setup>
import { types, transactionsViewOptions } from "~/constants";
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-gray-500 text-sm font-medium">
      Select Dashboard Default Transactions View
    </h2>
    <div class="space-y-4">
      <UFormGroup label="Transactions type">
        <USelect :options="types" placeholder="Select category" class="w-fit" />
      </UFormGroup>
      <UFormGroup label="Transactions view options">
        <USelect
          :options="transactionsViewOptions"
          placeholder="Select default view"
          class="w-fit"
        />
      </UFormGroup>

      <UButton label="Save" />
    </div>
  </div>
</template>
