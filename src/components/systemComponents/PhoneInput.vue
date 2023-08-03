<script lang="ts" setup>
import BaseInput from './BaseInput.vue';
import { computed } from 'vue';

interface Props {
    modelValue: string;
    mask?: string;
}

interface Emits {
    (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const val = computed({
    get: () => {
        return props.modelValue;
    },
    set: (newValue) => {
        emit('update:modelValue', newValue);
    }
})

</script>

<template>
    <BaseInput 
        v-model="val" 
        label="Phone" 
        :maska="mask" 
        :disabled="!mask"  
    />
</template>