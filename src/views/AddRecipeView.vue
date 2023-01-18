<template>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    label-placement="left"
    require-mark-placement="right-hanging"
    :size="size"
    label-width="auto"
    :style="{
      maxWidth: '640px',
      margin: 'auto'
    }"
  >
    <n-form-item label="Nazwa" path="inputValue">
      <n-input v-model:value="model.name" placeholder="Nazwa" />
    </n-form-item>
    <n-form-item label="Kategorie" path="multipleSelectValue">
      <n-select v-model:value="model.category" placeholder="Kategorie" :options="generalOptions" multiple />
    </n-form-item>
    <n-form-item label="Składniki" path="textareaValue">
      <n-input
        v-model:value="model.ingredients"
        placeholder="Składniki"
        type="textarea"
        :autosize="{
          minRows: 3
        }"
      />
    </n-form-item>
    <n-form-item label="Kroki" path="textareaValue">
      <n-input
        v-model:value="model.steps"
        placeholder="Prosimy o numerowanie każdego kroku"
        type="textarea"
        :autosize="{
          minRows: 3
        }"
      />
    </n-form-item>
    <div style="display: flex; justify-content: flex-end">
      <n-button style="border-radius: 3px" round type="primary" @click="handleValidateButtonClick">
        Dodaj przepis
      </n-button>
    </div>
  </n-form>

  <pre>{{ JSON.stringify(model, null, 2) }}</pre>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { FormInst, FormItemRule, useMessage } from 'naive-ui';

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);
    return {
      formRef,
      size: ref('medium'),
      model: ref({
        name: null,
        category: null,
        ingredients: null,
        steps: null
      }),
      generalOptions: ['Śniadanie', 'Obiad', 'Kolacja', 'Na słodko', 'Na słono', 'Deser', 'Przekąska'].map(v => ({
        label: v,
        value: v
      })),
      rules: {
        name: {
          required: true,
          trigger: ['blur', 'input'],
          message: 'Nazwa potrawy jest wymagana'
        },
        category: {
          required: true,
          trigger: ['blur', 'input'],
          message: 'Proszę dodać przynajmniej jedną kategorię'
        },
        ingerdients: {
          type: 'array',
          required: true,
          trigger: ['blur', 'change'],
          message: 'Proszę uzupełnić składniki'
        },
        steps: {
          type: 'array',
          required: true,
          trigger: ['blur', 'change'],
          message: 'Proszę uzupełnić kroki'
        }
      },
      handleValidateButtonClick(e: MouseEvent) {
        console.log('przepis dodany');
      }
    };
  }
});
</script>
