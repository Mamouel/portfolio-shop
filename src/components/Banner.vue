<template>
  <div class="banner" :class="type">
    <div class="banner__wrapper wrapper">
      <h1
        data-aos="fade-down"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        class="banner__title"
        :class="type"
      >
        <span>{{ title }}</span>
        <span class="banner__title_opt">{{ titleOpt }}</span>
      </h1>
      <p
        class="banner__subtitle"
        data-aos="fade"
        data-aos-offset="50"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >{{ subtitle }}</p>
      <button v-if="type === 'home'" class="btn btn__primary">{{ text.bookBtn[lang] }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      text: {
        bookBtn: {
          en: "Book",
          fr: "Réserver"
        }
      }
    };
  },
  props: {
    title: String,
    titleOpt: String,
    subtitle: String,
    lang: String,
    type: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.banner {
  @include background;
  background-position: right;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  &.home {
    background-image: url("~@/assets/banner2.jpg");
    height: 90vh;
    @include mq(xxs) {
      height: 90vh;
      background-image: url("~@/assets/lesson2.jpg");
    }
  }
  &.page {
    height: 500px;
  }
  &__wrapper {
    // padding: 50px 0;
    box-sizing: border-box;
    @include mq(s) {
      text-align: center;
    }
  }
  &__title {
    color: $black;
    max-width: 850px;
    padding-bottom: 50px;
    text-align: left;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    &_opt {
      @include mq(xs) {
        @include font(40px, 700, 35px);
      }
    }
    &.home {
      @include font(120px, 900, 90px);
      @include mq(xxxl) {
        @include font(200px, 900, 150px);
      }
      @include mq(l) {
        @include font(80px, 900, 60px);
      }
      @include mq(s) {
        // text-align: center;
        @include font(70px, 900, 60px);
      }
      @include mq(xs) {
        padding: 15px;
        @include font(80px, 900, 60px);
      }
    }
    &.page {
      @include font(80px, 900, 60px);
      padding-bottom: 0px;
      @include mq(l) {
        @include font(60px, 900, 50px);
      }
      @include mq(s) {
        @include font(40px, 900, 30px);
      }
    }
  }
  &__subtitle {
    color: $greyDark;
    text-align: left;
    @include font(24px, 900, 20px);
    @include mq(s) {
      text-align: center;
      @include font(20px, 700, 18px);
    }
  }
}
</style>
