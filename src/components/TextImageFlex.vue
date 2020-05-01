<template>
  <div class="text-img-flex wrapper">
    <div class="text-img-flex__item" :class="type" data-aos="slide-up" data-aos-once="true">
      <h2>{{ text.title[lang] }}</h2>
      <p>La station de Verbier offre un terrain de jeu varié, adapté à tous les niveaux</p>
      <p>Freeride sécurisé sur Verbier et ses alentours</p>
      <p>Snowpark</p>
      <p>Evenements en station</p>
      <button class="btn btn__primary">{{ text.button[lang] }}</button>
    </div>
    <div class="text-img-flex__item" :class="type + '-shadow'"></div>
    <div
      class="text-img-flex__item text-img-flex__item_image"
      :class="type + '-image'"
      data-aos="slide-up"
      data-aos-once="true"
    ></div>
  </div>
</template>

<script>
export default {
  name: "TextImageFlex",
  props: {
    type: String,
    lang: String
  },
  data() {
    return {
      text: {
        title: {
          en: "Unique playground",
          fr: "Un domaine spectaculaire"
        },
        parag: [
          {
            en: "La station de Verbier offre un terrain de jeu varié, adapté à tous les niveaux",
            fr: ""
          },
          {
            en: "",
            fr: "Freeride sécurisé sur Verbier et ses alentours"
          },
          {
            en: "Snowpark",
            fr: "Snowpark"
          },
          {
            en: "Evenements en station",
            fr: "Evenements en station"
          }
        ],
        button: {
          en: "Learn more",
          fr: "En savoir plus"
        }
      }
    };
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
      @include font(80px, 900, 70px);
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
    &.first-shadow {
      position: absolute;
      background-color: $primaryDark;
      opacity: 0.4;
      right: 100px;
      z-index: 1;
      width: 70%;
      margin-top: 50px;
    }
    &.first-image {
      background-image: url("~@/assets/banner4.jpg");
      right: 0;
      width: 100%;
      margin-left: -200px;
    }
    &.second {
      width: 65%;
      color: $greyLight;
      padding: 50px;
      // padding-top: 0px;
      margin-top: 50px;
      margin-bottom: -50px;
      z-index: 10;
      background-color: $transparentColor;
      p {
        padding-right: 200px;
      }
    }
    &.second-shadow {
      position: absolute;
      background-color: $primaryDark;
      opacity: 0.4;
      right: 100px;
      z-index: 1;
      width: 70%;
      margin-top: 50px;
    }
    &.second-image {
      position: absolute;
      z-index: 2;
      background-image: url("~@/assets/banner4.jpg");
      right: 0;
      width: 60%;
    }
  }
}
</style>
