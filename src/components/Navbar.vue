<template>
  <div class="navbar" :class="bodyScroll ? 'navbar_scrolled' : ''">
    <div class="navbar__ctn navbar__ctn_infos wrapper">
      <p class="navbar__ctn_toplink">country</p>
      <p class="navbar__ctn_toplink">phone</p>
      <p class="navbar__ctn_toplink">shops</p>
      <p class="navbar__ctn_toplink">help?</p>
    </div>
    <div class="navbar__ctn wrapper">
      <h2 id="logo" class="navbar__ctn_logo" @click="handleMenu(true, 0)">
        NICE SHOP
      </h2>
      <div class="navbar__ctn_links">
        <div
          class="link link_main"
          @click="handleMenu(true, index, link)"
          v-for="(link, index) in links"
          :key="index"
        >
          <span>{{ link[lang] }}</span>
        </div>
      </div>
    </div>
    <div
      class="menu"
      :class="[
        getMenuSelected === index ? 'open' : 'closed',
        subPanelSelected.length && 'sub',
      ]"
      v-for="(menu, index) in menus"
      :key="index"
    >
      <div
        v-if="getMenuOpen"
        class="menu__close"
        @click="handleMenu(false, null)"
      >
        x
      </div>
      <div v-if="getMenuSelected === index" class="menu__pannel">
        <p
          class="menu__pannel_link"
          v-for="(link, index) in menu.firstPanel.links"
          :key="index"
          @click="subPanelSelected = link.id"
        >
          {{ link[lang] }}
        </p>
      </div>
      <transition name="fade">
        <div
          v-if="getMenuSelected === index"
          class="menu__pannel menu__pannel_subpannel"
        >
          <p class="mobile" @click="subPanelSelected = ''">back</p>
          <router-link
            class="menu__pannel_link"
            v-for="(link, index) in menu.secondPanel[subPanelSelected]"
            :key="index"
            :to="link.to"
          >
            {{ link[lang] }}
          </router-link>
        </div>
      </transition>

      <transition name="fade">
        <div
          class="menu__pannel menu__pannel_img"
          :style="{ backgroundImage: `url(${menu.img})` }"
          v-if="getMenuSelected === index"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import menus from "@/utils/menu";
import links from "@/utils/navbarLinks";

export default {
  name: "Navbar",
  props: {
    lang: String,
  },
  data() {
    return {
      bodyScroll: false,
      panelSelected: null,
      subPanelSelected: "",
      menus: menus,
      links: links,
    };
  },
  methods: {
    ...mapActions("menu", ["toggleMenu"]),
    handleMenu(value, index, link) {
      const payload = {
        value,
        index,
      };
      this.toggleMenu(payload);
      if (link && window.innerWidth > 600) {
        this.subPanelSelected = link.sub;
      } else {
        this.subPanelSelected = "";
      }
      console.log(this.subPanelSelected);
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.bodyScroll = true;
      } else {
        this.bodyScroll = false;
      }
    },
    changeLang(value) {
      this.$emit("newLang", value);
    },
    openMenu(value) {
      this.$emit("toggleMenu", value);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    ...mapGetters("menu", [
      "getMenuOpen",
      "getMenuSelected",
      "getStateLoading",
    ]),
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";
@import "@/style/_variables";
@import "@/style/_fonts";

.navbar {
  background-color: $transparentColor;
  height: $navbarHeight;
  width: 100%;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include font(13px, normal, 16px);
  @include transition(background-color 0.1s ease);
  border-bottom: 1px solid $greyLight;
  @include mq(s) {
    height: unset;
  }
  &__ctn {
    display: flex;
    align-items: center;
    width: 100%;
    @include mq(s) {
      flex-direction: column;
    }
    &_infos {
      background-color: $greyLight;
      // height: 40px;
      margin: 0;
      padding-top: 10px;
      padding-bottom: 10px;
      @include mq(s) {
        flex-direction: row;
      }
    }
    &_toplink {
      padding: 0 20px;
      margin-left: -20px;
      cursor: pointer;
      // &:last-child {
      //   margin-left: auto;
      // }
    }
    &_logo {
      @include font(25px, bold, 25px);
      white-space: nowrap;
      padding-right: 25px;
    }
    &_links {
      z-index: 100;
      // height: 72px;
      display: flex;
      justify-content: left;
      align-items: center;
      width: 100%;
      @include mq(s) {
              justify-content: center;
              flex-wrap: wrap;

      }
    }
  }

  &_scrolled {
    background-color: $white;
    @include box-shadow(
      0 0 0 1px rgba(63, 63, 68, 0.05),
      0 1px 3px 0 rgba(63, 63, 68, 0.15)
    );
  }

  &__right {
    display: flex;
    align-items: center;
  }
}

.menu {
  display: flex;
  position: absolute;
  top: 112px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: white;
  overflow-x: hidden;
  @include transition(transform 0.3s ease);

  @include mq(m) {
    flex-wrap: wrap;
  }
  @include mq(s) {
    top: 119px;
  }
  @include mq(xs) {
    width: 200%;
    top: 176px;

  }
  &.sub {
    @include mq(xs) {
      transform: translate(-100vw);
    }
  }
  &.open {
    height: calc(100vh - 112px);
    z-index: 1001;
    // opacity: 1;
    // visibility: visible;
  }
  &.close {
    height: 0;
    // opacity: 0;
    // visibility: hidden;
  }
  &__pannel {
    width: 30%;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 50px;
    @include mq(m) {
      min-width: 50%;
    }
    &_subpannel {
      background-color: $greyLight;
    }
    .mobile {
      cursor: pointer;
      margin-bottom: 25px;
      padding: 10px;
    }
    &_link {
      font-family: $heading-font;
      @include font(16px, normal, 20px);
      padding: 8px 0;
      cursor: pointer;
      @include transition(color 0.3s ease);
      color: $black;
      &:hover {
        color: $greyMed;
      }
    }
    &_img {
      @include background;
      @include mq(m) {
        width: 100%;
        flex: 2;
        position: absolute;
        bottom: 0;
        left: 0;
        min-height: 300px;
        background-size: cover;
        background-position: top;
      }
    }
    @include mq(xs) {
      width: 100vw;
    }
  }
  &__close {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 25px;
    background-color: $white;
    cursor: pointer;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
