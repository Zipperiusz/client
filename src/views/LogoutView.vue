<template>
  <div class="container">
    <h2>Czy na pewno chcesz się wylogować?</h2>
    <div class="buttons">
    <n-button type="primary" @click="confirmLogout">Tak</n-button>
    <n-button type="error" @click="cancelLogout">Nie</n-button>
  </div>
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

<style lang="scss">

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>