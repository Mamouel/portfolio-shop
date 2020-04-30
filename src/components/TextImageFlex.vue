<template>
  <div class="text-img-flex wrapper">
    <div class="text-img-flex__item" :class="type" data-aos="slide-right">
      <h2>Un domaine hallucinant</h2>
      <p>La station de Verbier offre un terrain de jeu varié, adapté à tous les niveaux</p>
      <p>Freeride sécurisé sur Verbier et ses alentours</p>
      <p>Snowpark</p>
      <p data-aos="fade">Evenements en station</p>
      <button class="btn btn__primary">En savoir plus</button>
    </div>
    <div class="text-img-flex__item text-img-flex__item_image" :class="type + '-image'" data-aos="slide-left"></div>
  </div>
</template>

<script>
export default {
  name: "TextImageFlex",
  props: {
    type: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.text-img-flex {
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  &__item {
    width: 50%;
    height: 100%;
    padding: 100px;
    // box-sizing: border-box;
    @include mq(l) {
      padding: 60px;
    }
    @include mq(s) {
      padding: 30px;
    }
    h2 {
      margin-bottom: 30px;
      @include font(60px, 900, 50px);
      @include mq(m) {
        @include font(20px, 900, 20px);
      }
    }
    &_image {
      @include background;
      background-image: url("~@/assets/banner2.jpg");
      height: auto;
      padding: 0;
      min-height: 600px;
      @include mq(m) {
        display: none;
      }
    }
    &.first {
      // width: 60%;
      color: $white;
      padding: 50px;
      // padding-top: 0px;
      margin-top: -50px;
      margin-bottom: -50px;
      z-index: 10;
      background-color: $primaryDark;
      p {
        // padding-right: 100px;
      }
    }
    &.first-image {
      // position: absolute;
      background-image: url("~@/assets/banner4.jpg");
      right: 0;
      width: 100%;
      margin-left: -200px;
    }
  }
}
</style>
