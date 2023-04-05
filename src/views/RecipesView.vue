<template>
    <n-tag v-model:checked="ingredient.checked" @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
        v-for="ingredient in Ingredients" :key="ingredient.id">
        {{ ingredient.name }}
    </n-tag>
    <br><br>

    <n-button @click="get(page,itemsPerPage)" type="primary">
        Primary
    </n-button>

    <div id="data">
        <div class="recipe" v-for="(recipe,index) in Recipes" :key="index">
        {{ recipe.name }}<br>
        <span v-for="(ingredient,ingredientIndex) in recipe.ingredients" :key="ingredientIndex">
        {{ingredient.name+" "}}</span><br>
            {{ recipe.username }}
    </div>

    <n-pagination v-model:page="page" v-model:page-size="itemsPerPage" :page-sizes="pageSizes"     show-size-picker
 :page-count="pageCount"  />
    </div>
    
</template>
  
<script lang="ts">
import axios from 'axios';
import { defineComponent, onBeforeMount, ref, watch } from 'vue';

export default defineComponent({
    setup() {
        const chosenIngredients = ref<string[]>([]);
        let page = ref(1)
        let itemsPerPage = ref(5)
        let pageCount = ref(1)
        const pageSizes = [
            {
                label:'5',
                value:5
            },
            {
                label:'10',
                value:10
            },
            {
                label:'20',
                value:20
            }
        ]
        type IngredientTag = {
            name: string;
            id: number;
            checked: boolean;
            type: string;
        };

        type Ingredient = {
            name: string;
            quantity: number;
            quantityType: string;
        };

        type Step ={
            name:string;
            time:number;
        }

        type Recipe = {
            name: string;
            ingredients: Array<Ingredient>;
            imageUrl:string,
            url: string;
            steps: Array<Step>
            username: string
        }

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
                    
                    pageCount.value=response.data.totalPages;
                    console.log(response.data);
                    response.data.result.forEach((element: any) => {
                        Recipes.value.push(
                            {
                                name:element.name,
                                imageUrl:element.imageURL,
                                url:element.originalURL,
                                steps:element.steps,
                                username:element.userId,
                                ingredients:element.ingredients
                            }
                        )
                    });
                    console.log(Recipes.value)


                })
                .catch(error => {
                    console.log("Nope")
                });
        }

        

        const handleTagChange = (checked: boolean, ingredientName: string) => {
            if (checked) {
                chosenIngredients.value.push(ingredientName);
            } else {
                chosenIngredients.value.splice(chosenIngredients.value.indexOf(ingredientName), 1);
            }
        };

        onBeforeMount(() => {
            getInredientList();
        })

        watch([page, itemsPerPage], () => {
            get(page.value,itemsPerPage.value);
        });


        return { Ingredients, Recipes, chosenIngredients, get, handleTagChange,page, itemsPerPage,pageCount,pageSizes };
    }
})
</script>

<style lang="scss">
.category {
    display: inline-block;
    width: 100%;
}

.n-layout {
    min-height: 60vh;

    .n-layout-sider {
        background: rgba(128, 128, 128, 0.3);
    }
}



.n-card {
    max-width: 300px;
    margin: 10px;
    max-height: 250px;
}

.n-space {
    min-height: 60vh;
}

.recipe {
    border: 1px black solid;
    margin:5px;
}
</style>
