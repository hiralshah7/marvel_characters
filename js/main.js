(() => {
    // create vue instance here
    const { createApp } = Vue

    // this will be a fetch call which will always be same 
    // if this is call from index.php then it will be ./includes/index.php

    createApp({
        created() {
            // fetch calls always go here : bringing any remote data you need+
            fetch('./data.json') // will go and will get the remote data
                .then(res => res.json()) // convert the json object to plane js object
                .then(data => this.heroData = data) // store the data in the vue instance or the console instance
                .catch(error => console.error(error)); // report any error that might occur

        },

        data() {
            return {
                heroData: {}
            }
        }
    }).mount('#app')
})()