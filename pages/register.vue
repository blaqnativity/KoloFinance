<script setup>
const success = ref(false);
const redirectUrl = useRuntimeConfig().public.baseUrl;
const email = ref("");
const password = ref("");
const pending = ref(false);
const { toastError, toastSuccess } = useAppToast();
const supabase = useSupabaseClient();

useRedirectIfAuth();

const handleLogin = async () => {
  pending.value = true;

  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        emailRedirectTo: `${redirectUrl}/confirm`,
      },
    });
    if (error) {
      toastError({
        title: "Error authenticating",
      });
    } else {
      success.value = true;
      toastSuccess({
        title: "Login successful",
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
      <h2 class="text-xl font-bold text-black">
        Create an account to get started
      </h2></template
    >

    <form @submit.prevent="handleLogin" class="mb-4">
      <UFormGroup
        label="Email"
        name="email"
        class="mb-4"
        :required="true"
        help="You will receive a confirmation link once your account is created"
      >
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
        color="black"
        :loading="pending"
        :disabled="pending"
        label="Create Account"
      ></UButton>
    </form>
    <span>
      Already have an account? <NuxtLink to="/login">Login</NuxtLink>
    </span>
  </UCard>

  <UCard v-else>
    <template #header> Email has been sent </template>
    <div class="text-center">
      <p class="mb-4">
        We have sent an email to
        <strong class="text-green-500">{{ email }}</strong> with a link to sign
        in
      </p>
      <p>
        <strong class="text-red-500">Important:</strong> The link will expire in
        5 mins
      </p>
    </div>
  </UCard>
</template>
