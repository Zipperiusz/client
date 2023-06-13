<template>
    <div class="container">
        <div class="row">
            <n-space>
                <div class="chosen-tags">
                    <n-tag closable round @close="handleClose" v-for="(tag, index) in chosenIngredients" :key="index">{{ tag
                    }}</n-tag>
                </div>

            </n-space>
        </div>
        <div class="row">


            <div class="tag-list">
                <!-- <n-popselect multiple :options="Ingredients.filter(a => (a.type =='Vegetable'))" 
            v-for="ingredient in Ingredients.filter(a => (a.type =='Vegetable'))" :key="ingredient.id">
                <n-button>
                  {{ Array.isArray(value) && value.length ? value : 'Warzywa' }}
                </n-button>
              </n-popselect> -->
                <!-- <select class="tag-item" multiple >
                <option @click="handleTagChange(ingredient.checked, ingredient.name)" checkable v-for="ingredient in Ingredients.filter(a => (a.type =='Spices'))"
                :key="ingredient.id">
                {{ ingredient.name }}
                </option>
              </select> -->
                <n-button @click="selectAll" type="info" style="width:100%">Zaznacz wszystko</n-button>
                <h1 style="width:100%">- Warzywa -</h1>


                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Vegetable'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Owoce -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Fruits'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Mięso -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Meat'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Ryby -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Fish'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Nabiał -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Dairy'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Grzyby -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Mushroom'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Przyprawy -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Spices'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Pieczywo -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Bread'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Oleje -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Oils'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Makarony -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Pasta'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Zboże -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Grain'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Sosy -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'Dips'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

                <h1 style="width:100%">- Delikatesy -</h1>
                <n-tag class="tag-item" v-model:checked="ingredient.checked"
                    @click="handleTagChange(ingredient.checked, ingredient.name)" checkable
                    v-for="ingredient in Ingredients.filter(a => (a.type == 'delicatessen'))" :key="ingredient.id">
                    {{ ingredient.name }}
                </n-tag>

            </div>
            <div class="recipe-col" v-if="Recipes.length">
                <div class="recipe-cards">
                    <RecipeCard class="card-item" :item="recipe" v-for="recipe in Recipes" :key="recipe.id" />

                </div>
                <div class="pagination" v-if="showPagination">
                    <n-pagination v-model:page="page" v-model:page-size="itemsPerPage" :page-sizes="pageSizes"
                        show-size-picker :page-count="pageCount" />
                </div>
            </div>
            <div class="recipe-col" v-else-if="chosenIngredients.length">
                <h1>Brak przepisów</h1>
            </div>
            <div class="recipe-col" v-else>
                <h1>Wybierz składniki</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { IngredientTag } from '@/types/IngredientTag';
import { Recipe } from '@/types/Recipe';
import RecipeCard from '@/assets/components/RecipeCard.vue';
import axios from 'axios';
import { defineComponent, onBeforeMount, ref, watch } from 'vue';
import { computed } from '@vue/reactivity';

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

        let showPagination = computed(() => Recipes.value.length > 0)

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

        const selectAll = () => {
            let buttons = document.getElementsByClassName("n-tag");
            //check if button from buttons dont have "n-tag--round" class
            let tagButtons = Array.from(buttons).filter((elem: Element) => {
                return !elem.classList.contains("n-tag--round");
            });

            Array.from(tagButtons).forEach((elem: Element) => {
                if (!elem.classList.contains("n-tag--checked")) {
                    let item: HTMLElement = elem as HTMLElement;
                    item.click();
                }
            })

        }

        const getInredientList = () => {
            axios.get(`Ingredient/GetAll`).then(res => {
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


            // console.log(chosenIngredients.value);

            axios.post(
                `Recipe/WithIngredients?page=${page}&itemsPerPage=${itemsPerPage}`,
                chosenIngredients.value
            )
                .then(response => {
                    pageCount.value = response.data.totalPages;
                    console.log(response)
                    Recipes.value = response.data.result;
                    // console.log(Recipes.value)


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
            }, 500)

        };

        const handleClose = (e: MouseEvent) => {
            let r = e.currentTarget as HTMLElement
            let ingredientName = r.parentElement?.firstElementChild?.textContent;
            let buttons = document.getElementsByClassName("n-tag--checked");
            let tagButtons = Array.from(buttons).filter((elem: Element) => {
                return elem.textContent == ingredientName;
            });
            var btn = tagButtons[0] as HTMLElement;
            btn.click();
        }

        onBeforeMount(() => {
            getInredientList();

        })

        watch([page, itemsPerPage], () => {
            get(page.value, itemsPerPage.value);
        });


        return {
            Ingredients, Recipes, chosenIngredients, get, handleTagChange, page, itemsPerPage, pageCount, pageSizes, showPagination, selectAll, handleClose
        };
    }
})
</script>

<style lang="scss">
.recipe {
    border: 1px black solid;
    margin: 5px;
}

.tags-row {
    display: flex;
    flex-direction: row;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.row {
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
}</style>
