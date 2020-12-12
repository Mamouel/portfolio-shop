<template>
  <div class="banner" :class="type" :style="{ backgroundImage: `url(${image})` }">
    <div class="banner__wrapper">

    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      text: {
      }
    };
  },
  props: {
    lang: String,
    type: String,
    image: String
  },
  methods: {
    scrollDown() {
      if (window.innerWidth < 500) {
        return window.scrollBy(0, window.innerHeight - 400);
      } else {
        return window.scrollBy(0, window.innerHeight - 100);
      }
    },
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";

.banner {
  @include background;
  background-position: center;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &.home {
    background-image: url("~@/assets/clothing-store-984396_640.jpg");
    
    height: 100vh;
    @include mq(xxs) {
      height: 90vh;
      // background-image: url("~@/assets/lesson2.jpg");
    }
  }
  &.page {
    height: 500px;
    @include mq(s) {
      height: 200px;
    }

  }
  &__wrapper {
    // padding: 50px 0;
    @include mq(s) {
      text-align: center;
      // margin-top: 120px;
    }
    @include mq(ph) {
      text-align: center;
      // margin-top: 100px;
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
      @include mq(ph) {
        padding: 15px;
        @include font(60px, 900, 45px);
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
    // text-transform: uppercase;
    @include font(24px, 900, 20px);
    @include mq(s) {
      // text-align: center;
      @include font(20px, 700, 18px);
    }
    @include mq(ph) {
      padding: 15px;
      @include font(16px, 900, 14px);
    }
  }
  &__contact {
    display: flex;
    align-items: center;
    svg {
      margin-left: 10px;
      height: 38px;
      width: 38px;
      fill: #3b5998;
      cursor: pointer;
      @include transition(fill 0.3s ease);
      &:hover {
        fill: #20345f;
      }
    }
    @include mq(xxs) {
      margin-left: 11px;
      button {
        padding: 5px 10px;
      }
      svg {
        height: 28px;
        width: 28px;
      }
    }
  }
  .scroll-down-btn {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: $secondary;
    &:hover {
      background-color: $secondaryLight;
    }
    @include mq(xs) {
      bottom: 80px;
      width: 30px;
      height: 30px;
    }
    @include mq(xxs) {
      display: none;
    }

    svg {
      width: 40px;
      height: 40px;
      polyline {
        color: $white;
      }
    }
  }
}
</style>
