<template>
    <div class="container max-h-[60px] w-[60px]">
        <img class="min-h-[40px]" :src="props.url" alt="icon">
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    url: string
}

const props = defineProps<Props>();

</script>