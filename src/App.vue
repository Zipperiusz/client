<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <nav>
          <router-link to="/" style="text-decoration: none">Home</router-link> |
          <router-link to="/recipesView" style="text-decoration: none">Przepisy</router-link> |
          <router-link to="/addRecipe" style="text-decoration: none">Stwórz przepis</router-link> |
          <router-link v-if="!isLoggedIn" to="/login" style="text-decoration: none">Login</router-link>
          <router-link v-if="isLoggedIn" to="/logout" style="text-decoration: none">Logout</router-link>
        </nav>
        <div id="lol"></div>
      </n-layout-header>
      <n-layout class="in_container">
        <n-layout-content>
          <router-view />
        </n-layout-content>
      </n-layout>
      <n-layout-footer>stopka</n-layout-footer>
    </n-layout>
  </n-space>
</template>

<script lang="ts">
import { useStorage } from '@vueuse/core'
import { useLocalStorage } from '@vueuse/core'
import { useRouter } from 'vue-router';
import { authService } from './services/auth.service';
export default {

  setup() {
    return {
      isLoggedIn: authService.isLoggedIn
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.n-layout {
  background-color: #f7f6e6;
}

.n-layout-content {
  background-color: white;
  border: solid black;
  border-width: 0px 2px 0px 2px;
  margin: 0 10%;
  padding: 2%;
}

.n-layout-footer {
  width: 100%;
  background-color: gray;
}

nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  background-color: #f7f6e6;
}

#lol {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-size: cover;
  background-image: url(./assets/pexels-chan-walrus-958545.jpg);
}
</style>