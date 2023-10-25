<!-- HTML BLOCK -->
<template>
    <div class="menu">
      <h1>Menu</h1>
      <h2>Items in cart: {{ addItems }}</h2>
      <div id="pizzaList">

      <!--Loop through every pizza to display--> 

        <MenuItem
          v-for="pizza in pizzas"
          :name="pizza.name"
          :type="pizza.type"
          @pizzaChosen="capturePizzaChosen" >

          <!--Call the v-slot from MenuItem to display image and description-->
          <template #image>
            <img :src="pizza.image" class="pizza-image">
          </template>
          <template #description>
            <p class="pizza-description">{{ pizza.description }}</p>
          </template>
        </MenuItem>

      </div>
    </div>
  </template>
  
  <!-- SCRIPT BLOCK -->
  <script>
  import MenuItem from '/src/components/MenuItem.vue';
  
  export default {
    components: {
      MenuItem
    },
    data() {
      return {
        addItems:0,

        // a list of pizzas
        pizzas: [
          {
            name: "Pepperoni Pizza",
            type: "#meat #dairy",
            image: "./src/assets/pizza1.jpg",
            description: "Pepperoni pizza is a classic favorite that tantalizes taste buds with its irresistible combination of flavors. This delectable pizza features a golden, crispy crust generously adorned with zesty tomato sauce, a blanket of gooey mozzarella cheese, and a symphony of savory pepperoni slices."
          },
          {
            name: "Cheese Pizza",
            type: "#vegetarian #dairy",
            image: "./src/assets/pizza2.jpg",
            description: "Cheese pizza, a timeless classic, embodies simplicity at its most delicious. It starts with a perfectly baked crust, golden and crispy, adorned with a generous layer of smooth, melted mozzarella cheese."
          },
          {
            name: "Veggie Pizza",
            type: "#vegetarian #non-dairy",
            image: "./src/assets/pizza3.jpg",
            description: "Veggie pizza is a garden-fresh delight that celebrates the vibrant flavors of nature. At its core, you'll find a wholesome pizza crust, baked to perfection, serving as the canvas for a colorful medley of vegetables."
          }
        ]
      }
    },

    // a lifecycle hook initiates addItems variable to 0
    created() {
      this.addItems=0;
    
    },

    // method emit the alert to clients about the pizza that they chose

    methods: {
      capturePizzaChosen(pizza) {
        alert("You added " + pizza);
        this.addItems++;
      }
    }
  }
  </script>

  <!--CSS BLOCK-->
  
  <style>
 /*Ensure that the heading in the middle*/
  .menu {
    text-align: center;
    padding: 20px;
  }
  
  /*Resize the pizza's image to fit in the audience' view*/

  .pizza-image {
    max-width: 40%;
    height: auto;
    margin-bottom: 10px;
    border: 2px ;
    border-radius: 10px;
  }

 /*Resize the pizza's description to fit in the audience' view*/
  .pizza-description {
    font-size: 16px;
    margin: 0;
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 20px;
    width: fit-content;
    
  }

  
  </style>
  