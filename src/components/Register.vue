<template>
  <main>
        <section class="reg-name">
            <div class="reg-name-container">
                Hello
                <form>
                    <input type="text" v-model="name" placeholder="Enter your name" required/>
                    <button type="submit" id="submit" @click.prevent="addVisitor()">Go to Maps</button>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
import gsap from "gsap";
import HttpClient from '../config/HttpConfig';

export default {
  name: "Register",
  data(){
      return {
          name: ""
      }
  },
  mounted(){
      gsap.fromTo('.reg-name-container',{opacity:0},{opacity:1,delay:0.3})
  },
  methods: {
      addVisitor() {
          HttpClient
            .post('visitor', {name: this.name})
            .then((res) => {
                localStorage.setItem('visitor-id', res.data.user.id);
                this.$router.push('map');
            })
            .catch((err) => {
                console.log(err);
                window.alert(err);
            })
      }
  }
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/stylesheet/style.scss" lang="scss">
</style>
