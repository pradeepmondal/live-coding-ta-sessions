

export const LifeCycleComponent = Vue.component('lifecycle-comp', {
    props: ['comp_name'],
    template: `<label>{{ comp_name }}</label>`,

    
    beforeCreate() {
        console.log('comonent will get created')
    },

    created() {
        console.log(`${this.comp_name} created`)
    },
    mounted() {
        console.log(`${this.comp_name} mounted`)
    },
    updated() {
        console.log(`${this.comp_name} updated`)
    },
    updated() {
        console.log(`${this.comp_name} updated`)
    },
    beforeDestroy() {
        
    }
    // destroyed() {
    //     console.log(`${this.comp_name} destroyed`)
    // }


   
})


