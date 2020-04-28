<template>
  <div class="home">
    <Banner
      :lang="lang"
      type="home"
      title="Ride &amp; Smile Snowsports"
      :subtitle="text.subtitle[lang]"
    />
    <div class="home-section home-section_black">
      <ProductSumary :lang="lang" />
    </div>
    <div class="home-section home-section_small-padding home-section_grey">
      <h2>suce</h2>
    </div>
    <div class="home-section home-section_primary-dark">
      <Teacher :lang="lang" />
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
    Partners
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.home {
  .home-section {
    padding: $sectionPadding 0;
    &_small-padding {
      padding-top: $sectionPadding / 3;
      padding-bottom: $sectionPadding / 3;
    }
    &_black {
      background-color: $black;
    }
    &_grey {
      background-color: $greyMed;
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
