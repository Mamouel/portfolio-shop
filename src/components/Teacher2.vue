<template>
  <div class="teacher2 wrapper">
    <!-- <h2 data-aos="zoom-in" data-aos-once="true">Your teacher</h2> -->

    <div class="teacher2__item" data-aos="fade-right" data-aos-once="true">
      <div class="teacher2__item_image teacher2-image"></div>
      <a href="https://www.aisi.ski/" target="_blank" class="teacher2__item_image certif-image"></a>
      <!-- <div class="teacher2__contact">
        <div class="teacher2__contact_mail">
          <a href="mailto:nikobigorre@gmail.com">nikobigorre@gmail.com</a>
        </div>
        <div class="teacher2__contact_phone">
          <a href="tel:0041 76 230 17 22">0041 76 230 17 22</a>
        </div>
      </div>-->
    </div>
    <div class="teacher2__item">
      <div class="teacher2__item_text">
        <p v-for="(item, index) in text.teacher[lang]" :key="index">{{ item }}</p>
      </div>
      <div class="teacher2__item_text">
        <p v-for="(item, index) in text.aisi[lang]" :key="index">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teacher2",
  props: {
    lang: String
  },
  data() {
    return {
      text: {
        teacher: {
          en: [
            "Nico,",
            "Familiar with the area of the 4 Valleys and the surroundings, I am pleased to support children and adults whatever their level and requirements, on or off the slopes, and this, with maximum safety!",
            "Do not hesitate to contact me if you want to evolve in such practices or simply discover them!"
          ],
          fr: [
            "Nico,",
            "Connaissant parfaitement le domaine des 4 vallées et ses environs, je me fais un plaisir d’accompagner petits et grands quel que soit leur niveau et leurs exigences, sur ou en dehors des pistes et ceci avec une sécurité optimale !",
            "Je vous emmène volontiers à la découverte des innombrables recoins de nature offerts par cette région au cours de votre séjour."
          ]
        },
        aisi: {
          en: [
            "AISI",
            "All AISI members Monitors hold the Federal Patent Snow Sports Teacher and are insured in the exercise of their business ( so as their clients)"
          ],
          fr: [
            "AISI",
            "Tous les Moniteurs membres de l’AISI sont titulaires du Brevet Fédéral de Professeur de Sports de Neige délivré par Swiss Snowsports et sont assurés dans l’exercice de leur activité (et leurs clients aussi)."
          ]
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";
.teacher2 {
  // h2 {
  //   text-align: right;
  //   margin-bottom: 85px;
  //   color: $white;
  //   padding-bottom: 10px;
  //   border-bottom: 4px solid $white;
  //   // width: 40%;
  //   @include mq(s) {
  //     margin-bottom: 40px;
  //   }
  // }
  &__contact {
    position: absolute;
    bottom: 20px;
    left: 70px;
    background-color: $white;
    padding: 20px;
    width: 300px;
    div {
      padding: 20px 0;
    }
    a {
      @include font(20px, 700, 20px);
      color: $black;
    }
  }
  &__item {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: $black;
    width: 100%;
    @include mq(m) {
      flex-direction: column;
    }
    &_image {
      @include box-shadow;
      @include background;
      background-color: $greyMed;
      &.teacher2-image {
        // background-image: url("~@/assets/teacher.jpg");
        min-height: 500px;
        // position: absolute;
        width: 100%;
        @include mq(m) {
          width: 100%;
          margin-right: 0px;
        }
      }
      &.certif-image {
        height: 250px;
        width: 300px;
        // background-image: url("~@/assets/aisi-logo.png");
        background-size: contain;
        position: absolute;
        background-color: $white;
        top: -70px;
        left: 70px;
        &:hover {
          transform: scale(1.1);
        }
        @include mq(l) {
          left: 20px;
          height: 200px;
          width: 300px;
        }
        @include mq(m) {
          top: 20px;
        }
        @include mq(s) {
          width: 60%;
          left: 20px;
          top: -20px;
          position: relative;
        }
        @include mq(ph) {
          width: 60%;
          height: 100px;
          left: 0px;
        }
      }
    }
    &_text {
      overflow: hidden;
      width: 60%;
      background-color: $white;
      @include box-shadow;
      padding: 60px 50px;
      display: flex;
      flex-direction: column;
      &:first-child {
        margin-right: 5px;
      }
      &:last-child {
        margin-left: 5px;
      }
      @include mq(m) {
        width: 100%;
      }
      p:first-child {
        @include font(40px, 700, 50px);
        margin-bottom: 20px;
        font-family: $heading-font;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>
