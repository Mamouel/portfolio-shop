<template>
  <div class="title-text">
    <h2 class="title-text__title">{{ title }}</h2>
    <p class="title-text__subtitle">{{ subtitle }}</p>
    <div class="title-text__btns">
      <button class="btn btn__primary">{{ buttonOne }}</button>
      <button class="btn btn__primary btn__primary_white">{{ buttonTwo }}</button>
    </div>


  </div>
</template>

<script>
export default {
  name: "Teacher",
  props: {
    lang: String,
    title: String,
    subtitle: String,
    buttonOne: String,
    buttonTwo: String,
  },
  data() {
    return {
      text: {

      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";

.title-text {
  text-align: center;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__title {

  }
  &__subtitle {
    margin: 8px 0px 16px 0px;
    
  }
  &__btns {
    display: flex;
    
  }

}
</style>
