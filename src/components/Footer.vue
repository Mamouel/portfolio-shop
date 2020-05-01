<template>
  <div class="footer">
    <div class="footer__wrapper wrapper">
      <!-- <div class="footer__section">
        <img src="@/assets/logo-v2.png" alt="ride and smile snowsports" />
      </div> -->
      <div class="footer__mention">
        © 2020 - Ride and Smile Snowsports
      </div>
      <div class="footer__mention">
        Conception et réalisation
        <a href="mailto:e-dodier@hotmail.fr">Mamouel</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.footer {
  background-color: $greyLight;
  &__wrapper {
    display: flex;
    justify-content: space-between;
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
