<template>
    <div class="card-container">
        <div class="icon-section" @click="favorite = !favorite">
            <Icon color="red" size="20">
                <StarRegular v-if="!favorite" />
                <Star v-if="favorite" />
            </Icon>
        </div>
        <div class="title">{{ item.name }}</div>
        <div class="image">
            <img :src="item.imageUrl" />
        </div>
        <div class="informations">
            <span>Czas przygotowania: </span>
            <span v-if="time.hours > 0">{{ time.hours }} h </span>
            <span v-if="time.minutes > 0"> {{ time.minutes }} min </span>
            <span v-if="time.seconds > 0"> {{ time.seconds }} sec </span>
        </div>
        <div class="button-link">
            <n-button @click="calculateTime" type="info">Czytaj dalej...</n-button>
        </div>
    </div>
</template>

<script lang="ts">
import { StarRegular, Star } from '@vicons/fa';
import { Icon } from '@vicons/utils'
import { defineComponent, ref } from 'vue';

import { Recipe } from '@/types/Recipe';
import { Step } from '@/types/Step';



export default defineComponent({
    components: {
        Icon,
        StarRegular,
        Star
    },
    props: {
        item: {
            type: Object as () => Recipe,
            required: true
        }
    },
    setup(props) {
        let favorite = ref(false);
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

            console.log(time.value);
        }

        return {
            calculateTime, time, favorite
        }
    }
})


</script>

<style lang="scss" scoped>
.card-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    min-height: 450px;
    min-width: 250px;
    max-width: 350px;
    border: 1px solid black;
    flex-wrap: wrap;
    padding: 15px;
    border-radius: 5% 5% 40% 40%;

    .image {
        flex-basis: 100%;

        img {
            min-width: 250px;
            max-width: 300px;
            aspect-ratio: 16/9;
        }
    }

    .icon-section {

        text-align: end;
        flex-basis: 100%;

        .xicon:hover {
            cursor: pointer;
        }
    }

    .button-link {
        flex-basis: 100%;
        justify-self: flex-end;
        align-self: flex-end;
    }

}
</style>