export default {
    name: 'TheLightboxComponent',
    props: ['hero'],
    template: `
    <section class="lightbox">
    <!-- validate data goes here -->
    <!--<pre>{{ hero }}</pre>-->
    <!-- remove when working --> 
    
    
    <img @click="closeLB" src="images/closeIcon.png" class="lightbox_close">


    <!-- hero image on the left, text on the right -->
    <!-- her image is a background image -->
    <article>
        <h3 class="lb_heading">{{ hero.name }}</h3>
        <p class="lb_text">
          {{ hero.id }}
        </p>
        <p class="lb_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat totam, unde quam aspernatur quasi delectus sed earum nobis voluptate voluptas suscipit repudiandae explicabo placeat numquam error. Praesentium, quisquam illum.
        </p>
        <img :src='"images/" + hero.lbBG' :alt="'prof.name'">
    </article>
</section>
    `,
    methods: {
        closeLB() {
            // debugger;
            this.$emit('closelb');
        }
    }
}