<template>
    <div class="container">
        <div class="recipe-col" v-if="Recipes.length">
            <h2>Twoje przepisy</h2>
            <div class="recipe-cards">
                <RecipeCard class="card-item" :item="recipe" v-for="(recipe, index) in Recipes" :key="index" />

            </div>

        </div>
        <div class="recipe-col" v-else>
            <h2>Brak przepisów</h2>
        </div>
    </div>
</template>





<script lang="ts">
import { Recipe } from '@/types/Recipe';
import RecipeCard from '@/assets/components/RecipeCard.vue';

import axios from 'axios';
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
    components: {
        RecipeCard
    },

    setup() {

        const Recipes = ref<Recipe[]>([]);

        const getRecipes = () => {
            axios.post<Recipe[]>("Recipe/UserRecipes").then((response) => {
                console.log(response);
                Recipes.value = response.data;
            }).catch((error) => {
                console.log(error);
            })
        }

        onMounted(() => {
            getRecipes();
            console.log(Recipes.value.length)
        })





        return {
            Recipes
        };
    }
})
</script>

<style lang="scss">
.recipe {
    border: 1px black solid;
    margin: 5px;
}

.container {
    display: flex;
    flex: 1;

    .tag-list {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        margin: 3px;
        border: 2px solid black;
        flex: 0 0 20%;

        .tag-item {
            width: calc(50% - 4px);
            margin: 2px;
            padding: 15px;
        }


    }

    .recipe-col {
        width: 100%;

        .recipe-cards {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: center;
            margin: 5px;
            gap: 15px;

        }


        .pagination {
            display: flex;
            justify-content: center;
        }
    }


}

h1 {
    text-align: center;
}
</style>
