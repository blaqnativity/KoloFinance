<script setup>
import { transactionsViewOptions, banksOptions } from "~/constants";
const user = useSupabaseUser();

const selectedView = ref(
  user.value.user_metadata?.transaction_view ?? transactionsViewOptions[1]
);
const bank =
  ref();
  // user.value.user_metadata?.transaction_view ?? transactionsViewOptions[1]
const isOpen = ref(false);

const { current, previous } = useSelectedTimePeriod(selectedView);

const {
  pending,
  refresh,
  transactions: {
    incomeCount,
    expenseCount,
    incomeTotal,
    expenseTotal,
    grouped: { byDate },
  },
} = useFetchTransactions(current);
refresh();

const {
  refresh: refreshPrevious,
  transactions: {
    incomeTotal: prevIncomeTotal,
    expenseTotal: prevExpenseTotal,
  },
} = useFetchTransactions(previous);
await refreshPrevious();
</script>

<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-3xl font-extrabold">Summary</h1>
    <div>
      <USelectMenu v-model="selectedView" :options="transactionsViewOptions" />
    </div>
    <div>
      <USelectMenu v-model="bank" :options="banksOptions" />
    </div>
  </section>

  <section
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10"
  >
    <Trend
      color="green"
      title="Income"
      :amount="incomeTotal"
      :last-amount="prevIncomeTotal"
      :loading="pending"
    />

    <Trend
      color="red"
      title="Expenses"
      :amount="expenseTotal"
      :last-amount="prevExpenseTotal"
      :loading="pending"
    />

    <Trend
      color="red"
      title="Pending"
      :amount="0.0"
      :last-amount="3000"
      :loading="pending"
    />

    <Trend
      color="green"
      title="Reversed"
      :amount="0.0"
      :last-amount="4100"
      :loading="pending"
    />
  </section>

  <section class="flex justify-between mb-10">
    <div>
      <h2 class="text-2xl font-extrabold">Transactions</h2>
      <div class="text-gray-500 dark:text-gray-400 mt-4">
        You have {{ incomeCount }} income and {{ expenseCount }} expense today.
      </div>
    </div>
    <div>
      <TransactionModal v-model="isOpen" @saved="refresh()" />
      <UButton
        icon="i-heroicons-plus-circle"
        color="white"
        variant="solid"
        label="Add"
        @click="isOpen = true"
      />
    </div>
  </section>

  <section v-if="!pending">
    <div v-for="(transactionsOnDay, date) in byDate" :key="date" class="mb-10">
      <DailyTransactionSummary :date="date" :transactions="transactionsOnDay" />
      <Transaction
        v-for="transaction in transactionsOnDay"
        :key="transaction.id"
        :transaction="transaction"
        @deleted="refresh()"
        @edited="refresh()"
      />
    </div>
  </section>
  <section v-else>
    <USkeleton class="h-8 w-full mb-2" v-for="i in 5" :key="i" />
  </section>
</template>
