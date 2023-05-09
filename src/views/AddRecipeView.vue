<template>
  <div class="form-container">
  <n-form ref="formRef" :model="formValue">
    <n-form-item label="Name" path="user.name">
      <n-input v-model:value="formValue.name" placeholder="Nazwa" />
    </n-form-item>
    <n-form-item label="Opis" path="user.description">
      <n-input v-model:value="formValue.description" placeholder="Opis" />
    </n-form-item>
    <n-form-item label="Link do zdjęcia" path="imageUrl">
      <n-input v-model:value="formValue.imageUrl" placeholder="Link do zdjęcia" />
    </n-form-item>

    <n-divider title-placement="center">
      Składniki
    </n-divider>

    <n-dynamic-input v-model:value="formValue.ingredients" :on-create="onIngredientCreate">
      <template #default="{ value }">
        <n-select v-model:value="value.id" :options="selectOptions" />
        <n-input-number v-model:value="value.quantity" />
        <n-input v-model:value="value.quantityType" placeholder="Jednostka" />
      </template>
    </n-dynamic-input>

    <n-divider title-placement="center">
      Kroki
    </n-divider>
    <n-dynamic-input v-model:value="formValue.steps" :on-create="onStepCreate">
      <template #default="{ value }">
        <n-input v-model:value="value.name" placeholder="Krok" />
        <n-input-number v-model:value="value.time" :precision="0" />
      </template>
    </n-dynamic-input> <br>
    <n-button type="success" @click="submitForm">
      Wyślij
    </n-button>

  </n-form>

</div>
</template>


<script lang="ts">
import { defineComponent, onBeforeMount, ref } from 'vue';
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
        name: '',
        quantity: 1,
        quantityType: '',

      }]),
      steps: ref([{
        name: '',
        time: 0
      }]),
    });

    const selectOptions = ref([{}])


    const getInredientList = () => {
      axios.get(`https://localhost:7179/Ingredient/GetAll`).then(res => {
        console.log(res.data)
        res.data.ingredients.forEach((element: any) => {
          selectOptions.value.push({
            label: element.name,
            value: element.id
          })
        });
      });
    };

    onBeforeMount(() => {
      getInredientList();

    })


    const submitForm = async () => {
      let output = JSON.parse(JSON.stringify(formValue.value, null, 2))
      console.log(output);
      await axios.post(`${process.env.VUE_APP_API_URL}/Recipe`, output).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err.message)
      })
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
          name: '',
          quantity: 1,
          quantityType: ''
        }
      }
    };
  },


});
</script>

<style lang="scss">
  .form-container{
    flex-basis: 100%;
    display:flex;
    justify-content: center;
    align-content: center;
  }
</style>