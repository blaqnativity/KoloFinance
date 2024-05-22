<script setup>
import { banksOptions } from "~/constants";

const text = "Double check account number before saving";
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

      <UFormGroup label="Account number" class="mb-4">
        <UInput placeholder="Enter account number" class="w-fit" />
      </UFormGroup>

      <UFormGroup label="Bank Verification Number" class="mb-4">
        <UInput placeholder="Enter BVN" class="w-fit" />
      </UFormGroup>

      <UButton label="Generate OTP" class="block" />

      <UFormGroup label="OTP" class="mb-4">
        <UInput placeholder="Enter OTP code" class="w-fit" />
      </UFormGroup>

      <UTooltip :text="text" :popper="{ offsetDistance: 16 }">
        <span
          class="text-sm font-normal cursor-help text-gray-400 bg-gray-100 px-3 py-1 rounded-md"
          >Info</span
        >
      </UTooltip>

      <UButton label="save" class="block" />
    </form>
  </div>
</template>
