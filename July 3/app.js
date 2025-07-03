import { LifeCycleComponent } from "./components.js"


const app = new Vue({
    
    el: '#app',

    components: {
        LifeCycleComponent

    },
    data: {
        search_param: '',
        search_results: []

    },

    methods: {
        search : async function() {
            let search_param = this.search_param;

            const res = fetch(`https://hn.algolia.com/api/v1/search?query=${search_param}`,
                                    {
                                        method: 'GET'
                                    }
                                )

            

            await res.then(res => res.json())
            .then(data => this.search_results.push(...data.hits))
            


                }
            }

})

