
<template>
  <div class="flex flex-col gap-6 items-center bg-white rounded-2xl p-6 max-w-[600px] w-full">
    <BaseContainer url="/images/icons/github.svg" :rounded="true" />
    <h2 class="text-custom-black text-xl font-bold">GitHub Repository</h2>
    <p class="text-gray-500 text-center">
      Enter the link to your GitHub repository (public or private)
    </p>

    <form @submit.prevent="analyzeRepo" class="flex flex-col gap-3 w-full">
      <label class="text-custom-black" for="url">URL of repository</label>
      <input
        v-model="repoUrl"
        class="w-full p-2 bg-[#f8f6ff] rounded-md border border-gray-200 focus:border-2 focus:border-[#0F55F5] outline-none"
        type="url"
        id="url"
        placeholder="https://github.com/username/repository"
      />
      <button
        type="submit"
        class="w-full bg-[#0F55F5] hover:bg-[#356bff] disabled:bg-[#87A5F9] text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer"
        :disabled="loading"
      >
        {{ loading ? 'Analyzing...' : 'Analyze repository' }}
      </button>
    </form>

    <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>

    <div v-if="languages" class="mt-4 w-full">
      <h3 class="font-bold mb-2">Languages:</h3>
      <ul class="list-disc pl-5">
        <li v-for="(percent, lang) in languages" :key="lang">
          {{ lang }} — {{ percent }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRepoAnalyzer } from '~/composables/useRepoAnalyzer'

const { repoUrl, languages, loading, error, analyzeRepo } = useRepoAnalyzer()
</script>
