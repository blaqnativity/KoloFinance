<script setup>
import { banksOptions } from "~/constants";

// const { toastSuccess, toastError } = useAppToast();
const pending = ref(false);
</script>

<template>
  <UForm @submit="saveSettings">
    <UFormGroup
      label="Your Bank"
      class="mb-4"
      help="Choose as many banks as possible"
    >
      <USelect :options="banksOptions" placeholder="Select your bank" />
    </UFormGroup>

    <UFormGroup
      label="Account Number"
      class="mb-4"
      help="Double check the number before submitting"
    >
      <UInput placeholder="Enter a valid account number" type="number" />
    </UFormGroup>

    <UFormGroup
      label="Account Name"
      class="mb-4"
      help="Enter the name the account is registered with"
    >
      <UInput placeholder="Enter correct account name" type="text" />
    </UFormGroup>

    <UButton type="submit" color="blue" variant="solid" label="Save" />
  </UForm>
</template>
