<script setup>
const isLoading = ref(false);
const { toastError, toastSuccess } = useAppToast();
const supabase = useSupabaseClient();

const props = defineProps({
  transaction: Object,
});

const emit = defineEmits(["deleted"]);
const isIncome = computed(() => props.transaction.type === "Income");
const icon = computed(() =>
  isIncome.value ? "i-heroicons-arrow-up-right" : "i-heroicons-arrow-down-left"
);

const IconColor = computed(() =>
  isIncome.value ? "text-green-600" : "text-red-600"
);

const { currency } = useCurrency(props.transaction.amount);

const deleteTransaction = async () => {
  isLoading.value = true;

  try {
    await supabase.from("transactions").delete().eq("id", props.transaction.id);
    toastSuccess({
      title: "Transaction deleted",
      icon: "i-heroicons-check-circle",
    });
    emit("deleted", props.transaction.id);
  } catch (err) {
    toastError({
      title: "Transaction was not deleted",
      icon: "i-heroicons-exclamation-circle",
    });
  } finally {
    isLoading.value = false;
  }
};

const items = [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square",
      click: () => console.log("Edit"),
    },
    {
      label: "Delete",
      icon: "i-heroicons-trash-tv-20-solid",
      click: deleteTransaction,
    },
  ],
];
</script>

<template>
  <div
    class="grid grid-cols-3 py-4 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100"
  >
    <div class="flex items-center justify-between space-x-4 col-span-2">
      <div class="flex items-center space-x-2">
        <UIcon :name="icon" :class="[IconColor]" />
        <div>{{ transaction.description }}</div>
      </div>
      <div>
        <UBadge color="white" v-if="transaction.category">{{
          transaction.category
        }}</UBadge>
      </div>
    </div>
    <div class="flex items-center justify-end space-x-2">
      <div>{{ currency }}</div>
      <div>
        <UDropdown
          :items="items"
          mode="click"
          :popper="{ placement: 'bottom-start' }"
        >
          <UButton
            color="white"
            variant="ghost"
            label="Options"
            trailing-icon="i-heroicons-ellipsis-horizontal"
            :loading="isLoading"
          />
        </UDropdown>
      </div>
    </div>
  </div>
</template>
