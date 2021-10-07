<template>
    <section class="home container" id="home">
      <img src="../assets/img/Asset2.png" alt="" class="home__img" />
      <div class="home__container bd-grid">
        <div class="home__data" :key="datat">
            <div class="home__data-title">REMPAH</div>
            <div class="home__data-subtitle">
              Get to know Indonesian seasonings
            </div>
            <router-link :to="nextRoute" class="home__button"><img class="animate__animated animate__fadeIn home__button animate__delay-1s" src="../assets/img/buttonkanan1.svg" alt=""></router-link>
        </div>
      </div>
    </section>
</template>

<script>
import gsap from "gsap";
import HttpClient from '../config/HttpConfig';

export default {
  name: "LandPage",
  data() {
    return{
       nextRoute: '/map',
    }
  },
  mounted(){

    HttpClient
      .get('landing')
      .catch((err) => {
        console.log(err);
        if(err.response.status == 400 && err.response.data.status == 1) {
          this.nextRoute = "/register"
        }
      })


    gsap.from('.home__data-title, .home__data-subtitle',{
      opacity: 0,
      y: -100,
      duration: 1,
    }),
    gsap.from('.home__button',{
      opacity: 0,
      duration: 0.5,
      delay: 1
    })
  },
  nextbtn: function(){
            gsap.fromTo('.home__container',{opacity:1,y:0},{opacity:0,x:-300})
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/stylesheet/style.scss" lang="scss">
</style>
