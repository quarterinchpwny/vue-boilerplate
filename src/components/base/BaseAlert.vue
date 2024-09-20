<template>
    <div :class="alertClass" role="alert">
        <slot>{{ message }}</slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'success' // success, error, warning
    },
    message: {
        type: String,
        default: 'This is an alert!'
    }
});

const alertClass = computed(() => {
    return {
        success: 'bg-green-100 text-green-700 px-4 py-3 rounded',
        error: 'bg-red-100 text-red-700 px-4 py-3 rounded',
        warning: 'bg-yellow-100 text-yellow-700 px-4 py-3 rounded'
    }[props.type];
});
</script>
