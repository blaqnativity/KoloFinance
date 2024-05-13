export const useRedirectIfAuth = (url = "/dashboard/") => {
  const user = useSupabaseUser();

  watch(user, (user) => {
    if (user) {
      return navigateTo(url);
    } else {
      {
        immediate: true;
      }
    }
  });
  return { user };
};
