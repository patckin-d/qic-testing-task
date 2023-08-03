<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BaseInput',
});
</script>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { vMaska } from 'maska';

const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  maska: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(['focus', 'blur', 'update:modelValue']);

const maskOptions = computed(() => ({
  mask: props.maska,
}));

const maskProps = reactive({
  completed: false,
  unmasked: '',
  masked: '',
});


const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', maskProps.masked);
  },
});

const inputFocused = ref(false);

const onFocus = () => {
  inputFocused.value = true;
  emit('focus');
};

const clicked = ref(false);
const onBlur = () => {
  inputFocused.value = false;
  clicked.value = false;
  emit('blur');
};

const focusedAndClicked = computed(() => inputFocused.value && clicked.value);
const onClick = (event: Event) => {
  if (focusedAndClicked.value) return;
  clicked.value = true;

  const element = event.target as HTMLInputElement;
  const cursorPosition = element.selectionStart;
  if (cursorPosition !== 0) return;

  const end = element.value.length;
  element.setSelectionRange(end, end);
};
</script>

<template>
  <div
    class="input-container input-container_big"
  >
    <div class="input-wrapper">
        <input
          v-model="value"
          class="input input_big"
          :disabled="disabled"
          type="text"
          @focus="onFocus"
          @blur="onBlur"
          @click="onClick"
          v-maska:[maskOptions]="maskProps"
        />
      <label class="label" v-if="label" data-test="BaseInputLabel">{{ label }}</label>
    </div>
  </div>
</template>
