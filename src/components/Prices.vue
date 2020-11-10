<template>
  <div class="prices wrapper" data-aos="fade" data-aos-once="true">
    <div class="prices__items">
      <div
        class="prices__items_item prices-items-item"
        v-for="(item, index) in text.prices"
        :key="index"
      >
        <p class="prices-items-item__price">
          <span class="prices-items-item__price-devise">chf</span>
          <span class="prices-items-item__price-value">{{ item.price }}</span>
        </p>
        <h3 class="prices-items-item__title">{{ item.title[lang] }}</h3>
        <p class="prices-items-item__subtitle">{{ item.subtitle[lang] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prices",
  props: {
    lang: String
  },
  data() {
    return {
      text: {
        title: {
          en: "Lessons & Freeride",
          fr: "Cours & Hors-piste"
        },
        prices: [
          {
            title: {
              en: "Morning",
              fr: "Matin"
            },
            subtitle: {
              en: "3 hours 9am-12pm",
              fr: "3 heures 9h-12h"
            },
            price: "315"
          },
          {
            title: {
              en: "Afternoon",
              fr: "Après-midi"
            },
            subtitle: {
              en: "3 hours 1pm-4pm",
              fr: "3 heures 13h-16h"
            },
            price: "255"
          },
          {
            title: {
              en: "Full Day",
              fr: "Journée"
            },
            subtitle: {
              en: "7 hours 9am-4pm",
              fr: "7 heures 9h-16h"
            },
            price: "540"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_colors";
@import "@/style/_mixins";

.prices {
  color: $secondary;
  text-align: center;
  &__items {
    color: $black;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: -20px;
    padding: 50px 0;
    margin-top: 60px;
    &_item {
      background-color: $white;
      @include rounded;
      position: relative;
      padding: 10px;
      padding-top: 80px;
      width: calc(100% / 3 - 20px);
      text-align: center;
      margin: 10px 20px;
      margin-right: 0;
      border-bottom: 30px solid $primaryLight;
      @include mq(s) {
        width: calc(100%);
        margin-bottom: 100px;
        &:last-child {
          margin-bottom: 0px;
        }
        &:hover {
          transform: none;
        }
      }
    }
  }
}

.prices-items-item {
  &__title {
    padding: 20px;
    @include font(36px, normal, 36px);
    text-transform: uppercase;
    margin: 0;
  }
  &__price {
    position: absolute;
    top: -80px;
    left: 50%;
    color: $white;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border: 10px solid $white;
    background-color: $primaryDark;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    padding: 20px;
    margin: 0;
  }
  &__price-devise {
    left: 0;
    @include font(12px, normal, 16px);
    margin-top: -35px;
    text-transform: uppercase;
  }
  &__price-value {
    @include font(42px, bold, 36px);
    color: $secondary;
  }
}
</style>
