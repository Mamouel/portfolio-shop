<template>
  <div id="app">
    <Navbar :lang="lang" @newLang="setLang" />
    <router-view :lang="lang" style="width: 100%" />
    <Footer :lang="lang" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      lang: "en"
    };
  },
  methods: {
    setLang(lang) {
      this.lang = lang;
    }
  }
};
</script>

<style lang="scss">
@import "@/style/index";
</style>
