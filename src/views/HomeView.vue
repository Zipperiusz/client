<template>
  <div>
    <p>Home page TODO</p>

    <div id="data"></div>
    
    <button @click="getData()">Get</button>

  </div>
</template>

<script lang="ts">
import { authService } from '@/services/auth.service';
import { useStorage } from '@vueuse/core'
import { useLocalStorage } from '@vueuse/core'
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {

  setup() {

    const getData = async () =>{
      const res = await axios.get(`${process.env.VUE_APP_API_URL}/Ingredient/1/5`)
      console.log(res.data)
    }


    return {
      isLoggedIn: authService.isLoggedIn,
      getData
    };
  }
}
</script>