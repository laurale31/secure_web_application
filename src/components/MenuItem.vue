<!--HTML BLOCK-->
<template>
    <div class="boba-item">
      <slot name="image"></slot>
      <h3>{{ name }}</h3>
      <p>${{ price }}</p>

    </div>
  </template>



  
  <!--SCRIPT BLOCK-->
  <script>
  export default {
    //passing props to name and price
    props: ['name','price']

  }
  </script>