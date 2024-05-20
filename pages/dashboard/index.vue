<script setup lang="ts">
const transactions = [
  {
    ID: 1,
    type: "Credit",
    Bank: "Opay",
    Desc: "10,000 credit from Vashwan Mitchel",
    Name: "Ojo John",
  },
  {
    ID: 1,
    type: "Credit",
    Bank: "Opay",
    Desc: "10,000 credit from Vashwan Mitchel",
    Name: "Ojo John",
  },
  {
    ID: 1,
    type: "Debit",
    Bank: "Moniepoint POS",
    Desc: "10,000 debit from Moniepoint POS",
    Name: "Ojo John",
  },
];
</script>

<template>
  <section class="space-y-4">
    <div class="flex justify-between items-center">
      <div><h2>Dashboard</h2></div>
      <div class="flex items-center gap-2">
        <p class="text-md font-medium text-gray-700">
          Hello, <span class="text-lg font-semibold">Olukayode</span>
        </p>
        <UAvatar
          size="sm"
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
      </div>
    </div>

    <UCard
      ><span
        >Welcome to your dashboard Asemudara. See all of your transactions from
        multiple bank apps at one glace</span
      ></UCard
    >

    <UTable :rows="transactions" />
  </section>
</template>
