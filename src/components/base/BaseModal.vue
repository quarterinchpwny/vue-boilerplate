<template>
    <div
        v-if="visible"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
        <div class="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <slot></slot>
            <button
                @click="closeModal"
                class="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
                Close
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>
