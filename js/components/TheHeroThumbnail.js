export default {
    name: 'HeroThumb', // you can name it whatever and import it same name in main.js

    props: {
        hero: Object
    },
    template:

        `
    <li>    
            <img :src='"images/" + hero.biopic' alt="hero image" width="150">
            <div class="sprite"></div>
            <div class="red-bumper"></div>
            <h5>{{hero.name}}</h5>
    </li>
`
}