
<template>
  <div class="container">
    <h1 class="logo">Slice & Spice</h1>
  <header>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink> 
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/menu" class="nav-link">Menu</RouterLink>
      <RouterLink to="/user" class="nav-link">User Register</RouterLink>
    </nav>
  </header>

    <RouterView />
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

