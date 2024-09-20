<template>
    <button
        :class="[
            'inline-flex items-center justify-center rounded font-medium transition focus:outline-none',
            sizeClass,
            variantClass
        ]"
        @click="handleClick"
    >
        <slot>{{ label }}</slot>
    </button>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    },
    size: {
        type: String,
        default: 'md' // Accepts: 'sm', 'md', 'lg'
    },
    variant: {
        type: String,
        default: 'primary' // Accepts: 'primary', 'secondary', 'danger'
    }
});

const emit = defineEmits(['click']);

const handleClick = () => {
    emit('click');
};

const sizeClass = computed(() => {
    return {
        sm: 'px-2 py-1 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-lg'
    }[props.size];
});

const variantClass = computed(() => {
    return {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600'
    }[props.variant];
});
</script>
