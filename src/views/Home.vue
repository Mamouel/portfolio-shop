<template>
  <div class="home">
    <Banner
      :lang="lang"
      type="page"
      :image="bannerImage"
    />
    <TitleText
      :lang="lang"
      :title="titleTextOne.title[lang]"
      :subtitle="titleTextOne.subtitle[lang]"
      :buttonOne="titleTextOne.buttonOne[lang]"
      :buttonTwo="titleTextOne.buttonTwo[lang]"
    />
    <TripleCases :lang="lang" />
    <TitleText
      :lang="lang"
      :title="titleTextOne.title[lang]"
      :subtitle="titleTextOne.title[lang]"
      :buttonOne="titleTextOne.title[lang]"
      :buttonTwo="titleTextOne.title[lang]"
    />
    <TripleFlex :lang="lang"/>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import TitleText from "@/components/TitleText.vue";
import TripleCases from "@/components/TripleCases.vue";
import TripleFlex from "@/components/TripleFlex.vue";
import BannerImage from "@/assets/model-5085917_640.jpg";

export default {
  name: "Home",
  props: {
    lang: String,
  },
  data() {
    return {
      titleTextOne: {
        title: {
          en: "New collection",
          fr: "Nouvelle collection",
        },
        subtitle: {
          en: "By...",
          fr: "Par...",
        },
        buttonOne: {
          en: "Discover",
          fr: "Découvrir",
        },
        buttonTwo: {
          en: "Discover",
          fr: "Découvrir",
        },
      },
      bannerImage: BannerImage,
    };
  },
  components: {
    Banner,
    TitleText,
    TripleCases,
    TripleFlex,
  },
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
