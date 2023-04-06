<template>
    <n-card size="huge" justify="space-between" :title="item.name">
        <n-image width="150" :src="item.imageUrl" />
        
        <span v-for="(ingr,index) in item.ingredients" :key="index">{{ ingr.name }}<br></span>
        
        <n-button type="primary">Czytaj dalej →</n-button>
    </n-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Recipe } from '@/types/Recipe';



export default defineComponent({
    props: {
        item: {
            type: Object as () => Recipe,
            required: true
        }
    },
    setup() {
        return {

        }
    }
})


</script>

<style lang="scss">
.n-card {
    min-height: 350px;
    max-width: 300px;
    
}
</style>