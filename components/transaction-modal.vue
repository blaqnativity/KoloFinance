<script setup>
import { categories } from "~/constants";
import { types } from "~/constants";
const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(["update:modelValue"]);

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header> Add Transaction </template>

      <div class="space-y-4">
        <UFormGroup :required="true" label="Transaction Type" name="type">
          <USelect :options="types" placeholder="Select the transaction type" />
        </UFormGroup>

        <UFormGroup label="Amount" :required="true" name="amount">
          <UInput type="number" placeholder="Amount" />
        </UFormGroup>

        <UFormGroup label="Transaction date" :required="true" name="created_at">
          <UInput type="date" icon="i-heroicons-calendar-days-solid" />
        </UFormGroup>

        <UFormGroup label="Description" hint="Optional" name="description">
          <UInput type="text" placeholder="Description" />
        </UFormGroup>

        <UFormGroup :required="true" label="Category" name="category">
          <USelect
            :options="categories"
            placeholder="Select the transaction category"
          />
        </UFormGroup>

        <UButton type="submit" color="black" variant="solid" label="save" />
      </div>
    </UCard>
  </UModal>
</template>
