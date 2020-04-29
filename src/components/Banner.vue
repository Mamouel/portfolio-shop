<template>
  <div :class="'banner ' + type">
    <div class="banner__wrapper wrapper">
      <h1 :class="'banner__title ' + type">{{ title }}</h1>
      <p class="banner__subtitle">{{ subtitle }}</p>
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
    subtitle: String,
    lang: String,
    type: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.banner {
  // padding-top: $navbarHeight;
  width: 100%;
  @include background;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  &.home {
    background-image: url("~@/assets/banner2.jpg");
    height: 800px;
  }
  &.page {
    height: 500px;
  }
  &__wrapper {
    padding: 50px 0;
  }
  &__title {
    color: $black;
    max-width: 850px;
    padding-bottom: 50px;
    text-align: left;
    text-transform: uppercase;
    &.home {
      @include font(120px, 900, 90px);
    }
    &.page {
      @include font(80px, 900, 90px);
      padding-bottom: 0px;
    }
  }
  &__subtitle {
    color: $greyDark;
    text-align: left;
    @include font(24px, 900, 20px);
  }
}
</style>
