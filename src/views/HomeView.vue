<template>
  <div class="home-view">
    <!-- Big picture section -->
    <section class="big-picture">
      <img src="../assets/to our.png" alt="Boba Shop" class="big-picture-img">
    </section>

    <!-- Introduction section -->
    <section class="introduction">
      <div class="container">
        <h1 class="intro-title">Welcome to Our Boba Shop!</h1>
        <p class="intro-text">
          Discover the <span class="colorful-text">perfect blend of flavors</span> in every sip! At our boba shop, we craft delightful
          drinks that ignite your taste buds. From <span class="colorful-text">classic favorites</span> to <span class="colorful-text">unique specialties</span>, 
          we've got something for every boba enthusiast.
        </p>
      </div>
    </section>

    <!-- Image gallery section -->
    <section class="image-gallery">
      <div class="container">
        <h2 class="section-title">Explore Our Offerings</h2>
        <div class="image-grid">
          <div class="image-item">
            <img src="../assets/drink1.jpeg" alt="Drink 1">
          </div>
          <div class="image-item">
            <img src="../assets/drink2.jpeg" alt="Drink 2">
          </div>
          <div class="image-item">
            <img src="../assets/drink3.jpeg" alt="Drink 3">
          </div>
        </div>
      </div>
    </section>

    <!-- Story section -->
    <section class="story">
      <div class="container">
        <h2 class="section-title">Our Story</h2>
        <p class="section-content">
          Our journey began with a passion for creating the most <span class="colorful-text">refreshing</span> and <span class="colorful-text">flavorful</span> boba drinks. 
          We started in a small kitchen, experimenting with different combinations of ingredients to 
          achieve the perfect recipes that you enjoy today.
        </p>
        <!-- Add more content if needed -->
      </div>
    </section>

    <!-- Ingredients section -->
    <section class="ingredients">
      <div class="container">
        <h2 class="section-title">Our Ingredients</h2>
        <p class="section-content">
          We carefully select each ingredient to create a <span class="colorful-text">symphony of flavors</span> in every cup. From <span class="colorful-text">premium
          teas</span> and <span class="colorful-text">fresh fruits</span> to the finest <span class="colorful-text">boba pearls</span>, our dedication to <span class="colorful-text">quality</span> shines through in
          every sip you take.
        </p>
        <!-- Add more content if needed -->
      </div>
    </section>

    <!-- Services section -->
    <section class="services">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-content">
          Our commitment extends beyond crafting <span class="colorful-text">delicious drinks</span>. We strive to provide an <span class="colorful-text">exceptional 
          customer experience</span> with <span class="colorful-text">friendly service</span> and a <span class="colorful-text">welcoming atmosphere</span>. Whether you're looking 
          for a quick boba fix or a cozy spot to unwind, our shop is here to serve you.
        </p>
        <!-- Add more content if needed -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
/* Styles for the whole component */


/* Styles for different sections */
.big-picture {
  text-align: center;
  margin-bottom: 40px;
}

.big-picture-img {
  width: 50%;
  max-width: 50%;
  height: auto;
}

.introduction
.story,
.ingredients,
.services,
.image-gallery {
  padding: 60px 20px;
  text-align: center;
}

.section-title {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.section-content {
  font-size: 20px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.colorful-text {
  font-weight: bold;
  color: #FF6F61; 
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.image-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>