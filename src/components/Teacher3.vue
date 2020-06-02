<template>
  <div class="teacher3">
    <div class="teacher3__item wrapper" data-aos="fade-right" data-aos-once="true">
      <div class="teacher3__item_overlay"></div>
      <p
        class="teacher3__item_text"
        v-for="(item, index) in text.teacher[lang]"
        :key="index"
      >{{ item }}</p>
    </div>
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
@import "@/style/index";
.teacher3 {
  width: 100%;
  height: 400px;
  @include background;
  background-image: url("~@/assets/teacher.jpg");
  transform: scaleX(-1);
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    &_overlay {
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.4)
      );
      background-size: cover;
      width: 100%;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
    }
    &_text {
      transform: scaleX(-1);
      width: 50%;
      // padding-right: 100px;
      margin: 10px 0;
      z-index: 10;
      box-sizing: border-box;
      color: $white;
      background-color: $transparentColor;
      &:first-child {
        margin-bottom: 15px;
        @include font(40px, 700, 50px);
      }
      &:last-child {
        margin-left: 5px;
      }
      @include mq(m) {
        width: 100%;
      }
    }
  }
}
</style>
