<template>
    <div class="container max-h-[60px] w-[60px]" :class="{ 'rounded-full': props.rounded }">
        <img class="min-h-[40px] w-full h-full object-cover" :src="props.url" alt="icon">
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    url: string
    rounded?: boolean
}

const props = defineProps<Props>();

</script>