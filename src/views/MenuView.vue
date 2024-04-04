<template>
  <div class="menu">
    <h1 class="menu-title">Our Menu</h1>

    <!-- Boba Drinks Section -->
    <section class="menu-section">
      <h2 class="section-title">Boba Drinks</h2>
      <div class="menu-items">
        <MenuItem v-for="drink in bobaDrinks" 
                  :name="drink.name"
                  :price="drink.price" :key="drink.id" class="menu-item">
          <template #image>
            <img :src="drink.image" :alt="drink.name" class="item-image">
          </template>

        </MenuItem>
      </div>
    </section>

    <!-- Toppings Section -->
    <section class="menu-section">
      <h2 class="section-title">Toppings</h2>
      <div class="menu-items">
        <MenuItem v-for="topping in toppings" 
                  :name="topping.name"
                  :price="topping.price" :key="topping.id" class="menu-item">
          <template #image>
            <img :src="topping.image" :alt="topping.name" class="item-image">
          </template>

      </MenuItem>
      </div>
    </section>
  </div>
</template>

<script>
import MenuItem from '/src/components/MenuItem.vue';

export default {
  name: 'Menu',
  components:{
    MenuItem
  },
  data() {
    return {
      bobaDrinks: [
        {
          id: 1,
          name: 'Matcha Boba',
          image: require('../assets/drink1.jpeg'), 
          price: 7.00
        },
        {
          id: 2,
          name: 'Classic Boba',
          image: require('../assets/drink2.jpeg'),
          price: 7.00
        },
        {
          id: 3,
          name: 'Strawberry Boba',
          image: require('../assets/drink3.jpeg'),
          price: 7.00
        }
      ],
      toppings: [
        {
          id: 1,
          name: 'Tapioca Pearls',
          image: require('../assets/tapioca.jpeg'),
          price: 0.5
        },
        {
          id: 2,
          name: 'Pudding',
          image: require('../assets/pudding.jpeg'),
          price: 0.5
        },
        {
          id: 3,
          name: 'Grass Jelly',
          image: require('../assets/grass jelly.jpeg'),
          price: 0.5
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Styles for the whole menu component */
/* ... */
@import '@/assets/menu-styles.css';
.menu-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 15px;
}

.menu-items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.menu-item {
  text-align: center;
  width: 200px;
  margin-bottom: 20px;
}

.item-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}

.item-name {
  font-weight: bold;
}
</style>