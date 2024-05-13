<script setup>
const success = ref(false);
const email = ref("");
const password = ref("");
const pending = ref(false);
const { toastError, toastSuccess } = useAppToast();
const supabase = useSupabaseClient();

const redirectUrl = useRuntimeConfig().public.baseUrl;

useRedirectIfAuth();

const handleLogin = async () => {
  pending.value = true;

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: `${redirectUrl}`,
      },
    });
    if (error) {
      toastError({
        title: "Error authenticating",
        description: error.message,
      });
    } else {
      success.value = true;
      toastSuccess({
        title: "Login successful",
        icon: "i-heroicons-check-circle",
        color: "green",
      });
    }
  } finally {
    pending.value = false;
  }
};
</script>

<template>
  <UCard v-if="!success">
    <template #header>
      <h2 class="text-xl font-bold text-blue-600">Sign-in to your Account</h2>
    </template>

    <form @submit.prevent="handleLogin" class="mb-4">
      <UFormGroup label="Email" name="email" class="mb-4" :required="true">
        <UInput type="email" placeholder="Email" required v-model="email" />
      </UFormGroup>

      <UFormGroup
        label="Password"
        name="password"
        class="mb-4"
        :required="true"
      >
        <UInput
          type="password"
          placeholder="Password"
          required
          v-model="password"
        />
      </UFormGroup>

      <UButton
        type="submit"
        variant="solid"
        color="blue"
        :loading="pending"
        :disabled="pending"
        >Sign-in</UButton
      >
    </form>
    <span>
      Don't have an account yet? <NuxtLink to="/register">Create one</NuxtLink>
    </span>
  </UCard>
</template>
