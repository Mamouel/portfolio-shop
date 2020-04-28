<template>
  <div class="partners wrapper">
    <div class="partners__ctn">
      <img src="@/assets/logo-faction.jpg" alt />
      <img src="@/assets/logo-isia.png" alt />
      <img src="@/assets/logo-verbier.jpg" alt />
      <img src="@/assets/logo-membre-swissno.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners"
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.partners {
  &__ctn {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    img {
      height: 90px;
      margin: 20px;
    }
  }
}
</style>
