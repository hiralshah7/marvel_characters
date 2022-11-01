export default {
    name: 'HeroThumb', // you can name it whatever and import it same name in main.js

    props: {
        hero: Object
    },
    template:

        `
    <li>
            <!-- <img class="sprite" src="" alt="hero image"> -->
            <div class="sprite"></div>
            <div class="red-bumper"></div>
            <h5>name</h5>
    </li>
`
}