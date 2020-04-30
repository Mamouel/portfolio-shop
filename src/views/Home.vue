<template>
  <div class="home">
    <Banner
      :lang="lang"
      type="home"
      title="Ride &amp; Smile"
      titleOpt="Snowsports"
      :subtitle="text.subtitle[lang]"
    />
    <div class="home-section home-section_black">
      <Teacher :lang="lang" />
    </div>

    <div class="home-section home-section_small-padding home-section_grey">
      <TextImageFlex :lang="lang" type="first" />
    </div>
    <!-- <div class="home-section home-section_grey">
      <TextImageFlex :lang="lang" type="first" />
    </div> -->
    <div class="home-section home-section_white">
      <Products :lang="lang" />
    </div>
    <div class="home-section home-section_black">
      <ProductSumary :lang="lang" />
    </div>
    <div class="home-section home-section_small-padding home-section_white">
      <Partners :lang="lang" />
    </div>
  </div>
</template>


<script>
import Banner from "@/components/Banner.vue";
import Teacher from "@/components/Teacher.vue";
import Partners from "@/components/Partners.vue";
import Products from "@/components/Products.vue";
import TextImageFlex from "@/components/TextImageFlex.vue";
import ProductSumary from "@/components/ProductSumary.vue";

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
    ProductSumary,
    Teacher,
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
      padding-bottom: $sectionPadding / 4;
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
</style>
