import {Ingredient} from "./Ingredient";
import {Step} from "./Step";
import { UserDto } from "./UserDto";

export  interface Recipe  {
    id: number;
    name: string;
    ingredients: Array<Ingredient>;
    imageUrl:string,
    description: string;
    steps: Array<Step>
    user: UserDto
}