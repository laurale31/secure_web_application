import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
    state: () => {
        return{
            user: {},
            showUser: false
        }
    },
    getters: {
        getShowUser(state){
            return state.showUser
        },
        getUserResponse (state){
            return state.user;
        }
    },
    actions: {
        setShowUser(status){
            this.showUser = status
        },
        submitForm(userAnswers){
            this.user = userAnswers
            this.showUser = true
        },
        clearAllInputs(){
            this.user = {},
            this.showUser = false
        }
    }
})