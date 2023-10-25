<!--HTML BLOCK-->
<template>
    <div class="pizza-item">
    
      <!--Create a template for each pizza that has a name, types, and description-->
      <slot name="image"></slot>
      <h2>{{ name }}</h2>
      <h4>{{ type }}</h4>
      <slot name="description"></slot>

      <!--Emit event when clicking the button-->
      <div class="status">
        <button @click="$emit('pizzaChosen', name)" class="choose-button">
          Add to Cart
        </button>
      </div>
    </div>
  </template>



  
  <!--SCRIPT BLOCK-->
  <script>
  export default {

    //passing props to name and type
    props: ['name', 'type'],
    emits: ['pizzaChosen'],

  }
  </script>



  <!-- CSS BLOCK -->
  
  <style>

/* Style pizza item
   Place each pizza in a box
 */

  .pizza-item {
    text-align: center;
    padding: 20px;
    border: 1px solid #ddd; 
    border-radius: 10px;
    margin: 10px;
    background-color: #fff; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Resize each heading to fit the audience's view
 */
 
  h2 {
    font-size: 24px;
    margin: 10px 0;
  }
  
  h4 {
    font-size: 18px;
    margin: 10px 0;
  }
  
  
/* Style the button and change color when hovering*/
  .choose-button {
    background-color: #FFA500; 
    color: #fff; 
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .choose-button:hover {
    background-color: #FF7F00; 
  }
  </style>
  