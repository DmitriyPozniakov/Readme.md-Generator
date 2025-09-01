import { ref } from "vue";

interface Languages {
  [key: string]: string;
}

export function useRepoAnalyzer() {
  const repoUrl = ref<string>("");
  const languages = ref<Languages | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const analyzeRepo = async (): Promise<void> => {
    error.value = null;
    languages.value = null;

    if (!repoUrl.value) return;

    // Преобразуем URL https://github.com/username/repo → username/repo
    const match = repoUrl.value.match(/github\.com\/([\w.-]+\/[\w.-]+)/);
    if (!match) {
      error.value = "Invalid GitHub repository URL";
      return;
    }
    const repo = match[1];

    loading.value = true;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/languages?repo=${repo}`,
        {
          method: "GET",
          credentials: "include", // cookie с токеном ушла
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to fetch languages");
      }

      const data: { percentages: Languages } = await res.json();
      languages.value = data.percentages;
    } catch (err: any) {
      console.error(err);
      error.value = err.message || "Unknown error";
    } finally {
      loading.value = false;
    }
  };

  return { repoUrl, languages, loading, error, analyzeRepo };
}
