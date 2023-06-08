<template>
    <div class="recipe-container">
        <h1>{{ name }}</h1>
      <img :src="image" :alt="name" style="max-width: 500px;">
      <h2>Opis: {{ decription }}</h2>
    <div class="recipe-ingredients">
        <h2>Skladniki:</h2>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.id">{{ ingredient.name }} - {{ ingredient.quantity }} {{ ingredient.quantityType }}</li>
    </ul>
    </div>
    <div class="recipe-steps">
      <h2>Kroki:</h2>
    <ol>
      <li v-for="step in steps" :key="step.name">{{ step.name }} - Czas: {{ step.time }} minut</li>
    </ol>
    </div>
    <h2>Smacznego :)</h2>
    </div>
  </template>
  
  <script lang='ts'>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: null,
        image:null,
        decription:null,
        ingredients:null,
        steps:null
      };
    },
    mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
  
      axios
        .get(`https://localhost:7179/Recipe/${id}`)
        .then(response => {
          this.name = response.data.name;
          this.image = response.data.imageUrl;
          this.decription = response.data.description;
          this.ingredients = response.data.ingredients;
          this.steps = response.data.steps;
        })
        .catch(error => {
          console.error('Błąd podczas pobierania przepisu:', error);
        });
    }}
 
  </script>

<style lang="scss">
.recipe {
    border: 1px black solid;
    margin: 5px;
}

.recipe-container {
    font-size: 20px;
    display:block;
    min-width: 70%;
    max-width: 80%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    background-color: #f3f0d1;
    border-width: 0px 2px 0px 2px;
    border-style:solid ;    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: inset 0px 0px 20px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 20px 0px rgba(0,0,0,0.6);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75), inset 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
}
.recipe-ingredients{
    margin-left:20px;
    text-align: left;
}
.recipe-steps{
    margin-left:20px;
    text-align: left;
}
</style>