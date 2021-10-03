<template>
  <main>
        <section class="reg-name">
            <div class="reg-name-container">
                Hello
                <form>
                    <input type="text" placeholder="Enter your name" required/>
                    <button type="submit" id="submit">Go to Maps</button>
                </form>
            </div>
        </section>
    </main>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Register",
  mounted(){
      gsap.fromTo('.reg-name-container',{opacity:0},{opacity:1,delay:0.3})
  },
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/stylesheet/style.scss" lang="scss">
</style>
