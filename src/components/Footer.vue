<template>
  <div class="footer">
    <div class="footer__wrapper wrapper">
      <div class="footer__section">
        <h4>Social Links</h4>
      </div>
      <div class="footer__section">
        <h4>Utils</h4>


      </div>
      <div class="footer__section">
        <h4>Contact</h4>


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
  background-color: $black;
  height: 200px;
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  &__section {
    flex: 1;
    height: 200px;
    h4 {
      text-align: center;
      color: $white;
      padding: 50px;
    }
    
  }
}
</style>
