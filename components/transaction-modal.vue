<script setup>
import { categories } from "~/constants";
import { types } from "~/constants";
import { z } from "zod";

const defaultSchema = z.object({
  created_at: z.string(),
  description: z.string().optional(),
  amount: z.number().positive("Amount needs to be more than 0"),
});

const incomeSchema = z.object({
  type: z.literal("Income"),
});

const expenseSchema = z.object({
  type: z.literal("Expense"),
  category: z.enum(categories),
});

const investSchema = z.object({
  type: z.literal("Investment"),
});

const savingsSchema = z.object({
  type: z.literal("Savings"),
});

const schema = z.intersection(
  z.discriminatedUnion("type", [
    incomeSchema,
    expenseSchema,
    investSchema,
    savingsSchema,
  ]),

  defaultSchema
);

const form = ref();
const isLoading = ref(false);
const supabase = useSupabaseClient();
const { toastError, toastSuccess } = useAppToast();

const props = defineProps({
  modelValue: Boolean,
  transaction: {
    type: Object,
    required: false,
  },
});

const isEditig = computed(() => !!props.transaction);
const emit = defineEmits(["update:modelValue", "saved"]);

const save = async () => {
  if (form.value.errors.length) return;

  isLoading.value = true;

  try {
    const { error } = await supabase.from("transactions").upsert({
      ...state.value,
      id: props.transaction?.id,
    });

    if (!error) {
      toastSuccess({
        title: "Transaction saved",
      });
      isOpen.value = false;
      emit("saved");
      return;
    }

    throw error;
  } catch (e) {
    toastError({
      title: "Transaction not saved",
      description: e.message,
    });
  } finally {
    isLoading.value = false;
  }
};

const initialState = {
  type: undefined,
  amount: 0,
  created_at: undefined,
  description: undefined,
  category: undefined,
};

const state = ref(
  isEditig.value
    ? {
        type: props.transaction.type,
        amount: props.transaction.amount,
        created_at: props.transaction.created_at.split("T")[0],
        description: props.transaction.description,
        category: props.transaction.category,
      }
    : { ...initialState }
);

const resetForm = () => {
  Object.assign(state.value, initialState);
  form.value.clear();
};

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => {
    if (!value) resetForm();
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header> {{ isEditig ? "Edit" : "Add" }} </template>

      <UForm
        class="space-y-4"
        :state="state"
        :schema="schema"
        ref="form"
        @submit="save"
      >
        <UFormGroup :required="true" label="Transaction Type" name="type">
          <USelect
            :options="types"
            placeholder="Select the transaction type"
            v-model="state.type"
            :disabled="isEditig"
          />
        </UFormGroup>

        <UFormGroup label="Amount" :required="true" name="amount">
          <UInput
            type="number"
            placeholder="Amount"
            v-model.number="state.amount"
          />
        </UFormGroup>

        <UFormGroup label="Transaction date" :required="true" name="created_at">
          <UInput
            type="date"
            icon="i-heroicons-calendar-days-solid"
            v-model="state.created_at"
          />
        </UFormGroup>

        <UFormGroup label="Description" hint="Optional" name="description">
          <UInput
            type="text"
            placeholder="Description"
            v-model="state.description"
          />
        </UFormGroup>

        <UFormGroup
          :required="true"
          label="Category"
          name="category"
          v-if="state.type === 'Expense'"
        >
          <USelect
            :options="categories"
            placeholder="Select the transaction category"
            v-model="state.category"
          />
        </UFormGroup>

        <UButton
          type="submit"
          color="black"
          variant="solid"
          :loading="isLoading"
          label="save"
        />
      </UForm>
    </UCard>
  </UModal>
</template>
