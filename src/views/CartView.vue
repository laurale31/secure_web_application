<template>
  <div v-if="showCategories" class="category-info">
    <h1>Ingredient information</h1>
    <h4>Drink: {{ milktea }}</h4>
    <p>Price: {{ price }}, Ingredient's source from {{ country }}</p>
    <button class="return-button" @click="showCategories=false">Return to main page</button>
  </div>

  <div v-else>
    <h1>Order</h1>
    <form @submit.prevent="addItem" class="item-form">
      <div class="milktea">
        <h5>Choose your drink</h5>
      </div>
      <div class="milktea-choice">
        <select v-model="milktea" name="dropdown">
          <option disabled value="">please select one answer</option>
          <option value="Classic Milk Tea">Classic Milk Tea</option>
          <option value="Matcha Milk Tea">Matcha Milk Tea</option>
          <option value="Strawberry Milk Tea">Strawberry Milk Tea</option>
        </select>
      </div>
      <div class="topping">
        <h5>Choose your topping</h5>
      </div>
      <div class="topping-choice">
        <select v-model="topping" name="dropdown">
          <option disabled value="">please select one answer</option>
          <option value="Pearl">Pearl</option>
          <option value="Grass Jelly">Grass Jelly</option>
          <option value="Pudding">Pudding</option>
        </select>
      </div>
      <div class="sugar">
        <h5>Sugar level</h5>
      </div>
      <div class="sugar-choice">
        <select v-model="sugar" name="dropdown">
          <option disabled value="">please select one answer</option>
          <option value="70%">70%</option>
          <option value="50%">50%</option>
          <option value="30%">30%</option>
        </select>
      </div>
      <div class="quantity">
        <h5>Quantity</h5>
      </div>
      <div class="quantity-answer">
        <input type="text" v-model="quantity">
      </div>
      <button type="submit" class="add-button">Add</button>
    </form>

    <div v-for="i in array" :key="i.id" class="card">
      <h5>{{ i.quantity }} {{ i.milktea }} </h5>
      <h5>Topping: {{ i.topping }}</h5>
      <h5>Sugar level: {{ i.sugar }}</h5>
      <h5>Price: $7.5 each</h5>
      <button @click="displayCategory(i.milktea)">{{ i.milktea }}</button>
      <button @click="deleteItem(i.id)" class="delete-button"> &cross; </button>
    </div>

    <p class="total">Total: {{ computeTotal() }}</p>
  </div>
</template>

  
  <script>
  import {addDoc, collection, doc, onSnapshot, querySnapShot, deleteDoc, getDoc} from 'firebase/firestore'
  import db from '../Firebase/init.js'
  
  
  export default {
    name: 'App',
  
    data(){
      return{
        topping: "",
        milktea: "",
        quantity: 0,
        sugar:"",
        price: 0,
        country: "",
        array: [],
        showCategories: false
  
      }
    },
    mounted(){
      console.log("mounted")
  
      onSnapshot(collection(db, 'items'), (querySnapShot) => {
        const newarray = []
  
        querySnapShot.forEach((doc) =>{
          const newlist={
            id: doc.id,
            topping: doc.data().topping,
            milktea: doc.data().milktea,
            quantity: doc.data().quantity,
            sugar: doc.data().sugar
          }
          newarray.push(newlist)
        })
        this.array= newarray;
      })
      this.computeTotal();
    },
    methods: {
      addItem(){
        addDoc(collection(db, 'items'), {
          milktea: this.milktea,
          topping: this.topping,
          sugar: this.sugar,
          quantity: this.quantity
        });
        milktea: "";
          topping: "";
          sugar: "";
          quantity: 0;
      },
      deleteItem(id){
        deleteDoc(doc (collection(db, 'items'), id))
      },
      computeTotal(){
        let total = 0;
        this.array.forEach((i) => {
          total += 7.5 * this.quantity;
        });
        return total;
      },
      async displayCategory(category){
        this.showCategories = true
        this.milktea = category
  
        const docSnap = await getDoc(doc(db,'ingredient',category));
        if(docSnap.exists()){
          this.price = docSnap.data().price
          this.country = docSnap.data().country
        }
        else{
          console.log('Category not found in db')
        }
      }
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
    margin-top: 60px;
  }
  
  .category-info {
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.category-info h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.category-info p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.return-button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.return-button:hover {
  background-color: #27ae60;
}

.item-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.add-button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.add-button:hover {
  background-color: #2980b9;
}

.card {
  width: 18rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.delete-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 10px;
}

.delete-button:hover {
  background-color: #c0392b;
}

.total {
  font-size: 1.5rem; 
  margin-top: 20px; 
  font-weight: bold; 
  color: #3498db; 
}
  
  
  </style>
  