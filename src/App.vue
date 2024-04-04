<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink> 
        <RouterLink to="/menu" class="nav-link">Menu</RouterLink>
        <RouterLink to="/cart" class="nav-link">Order</RouterLink>
        <RouterLink to="/user" class="nav-link">Delivery</RouterLink>
      </nav>
    </header>

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #333;
  color: #fff;
  padding: 13px 0;
  margin-top: -60px;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 25px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #42b983;
}

.router-link-exact-active {
  color: #42b983;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
