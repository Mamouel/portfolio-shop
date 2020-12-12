<template>
  <div class="triple-cases">
    <!-- <h2 data-aos="zoom-in" data-aos-once="true">Your teacher</h2> -->
    <div class="triple-cases__ctn">
      <div class="triple-cases__ctn--image"></div>
      <div class="triple-cases__ctn--text">
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum</p>
      </div>
    </div>
    <div class="triple-cases__ctn triple-cases__ctn--double">
      <div class="triple-cases__ctn--title main">
        <div class="triple-cases__ctn--text">
          <h2>Lorem ipsum</h2>
          <button class="btn btn__primary">Lorem ipsum</button>
        </div>
      </div>
      <div class="triple-cases__ctn--subimage"></div>
      <div class="triple-cases__ctn--text">
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teacher",
  props: {
    lang: String,
  },
  data() {
    return {
      text: {
        teacher: {
          en: [],
          fr: [],
        },
        aisi: {
          en: [],
          fr: [],
        },
      },
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";

.triple-cases {
  display: flex;
  width: 100%;
  height: 110vh;
  @include mq(m) {
    flex-direction: column;
    height: 100%;
  }
  &__ctn {
    display: flex;
    justify-content: space-between;
    border: 1px solid $greyLight;
    align-items: center;
    flex-direction: column;
    flex: 1;
    color: $black;
    width: 50%;
    padding: 50px;
    @include mq(m) {
      width: 100%;
    }
    &:first-child {
      border-right: none;
      border-left: none;
    }
    &:last-child {
      border-right: none;
    }
    &--double {
      padding: 50px 0;
      @include mq(m) {
        padding: 0;
      }
    }
    &--image {
      @include background;
      background-image: url("~@/assets/blue-2564660_640.jpg");
      width: 100%;
      height: 100%;
      min-height: 300px;
    }
    &--text {
      text-align: center;
      // height: 20%;
      width: 100%;
      padding: 50px 0;
    }
    &--subimage {
      @include background;
      background-image: url("~@/assets/nature-3339326_640.jpg");
      width: 100%;
      flex: 1;
      height: 100%;
      padding: 50px;
      padding-bottom: 0;
      background-clip: content-box;
      min-height: 300px;
    }
    &--title {
      text-align: center;
      flex: 1;
      width: 100%;
      padding: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid $greyLight;
      &.main {
        padding: 0;
      }
    }
  }
}
</style>
