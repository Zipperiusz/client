<template>
    <div class="card-container">
        <img :src="item.imageUrl" />



        <!-- <div class="image">
            <img :src="item.imageUrl" />
        </div> -->
        <div class="informations">
            <div class="title">{{ item.name }}</div>
            <div class="time">
                <span>Czas przygotowania: </span>
                <span v-if="time.hours > 0">{{ time.hours }} h </span>
                <span v-if="time.minutes > 0"> {{ time.minutes }} min </span>
                <span v-if="time.seconds > 0"> {{ time.seconds }} sec </span>
                
            </div>
            <div class="author">Dodał: {{ item.user.name }}</div>
        </div>
        <div v-if="isAuthor" class="icon-section">
            <Icon color="red" size="20">               
                <Star />
            </Icon>
        </div>
        <div class="button-link">
            <n-button @click="GoToRecipe" type="info">Czytaj dalej...</n-button>
        </div>
    </div>
</template>

<script lang="ts">
import {  Star } from '@vicons/fa';
import { Icon } from '@vicons/utils'
import { computed, defineComponent, onMounted, ref } from 'vue';

import { Recipe } from '@/types/Recipe';
import router from '@/router';
import { authService } from '@/services/auth.service';



export default defineComponent({
    components: {
        Icon,
        Star
    },
    props: {
        item: {
            type: Object as () => Recipe,
            required: true
        }
    },
    setup(props) {
        let isAuthor = computed(() => props.item.user.name == authService.getName())
        const time = ref({
            hours: 0,
            minutes: 0,
            seconds: 0
        })
        const calculateTime = () => {
            let totalTimeInSeconds = props.item.steps.reduce((total, step) => total + step.time, 0);

            time.value.hours = Math.floor(totalTimeInSeconds / 3600);
            totalTimeInSeconds -= time.value.hours * 3600;

            time.value.minutes = Math.floor(totalTimeInSeconds / 60);
            totalTimeInSeconds -= time.value.minutes * 60;

            time.value.seconds = totalTimeInSeconds;

        }

        

        const checkFavorite =()=>{
            console.log()
        }

        const GoToRecipe =()=>{
            console.log(props.item.id)
            router.push({name:'recipeView',params:{id:props.item.id}})
        }

        onMounted(() => {
            calculateTime()
        })

        return {
            time, GoToRecipe, isAuthor
        }
    }
})


</script>

<style lang="scss" scoped>
.card-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    min-height: 165px;
    min-width: 265px;
    max-width: 350px;
    border-radius: 4%;
    border-width: 1px ;
    border-style:solid ;   
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: inset 0px 0px 20px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px 0px 20px 0px rgba(0,0,0,0.6);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75), inset 0px 0px 30px 0px rgba(0, 0, 0, 0.6);
    flex-wrap: wrap;
    background-color: #f3f0d1;
    font-size: 15px;
    font-weight: bold;
    img {
        width:100%;
        border-radius: 5% 5% 0% 0%;
        aspect-ratio: 16/9;
    }


    .icon-section {
        padding-right:2%;
        text-align: right;
        justify-content: right;
        flex-basis: 6%;


        .xicon:hover {
            cursor: pointer;
        }
    }

    .button-link {
        flex-basis: 100%;
        justify-self: flex-end;
        align-self: flex-end;
        margin-top: 3%;
        margin-bottom: 5%;
    }

    .informations {
        padding-left:2%;
        text-align: left;
        flex-basis: 90%;

    }

    .title{
        align-self: center;
    }

    .author{
        align-self: flex-end;
        
        
    }

}
</style>