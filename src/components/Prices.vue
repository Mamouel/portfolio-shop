<template>
  <div class="prices wrapper" data-aos="fade" data-aos-once="true">
    <div class="prices__items" >
      <div class="prices__items_item prices-items-item" v-for="(item, index) in text.prices" :key="index">
        <p class="prices-items-item__title">{{ item.title[lang] }}</p>
        <p class="prices-items-item__subtitle">{{ item.subtitle[lang] }}</p>
        <p class="prices-items-item__price">
          <span class="prices-items-item__price-devise">chf</span>
          <span class="prices-items-item__price-value">{{ item.price }}</span>
        </p>
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
              fr: "3 heure 9h-12h"
            },
            price: "315"
          },
          {
            title: {
              en: "Morning (L)",
              fr: "Matin (L)"
            },
            subtitle: {
              en: "4 hours 9am-1pm",
              fr: "4 heure 9h-13h"
            },
            price: "400"
          },
          {
            title: {
              en: "Morning (XL)",
              fr: "Matin (XL)"
            },
            subtitle: {
              en: "5 hours 9am-2pm",
              fr: "5 heure 9h-14h"
            },
            price: "475"
          },
          {
            title: {
              en: "Full Day",
              fr: "Journée"
            },
            subtitle: {
              en: "7 hours 9am-4pm",
              fr: "7 heure 9h-16h"
            },
            price: "540"
          },
          {
            title: {
              en: "Full Day (XL)",
              fr: "Journée (XL)"
            },
            subtitle: {
              en: "8 hours 9am-5pm",
              fr: "8 heure 9h-17h"
            },
            price: "595"
          },
          {
            title: {
              en: "Afternoon",
              fr: "Après-midi"
            },
            subtitle: {
              en: "3 hours 1pm-4pm",
              fr: "3 heure 13h-16h"
            },
            price: "255"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.prices {
  color: $white;
  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: -20px;
    padding: 100px 0;
    &_item {
      width: calc(100% / 3 - 20px);
      text-align: center;
      margin: 10px 20px;
      margin-right: 0;
      @include mq(m) {
        width: calc(100% / 2 - 20px);
      }
      @include mq(xxs) {
        width: calc(100% - 20px);
      }
    }
  }
}

.prices-items-item {
  &__title {
border: 1px solid $white;
        padding: 20px;
        margin: 0;
  }
  &__subtitle {
    
  }
  &__price {
    border: 1px solid $white;
        padding: 20px;
        margin: 0;
  }
  &__price-devise {
    
  }
  &__price-value {
    
  }
}
</style>
