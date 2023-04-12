<template>
  <n-form ref="formRef" :model="formValue">
    <n-form-item label="Name" path="user.name">
      <n-input v-model:value="formValue.name" placeholder="Nazwa" />
    </n-form-item>
    <n-form-item label="Description" path="user.description">
      <n-input v-model:value="formValue.description" placeholder="Description" />
    </n-form-item>
    <n-form-item label="imageUrl" path="imageUrl">
      <n-input v-model:value="formValue.imageUrl" placeholder="imageUrl" />
    </n-form-item>
    <n-dynamic-input v-model:value="formValue.steps" :on-create="onStepCreate">
      <template #default="{ value }">
        <n-input v-model:value="value.name" />
        <n-input-number v-model:value="value.time" :precision="0" />
      </template>
    </n-dynamic-input>

    <n-dynamic-input v-model:value="formValue.ingredients" :on-create="onIngredientCreate">
      <template #default="{ value }">
        <n-select v-model:value="value.id" :options="selectOptions" />
        <n-input-number v-model:value="value.quantity" />
        <n-input v-model:value="value.quantityType" />
      </template>
    </n-dynamic-input>

    <n-button @click="submitForm">
      SENT
    </n-button>

  </n-form>

  <pre>{{ JSON.stringify(formValue, null, 2) }}
    </pre>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import {

} from 'naive-ui';
import axios from 'axios';

export default defineComponent({
  
  setup() {
    const formValue = ref({
      name: '',
      imageUrl: '',
      description: '',
      ingredients: ref([{
        id: '',
        quantity: 1,
        quantityType: '',
        name: ''

      }]),
      steps: ref([{
        name: '',
        time: 0
      }]),
    });

    const selectOptions = ref([
      {
        label:"item1",
        value:1
      },{
        label:"item2",
        value:2
      },{
        label:"item3",
        value:3
      },
    ])

    const submitForm = async () => {

      console.log(formValue.value);
      // await axios.post(`${VUE_APP_API_URL}/Recipe`, testData).then(res => {
      //   console.log(res.data)
      // }).catch(err => {
      //   console.log(err.message)
      // })
      // You can do something with formValues here, such as submit it to a server
    };

    return {
      formValue,
      submitForm,
      selectOptions,
      onStepCreate() {
        return {
          name: '',
          time: 0
        }
      },
      onIngredientCreate() {
        return {
          id: '',
          quantity: 1,
          name: '',
          quantityType: ''
        }
      }
    };
  },


});
</script>
