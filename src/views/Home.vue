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
    <!-- <div class="home-section home-section_no-padding home-section_white">
      <div class="home-section__item">
        <h2>Des cours pour tous les niveaux!</h2>
        <p>A partir de 4 ans, pour les débutants aux confirmés</p>
        <p>Freeride sécurisé sur Verbier et ses alentours</p>
        <p>Sessions Snowpark</p>
      </div>
      <div class="home-section__item home-section__item_image"></div>
    </div> -->
    <div class="home-section home-section_white wrapper">
      <div class="home-section__item home-section__item_text">
        <h2>Des cours pour tous les niveaux!</h2>
        <p>A partir de 4 ans, pour les débutants aux confirmés</p>
        <p>Freeride sécurisé sur Verbier et ses alentours</p>
        <p>Sessions Snowpark</p>
      </div>
      <div class="home-section__item home-section__item_sub home-section__item_image"></div>
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
    display: flex;
    // justify-content: center;
    // align-items: center;
    position: relative;
    &_small-padding {
      padding-top: $sectionPadding / 3;
      padding-bottom: $sectionPadding / 3;
    }
    &_no-padding {
      padding: 0;
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

    &__item {
      width: 50%;
      height: 100%;
      padding: 100px;
      box-sizing: border-box;
      h2 {
        margin-bottom: 30px;
        @include font(60px, 900, 50px);
      }
      &_image {
        @include background;
        background-image: url("~@/assets/lesson2.jpg");
        height: auto;
        padding: 0;
        height: 600px;
      }
      &_sub {
        position: absolute;
        background-image: url("~@/assets/lesson2.jpg");

        right: 0;
        width: 60%;
        margin-left: -200px;
      }
      &_text {
        width: 60%;
        color: $white;
        // padding-top: 0px;
        margin-top: -120px;
        z-index: 10;
        background-color: $black;
        p {
          padding-right: 100px;
        }
      }
    }
  }
}
</style>
