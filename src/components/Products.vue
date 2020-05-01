<template>
  <div class="product wrapper">
    <div class="product__items" data-aos="fade" data-aos-once="true">
      <div class="product__items_item">
        <h2>Dès 4 ans, pour tous les niveaux</h2>
        <!-- <p>A partir de 4 ans, pour les débutants aux confirmés</p>
        <p>Freeride sécurisé sur Verbier et ses alentours</p>
        <p>Sessions Snowpark</p>-->
      </div>
      <div class="product__items_item lessons">
        <div class="overlay"></div>
        <div class="overlay-content">
          <p>{{ text.lessons[lang] }}</p>
        </div>
        <h3>Ski &amp; Snow</h3>
      </div>
      <div class="product__items_item freeride">
        <div class="overlay"></div>
        <div class="overlay-content">
          <p>{{ text.freeride[lang] }}</p>
        </div>
        <h3>Freeride</h3>
      </div>
      <div class="product__items_item freestyle">
        <div class="overlay"></div>
        <div class="overlay-content">
          <p>{{ text.freestyle[lang] }}</p>
          <p></p>
        </div>
        <h3>Freestyle</h3>
      </div>
      <div class="product__items_item family">
        <div class="overlay"></div>
        <div class="overlay-content">
          <p>{{ text.family[lang] }}</p>
          <p></p>
        </div>
        <h3>Family Trip</h3>
      </div>
      <div class="product__items_item team">
        <div class="overlay"></div>
        <div class="overlay-content">
          <p>{{ text.freestyle[lang] }}</p>
          <p></p>
        </div>
        <h3>Team Building</h3>
      </div>
    </div>
    <button class="btn btn__primary">Book</button>
  </div>
</template>

<script>
export default {
  name: "Product",
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
    &_item {
      position: relative;
      width: calc(100% / 3 - 5px);
      //   min-width: 300px;
      margin-left: 5px;
      margin-top: 5px;
      height: 600px;
      @include background;
      background-color: $black;
      @include mq(xl) {
        width: calc(100% / 2 - 5px);
      }
      @include mq(s) {
        width: 100%;
        height: 400px;
        .overlay {
          height: 400px !important;
          opacity: 0.6 !important;
        }
        .overlay-content {
          opacity: 1 !important;
          visibility: visible !important;
        }
      }
      h2 {
        text-align: left;
        color: $white;
        z-index: 10;
        padding: 40px;
        @include font(80px, 900, 70px);
        @include mq(m) {
          @include font(60px, 900, 50px);
          margin-top: 100px;
        }
        @include mq(s) {
          padding: 20px;
          @include font(40px, 900, 40px);
        }
      }
      &.lessons {
        background-image: url("~@/assets/lesson.jpg");
      }

      &.freeride {
        background-image: url("~@/assets/freeride6.jpg");
      }

      &.freestyle {
        background-image: url("~@/assets/freestyle2.jpg");
      }

      &.family {
        background-image: url("~@/assets/group3.jpg");
      }

      &.team {
        background-image: url("~@/assets/group2.jpg");
      }

      &:hover {
        .overlay {
          height: 600px;
          opacity: 0.6;
        }

        .overlay-content {
          opacity: 1;
          visibility: visible;
        }

        h3 {
          font-size: 26px;
          color: $white;
          background-color: $primaryDark;
        }
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: $black;
        opacity: 0;
        z-index: 2;
        padding: 20px;
        box-sizing: border-box;
        @include transition(
          height 0.3s ease,
          color 0.3s ease,
          background-color 0.3s ease
        );
      }

      h3 {
        width: 60%;
        background-color: $white;
        color: $black;
        padding: 5px 0;
        z-index: 12;
        position: absolute;
        // top: -15px;
        top: 20px;
        @include transition(font-size 0.3s ease);
        left: -20px;
        // background-image: url("~@/assets/title-bg.jpg");
        // @include background;
        // transform: rotate(-15deg);
      }

      .overlay-content {
        opacity: 0;
        z-index: 12;
        visibility: hidden;
        @include transition(visibility 0.5s ease, opacity 0.5s ease);
        padding: 30px;
        p {
          @include font(18px, normal, 24px);
        }
      }
    }
  }
}
</style>