<template>
  <div class="product-sumary wrapper" data-aos="fade" data-aos-once="true">
    <h2>{{ text.title[lang] }}</h2>
    <div class="product-sumary__items">
      <router-link to="/lessons" class="product-sumary__items_item lessons">
        <div class="overlay"></div>
        <div class="overlay-content">
          <p>{{ text.lessons[lang] }}</p>
        </div>
        <h3>Ski &amp; Snow</h3>
      </router-link>
      <div class="product-sumary__items_item freeride">
        <div class="overlay"></div>
        <div class="overlay-content">
          <p>{{ text.freeride[lang] }}</p>
        </div>
        <h3>Freeride</h3>
      </div>
      <div class="product-sumary__items_item freestyle">
        <div class="overlay"></div>
        <div class="overlay-content">
          <p>{{ text.freestyle[lang] }}</p>
          <p></p>
        </div>
        <h3>Freestyle</h3>
      </div>
    </div>
    <button class="btn btn__primary">Book</button>
  </div>
</template>

<script>
export default {
  name: "ProductSumary",
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
            "Découvre les innombrables terrains hors piste qu’offrent Verbier et ses environs, du débutant au rider expérimenté, tout en apprenant les bases de la sécurité en montagne."
        },
        freestyle: {
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
@import "@/style/_mixins";
@import "@/style/_colors";

.product-sumary {
  text-align: center;
  color: $white;
  h2 {
    text-align: right;
    margin-bottom: 85px;
    color: $white;
    padding-bottom: 10px;
    border-bottom: 4px solid $white;
    @include mq(s) {
      margin-bottom: 40px;
    }
  }
  button {
    margin-top: 45px;
  }
  &__items {
    display: flex;
    justify-content: center;
    margin-left: -5px;
    @include mq(m) {
      flex-direction: column;
    }
    &_item {
      position: relative;
      width: calc(100% / 3 - 5px);
      margin-left: 5px;
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      @include background;
      @include mq(l) {
        height: 500px;
      }
      @include mq(m) {
        width: calc(100% / 2 - 5px);
      }
      @include mq(s) {
        margin: 5px;
        height: 400px;
        width: calc(100% - 10px);
      }

      &.lessons {
        background-image: url("~@/assets/lesson.jpg");
      }

      &.freeride {
        background-image: url("~@/assets/lesson2.jpg");
      }

      &.freestyle {
        background-image: url("~@/assets/freestyle2.jpg");
      }

      &:hover {
        .overlay {
          height: 600px;
          opacity: 0.6;
          @include mq(l) {
            height: 500px;
          }
          @include mq(s) {
            height: 400px;
          }
        }

        .overlay-content {
          opacity: 1;
          visibility: visible;
        }

        h3 {
          font-size: 26px;
          color: $white;
          background-color: $primary;
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
        @include transition(
          height 0.3s ease,
          color 0.3s ease,
          background-color 0.3s ease
        );
        @include mq(s) {
          height: 400px;
          opacity: 0.6;
        }
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
        @include mq(s) {
          visibility: visible;
          opacity: 0.6;
        }
        p {
          @include font(18px, normal, 24px);
        }
      }
    }
  }
}
</style>