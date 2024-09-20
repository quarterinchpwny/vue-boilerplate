<template>
    <div class="relative inline-block text-left">
        <button
            @click="toggle"
            class="inline-flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-white"
        >
            {{ buttonText }}
        </button>
        <div v-if="open" class="absolute right-0 mt-2 w-56 rounded-md border bg-white shadow-lg">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

const toggle = () => {
    open.value = !open.value;
};
</script>
