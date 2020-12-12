<template>
  <div class="product wrapper">
    <router-view></router-view>
    <!-- <div class="product__items" data-aos="fade" data-aos-once="true">
      <Card
        v-for="(item, index) in items"
        :key="index"
        :lang="getLang"
        :type="item.type"
        :title="item.title"
        :text="item.text"
      />
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// import Card from "@/components/Card";
export default {
  name: "Product",
  components: {
    // Card,
  },
  data() {
    return {
      items: [
        {
          text: {
            en: ["From 4", "years old, for", "all levels"],
            fr: ["Dès 4", "ans, pour", "tous les niveaux"],
          },
          type: "main",
        },
        {
          text: {
            en:
              "Private lesson or group of 6 people maximum, from 4 years old to whatever age",
            fr:
              "Leçon privée individuelle ou en groupe jusqu’à 6 personnes maximum, dès 4 ans",
          },
          title: { en: "Lessons", fr: "Leçons" },
          type: "lessons",
        },
        {
          text: {
            en:
              "Ski, snowboard, splitboard, ski touring, snowshoes. Discover backcountry terrain offered Verbier and its surroundings! Learn also mountain safety rules. From beginners to experimented riders",
            fr:
              "Ski, snowboard, splitboard, randonnée, raquettes. Découvre les innombrables terrains hors piste qu’offrent Verbier et ses environs, du débutant au rider expérimenté, tout en apprenant les bases de la sécurité en montagne. ",
          },
          title: { en: "Freeride", fr: "Freeride" },
          type: "freeride",
        },
        {
          text: {
            en:
              "Freestyle initiation for experimented riders, from 10 years old",
            fr:
              "Initiation freestyle pour les riders de niveau intermédiaire à expert. A partir de 10 ans",
          },
          title: { en: "Freestyle", fr: "Freestyle" },
          type: "freestyle",
        },
        {
          text: {
            en:
              "Enjoy your stay in Verbier only with your family or your friends. A la carte organization depending your own group (6 people max)",
            fr:
              "Profite de ton séjour à Verbier exclusivement avec ta famille ou tes amis. Planning à la carte selon le rythme de chacun (6 personnes max)",
          },
          title: { en: "Family trip", fr: "Familles" },
          type: "family",
        },
        {
          text: {
            en:
              "We organize your trip depending on your group (size & level) to make it successful",
            fr:
              "Nous organisons votre séjour selon la taille de votre groupe et des différents niveaux pour que votre team building soit un succès!",
          },
          title: { en: "Team building", fr: "Team building" },
          type: "team",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("lang", ["getLang", "getStateLoading"]),
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_colors";
.product {
  text-align: center;
  color: $white;
  button {
    margin-top: 45px;
    margin-bottom: 50px;
  }
  &__items {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -5px;
  }
}
</style>
