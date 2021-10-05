<template>
  <div
    class="popup"
    :style="transformElement"
  >
    <div class="popup__header">
        <img :src="spice.photo[0].photo_url" alt="" class="icon">
        <div class="popup__header--title">{{ spice.name }}</div>
        <div class="popup__header--subtitle">{{ province.name }}</div>
        <router-link :to="path"><div class="popup__header--link">Show More</div></router-link>
    </div>
    <div class="popup__dot"></div>
  </div>
</template>

<script>
export default {
  props: {
    coordinate: Object,
    spice: Object,
    province: Object
  },
  data() {
    return {
      transformation: `transform: translate(${this.coordinate.x}px,${this.coordinate.y}px)`,
      path: '/post/'+this.spice.id
    };
  },
  computed: {
    transformElement() {
      return this.transformation;
    },
  },
  watch: {
    coordinate: {
      deep: true,
      handler(newVal) {
        console.log(newVal);
        this.transformation = `transform: translate(${newVal.x}px,${newVal.y}px)`;
      },
    },
  },
  mounted() {
    console.log(this.province)
  }
};
</script>

<style>
</style>