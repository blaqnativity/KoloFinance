<script setup>
import { banksOptions } from "~/constants";
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-gray-500 text-sm font-medium">
      Add all the banks you want to show on your dashboard here
    </h2>
    <form class="space-y-4" @submit.prevent>
      <UFormGroup label="Select Bank">
        <USelect
          :options="banksOptions"
          placeholder="Select the Bank"
          class="w-fit"
        />
      </UFormGroup>

      <UButton label="save" />
    </form>
  </div>
</template>
