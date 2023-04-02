<template>
    <n-space vertical size="large">
        <n-tag v-model:checked="list" checkable @change="addToList('Cebula')">
            Cebula
        </n-tag>
        <n-tag v-model:checked="list" checkable @change="addToList('Marchewka')">
            Marchewka
        </n-tag>

        <button @click="get">Daj</button>
    </n-space>
</template>
  
<script lang="ts">
import { useLocalStorage } from '@vueuse/core';
import axios from 'axios';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const list = useLocalStorage('ingre', ['']);
        const addToList = (value: string) => {
            list.value.push(value);
        }
        const get = () => {
            axios.post('https://localhost:7179/Recipe/WithIngredients?page=1&itemsPerPage=5', 
                 ["Cebula","Pomidor","Marchewka"],
            )
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });

        }

        return { addToList, get, list };
    },
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
</style>
