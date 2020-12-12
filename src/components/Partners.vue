<template>
  <div class="partners wrapper">
    <div class="partners__ctn" data-aos="fade-right" data-aos-once="true">

    </div>
  </div>
</template>

<script>
export default {
  name: "Partners"
};
</script>

<style lang="scss" scoped>
@import "@/style/_colors";

.partners {
  &__ctn {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: $white;
    img {
      height: 80px;
      margin: 20px;
    }
  }
}
</style>
