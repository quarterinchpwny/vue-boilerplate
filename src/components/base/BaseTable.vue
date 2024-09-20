<template>
    <table class="min-w-full table-auto">
        <thead>
            <tr>
                <th v-for="heading in headings" :key="heading" class="px-4 py-2">{{ heading }}</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    headings: Array
});
</script>
