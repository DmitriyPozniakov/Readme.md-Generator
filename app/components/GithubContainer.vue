<template>
  <div
    class="flex flex-col gap-6 items-center bg-white rounded-2xl p-6 max-w-[600px] w-full"
  >
    <BaseContainer url="/images/icons/github.svg" :rounded="true" />
    <h2 class="text-custom-black text-xl font-bold">GitHub Repository</h2>
    <p class="text-gray-500 text-center">
      Enter the link to your GitHub repository (public or private)
    </p>
    <form @submit.prevent class="flex flex-col gap-3 w-full">
      <label class="text-custom-black" for="url">URL of repository</label>
      <input
        class="w-full p-2 bg-[#f8f6ff] rounded-md border border-gray-200 focus:border-2 focus:border-[#0F55F5] outline-none"
        type="url"
        id="url"
        placeholder="https://github.com/username/repository"
      />
      <button
        class="w-full bg-[#0F55F5] hover:bg-[#356bff] disabled:bg-[#87A5F9] text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
      >
        Analyze repository
      </button>
    </form>
  </div>
</template> 

