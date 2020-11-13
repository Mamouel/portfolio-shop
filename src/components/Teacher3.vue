<template>
  <div class="teacher3">
    <div class="teacher3__item wrapper" data-aos="fade-right" data-aos-once="true">
      <div class="teacher3__item_overlay"></div>
      <p class="teacher3__item_text">
        <span v-for="(item, index) in text.teacher[lang]" :key="index">{{ item }}</span>
      </p>
    </div>
    <p class="teacher3__item_mobile wrapper">
      <span v-for="(item, index) in text.teacher[lang]" :key="index">{{ item }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Teacher3",
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
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";
.teacher3 {
  width: 100%;
  position: relative;
  &__item {
    @include background;
    background-image: url("~@/assets/teacher.jpg");
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include mq(s) {
      height: 400px;
    }
    &_overlay {
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.4)
      );
      background-size: cover;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 0;
      left: 0;
      @include mq(s) {
        display: none;
      }
    }
    &_text {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 10px 0;
      z-index: 10;
      color: $white;
      background-color: $transparentColor;
      padding: 20px;
      span {
        &:first-child {
          margin-bottom: 15px;
          @include font(40px, 700, 50px);
        }
        &:last-child {
          margin-top: 15px;
        }
      }
      @include mq(s) {
        display: none;
        position: absolute;
        bottom: 0;
        width: 100%;
        color: $black;
        @include font(18px, 700, 20px);
      }
    }
    &_mobile {
      display: none;
      @include mq(s) {
        display: block;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 50px 20px;
        background-color: $primaryDark;
        color: $white;
        span {
          @include font(18px, 500, 24px);
          &:first-child {
            margin-bottom: 15px;
            @include font(20px, 700, 24px);
          }
          &:last-child {
            display: none;
          }
        }
      }
    }
  }
}
</style>
