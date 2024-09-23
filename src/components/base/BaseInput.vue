<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :id="id"
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      :class="['mt-1 block w-full', inputClass]"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    modelValue: String,
    label: String,
    id: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String
});

const inputClass =
    'border-gray-300 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md';
</script>
