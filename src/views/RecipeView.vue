<template>
  <div class="recipe-container">
    <h1>{{ recipe?.name }}</h1>
    <img :src="recipe?.imageUrl" :alt="recipe?.name" style="max-width: 500px;">
    <h2>Opis: {{ recipe?.description }}</h2> 
    <div class="recipe-ingredients">
      <h2>Skladniki:</h2>
      <ul>
    <li v-for="(ingredient,index) in recipe?.ingredients" :key="index">{{ ingredient.name }} - {{ ingredient.quantity }} {{ ingredient.quantityType }}</li>
  </ul> 
    </div>
    <div class="recipe-steps">
    <h2>Kroki:</h2>
  <ol>
    <li v-for="step in recipe?.steps" :key="step.name">{{ step.name }} - Czas: {{ step.time }} minut</li>
  </ol>
  </div>
  <h2>Smacznego :)</h2>
  </div>
</template>


<script lang="ts">
import router from '@/router';
import { Recipe } from '@/types/Recipe';
import axios from 'axios';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const recipe = ref<Recipe | null>(null);
    const id = ref<number | null>(null);

    const getRecipe = () => {
      if (router) {
        id.value = Number(router.currentRoute.value.params.id);
        axios
          .get(`https://localhost:7179/Recipe/${id.value}`)
          .then(response => {
            recipe.value = response.data;
            console.log(recipe.value);
          })
          .catch(error => {
            console.error('Błąd podczas pobierania przepisu:', error);
          });
      }
    };

    onMounted(() => {
      getRecipe();
    });

    return {
      recipe,
    };
  },
});
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