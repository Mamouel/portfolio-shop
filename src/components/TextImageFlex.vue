<template>
  <div class="text-img-flex">
    <div class="text-img-flex__item" :class="type" data-aos="fade-up" data-aos-once="true">
      <h2>{{ text.title[lang] }}</h2>
      <ul>
        <li v-for="(item, index) in text.parag" :key="index">{{ text.parag[index][lang] }}</li>
      </ul>
      <a
        class="btn btn__primary"
        href="https://www.verbier.ch/ete/"
        target="_blank"
        rel="noopener noreferrer"
      >{{ text.button[lang] }}</a>
    </div>
    <div class="text-img-flex__item" :class="type + '-shadow'"></div>
    <div
      class="text-img-flex__item text-img-flex__item_image"
      :class="type + '-image'"
      data-aos="fade-up"
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
            en:
              "Verbier station offers a various payground, well suited for all levels",
            fr:
              "La station de Verbier offre un terrain de jeu varié, adapté à tous les niveaux"
          },
          {
            en: "Secure freeride on Verbier and surroudings",
            fr: "Freeride sécurisé sur Verbier et ses alentours"
          },
          {
            en: "Snowparks",
            fr: "Snowparks"
          },
          {
            en: "Events",
            fr: "Evènements en station"
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
@import "@/style/_mixins";
@import "@/style/_colors";
.text-img-flex {
  display: flex;
  position: relative;
  width: 100%;
  @include mq(m) {
    flex-direction: column-reverse;
  }
  &__item {
    width: 50%;
    height: 100%;
    padding: 100px;
    @include mq(l) {
      padding: 60px;
    }
    @include mq(m) {
      width: 100%;
    }
    @include mq(s) {
      padding: 30px;
    }
    @include mq(ph) {
      padding: 0px;
    }
    h2 {
      margin-bottom: 30px;
      @include font(60px, 900, 50px);
      // @include font(80px, 900, 70px);
      @include mq(m) {
        @include font(40px, 900, 40px);
      }
      @include mq(s) {
        @include font(30px, 900, 30px);
      }
      @include mq(ph) {
        text-align: center;
      }
    }
    &_image {
      @include background;
      background-image: url("~@/assets/banner2.jpg");
      height: auto;
      padding: 0;
      min-height: 600px;
      @include mq(m) {
        min-height: 300px;
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
      li {
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
      li {
        padding-right: 200px;
      }
    }
    &.second-shadow {
      position: absolute;
      background-color: $primaryDark;
      // opacity: 0.6;
      right: 100px;
      z-index: 1;
      width: 70%;
      left: 0;
      top: 50px;
      height: 600px;
      margin-right: 100px;
      padding: 0;
    }
    &.second-image {
      position: absolute;
      z-index: 2;
      background-image: url("~@/assets/banner4.jpg");
      right: 0;
      width: 60%;
      // margin-right: 100px;
    }
    &.third {
      width: 50%;
      color: $greyLight;
      padding: 75px 50px;
      z-index: 10;
      background-color: $transparentColor;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      @include mq(m) {
        width: 100%;
      }
      @include mq(s) {
        padding: 30px;
      }
      @include mq(ph) {
        padding: 30px 15px;
      }
      ul {
        list-style: none;
        li {
          padding-right: 60px;
          @include font(20px, 500, 45px);
          &:before {
            content: "\2022";
            color: $secondary;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
          @include mq(s) {
            padding-right: 30px;
          }
          @include mq(ph) {
            padding-right: 10px;
            @include font(18px, 500, 30px);
          }
        }
      }
      a {
        width: auto;
        @include mq(xxs) {
          margin: 20px auto 0 auto;
        }
      }
    }
    &.third-shadow {
      display: none;
    }
    &.third-image {
      // position: absolute;
      z-index: 2;
      background-image: url("~@/assets/station.jpg");
      right: 0;
      width: 50%;
      // margin-right: 100px;
      @include mq(m) {
        width: 100%;
      }
      @include mq(xxs) {
        // display: none;
      }
    }
  }
}
</style>
