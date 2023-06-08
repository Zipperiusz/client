import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AddRecipeView from '../views/AddRecipeView.vue';
import RecipesView from '../views/RecipesView.vue';
import RecipeView from '../views/RecipeView.vue';
import LogoutView from '../views/LogoutView.vue';
import UserView from '../views/UserView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/addRecipe',
    name: 'addRecipe',
    component: AddRecipeView
  },
  {
    path: '/recipesView',
    name: 'recipesView',
    component: RecipesView
  },
  {
    path: '/recipeView',
    name: 'recipeView',
    component: RecipeView
  },
  {
    path: '/logout',
    name: 'LogoutView',
    component: LogoutView
  },
  {
    path: '/user',
    name: 'UserView',
    component: UserView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
