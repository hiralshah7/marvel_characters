export default {
    name: 'HeroThumb', // you can name it whatever and import it same name in main.js

    emits: ['loadlb'],

    props: {
        hero: Object
    },
    template:

        `
    <li @click="loadLightboxData">    
            <img :src='"images/" + hero.biopic' alt="hero image" width="150">
            <!--<div class="sprite"></div>-->
            <div class="red-bumper"></div>
            <h5>{{hero.name}}</h5>
    </li>
        `,
    methods: {
        loadLightboxData() {
            // pass the indvidual hero object back to thhe main vw instance 
            this.$emit('loadlb', this.hero);
        }
    }

}