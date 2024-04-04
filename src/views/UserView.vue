
<template>
    <div>
        <h1 class="menu-title">Customer information</h1>

        <UserForm/>
    

    <button @click="clearAllInputs">Clear All Inputs</button>

    <div v-if="getShowUser" >
        <h5>Delivery to {{ getUserResponse.name }} </h5>
        <h5>City: {{ getUserResponse.city }}, State: {{ getUserResponse.state }}</h5>
    </div>

    
        
    </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import {userStore} from '@/stores/user.js';
import { mapActions,mapState } from 'pinia';


export default{
    components: {
        UserForm
    },
    computed:{
        ...mapState(userStore,['getUserResponse','getShowUser'])
    },
    methods: {
        ...mapActions(userStore, ['setShowUser', 'clearAllInputs'])
    },
    unmounted() {
        this.clearAllInputs();
    }

}

</script>