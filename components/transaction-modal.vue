<script setup>
import { banksOptions, types, categories } from "~/constants";
import { z } from "zod";

const defaultSchema = z.object({
  created_at: z.string(),
  description: z.string().optional(),
  amount: z.number().positive("Amount needs to be more than 0"),
});

const form = ref();
const isLoading = ref(false);
const supabase = useSupabaseClient();
const { toastError, toastSuccess } = useAppToast();

const state = {
  type: "Credit",
  amount: 0,
  created_at: undefined,
  description: undefined,
  file: undefined,
  banksOptions: undefined,
  category: undefined,
};

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
      <template #header>
        <span
          class="bg-blue-100 px-4 font-semibold py-1 text-gray-500 rounded-full"
        >
          {{ isEditig ? "Edit Transaction" : "Add Transaction" }}</span
        >
      </template>

      <form @submit.prevent="save">
        <UForm class="space-y-4" :state="state" :schema="schema" ref="form">
          <UFormGroup
            :required="true"
            label="Document Type"
            help="Document must be in excel csv format"
          >
            <UInput
              type="file"
              size="sm"
              icon="i-heroicons-document"
              trailing
              v-model="state.file"
            />
          </UFormGroup>

          <UFormGroup :required="true" label="Transaction Type">
            <USelect
              :options="types"
              placeholder="Select transaction type"
              v-model="state.type"
            />
          </UFormGroup>

          <UFormGroup :required="true" label="Select Bank">
            <USelect
              :options="banksOptions"
              placeholder="Select the Bank"
              v-model="state.banksOptions"
            />
          </UFormGroup>

          <UFormGroup label="Amount" :required="true" name="amount">
            <UInput
              type="number"
              placeholder="Amount"
              v-model.number="state.amount"
            />
          </UFormGroup>

          <UFormGroup
            label="Transaction date"
            :required="true"
            name="created_at"
          >
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

          <UFormGroup :required="true" label="Category" name="category">
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
      </form>
    </UCard>
  </UModal>
</template>
