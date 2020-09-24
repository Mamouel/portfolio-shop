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
      >
        {{ subtitle }}
      </p>
      <div class="banner__contact">
        <button
          v-if="type === 'home'"
          class="btn btn__primary"
          @click="scrollToBottom"
        >
          {{ text.bookBtn[lang] }}
        </button>
        <a
          href="https://www.facebook.com/nikodod"
          target="_blank"
          rel="nooponer noreferrer"
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 60.734 60.733"
            style="enable-background:new 0 0 60.734 60.733;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
      v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
      v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"
              />
            </g>
          </svg>
        </a>
      </div>
      <button class="btn scroll-down-btn" @click="scrollDown()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
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
          en: "Contact",
          fr: "Contact"
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
    }
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
    height: 100vh;
    @include mq(xxs) {
      height: 90vh;
      // background-image: url("~@/assets/lesson2.jpg");
    }
  }
  &.page {
    height: 500px;
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
        fill: $whitish;
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
    @include mq(xxs) {
      bottom: 100px;
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
