<script setup>
definePageMeta({
  layout: "default",
});

const q = ref("");

const items = [
  {
    label: "Connect Your Accounts",
    icon: "i-heroicons-arrow-path-rounded-square",
    defaultOpen: true,
    content:
      "Simply link your various banking services and apps to Antimii using our secure integration process. Our platform supports a wide range of financial institutions, ensuring that you can consolidate all your accounts seamlessly. With just a few clicks, you can securely connect each of your bank accounts, credit cards, and other financial services. Antimii uses industry-leading encryption and security protocols to protect your sensitive information during the connection process, ensuring that your data remains private and secure. Once linked, your accounts will automatically sync in real-time, providing you with an up-to-date and comprehensive view of your financial transactions all in one place.",
  },
  {
    label: "Instant Syncing",
    icon: "i-heroicons-link",
    defaultOpen: true,
    content:
      "Antimii automatically syncs your transactions in real-time, ensuring you always have the latest financial information at your fingertips. Whether you're making a purchase, receiving a payment, or managing multiple accounts, Antimii's seamless integration with your financial services updates your dashboard instantly. This continuous synchronization allows you to track your spending, monitor your income, and manage your finances with unparalleled accuracy and efficiency. You'll never have to worry about outdated information or manual updates. With Antimii, you can confidently make informed financial decisions based on the most current data available, all within a user-friendly and intuitive interface.",
  },
  {
    label: "Explore Insights",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    content:
      "Dive into your spending patterns, identify trends, and gain valuable insights into your financial habits with Antimii. Our advanced analytics tools help you understand where your money goes, highlighting categories and periods of high expenditure. With detailed visualizations and easy-to-read reports, you can spot trends such as recurring expenses, seasonal spending habits, and unexpected costs. Antimii also provides personalized tips and recommendations to help you optimize your budget, save more effectively, and reach your financial goals. By understanding your financial behaviors, you can make more informed decisions, reduce wasteful spending, and enhance your overall financial health. Let Antimii be your guide to smarter financial management.",
  },
];
</script>

<template>
  <section class="mb-20 md:mb-40">
    <div
      class="flex flex-col text-center justify-center items-center max-w-3xl mx-auto space-y-6"
    >
      <span
        class="bg-blue-100 px-4 py-2 font-semibold uppercase items-center flex w-fit gap-1 text-sm text-gray-500 rounded-full"
      >
        <UIcon name="i-heroicons-light-bulb" />
        Giving your business a new face</span
      >
      <h1
        class="text-3xl md:text-5xl font-extrabold text-black leading-10 tracking-wider"
      >
        Antimii - Simplifying Your Financial Life
      </h1>
      <p class="w-[400px] font-normal text-gray-500 leading-6 tracking-wide">
        Say goodbye to logging into multiple banking apps. With Antimii,
        everything you need can be exported one place.
      </p>

      <UButton
        label="Go to Dashboard"
        color="black"
        size="lg"
        to="/register"
        class="w-fit"
      />
    </div>
  </section>

  <section class="mb-20 md:mb-40">
    <div
      class="flex flex-col text-center justify-center items-center mx-auto space-y-6"
    >
      <h2 class="text-3xl md:text-4xl font-medium text-gray-800 mb-8">
        Our Unique Features
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UCard>
          <template #header> <h2>Unified Dashboard</h2> </template>
          <span
            >View all your banking transactions from different services and apps
            in one easy-to-use dashboard.</span
          >
        </UCard>
        <UCard>
          <template #header> <h2>Detailed Descriptions</h2> </template>
          <span
            >Access detailed descriptions of each transaction, making it easier
            to track your spending and income.</span
          >
        </UCard>
        <UCard>
          <template #header> <h2>Bank Identification</h2> </template>
          <span>
            Easily identify which bank or service the transaction was carried
            out from, providing clarity and organization.</span
          >
        </UCard>
        <UCard>
          <template #header> <h2>Secure Access</h2> </template>
          <span
            >Rest assured, your data is safe with our advanced encryption and
            security measures.</span
          >
        </UCard>
        <UCard>
          <template #header> <h2>Customizable Filters</h2> </template>
          <span
            >Filter transactions based on date, amount, category, and more, to
            tailor your financial insights to your needs.</span
          >
        </UCard>
      </div>
    </div>
  </section>

  <section class="mb-20 md:mb-40">
    <div
      class="flex flex-col text-center justify-center items-center mx-auto space-y-6 max-w-3xl"
    >
      <h2 class="text-3xl md:text-4xl font-medium text-gray-800 mb-8">
        How it works
      </h2>

      <UAccordion :items="items" size="xl" class="text-start space-y-2" />
    </div>
  </section>
</template>
