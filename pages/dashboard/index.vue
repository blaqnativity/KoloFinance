<script setup>
import { banksOptions, types, transactionsViewOptions } from "~/constants";
</script>

<template>
  <section class="space-y-6">
    <div class="grid grid-cols-4 gap-4">
      <UCard>
        <h2>0.00</h2>
        <span>Total credits</span>
      </UCard>
      <UCard>
        <h2>0.00</h2>
        <span>Total Debits</span>
      </UCard>
      <UCard>
        <h2>0</h2>
        <span>Credits count</span>
      </UCard>
      <UCard>
        <h2>0</h2>
        <span>Debits count</span>
      </UCard>
    </div>

    <div class="flex justify-between gap-6">
      <UFormGroup help="Filter transactions by type options">
        <USelect :options="types" class="w-fit" placeholder="Select an option"
      /></UFormGroup>

      <UFormGroup help="Filter transactions by view options">
        <USelect
          :options="transactionsViewOptions"
          class="w-fit"
          placeholder="Select an option"
      /></UFormGroup>
    </div>

    <div>
      <span class="text-gray-500 font-medium">
        See all your transactions in one app, and one easy to navigate
        dashboard.</span
      >
    </div>
    <dashboardTables />
  </section>
</template>
