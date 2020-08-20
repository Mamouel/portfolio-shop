<template>
  <div id="app">
    <Navbar
      :lang="lang"
      :menuOpen="menuOpen"
      @newLang="setLang"
      @toggleMenu="setMenu"
      :class="menuOpen ? 'menuOpen' : 'menuClosed'"
    />
    <router-view
      :lang="lang"
      style="width: 100%"
      :class="menuOpen ? 'menuOpen' : 'menuClosed'"
      @click.native="menuOpen = false"
    />
    <Footer :lang="lang" :class="menuOpen ? 'menuOpen' : 'menuClosed'" />
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
      lang: "en",
      menuOpen: false
    };
  },
  methods: {
    setLang(lang) {
      this.lang = lang;
    },
    setMenu(value) {
      this.menuOpen = value;
    }
  }
};
</script>

<style lang="scss">
@import "@/style/index";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: $white;
  width: 100%;

  .menuOpen {
    @include transition(transform 0.5s ease-in);
    transform: translateX(-300px);
    @include mq(xs) {
      transform: translateX(-100vw);
    }
  }
  .menuClosed {
    @include transition(transform 0.2s ease, background-color 0.3s ease);
  }

  a {
    // font-weight: bold;
    text-decoration: none;
    outline: none;
    // color: $black;
    @include transition(
      color 0.2s ease,
      transform 0.3s ease,
      background-color 0.3s ease
    );
    &:hover {
      color: $primary;
    }
  }
}
</style>
