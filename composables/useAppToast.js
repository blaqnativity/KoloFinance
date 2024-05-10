export const useAppToast = () => {
  const toast = useToast();

  return {
    toastSuccess: ({ title, description = null }) => {
      toast.add({
        title,
        description,
        icon: "i-heroicons-check-circle",
        color: "green",
      });
    },
    toastError: ({ title, description = null }) => {
      toast.add({
        title,
        description,
        color: "red",
        icon: "i-heroicons-exclamation-circle",
      });
    },
  };
};
