<template>
  <div v-if="!isLoggedIn">
    <n-space vertical>
      <n-form style="width: 50%; margin: auto" ref="formRef">
        <n-form-item path="email" label="Email">
          <n-input v-model:value="email" type="text" placeholder="Email" />
        </n-form-item>

        <n-form-item path="password" label="Hasło">
          <n-input v-model:value="password" type="password" placeholder="Hasło" />
        </n-form-item>
      </n-form>

      <n-button-group style="gap: 8px 190px">
        <n-button @click="submit" style="border-radius: 3px" round type="primary">Zaloguj</n-button>

        <router-link to="/register" style="text-decoration: none">
          <n-button style="border-radius: 3px" round type="primary">Rejestracja</n-button>
        </router-link>
      </n-button-group>
    </n-space>
  </div>

  <div v-else>
    <p>Jesteś już zalogowany!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router';
import { authService } from "@/services/auth.service";

export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')
    const router = useRouter();
    const isLoggedIn = authService.isLoggedIn;


    function submit() {
      return authService
        .login(email.value, password.value)
        .then(() => router.push('/'));
    }

    return {
      isLoggedIn,
      email,
      password,
      submit,
    };
  }
});
</script>