export const ConditionalComponent = Vue.component('conditional-component', {
    props: ['condition_name'],
    template: `<label>{{ condition_name }}</label>`,

    data() {}


   
})

