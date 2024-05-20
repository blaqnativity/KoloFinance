<script setup lang="ts">
const columns = [
  {
    key: "bank",
    label: "Bank",
  },
  {
    key: "title",
    label: "Type",
  },
  {
    key: "email",
    label: "Amount",
  },
  {
    key: "desc",
    label: "Description",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "date",
    label: "Date",
  },
];

const people = [
  {
    id: 1,
    bank: "Standard Chattered",
    title: "debit",
    email: "50,000",
    desc: "Debit from WEMA ATM, Afromedia, Omotola Street",
    name: "Charles Zubi",
    date: "23-04-24",
  },
  {
    id: 2,
    bank: "Guarantee Trust Bank plc",
    title: "credit",
    email: "20,000",
    desc: "Credits 20,000 at moniepay POS",
    name: "Duke Mcathy",
  },
  {
    id: 1,
    bank: "Standard Chattered",
    title: "debit",
    email: "50,000",
    desc: "Debit from WEMA ATM, Afromedia, Omotola Street",
    name: "Charles Zubi",
    date: "23-04-24",
  },
  {
    id: 2,
    bank: "Guarantee Trust Bank plc",
    title: "credit",
    email: "20,000",
    desc: "Reversal from WEMA ATM, Afromedia, Omotola Street",
    name: "Olukayode Chris",
  },
  {
    id: 1,
    bank: "Standard Chattered",
    title: "debit",
    email: "50,000",
    desc: "Debit from WEMA ATM, Afromedia, Omotola Street",
    name: "Charles Zubi",
    date: "23-04-24",
  },
];

const q = ref("");

const filteredRows = computed(() => {
  if (!q.value) {
    return people;
  }

  return people.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});

const page = ref(1);
const pageCount = 5;
</script>

<template>
  <div>
    <div class="flex justify-between items-start">
      <UFormGroup help="Filter by name, date, etc...">
        <UInput v-model="q" placeholder="Filter transaction..."
      /></UFormGroup>
      <UFormGroup help="Easily upload your statement">
        <UInput v-model="q" type="file"
      /></UFormGroup>
    </div>
    <div
      class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700"
    ></div>

    <UTable :rows="filteredRows" :columns="columns" />
    <div
      class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
    >
      <UPagination
        v-model="page"
        :page-count="pageCount"
        :total="people.length"
      />
    </div>
  </div>
</template>
