<template>

    <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script>
// import animate from "animate.css"
// export default {

// }
</script>


<style>
/* route transitions */
.route-enter-from {
  opacity: 0;
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>
