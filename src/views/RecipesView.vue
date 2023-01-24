<template>
    <n-space vertical size="large">
        <n-layout has-sider style="height: 240px">
            <n-layout-sider content-style="padding: 24px;">

                <div class="category" v-for="(category, index) in Categories" :key=index>
                    <n-h2>{{ category.name }}</n-h2>
                    <n-tag v-model:checked="ingredient.checked" checkable v-for="ingredient in category.Ingredients"
                        :key=ingredient.id>

                        {{ ingredient.name }}

                    </n-tag>
                </div>

            </n-layout-sider>

            <template v-for="(recipe, index) in Recipes" :key="index">
                <n-card :title="recipe.name">
                    <n-image width="200" v-if="recipe.imageURL" :src="recipe.imageURL" />

                </n-card>

                

            </template>
        </n-layout>
    </n-space>
</template>


<script lang="ts">

export default {
    data() {
        return {
            Categories: [{

                "name": "Warzywa",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Marchewka",
                        "checked": false
                    },
                    {
                        "id": 1,
                        "name": "Seler",
                        "checked": true
                    },
                    {
                        "id": 2,
                        "name": "Pietruszka",
                        "checked": true
                    },
                    {
                        "id": 3,
                        "name": "Ziemniaki",
                        "checked": false
                    },
                    {
                        "id": 4,
                        "name": "Brokuł",
                        "checked": false
                    },
                    {
                        "id": 5,
                        "name": "Groszek",
                        "checked": false
                    },
                    {
                        "id": 6,
                        "name": "Cebula",
                        "checked": false
                    },
                    {
                        "id": 7,
                        "name": "Ogórek",
                        "checked": false
                    },
                    {
                        "id": 8,
                        "name": "Seler",
                        "checked": false
                    }
                ]
            },
            {
                "name": "Owoce",
                "Ingredients": [
                    {
                        "id": 10,
                        "name": "Banan",
                        "checked": false
                    },
                    {
                        "id": 11,
                        "name": "Jabłko",
                        "checked": false
                    },
                    {
                        "id": 12,
                        "name": "Gruszka",
                        "checked": false
                    },
                    {
                        "id": 13,
                        "name": "Śliwka",
                        "checked": false
                    },
                    {
                        "id": 14,
                        "name": "Arbuz",
                        "checked": false
                    },
                    {
                        "id": 15,
                        "name": "Winogrono",
                        "checked": false
                    },
                    {
                        "id": 16,
                        "name": "Cytryna",
                        "checked": false
                    },
                    {
                        "id": 17,
                        "name": "Ananas",
                        "checked": false
                    },
                    {
                        "id": 18,
                        "name": "Brzoskwinia",
                        "checked": false
                    },
                    {
                        "id": 19,
                        "name": "Pomarańcza",
                        "checked": false
                    }
                ]
            },
            {
                "name": "Zboża",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Mąka",
                        "checked": false
                    },
                    {
                        "id": 1,
                        "name": "Płatki Owsiane",
                        "checked": false
                    }
                ]
            },

            {
                "name": "Nabiał",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Jajka",
                        "checked": false
                    },
                    {
                        "id": 1,
                        "name": "Twaróg",
                        "checked": false
                    },
                    {
                        "id": 2,
                        "name": "Mleko",
                        "checked": false
                    },
                    {
                        "id": 3,
                        "name": "Maślanka",
                        "checked": false
                    }
                ]
            },

            {
                "name": "Przyprawy",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Sól",
                        "checked": false
                    },
                    {
                        "id": 1,
                        "name": "Pieprz",
                        "checked": false
                    },
                ]
            },

            {
                "name": "Spulchniacze",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Drożdże",
                        "checked": false
                    }
                ]
            },

            {
                "name": "Grzyby",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Kurka",
                        "checked": false
                    }
                ]
            },

            {
                "name": "Tłuszcze",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Olej Rzepakowy",
                        "checked": false
                    }
                ]
            },

            {
                "name": "Woda",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Woda",
                        "checked": false
                    }
                ]
            },

            {
                "name": "Sosy",
                "Ingredients": [
                    {
                        "id": 0,
                        "name": "Majonez",
                        "checked": false
                    }
                ]
            }
            ],
            Recipes: [
                {
                    "name": "Naleśniki",
                    "steps": [
                        {
                            "id": 0,
                            "oneStep": "Wszystkie składniki dodać razem do miski i wymieszać"
                        },
                        {
                            "id": 1,
                            "oneStep": "Rozgrzać patelnię i dodać małą ilość oleju"
                        },
                        {
                            "id": 2,
                            "oneStep": "Wlać chochlą na patelnię przygotowane ciasto naleśnikowe"
                        },
                        {
                            "id": 3,
                            "oneStep": "Smażyć naleśnika z każdej strony od 1-2 minut"
                        }
                    ],
                    "timers": [
                        {
                            "id": 0,
                            "time": "string"
                        }
                    ],
                    "imageURL": "https://media.discordapp.net/attachments/1034821971013287979/1067164098552397934/nalesniki.jpg",
                    "originalURL": "string",
                    "ingredients": [
                        {
                            "ingredientId": 20,
                            "quantity": "1,5 szklanki"
                        },
                        {
                            "ingredientId": 21,
                            "quantity": "2"
                        },
                        {
                            "ingredientId": 23,
                            "quantity": "1 szklanka"
                        },
                        {
                            "ingredientId": 31,
                            "quantity": "1 szklanka"
                        },
                        {
                            "ingredientId": 30,
                            "quantity": "2 łyżki"
                        },
                        {
                            "ingredientId": 25,
                            "quantity": "szczypta"
                        }
                    ]
                },
                {
                    "name": "Sałatka owocowa",
                    "steps": [
                        {
                            "id": 0,
                            "oneStep": "Umyj starannie owoce aby były czyste"
                        },
                        {
                            "id": 1,
                            "oneStep": "Obierz pomarańczę, banana oraz jeśli chcesz możesz obrać ze skórki pozostałe owoce (Pamiętaj jednak, że skórka w owocach zawiera wiele witamin dlatego warto ją jednak zostawić! )"
                        },
                        {
                            "id": 2,
                            "oneStep": "Wszystkie owoce (oprócz cytryny) pokrój w kosteczkę oraz włóż do miski"
                        },
                        {
                            "id": 3,
                            "oneStep": "Po pokrojeniu wszystkich owoców skrop je sokiem z cytryny aby na dłużej zachować świeżość sałatki, a następnie wszystko dokładnie wymieszaj"
                        },
                        {
                            "id": 4,
                            "oneStep": "Rozłóż do osobnych miseczek owoce wedłóg uznania, sałatka owocowa jest już gotowa!"
                        }
                    ],
                    "timers": [
                        {
                            "id": 0,
                            "time": "string"
                        }
                    ],
                    "imageURL": "https://media.discordapp.net/attachments/1034821971013287979/1067164567622406237/image.png",
                    "originalURL": "string",
                    "ingredients": [
                        {
                            "ingredientId": 10,
                            "quantity": "2"
                        },
                        {
                            "ingredientId": 11,
                            "quantity": "1"
                        },
                        {
                            "ingredientId": 12,
                            "quantity": "1"
                        },
                        {
                            "ingredientId": 15,
                            "quantity": "kiść"
                        },
                        {
                            "ingredientId": 18,
                            "quantity": "1"
                        },
                        {
                            "ingredientId": 19,
                            "quantity": "1"
                        },
                        {
                            "ingredientId": 16,
                            "quantity": "ćwiartka"
                        }
                    ]
                },
                {
                    "name": "Sałatka Jarzynowa",
                    "steps": [
                        {
                            "id": 0,
                            "oneStep": "Jajka ugotuj na twardo. Oddzielnie ugotuj umyte, ale nieobrane ziemniaki. W kolejnym garnku ugotuj oczyszczone marchewki, pietruszki i seler lub wykorzystaj warzywa z wcześniej przyrządzanego wywaru czy rosołu."
                        },
                        {
                            "id": 1,
                            "oneStep": "Po ostudzeniu obierz jajka i ziemniaki. Je, inne ugotowane warzywa oraz kiszone ogórki i jabłko pokrój w kostkę. Cebulę drobno posiekaj."
                        },
                        {
                            "id": 2,
                            "oneStep": "Groszek odsącz z zalewy."
                        },
                        {
                            "id": 3,
                            "oneStep": "Połącz wszystkie składniki, dodaj do nich Majonez oraz dopraw całość solą i pieprzem do smaku. Całość dokładnie wymieszaj."
                        },
                        {
                            "id": 4,
                            "oneStep": "Sałatkę podawaj schłodzoną. Możesz udekorować ją natką pietruszki i cząstką jajka na twardo."
                        }
                    ],
                    "timers": [
                        {
                            "id": 0,
                            "time": "string"
                        }
                    ],
                    "imageURL": "https://media.discordapp.net/attachments/1034821971013287979/1067164101459058759/salatka_jarzynowa_01.png",
                    "originalURL": "string",
                    "ingredients": [
                        {
                            "ingredientId": 0,
                            "quantity": '4 Łyżki'
                        },
                        {
                            "ingredientId": 1,
                            "quantity": '2 Sztuki'
                        },
                        {
                            "ingredientId": 3,
                            "quantity": '2 Sztuki'
                        },
                        {
                            "ingredientId": 2,
                            "quantity": '1 Sztuka'
                        },
                        {
                            "ingredientId": 4,
                            "quantity": '3 Sztuki'
                        },
                        {
                            "ingredientId": 21,
                            "quantity": '4 Sztuki'
                        },
                        {
                            "ingredientId": 11,
                            "quantity": '1 Sztuka'
                        },
                        {
                            "ingredientId": 8,
                            "quantity": '2 Sztuki'
                        },
                        {
                            "ingredientId": 7,
                            "quantity": '1 Sztuka'
                        },
                        {
                            "ingredientId": 6,
                            "quantity": '1 Puszka'
                        },
                        {
                            "ingredientId": 25,
                            "quantity": '1 Szczypta'
                        },
                        {
                            "ingredientId": 26,
                            "quantity": '1 Szczypta'
                        }
                    ]
                }
            ]

        }
    },
    computed: {},
    methods: {}

}
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
