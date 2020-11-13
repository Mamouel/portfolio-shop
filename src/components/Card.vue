<template>
  <div class="card" :class="type">
    <h2 v-if="type === 'main'">
      <span
        v-for="(part, index) in text[lang]"
        :key="index"
        :class="index % 2 === 0 && 'orange'"
        >{{ part }}</span
      >
    </h2>
    <div v-if="type !== 'main'" class="overlay"></div>
    <div v-if="type !== 'main'" class="overlay-content">
      <p>{{ text[lang] }}</p>
    </div>
    <h3 v-if="type !== 'main'">{{ title[lang] }}</h3>
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
@import "@/style/_mixins";
@import "@/style/_colors";
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
      // opacity: 0.6 !important;
    }
    .overlay-content {
      opacity: 1 !important;
      // visibility: visible !important;
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
    @include mq(s) {
      padding: 40px 20px;
    }
    @include mq(xxs) {
      padding: 20px;
      @include font(60px, 900, 60px);
    }
    @include mq(ph) {
      padding: 20px;
      @include font(50px, 900, 50px);
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
    background-image: url("~@/assets/freestyle.jpg");
  }

  &.family {
    background-image: url("~@/assets/family.jpg");
  }

  &.team {
    background-image: url("~@/assets/group3.jpg");
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
    @include transition(visibility 0.5s ease, opacity 0.5s ease);
    padding: 100px 20px 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    p {
      z-index: 13;
      @include font(24px, normal, 28px);
      margin: auto;
      padding: 0 35px;
      text-align: left;
      @include mq(s) {
        padding: 0;
        @include font(16px, normal, 20px);
      }
    }
  }
}
</style>
