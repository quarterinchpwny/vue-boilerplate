<template>
  <div :class="`rounded-lg shadow-md ${color} ${padding}`">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: 'white'
    },
    padding: {
        default: 'p-3',
        type: String
    }
});
const color = computed(() => {
    return 'bg-' + props.color;
});
</script>
