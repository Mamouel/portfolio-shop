<template>
  <div class="home">
    <Banner
      :lang="lang"
      type="home"
      title="Ride &amp; Smile"
      titleOpt="Snowsports"
      :subtitle="text.subtitle[lang]"
    />
    <div id="teacher3" class="home-section home-section_first">
      <Teacher3 :lang="lang" />
    </div>
    <div class="home-section home-section_small-padding home-section_white">
      <Certification :lang="lang" />
    </div>
    <div id="location" class="home-section home-section_black">
      <TextImageFlex :lang="lang" type="third" />
    </div>
    <div id="products" class="home-section home-section_grey">
      <Products :lang="lang" />
    </div>
    <div id="prices" class="home-section home-section_padding home-section_primary-dark">
      <Prices :lang="lang" />
    </div>
    <div
      id="partners"
      class="home-section home-section_small-padding home-section_white"
    >
      <Partners :lang="lang" />
    </div>
    <div
      id="contact"
      class="home-section home-section_grey home-section_no-padding"
    >
      <Contact :lang="lang" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Prices from "@/components/Prices.vue";
import Certification from "@/components/Certification.vue";
import Teacher3 from "@/components/Teacher3.vue";
import Partners from "@/components/Partners.vue";
import Products from "@/components/Products.vue";
import Contact from "@/components/Contact.vue";

import TextImageFlex from "@/components/TextImageFlex.vue";

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
    Prices,
    Certification,
    Teacher3,
    Partners,
    Products,
    Contact,
    TextImageFlex
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";
@import "@/style/_variables";

.home {
  .home-section {
    display: flex;
    position: relative;
    // @include mq(l) {
    //   padding: 100px 0;
    // }
    // @include mq(s) {
    //   padding: 50px 0;
    // }
    // @include mq(xxs) {
    //   padding: 15px 0;
    // }
    // &_first {
    //   padding-top: 200px;
    // }
    &_small-padding {
      padding-top: $sectionPadding / 2;
      padding-bottom: $sectionPadding / 2;
    }
    &_padding {
      padding-top: $sectionPadding;
      padding-bottom: $sectionPadding;
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
