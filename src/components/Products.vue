<template>
  <div class="product wrapper">
    <div class="product__items" data-aos="fade" data-aos-once="true">
      <Card :lang="lang" type="main" :text="text['title']" />
      <Card :lang="lang" type="lessons" title="Ski &amp; Snow" :text="text['lessons']" />
      <Card :lang="lang" type="freeride" title="Freeride" :text="text['freeride']" />
      <Card :lang="lang" type="freestyle" title="Freestyle" :text="text['freestyle']" />
      <Card :lang="lang" type="family" title="Family trip" :text="text['family']" />
      <Card :lang="lang" type="team" title="Team Building" :text="text['team']" />
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
      text: {
        title: {
          en: "From 4 years old, for all levels",
          fr: "Dès 4 ans, pour tous les niveaux"
        },
        lessons: {
          en:
            "Private lesson or group of 6 people maximum, from 4 years old to whatever age",
          fr:
            "Leçon privée individuelle ou en groupe jusqu’à 6 personnes maximum, dès 4 ans"
        },
        freeride: {
          en:
            "Discover safely the backcountry terrain offered Verbier and its surroundings! From beginners to experimented riders",
          fr:
            "Découvre en toute sécurité les innombrables terrains hors piste qu’offrent Verbier et ses environs, du débutant au rider expérimenté."
        },
        freestyle: {
          en: "Freestyle initiation for experimented riders",
          fr:
            "Initiation freestyle pour les riders de niveau intermédiaire à expert."
        },
        family: {
          en: "Freestyle initiation for experimented riders",
          fr:
            "Initiation freestyle pour les riders de niveau intermédiaire à expert."
        },
        team: {
          en: "Freestyle initiation for experimented riders",
          fr:
            "Initiation freestyle pour les riders de niveau intermédiaire à expert."
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.product {
  text-align: center;
  color: $white;
  // h2 {
  //   text-align: left;
  //   margin-bottom: 85px;
  //   color: $white;
  //   padding: 40px;
  //   @include mq(s) {
  //     padding: 20px;
  //   }
  // }
  button {
    margin-top: 45px;
  }
  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -5px;
  }
}
</style>
