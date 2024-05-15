<script setup>
import { banksOptions } from "~/constants";
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { toastSuccess, toastError } = useAppToast();

const saveSettings = async () => {
  try {
    const { error } = await supabase.auth.updateUser({
      data: {
        transaction_view: state.value.transactionView,
      },
    });

    if (error) throw error;
    toastSuccess({
      title: "Settings updated",
    });
  } catch (error) {
    toastError({
      title: "Error updating settings",
      description: error.message,
    });
  } finally {
  }
};

// const { toastSuccess, toastError } = useAppToast();
// const pending = ref(false);
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

    <UButton type="submit" color="black" variant="solid" label="Save" />
  </UForm>
</template>
