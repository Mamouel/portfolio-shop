<template>
  <div class="home">
    <Banner
      :lang="lang"
      type="home"
      title="Ride &amp; Smile"
      titleOpt="Snowsports"
      :subtitle="text.subtitle[lang]"
    />
    <!-- <div id="teacher" class="home-section home-section_black">
      <Teacher :lang="lang" />
    </div>-->
    <div id="teacher2" class="home-section home-section_grey">
      <Teacher2 :lang="lang" />
    </div>
    <!-- <div id="location" class="home-section home-section_small-padding home-section_grey">
      <TextImageFlex :lang="lang" type="first" />
    </div>-->
    <div id="location" class="home-section home-section_black">
      <TextImageFlex :lang="lang" type="second" />
    </div>
    <div id="products" class="home-section home-section_black">
      <Products :lang="lang" />
    </div>
    <!-- <div id="products2" class="home-section home-section_primary-dark">
      <ProductSumary :lang="lang" />
    </div>-->
    <div class="home-section home-section_grey home-section_no-padding">
      <div class="contact">
        <p class="contact__bg">Get in touch</p>
      </div>
    </div>
    <div id="partners" class="home-section home-section_small-padding home-section_white">
      <Partners :lang="lang" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
// import Teacher from "@/components/Teacher.vue";
import Teacher2 from "@/components/Teacher2.vue";
import Partners from "@/components/Partners.vue";
import Products from "@/components/Products.vue";
import TextImageFlex from "@/components/TextImageFlex.vue";
// import ProductSumary from "@/components/ProductSumary.vue";

export default {
  name: "Home",
  props: {
    lang: String
  },
  data() {
    return {
      text: {
        subtitle: {
          en: "Ski, snowboard, freeride, freestyle",
          fr: "Ski, snowboard, freeride, freestyle"
        }
      }
    };
  },
  components: {
    Banner,
    // ProductSumary,
    // Teacher,
    Teacher2,
    Partners,
    Products,
    TextImageFlex
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.home {
  .home-section {
    padding: $sectionPadding 0;
    display: flex;
    box-sizing: border-box;
    position: relative;
    @include mq(l) {
      padding: 100px 0;
    }
    @include mq(s) {
      padding: 50px 0;
    }
    @include mq(xxs) {
      padding: 15px 0;
    }
    &_small-padding {
      padding-top: $sectionPadding / 2;
      padding-bottom: $sectionPadding / 2;
    }
    &_no-padding {
      padding: 0;
    }
    &_black {
      background-color: $black;
    }
    &_grey {
      background-color: $greyLight;
    }
    &_grey-dark {
      background-color: $greyDark;
    }
    &_primary-dark {
      background-color: $primaryDark;
    }
    &_primary-light {
      background-color: $primaryLight;
    }
    &_white {
      background-color: $white;
    }
  }
}

.contact {
  height: 230px;
  overflow: hidden;
  &__bg {
    @include font(200px, 900, 130px);
    font-family: $heading-font;
    text-transform: uppercase;
    position: absolute;
    margin: 0;
    top: 0px;
    left: 0;
    color: $black;
    opacity: 0.03;
    overflow: hidden;
    width: 100%;
    @include mq(xl) {
      @include font(200px, 900, 120px);
    }
    @include mq(s) {
      @include font(150px, 900, 100px);
    }
    @include mq(xxs) {
      @include font(100px, 900, 70px);
    }
  }
}
</style>
