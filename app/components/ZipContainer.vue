<template>
  <div class="flex flex-col gap-6 items-center bg-white rounded-2xl p-6">
    <BaseContainer url="/images/icons/download.svg" :rounded="true" />
    <h2 class="text-custom-black text-xl font-bold">Uploading files</h2>
    <p class="text-gray-500 text-center">
      Drag and drop your project ZIP archive or select a file
    </p>

    <div
      class="border-2 w-full flex flex-col items-center gap-3 border-dashed border-gray-300 hover:border-blue-500 hover:bg-[#F0F5FC] transition-colors p-6"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="handleDrop"
      :class="{ 'border-blue-500 bg-blue-50': isDragging }"
    >
      <img src="/images/icons/paper.svg" alt="Paper Icon" class="w-16 h-16" />

      <h2 class="text-custom-black text-center text-lg font-bold">
        Drag and drop your ZIP file here
      </h2>
      <p class="text-gray-500 text-center">or click to select a file</p>

      <input
        type="file"
        class="hidden"
        ref="fileInput"
        @change="handleFileSelect"
        accept=".zip"
      />

      <button
        type="button"
        class="bg-[#f8f6ff] font-semibold border border-gray-300 text-custom-black px-6 py-2 rounded-xl hover:bg-[#E6F1FF] hover:text-blue-500 cursor-pointer transition-colors duration-300"
        @click="$refs.fileInput.click()"
      >
        Select file
      </button>

      <p v-if="selectedFile" class="text-gray-700 text-sm mt-2">
        {{ selectedFile.name }}
      </p>
    </div>

    <p class="text-gray-500 text-center">
      Only ZIP archives are supported. Maximum size: 50MB
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDragging = ref(false);
const selectedFile = ref(null);
const fileInput = ref(null);

const handleDrop = (event) => {
  isDragging.value = false;
  const files = event.dataTransfer.files;
  if (files.length) {
    selectedFile.value = files[0];
  }
};

const handleFileSelect = (event) => {
  const files = event.target.files;
  if (files.length) {
    selectedFile.value = files[0];
  }
};
</script>

