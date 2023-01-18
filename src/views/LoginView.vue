<template>
  <n-space vertical>
    <n-form style="width: 50%; margin: auto" ref="formRef" :model="formValue" :rules="rules">
      <n-form-item path="email" label="Email">
        <n-input v-model:value="formValue.email" type="text" placeholder="Email" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="Hasło">
        <n-input v-model:value="formValue.password" type="password" placeholder="Hasło" @keydown.enter.prevent />
      </n-form-item>
    </n-form>
    <n-button-group style="gap: 8px 190px">
      <n-button style="border-radius: 3px" round type="primary">Zaloguj</n-button>
      <router-link to="/register" style="text-decoration: none">
        <n-button style="border-radius: 3px" round type="primary">Rejestracja</n-button>
      </router-link>
    </n-button-group>
  </n-space>
  <pre>{{ JSON.stringify(formValue, null, 2) }}</pre>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui';
interface ModelType {
  email: string | null;
  password: string | null;
}
export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);
    const modelRef = ref<ModelType>({
      email: null,
      password: null
    });
    const rules: FormRules = {
      email: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('Email jest wymagany');
            } else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value)) {
              return new Error('Podany email nie istnieje, upewnij się, że został zapisany poprawnie');
            }
            return true;
          },
          trigger: ['input', 'blur']
        }
      ],
      password: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('Hasło jest wymagane');
            }
            return true;
          },
          trigger: ['input', 'blur']
        }
      ]
    };
    return {
      formRef,
      formValue: modelRef,
      rules,
      handleValidateClick(e: MouseEvent) {
        e.preventDefault();
        formRef.value?.validate(errors => {
          const lol = 0;
        });
      }
    };
  }
});
</script>
