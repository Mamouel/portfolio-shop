<template>
  <div id="app" :class="getMenuOpen ? 'menuOpen' : 'menuClosed'">
    <Navbar
      :lang="lang"
      :class="getMenuOpen ? 'menuOpen' : 'menuClosed'"
    />
    <router-view
      :lang="lang"
      style="width: 100%"
      :class="getMenuOpen ? 'menuOpen' : 'menuClosed'"
    />
    <Footer :lang="lang" :class="getMenuOpen ? 'menuOpen' : 'menuClosed'" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      lang: "en",
      menuOpen: false,
    };
  },
  computed: {
    ...mapGetters("menu", ["getMenuOpen", "getStateLoading"]),
    ...mapGetters("lang", ["getLang", "getStateLoading"]),

  },
};
</script>

<style lang="scss">
@import "@/style/index";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // height: 100%;
  padding: 0;
  margin: 0;
  background-color: $white;
  width: 100%;
  overflow-x: hidden;

  &.menuOpen {

      overflow-y: hidden;
      position: fixed;
    
  }
  a {
    // font-weight: bold;
    text-decoration: none;
    outline: none;
    // color: $black;
    @include transition(
      color 0.2s ease,
      transform 0.3s ease,
      background-color 0.3s ease,
      border 0.3s ease
    );
    // &:hover {
    //   color: $greyMed;
    // }
  }
}
</style>
