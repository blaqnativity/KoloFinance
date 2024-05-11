<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { toastSuccess, toastError } = useAppToast();
const pending = ref(false);
const fileInput = ref();

const saveAvatar = async () => {
  pending.value = true;
  try {
    toastSuccess({
      title: "Avatar updated",
    });
    console.log(fileInput);
  } catch (error) {
    if (error) {
      toastError({
        title: "Error uploading image",
        description: error.message,
      });
    }
  } finally {
    pending.value = false;
  }
};
</script>

<template>
  <div>
    <UCard @submit.prevent="saveAvatar">
      <UFormGroup
        class="mb-4"
        label="Current photo"
        help="This would be blank by default if you save without uploading a photo"
      >
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          size="3xl"
        />
      </UFormGroup>

      <UFormGroup
        label="New avatar"
        class="space-y-2 mb-4"
        help="After choosing an image click save to upload the new avatar"
        name="avatar"
      >
        <UInput type="file" icon="i-heroicons-folder" ref="fileInput" />
      </UFormGroup>

      <UButton
        type="submit"
        color="black"
        variant="solid"
        label="Save"
        :loading="pending"
        :disabled="pending"
        >Save</UButton
      >
    </UCard>
  </div>
</template>
