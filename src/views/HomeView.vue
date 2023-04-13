<template>
  <div class="container">
    <p>Home page TODO</p>

    <div id="data"></div>
    
    <n-button type="primary" @click="getData()">Get</n-button>

  </div>
</template>

<script lang="ts">
import { authService } from '@/services/auth.service';
import axios from 'axios';
export default {

  setup() {

    const getData = async () =>{

      
      const res = await axios.get(`${process.env.VUE_APP_API_URL}/Ingredient/1/5`)
      // console.log(res.data)
    }


    return {
      isLoggedIn: authService.isLoggedIn,
      getData
    };
  }
}
</script>


<style lang="scss">
  


</style>