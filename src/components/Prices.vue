<template>
  <div class="prices wrapper" data-aos="fade" data-aos-once="true">
    <div class="prices__item">
      <p>Morning</p>
      <p>
        <span>chf</span>
        450
      </p>
    </div>
    <div class="prices__item">
      <p>Morning</p>
      <p>
        <span>chf</span>
        450
      </p>
    </div>
    <div class="prices__item">
      <p>Morning</p>
      <p>
        <span>chf</span>
        450
      </p>
    </div>
    <div class="prices__item">
      <p>Morning</p>
      <p>
        <span>chf</span>
        450
      </p>
    </div>
    <div class="prices__item">
      <p>Morning</p>
      <p>
        <span>chf</span>
        450
      </p>
    </div>
    <div class="prices__item">
      <p>Morning</p>
      <p>
        <span>chf</span>
        450
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prices",
  props: {
    lang: String
  },
  data() {
    return {
      text: {
        title: {
          en: "Lessons & Freeride",
          fr: "Cours & Hors-piste"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.prices {
  color: $white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &__item {
    width: calc(100% / 3 - 40px);
    text-align: center;
    margin: 20px;
    @include mq(m) {
      width: calc(100% / 2 - 40px);
    }
    @include mq(xxs) {
      width: calc(100% - 40px);
    }
    p {
      border: 1px solid $white;
      padding: 20px;
      margin: 0;
    }
  }
}
</style>
