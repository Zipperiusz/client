<template>
  <div class="app-container">
    <nav>
      <div class="links">
        <router-link class="link" to="/">Home</router-link> 
        <router-link class="link" to="/recipesView">Przepisy</router-link> 
        <router-link class="link" to="/addRecipe">Stwórz przepis</router-link> 
      </div>
      <div class="logged-in">
        <router-link class="link" v-if="!isLoggedIn" to="/login">Login</router-link>
        <router-link class="link" v-if="isLoggedIn" to="/logout">Logout</router-link>
        <router-link class="link" to="/user" v-if="isLoggedIn">
        Zalogowany: {{ name }} 
        <Icon size="16">
        <User />
      </Icon>
      </router-link>   
      </div>   
    </nav>
    <div id="lol"></div>
    
    <div class="router">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {User} from '@vicons/fa';
import { Icon } from '@vicons/utils'

import { authService } from './services/auth.service';
export default {
  components:{
    Icon,
    User
  },
  
  setup() {
    return {
      isLoggedIn: authService.isLoggedIn,
      name: authService.getName()
    };
  }
}
</script>

<style lang="scss" >
@import '@/assets/styles/variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  nav {
    display: flex;
    justify-content: space-between;

    .links {
      display: flex;
      align-items: center;
    }
    .logged-in {
      display: flex;
      align-items: center;
    }
    .link {
      padding: 20px 15px 20px 15px;
      text-decoration: none;
      font-weight: bold;
      color: #2c3e50;

      &:hover {
        background-color: $default-hover
      }

      &.router-link-exact-active {
        color: $active-link;
      }

    }

  }


  .router{
    display:flex;
    flex: 1;
  }
}



body {
  background-color: $primary-bg;
  height: 100vh;
}

#lol {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-size: cover;
  background-image: url(./assets/pexels-chan-walrus-958545.jpg);
}</style>