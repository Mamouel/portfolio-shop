<template>
  <div class="triple-flex">
    <!-- <h2 data-aos="zoom-in" data-aos-once="true">Your teacher</h2> -->
    <div class="triple-flex__ctn" v-for="(item, index) in items" :key="index">
      <div
        class="triple-flex__ctn--image"
        :style="{ backgroundImage: `url(${item.image})` }"
      ></div>
      <div class="triple-flex__ctn--text">
        <h2>{{ item.title[lang] }}</h2>
        <p>{{ item.subtitle[lang] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firstItemImage from "@/assets/girl-3859502_640.jpg";
import secondItemImage from "@/assets/model-2911332_640.jpg";
import thirdItemImage from "@/assets/woman-4805847_640.jpg";

export default {
  name: "triple-flex",
  props: {
    lang: String,
  },
  data() {
    return {
      items: [
        {
          image: firstItemImage,
          title: {
            en: "Gifts for women",
            fr: "Cadeaux pour femme",
          },
          subtitle: {
            en: "Surprise her",
            fr: "Surprenez-la",
          },
        },
        {
          image: secondItemImage,
          title: {
            en: "Gifts for men",
            fr: "Cadeaux pour homme",
          },
          subtitle: {
            en: "Make him happy",
            fr: "Faites-lui plaisir",
          },
        },
        {
          image: thirdItemImage,
          title: {
            en: "Last trends",
            fr: "Dernières tendances",
          },
          subtitle: {
            en: "For everybody",
            fr: "Pour tout le monde",
          },
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";

.triple-flex {
  display: flex;
  width: 100%;
  @include mq(m) {
    flex-direction: column;
    height: 100%;
  }
  &__ctn {
    display: flex;
    justify-content: space-between;
    border: 1px solid $greyLight;
    align-items: center;
    flex-direction: column;
    flex: 1;
    color: $black;
    width: 50%;
    padding: 50px;
    @include mq(m) {
      width: 100%;
    }
    &:first-child {
      border-right: none;
      border-left: none;
    }
    &:last-child {
      border-right: none;
    }
    &--double {
      padding: 50px 0;
      @include mq(m) {
        padding: 0;
      }
    }
    &--image {
      @include background;
      width: 100%;
      height: 100%;
      min-height: 300px;
    }
    &--text {
      text-align: center;
      // height: 20%;
      width: 100%;
      padding: 50px 0;
    }
    &--subimage {
      @include background;
      background-image: url("~@/assets/nature-3339326_640.jpg");
      width: 100%;
      flex: 1;
      height: 100%;
      padding: 50px;
      padding-bottom: 0;
      background-clip: content-box;
      min-height: 300px;
    }
    &--title {
      text-align: center;
      flex: 1;
      width: 100%;
      padding: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $greyLight;
      &.main {
        padding: 0;
      }
    }
  }
}
</style>
