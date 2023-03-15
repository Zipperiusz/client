<template>
  <div>
    <p>Home page TODO<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
    <div id="data"></div>
    <button @click="getData()">Guzik</button>
  </div>
</template>


<script lang="ts">
import { assertExpressionStatement } from '@babel/types';
import axios from 'axios'
export default {


  methods: {
    async getData() {
      const elem = document.getElementById("data")

      await axios.get('https://localhost:7179/Ingredient').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      await axios.post("https://localhost:7179/Ingredient", {
        "quantity": 0,
        "name": "Kurczak",
        "type": "Meat"
      })
      await axios.get('https://localhost:7179/Ingredient').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      axios.put("https://localhost:7179/Ingredient/1", {
        "quantity": 0,
        "name": "ryż",
        "type": "Vegetable"
      })
      await axios.get('https://localhost:7179/Ingredient').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>