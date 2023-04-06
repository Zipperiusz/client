<template>
    <n-row>
      <n-col :span="4">
        <n-tag v-model:checked="ingredient.checked" @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
          v-for="ingredient in Ingredients" :key="ingredient.id">
          {{ ingredient.name }}
        </n-tag>
      </n-col>
      <n-col :span="20">
        <div class="container">
        <RecipeCard class="flex-item" :item="recipe" v-for="(recipe, index) in Recipes" :key="index" />
    </div>
        <n-space justify="center">
          <n-pagination v-model:page="page" v-model:page-size="itemsPerPage" :page-sizes="pageSizes" show-size-picker :page-count="pageCount" />
        </n-space>
      </n-col>
    </n-row>
  </template>
  
<script lang="ts">
import { IngredientTag } from '@/types/IngredientTag';
import { Recipe } from '@/types/Recipe';
import RecipeCard from '@/assets/components/RecipeCard.vue';
import axios from 'axios';
import { defineComponent, onBeforeMount, ref, watch } from 'vue';

export default defineComponent({
    components: {
        RecipeCard
    },

    setup() {
        const chosenIngredients = ref<string[]>([]);
        let page = ref(1)
        let itemsPerPage = ref(5)
        let pageCount = ref(1)
        let timeout = 0

        const pageSizes = [
            {
                label: '5',
                value: 5
            },
            {
                label: '10',
                value: 10
            },
            {
                label: '20',
                value: 20
            }
        ]




        const Ingredients = ref<IngredientTag[]>([]);
        const Recipes = ref<Recipe[]>([]);

        const getInredientList = () => {
            axios.get(`https://localhost:7179/Ingredient/GetAll`).then(res => {
                res.data.ingredients.forEach((element: IngredientTag) => {
                    Ingredients.value.push({
                        name: element.name,
                        id: element.id,
                        checked: false,
                        type: element.type
                    });
                });
            });
        };

        const get = (page = 1, itemsPerPage = 5) => {
            
            Recipes.value = [];
            console.log(chosenIngredients.value);
            
            axios.post(
                `https://localhost:7179/Recipe/WithIngredients?page=${page}&itemsPerPage=${itemsPerPage}`,
                chosenIngredients.value
            )
                .then(response => {

                    pageCount.value = response.data.totalPages;
                    console.log(response.data);
                    response.data.result.forEach((element: any) => {
                        Recipes.value.push(
                            {
                                name: element.name,
                                imageUrl: element.imageUrl,
                                description: element.description,
                                steps: element.steps,
                                username: element.user.name,
                                ingredients: element.ingredients
                            }
                        )
                    });
                    console.log(Recipes.value)


                })
                .catch(error => {
                    console.log(`Nope ${error.message}`)
                });
        }



        const handleTagChange = (checked: boolean, ingredientName: string) => {
            if (checked) {
                chosenIngredients.value.push(ingredientName);
            } else {
                chosenIngredients.value.splice(chosenIngredients.value.indexOf(ingredientName), 1);
            }


            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                get(page.value, itemsPerPage.value)
            }, 1000)

        };

        onBeforeMount(() => {
            getInredientList();
            
        })

        watch([page, itemsPerPage], () => {
            get(page.value, itemsPerPage.value);
        });


        return { Ingredients, Recipes, chosenIngredients, get, handleTagChange, page, itemsPerPage, pageCount, pageSizes };
    }
})
</script>

<style lang="scss">
.category {
    display: inline-block;
    width: 100%;
}




.n-card {
    max-width: 300px;
    margin: 10px;
    max-height: 250px;
}


.recipe {
    border: 1px black solid;
    margin: 5px;
}

.container{
    display: flex;
    flex-wrap:wrap;
    .flex-item{
        justify-content: center;

    }
}
</style>
