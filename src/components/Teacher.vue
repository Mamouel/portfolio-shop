<template>
  <div class="teacher wrapper">
    <h2>Your teacher</h2>
    <div class="teacher__item">
      <div class="teacher__item_image teacher-image"></div>
      <div class="teacher__item_text">
        <p v-for="(item, index) in text.teacher[lang]" :key="index">{{ item }}</p>
      </div>
    </div>
    <div class="teacher__item">
      <div class="teacher__item_text"></div>
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
            "Do not hesitate to contact me if you want to evolve in such practices or simply discover them!",
          ],
          fr: [
            "Connaissant parfaitement le domaine des 4 vallées et ses environs, je me fais un plaisir d’accompagner petits et grands quel que soit leur niveau et leurs exigences, sur ou en dehors des pistes et ceci avec une sécurité optimale !",
            "Je vous emmène volontiers à la découverte des innombrables recoins de nature offerts par cette région au cours de votre séjour."
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.teacher {
  h2 {
    text-align: right;
    margin-bottom: 85px;
    color: $white;
    padding-bottom: 10px;
    border-bottom: 4px solid $white;
    width: 40%;
    margin-left: auto;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    color: $black;
    &_image {
      height: 400px;
      width: 40%;
      @include box-shadow;

      @include background;
      background-color: $greyMed;

      &.teacher-image {
        background-image: url("~@/assets/nicoteacher.jpg");
        margin-right: 15px;
      }
      &.certif-image {
        background-image: url("~@/assets/aisi.png");
        margin-left: 15px;
        background-size: contain;
      }
    }
    &_text {
      height: 400px;
      overflow: hidden;
      width: 60%;
      box-sizing: border-box;
      background-color: $white;
      @include box-shadow;
      padding: 80px 50px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      p {
        margin: 0;
      }
    }
  }
}
</style>