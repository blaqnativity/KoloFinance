export const useAvatarUrl = () => {
  // Assuming these functions exist to get Supabase client and user data
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  const getPublicUrl = () => {
    if (!user.value?.user_metadata?.avatar_url) return null;
    const { data, error } = supabase.storage
      .from("avatars")
      .getPublicUrl(user.value.user_metadata.avatar_url);

    return data.publicUrl; // Corrected property name
  };

  const url = ref(getPublicUrl());

  watch(
    user,
    () => {
      url.value = getPublicUrl();
    },
    { immediate: true }
  );

  return { url };
};
