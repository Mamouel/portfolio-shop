<template>
  <div class="teacher wrapper">
    <!-- <h2 data-aos="zoom-in" data-aos-once="true">Your teacher</h2> -->
    <div class="teacher__contact">
      <div class="teacher__contact_mail">
        <a href="mailto:nikobigorre@gmail.com">nikobigorre@gmail.com</a>
      </div>
      <div class="teacher__contact_phone">
        <a href="tel:0041 76 230 17 22">0041 76 230 17 22</a>
      </div>
    </div>
    <div class="teacher__item" data-aos="fade-right" data-aos-once="true">
      <div class="teacher__item_image teacher__item_big teacher-image"></div>
      <div class="teacher__item_text teacher__item_big">
        <p v-for="(item, index) in text.teacher[lang]" :key="index">{{ item }}</p>
      </div>
    </div>
    <div class="teacher__item teacher__item_right" data-aos="fade-left" data-aos-once="true">
      <div class="teacher__item_text">
        <p v-for="(item, index) in text.aisi[lang]" :key="index">{{ item }}</p>
      </div>
      <div class="teacher__item_image certif-image"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teacher",
  props: {
    lang: String
  },
  data() {
    return {
      text: {
        teacher: {
          en: [
            "Familiar with the area of the 4 Valleys and the surroundings, I am pleased to support children and adults whatever their level and requirements, on or off the slopes, and this, with maximum safety!",
            "Do not hesitate to contact me if you want to evolve in such practices or simply discover them!"
          ],
          fr: [
            "Connaissant parfaitement le domaine des 4 vallées et ses environs, je me fais un plaisir d’accompagner petits et grands quel que soit leur niveau et leurs exigences, sur ou en dehors des pistes et ceci avec une sécurité optimale !",
            "Je vous emmène volontiers à la découverte des innombrables recoins de nature offerts par cette région au cours de votre séjour."
          ]
        },
        aisi: {
          en: [
            "Familiar with the area of the 4 Valleys and the surroundings, I am pleased to support children and adults whatever their level and requirements, on or off the slopes, and this, with maximum safety!",
            "Do not hesitate to contact me if you want to evolve in such practices or simply discover them!"
          ],
          fr: [
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

.teacher {
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
    display: flex;
    justify-content: space-between;
    @include mq(m) {
      flex-direction: column;
    }
    a {
      @include font(20px, 400, 20px);
      color: $white;
    }
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    color: $black;
    width: 100%;
    @include mq(m) {
      flex-direction: column;
    }
    &_right {
      margin-left: auto;
    }
    &_image {
      height: 345px;
      width: 40%;
      @include box-shadow;
      @include background;
      background-color: $greyMed;
      &.teacher-image {
        background-image: url("~@/assets/teacher.jpg");
        margin-right: 15px;
      width: 60%;
        @include mq(m) {
          width: 100%;
          margin-right: 0px;
        }
      }
      &.certif-image {
        background-image: url("~@/assets/aisi-logo.png");
        margin-left: 15px;
        background-size: contain;
        background-color: $white;
        @include mq(m) {
          width: 100%;
          margin-left: 0px;
        }
      }
    }
    &_text {
      height: 345px;
      overflow: hidden;
      width: 60%;
      background-color: $white;
      @include box-shadow;
      padding: 80px 50px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      @include mq(m) {
        width: 100%;
      }
      p {
        margin: 0;
      }
    }
    &_big {
      height: 400px;
    }
  }
}
</style>
