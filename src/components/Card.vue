<template>
  <div class="card" :class="type">
    <h2 v-if="type === 'main'">
      <span
        v-for="(part, index) in text[lang]"
        :key="index"
        :class="index % 2 === 0 && 'orange'"
      >{{ part }}</span>
    </h2>
    <div v-if="type !== 'main'" class="overlay"></div>
    <div v-if="type !== 'main'" class="overlay-content">
      <p>{{ text[lang] }}</p>
      <router-link
        :to="{ name: 'Home', hash: '#prices' }"
        class="btn btn__primary"
      >{{ textLocal.button[lang] }}</router-link>
    </div>
    <h3 v-if="type !== 'main'">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    lang: String,
    text: Object,
    type: String
  },
  data() {
    return {
      textLocal: {
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
.card {
  position: relative;
  width: calc(100% / 3 - 5px);
  margin-left: 5px;
  margin-top: 5px;
  height: 500px;
  @include background;
  background-color: $black;
  @include mq(xl) {
    width: calc(100% / 2 - 5px);
  }
  @include mq(s) {
    width: 100%;
    height: 300px;
    .overlay {
      height: 300px !important;
      opacity: 0.6 !important;
    }
    .overlay-content {
      opacity: 1 !important;
      visibility: visible !important;
    }
  }
  h2 {
    text-align: left;
    color: $white;
    z-index: 10;
    padding: 40px;
    text-transform: none;
    // display: flex;
    // flex-wrap: wrap;
    @include font(70px, 900, 70px);
    @include mq(m) {
      @include font(60px, 900, 50px);
    }
    @include mq(s) {
      padding: 20px;
      @include font(40px, 900, 40px);
    }
    span {
      padding: 0 5px;
      width: 100%;
      &.orange {
        color: $secondary;
      }
    }
  }
  &.lessons {
    background-image: url("~@/assets/lesson.jpg");
  }

  &.freeride {
    background-image: url("~@/assets/freeride6.jpg");
  }

  &.freestyle {
    background-image: url("~@/assets/freestyle2.jpg");
  }

  &.family {
    background-image: url("~@/assets/group3.jpg");
  }

  &.team {
    background-image: url("~@/assets/group2.jpg");
  }

  &:hover {
    .overlay {
      height: 500px;
      opacity: 0.4;
    }

    .overlay-content {
      opacity: 1;
      visibility: visible;
    }

    h3 {
      font-size: 26px;
      color: $white;
      background-color: $secondary;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: $black;
    opacity: 0;
    z-index: 2;
    box-sizing: border-box;
    @include transition(
      height 0.3s ease,
      color 0.3s ease,
      background-color 0.3s ease
    );
  }

  h3 {
    width: 60%;
    background-color: $white;
    color: $black;
    padding: 5px 0;
    z-index: 12;
    position: absolute;
    top: 20px;
    @include transition(font-size 0.3s ease);
    left: -20px;
  }

  .overlay-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    z-index: 12;
    visibility: hidden;
    box-sizing: border-box;
    @include transition(visibility 0.5s ease, opacity 0.5s ease);
    padding: 100px 20px 50px;

    p,
    a {
      z-index: 13;
      @include font(18px, normal, 24px);
    }
  }
}
</style>
