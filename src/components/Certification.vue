<template>
  <div class="certification wrapper">
    <div class="certification__item">
      <div class="certification__item_image" data-aos="fade-down" data-aos-once="true"></div>
      <p
        class="certification__item_text"
        v-if="lang === 'en'"
        data-aos="fade-up"
        data-aos-once="true"
      >
        All
        <span>AISI</span> members Monitors hold the Federal Patent Snow Sports Teacher and are insured in the exercise of their business ( so as their clients)
      </p>
      <p
        class="certification__item_text"
        v-if="lang === 'fr'"
        data-aos="fade-left"
        data-aos-once="true"
      >
        Tous les Moniteurs membres de
        <span>l'AISI</span> sont titulaires du Brevet Fédéral de Professeur de Sports de Neige délivré par Swiss Snowsports et sont assurés dans l’exercice de leur activité (et leurs clients aussi).
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Certification",
  props: {
    type: String,
    lang: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";
.certification {
  position: relative;
  width: 100%;
  // height: 200px;
  padding: 0 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @include mq(m) {
    // flex-direction: column-reverse;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    @include mq(xl) {
      // width: 100%;
    }
    @include mq(l) {
      flex-direction: column;
      text-align: center;
    }
    &_image {
      width: 300px;
      min-height: 200px;
      margin-top: -10px;
      @include background;
      background-size: contain;
      // background-image: url("~@/assets/aisi-orange.png");
      flex: 2;
      @include mq(s) {
        min-height: 150px;
      }
    }
    &_text {
      flex: 4;
      @include font(20px, 900, 25px);
      span {
        color: $secondary;
      }
    }
  }
}
</style>
