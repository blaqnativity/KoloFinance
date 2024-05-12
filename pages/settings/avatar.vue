<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const { toastSuccess, toastError } = useAppToast();
const pending = ref(false);
const fileInput = ref();
const { url } = useAvatarUrl();

const saveAvatar = async () => {
  pending.value = true;
  // grabbing the file value from the dom
  const file = fileInput.value.input.files[0];
  // splitting the file
  const fileExt = file.name.split(".").pop();
  // renaming the file
  const fileName = `${Math.random()}.${fileExt}`;
  // grabbing the current file upload input
  const currentAvatarUrl = user.value.user_metadata?.avatar_url;

  try {
    const { error } = await supabase.storage
      .from("avatars")
      .upload(fileName, file);
    if (error) throw error;

    await supabase.auth.updateUser({
      data: {
        avatar_url: fileName,
      },
    });

    if (currentAvatarUrl) {
      const { error } = await supabase.storage
        .from("avatars")
        .remove([currentAvatarUrl]);
      if (error) throw error;
    }

    fileInput.value.input.value = null;

    toastSuccess({ title: "Upload success" });
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
        <UAvatar :src="url" size="3xl" />
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
