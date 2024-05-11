<script setup>
// All my imports and composables
import { z } from "zod";
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { toastSuccess, toastError } = useAppToast();
const pending = ref(false);

// state management
const state = ref({
  name: user.value?.user_metadata?.full_name || "",
  email: user.value?.email || "",
});

const schema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email(),
});

// form input save function and firebaseUser update
const saveProfile = async () => {
  pending.value = true;
  try {
    const data = {
      data: {
        full_name: state.value.name,
      },
    };

    if (state.value.email !== user.value.email) {
      data.email = state.value.email;
    }
    console.log(data);

    const { error } = await supabase.auth.updateUser({
      data: {
        full_name: state.value.name,
      },
    });
    toastSuccess({
      title: "Profile updated",
      description: "Your profile has been updated",
    });
    if (error) throw error;
  } catch (error) {
    toastError({
      title: "Error updating profile",
      description: error.message,
    });
  } finally {
    pending.value = false;
  }
};
</script>

<template>
  <UForm :state="state" :schema="schema" @submit="saveProfile">
    <UFormGroup class="mb-4" label="Full Name" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UFormGroup
      class="mb-4"
      label="Email"
      name="email"
      help="You will receive a confirmation email on both the old email and the new email address if you modify the email address"
    >
      <UInput v-model="state.email" />
    </UFormGroup>

    <UButton
      type="submit"
      color="black"
      variant="solid"
      label="Save"
      :loading="pending"
      :disable="pending"
    />
  </UForm>
</template>
