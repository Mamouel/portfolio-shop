<template>
  <div class="footer">
    <div class="footer__wrapper wrapper">
      <!-- <div class="footer__section">
        <img src="@/assets/logo-v2.png" alt="ride and smile snowsports" />
      </div>-->
      <div class="footer__mention">{{ text.mention[0][lang] }}</div>
      <!-- <div class="footer__mention">
        {{ text.mention[1][lang] }}
        <a href="mailto:e-dodier@hotmail.fr">Mamouel</a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    lang: String
  },
  data() {
    return {
      text: {
        mention: [
          {
            en: "© 2020 - Ride and Smile Snowsports",
            fr: "© 2020 - Ride and Smile Snowsports"
          },
          { en: "Design and production", fr: "Conception et réalisation" }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";
.footer {
  background-color: $greyLight;
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 50px;
      padding: 20px 0;
    }
  }
  &__mention {
    @include font(10px, 100, 12px);
    padding: 20px 0;
    color: $black;
  }
}
</style>
