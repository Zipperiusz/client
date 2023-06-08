import {Ingredient} from "./Ingredient";
import {Step} from "./Step";

export  interface Recipe  {
    id: number;
    name: string;
    ingredients: Array<Ingredient>;
    imageUrl:string,
    description: string;
    steps: Array<Step>
    username: string
}