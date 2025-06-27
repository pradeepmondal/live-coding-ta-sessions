import { ConditionalComponent } from "./components.js"


const app = new Vue({
    
    el: '#app',
    components: {
        ConditionalComponent
    },
    data: {
        password: '',

    },

    computed: {
        uStyleObject() {
            if(this.password.match(/[A-Z]/)){
                return { 'background-color': 'green' }
            }
            else {
                return { 'background-color': 'red' }
            }
        },

        lStyleObject() {
            if(this.password.match(/[a-z]/)){
                return { 'background-color': 'green' }
            }
            else {
                return { 'background-color': 'red' }
            }
        },

        nStyleObject() {
            if(this.password.match(/[0-9]/)){
                return { 'background-color': 'green' }
            }
            else {
                return { 'background-color': 'red' }
            }
        },

        sStyleObject() {
            if(this.password.match(/[!@#$%^&*(),.?":{}|<>]/)){
                return { 'background-color': 'green' }
            }
            else {
                return { 'background-color': 'red' }
            }
        },

    }
})

