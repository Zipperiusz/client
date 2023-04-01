<template>
  <div>
    <h2>Czy na pewno chcesz się wylogować?</h2>
    <n-button type="primary" @click="confirmLogout">Tak</n-button>
    <n-button @click="cancelLogout">Nie</n-button>
  </div>
</template>

<script lang="ts">
import { authService } from '@/services/auth.service';
import { useStorage } from '@vueuse/core'
import { useLocalStorage } from '@vueuse/core'
import { useRouter } from 'vue-router';
export default {

  setup() {
    const router = useRouter();

    const confirmLogout = async () => {
      authService.setName('');
      authService.setToken('');
      router.push('/');
    }

    const cancelLogout = async () => {

      router.push('/');
    }


    return {
      confirmLogout,
      cancelLogout
    };
  }
}
</script>
