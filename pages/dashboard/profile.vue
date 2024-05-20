<template>
  <form class="space-y-4" @submit.prevent>
    <h2>Edit Profile</h2>
    <div class="w-1/2">
      <UFormGroup label="Change Photo" class="mb-4">
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          size="xl"
        />
        <UInput type="file" class="w-1/2" />
      </UFormGroup>

      <UFormGroup label="Change display name" class="mb-4">
        <UInput placeholder="Change your name" class="w-2/3" />
      </UFormGroup>

      <UButton label="Save Changes" />
    </div>
  </form>
</template>
