<template>
  <div
    class="flex flex-col gap-6 items-center bg-white rounded-2xl p-6 max-w-[600px] w-full"
  >
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
        {{ loading ? "Analyzing..." : "Analyze repository" }}
      </button>
    </form>

    <!-- Результаты -->
    <div v-if="Object.keys(languages).length" class="w-full mt-4">
      <h3 class="font-bold text-lg mb-2">Languages:</h3>
      <ul class="list-disc list-inside">
        <li v-for="(percent, lang) in languagePercents" :key="lang">
          {{ lang }} — {{ percent.toFixed(1) }}%
        </li>
      </ul>
    </div>

    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const repoUrl = ref("");
const languages = ref({});
const loading = ref(false);
const error = ref("");

// Считаем проценты
const languagePercents = computed(() => {
  const total = Object.values(languages.value).reduce(
    (sum, val) => sum + val,
    0
  );
  if (total === 0) return {};
  const result = {};
  for (const [lang, bytes] of Object.entries(languages.value)) {
    result[lang] = (bytes / total) * 100;
  }
  return result;
});

function parseGithubUrl(url) {
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    if (parts.length >= 2) {
      return { owner: parts[0], repo: parts[1] };
    }
    return null;
  } catch {
    return null;
  }
}

async function analyzeRepo() {
  error.value = "";
  languages.value = {};
  loading.value = true;

  const parsed = parseGithubUrl(repoUrl.value);
  if (!parsed) {
    error.value = "Invalid GitHub URL";
    loading.value = false;
    return;
  }

  try {
    const res = await fetch(
      `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/languages`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch repository languages");
    }

    languages.value = await res.json();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}
</script>
