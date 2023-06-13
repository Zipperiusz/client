<template>
  <div class="form-container">
    <h1>Dodaj przepis</h1>
    <n-form ref="formRef" :model="formValue">
      <n-form-item label="Nazwa" path="user.name">
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
        <n-select v-model:value="value.id" :options="selectOptions" filterable />
        <n-input-number v-model:value="value.quantity" />
        <n-input v-model:value="value.quantityType" />
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
import axios from 'axios';
import { FakeOption } from "@/types/FakeOption";
import  {IngredientTag}  from '@/types/IngredientTag';
import router from '@/router';
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

    const selectOptions = ref<FakeOption[]>([])


    const getInredientList = () => {
      axios.get<{ ingredients: IngredientTag[] }>(`Ingredient/GetAll`).then(res => {
        // console.log(res.data)
        selectOptions.value = res.data.ingredients.map((elem) => ({
          label: elem.name,
          value: elem.id
        }))
      });
    };

    onBeforeMount(() => {
      getInredientList();
    })


    const submitForm = async () => {
      let output = JSON.parse(JSON.stringify(formValue.value, null, 2))
      console.log(output);
      await axios.post(`Recipe`, output).then(res => {
        console.log(res.data)
        window.location.reload();
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
.form-container {
  flex-basis: 100%;
  display: block;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  min-width: 70%;
    max-width: 80%;
    background-color: #0a0a0a26;
    border-width: 0px 2px 0px 2px;
    border-style:solid ;    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: inset 0px 0px 20px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 20px 0px rgba(0,0,0,0.6);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75), inset 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
  padding:20px;
}
</style>