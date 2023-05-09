<!-- TODO: zmienic strukturę całości wg tego https://www.naiveui.com/en-US/os-theme/components/grid -->
<template>
  <n-space vertical>
    <n-form style="width: 50%; margin: auto" ref="formRef" :model="formValue" :rules="rules">
      <n-form-item path="name" label="Nazwa użytkownika">
        <n-input v-model:value="formValue.name" type="text" placeholder="Nazwa użytkownika" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="email" label="Email">
        <n-input v-model:value="formValue.email" type="text" placeholder="Email" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="Hasło">
        <n-input v-model:value="formValue.password" type="password" placeholder="Hasło" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="confirmpassword" label="Potwierdź hasło">
        <n-input v-model:value="formValue.confirmpassword" :disabled="!formValue.password" type="password"
          placeholder="Potwierdź hasło" @keydown.enter.prevent />
      </n-form-item>
    </n-form>
    <n-button-group style="gap: 8px 190px">
      <n-button @click="submit" style="border-radius: 5px" round type="primary">Zarejestruj</n-button>
      <router-link to="/login" style="text-decoration: none">
        <n-button style="border-radius: 5px" round type="primary">Logowanie</n-button>
      </router-link>
    </n-button-group>
  </n-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui';
import router from '@/router';
import { authService } from '@/services/auth.service';
interface ModelType {
  name: string | null;
  email: string | null;
  password: string | null;
  confirmpassword: string | null;
}
export default defineComponent({
  setup() {
    
    const formRef = ref<FormInst | null>(null);
    const rPasswordFormItemRef = ref<FormItemInst | null>(null);
    const modelRef = ref<ModelType>({
      name: null,
      email: null,
      password: null,
      confirmpassword: null
    });
    function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
      return (
        !!modelRef.value.password &&
        modelRef.value.password.startsWith(value) &&
        modelRef.value.password.length >= value.length
      );
    }
    function validatePasswordSame(rule: FormItemRule, value: string): boolean {
      return value === modelRef.value.password;
    }

    const rules: FormRules = {
      name: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('Nazwa jest wymagan');
            }
            return true;
          },
          trigger: ['input', 'blur']
        }
      ],
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
      ],
      confirmpassword: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('Potwierdzenia hasla jest wymagane');
            }
            return true;
          },
          trigger: ['input', 'blur']
        },
        {
          validator: validatePasswordStartWith,
          message: 'Hasła nie są identyczne!',
          trigger: 'input'
        },
        {
          validator: validatePasswordSame,
          message: 'Hasła nie są identyczne!',
          trigger: ['blur', 'password-input']
        }
      ]
    };

    const submit = () => {
      formRef.value?.validate().then(() => {
        const name = modelRef.value.name ?? '';
        const email = modelRef.value.email ?? '';
        const password = modelRef.value.password ?? '';
        return authService.register(name, email, password).then(() => {
          router.push('/login');
        });
      });
    };





    return {
      formRef,
      rPasswordFormItemRef,
      formValue: modelRef,
      rules,
      submit,
      handlePasswordInput() {
        if (modelRef.value.confirmpassword) {
          rPasswordFormItemRef.value?.validate({ trigger: 'password-input' });
        }
      },
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
