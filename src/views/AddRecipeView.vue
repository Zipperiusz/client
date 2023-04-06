<template>
  <NForm :model="formValues">
    <NFormItem label="Name">
      <NInput v-model="formValues.name" placeholder="Enter name" />
    </NFormItem>

    <NFormItem label="Image URL">
      <NInput v-model="formValues.imageUrl" placeholder="Enter image URL" />
    </NFormItem>

    <NFormItem label="Original URL">
      <NInput v-model="formValues.originalUrl" placeholder="Enter original URL" />
    </NFormItem>

    <NFormItem label="Ingredients">
      <div v-for="(ingredient, index) in formValues.ingredients" :key="index">
        <NInput v-model="ingredient.name" :placeholder="`Ingredient ${index + 1}`" />
        <NInput v-model="ingredient.quantity" :placeholder="`Quantity ${index + 1}`" />
        <NInput v-model="ingredient.quantityType" :placeholder="`Quantity Type ${index + 1}`" />
      </div>
      <NButton @click="addIngredient">Add Ingredient</NButton>
    </NFormItem>

    <NFormItem label="Steps">
      <div v-for="(step, index) in formValues.steps" :key="index">
        <NInput v-model="step.name" :placeholder="`Step ${index + 1}`" />
        <NInput v-model="step.time" :placeholder="`Time ${index + 1}`" />
      </div>
      <NButton @click="addStep">Add Step</NButton>
    </NFormItem>

    <NFormItem>
      <NButton type="primary" @click="submitForm">Submit</NButton>
    </NFormItem>
  </NForm>

  <pre>{{ JSON.stringify(formValues, null, 2) }}
    </pre>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
} from 'naive-ui';
import axios from 'axios';

export default defineComponent({
  components: {
    NButton,
    NForm,
    NFormItem,
    NInput,
  },

  setup() {
    const formValues = ref({
      name: ref(''),
      imageUrl: '',
      originalUrl: '',
      ingredients: [{
        id: 0,
        quantity: '',
        name:'',
        quantityType: ''
       
      }],
      steps: [{
        name: '',
        time: 0
      }],
    });

    const addIngredient = () => {
      formValues.value.ingredients.push({
        id: formValues.value.ingredients.length + 1,
        quantity: '',
        quantityType: '',
        name: '',
      });
    };

    const addStep = () => {
      formValues.value.steps.push({
        name: '',
        time: 0,
      });
    };

    const  submitForm = async () => {
      const testData = {
        "name": "Testowansko3",
        "imageUrl": "outue.com",
        "originalUrl": "asdasd",
        "ingredients": [
          {
            "id": 4,
            "quantity": 2,
            "quantityType": "kg"            
          },
          {
            "id": 3,            
            "quantity": 3.5,
            "quantityType": "litry"            
          }
        ],
        "steps": [
          {
            "name": "zabij sie",
            "time": 520,
            "id": 0
          },
          {
            "name": "mleko",
            "time": 510,
            "id": 0
          }
        ]
      }
      console.log(formValues.value);
      // await axios.post(`${VUE_APP_API_URL}/Recipe`, testData).then(res => {
      //   console.log(res.data)
      // }).catch(err => {
      //   console.log(err.message)
      // })
      // You can do something with formValues here, such as submit it to a server
    };

    return {
      formValues,
      addIngredient,
      addStep,
      submitForm,
    };
  },
});
</script>
