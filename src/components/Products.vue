<template>
  <div class="product wrapper">
    <div class="product__items" data-aos="fade" data-aos-once="true">
      <Card
        v-for="(item, index) in items"
        :key="index"
        :lang="lang"
        :type="item.type"
        :title="item.title"
        :text="item.text"
      />
    </div>
    <button class="btn btn__primary">Book</button>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Product",
  props: {
    lang: String
  },
  components: {
    Card
  },
  data() {
    return {
      items: [
        {
          text: {
            en: ["From 4", "years old, for", "all levels"],
            fr: ["Dès 4", "ans, pour", "tous les niveaux"]
          },
          type: "main"
        },
        {
          text: {
            en:
              "Private lesson or group of 6 people maximum, from 4 years old to whatever age",
            fr:
              "Leçon privée individuelle ou en groupe jusqu’à 6 personnes maximum, dès 4 ans"
          },
          title: "Lessons",
          type: "lessons"
        },
        {
          text: {
            en:
              "Discover safely the backcountry terrain offered Verbier and its surroundings! From beginners to experimented riders",
            fr:
              "Découvre en toute sécurité les innombrables terrains hors piste qu’offrent Verbier et ses environs, du débutant au rider expérimenté."
          },
          title: "Freeride",
          type: "freeride"
        },
        {
          text: {
            en: "Freestyle initiation for experimented riders",
            fr:
              "Initiation freestyle pour les riders de niveau intermédiaire à expert."
          },
          title: "Freestyle",
          type: "freestyle"
        },
        {
          text: {
            en: "Freestyle initiation for experimented riders",
            fr:
              "Initiation freestyle pour les riders de niveau intermédiaire à expert."
          },
          title: "Family trip",
          type: "family"
        },
        {
          text: {
            en: "Freestyle initiation for experimented riders",
            fr:
              "Initiation freestyle pour les riders de niveau intermédiaire à expert."
          },
          title: "Team building",
          type: "team"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.product {
  text-align: center;
  color: $white;
  button {
    margin-top: 45px;
    margin-bottom: 50px;
  }
  &__items {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -5px;
  }
}
</style>
