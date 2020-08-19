<template>
  <div class="navbar" :class="bodyScroll ? 'navbar_scrolled' : ''">
    <div class="navbar__ctn wrapper">
      <img src="@/assets/logo-v2.png" alt="ride and smile snowsports" />
      <div class="navbar__right">
        <div class="menu-burger" @click="openMenu(!menuOpen)">
          <div class="menu-burger-btn" :class="menuOpen ? 'open' : 'closed'">
            <span class="line top"></span>
            <span class="line middle"></span>
            <span class="line bottom"></span>
          </div>
        </div>
        <div class="lang">
          <div
            class="lang-btn"
            @mouseover="displayLang = true"
            @mouseleave="displayLang = false"
          >{{ lang }}</div>
          <div
            class="lang-dropdown"
            :class="displayLang ? 'open' : 'closed'"
            @mouseover="displayLang = true"
            @mouseleave="displayLang = false"
          >
            <div class="lang-dropdown__item" @click="changeLang('en')">English</div>
            <div class="lang-dropdown__item" @click="changeLang('fr')">Francais</div>
          </div>
        </div>
      </div>
      <div class="navbar__links" :class="menuOpen ? 'open' : 'closed'">
        <div @click="openMenu(!menuOpen)" class="side-menu-btn">
          <router-link :to="{ name: 'Home', hash: '#teacher3' }">
            <span>{{ text.teacher[lang] }}</span>
          </router-link>
        </div>
        <div @click="openMenu(!menuOpen)" class="side-menu-btn">
          <router-link :to="{ name: 'Home', hash: '#location' }">
            <span>{{ text.location[lang] }}</span>
          </router-link>
        </div>
        <div @click="openMenu(!menuOpen)" class="side-menu-btn">
          <router-link :to="{ name: 'Home', hash: '#products' }">
            <span>{{ text.lessons[lang] }}</span>
          </router-link>
        </div>
        <div @click="openMenu(!menuOpen)" class="side-menu-btn">
          <router-link :to="{ name: 'Home', hash: '#prices' }">
            <span>{{ text.prices[lang] }}</span>
          </router-link>
        </div>
        <div @click="openMenu(!menuOpen)" class="side-menu-btn">
          <router-link :to="{ name: 'Home', hash: '#partners' }">
            <span>{{ text.partners[lang] }}</span>
          </router-link>
        </div>
        <div @click="openMenu(!menuOpen)" class="side-menu-btn">
          <router-link :to="{ name: 'Home', hash: '#contact' }">
            <span>{{ text.contact[lang] }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    lang: String,
    menuOpen: Boolean
  },
  data() {
    return {
      bodyScroll: false,
      displayLang: false,
      text: {
        teacher: {
          en: "Teacher",
          fr: "Prof"
        },
        location: {
          en: "Location",
          fr: "Station"
        },
        lessons: {
          en: "Lessons",
          fr: "Cours"
        },
        prices: {
          en: "Prices",
          fr: "Prix"
        },
        partners: {
          en: "Partners",
          fr: "Partenaires"
        },
        contact: {
          en: "Contact",
          fr: "Contact"
        }
      }
    };
  },
  methods: {
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
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/index";
.navbar {
  background-color: $transparentColor;
  height: $navbarHeight;
  position: fixed;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include transition(background-color 1.3s ease);
  @include mq(s) {
    height: $navbarHeightMobile;
  }
  &__ctn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 90px;
      @include mq(s) {
        padding: 0px;
        height: 60px;
      }
    }
  }

  &_scrolled {
    background-color: $greyLight;
    @include box-shadow(
      0 0 0 1px rgba(63, 63, 68, 0.05),
      0 1px 3px 0 rgba(63, 63, 68, 0.15)
    );
  }

  &__right {
    display: flex;
    align-items: center;
  }

  &__links {
    font-family: $heading-font;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: -300px;
    top: 0;
    width: 300px;
    background-color: $greyLight;
    height: 100vh;
    @include box-shadow;
    .side-menu-btn {
      @include font(34px, 900, 30px);
      color: $black;
      border-bottom: 1px solid $black;
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      a {
        color: $black;
      }
    }

    &.open {
      @include transition(transform 0s ease-in);
      .menu-burger-btn {
        .line {
          background-color: $primaryDark;
        }
      }
    }

    &.closed {
      @include transition(transform 2s ease);
    }
  }

  .menu-burger {
    background: $transparentColor;
    z-index: 110;
    display: flex;
    border-radius: 50%;
    position: relative;
    padding: 15px;
    cursor: pointer;
    margin-right: 30px;
    @include transition(background-color 0.3s ease);
    @include mq(s) {
      padding: 10px;
    }
    @include mq(xs) {
      margin-right: 0;
    }
    .menu-burger-btn {
      width: 30px;
      height: 30px;
      position: relative;

      &.open {
        .line {
          background-color: $primaryDark;
        }
      }

      @include mq(s) {
        width: 25px;
        height: 25px;
      }

      .line {
        position: absolute;
        height: 6px;
        width: 100%;
        background-color: $black;
        border-radius: 8px;
        @include transition(all 0.3s cubic-bezier(0.26, 0.1, 0.27, 1.55));

        @include mq(s) {
          height: 5px;
        }

        &.top {
          top: 0;
          transform: rotate(0deg);
        }

        &.middle {
          top: 50%;
          transform: translateY(-50%);
        }

        &.bottom {
          bottom: 0;
        }
      }
    }

    .menu-burger-btn.open {
      .top {
        transform: rotate(45deg);
        top: 40%;
      }

      .middle,
      .bottom {
        transform: rotate(-45deg);
        top: 40%;
      }
    }
  }
  .lang {
    position: relative;
    height: 60px;
    // width: 60px;
    font-family: $heading-font;

    .lang-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $transparentColor;
      @include font(16px, bold, 20px);
      padding: 20px;
      text-transform: capitalize;
      cursor: pointer;
    }
    .lang-dropdown {
      position: absolute;
      background-color: $white;
      opacity: 0;
      visibility: hidden;
      @include transition(opacity 0.3s ease, visibility 0.3s ease);

      &.open {
        opacity: 1;
        visibility: visible;
      }

      &__item {
        // width: 50px;
        padding: 10px 15px;
        cursor: pointer;
        @include transition(color 0.3s ease, background-color 0.3s ease);

        &:hover {
          background-color: $primary;
          color: $white;
        }
      }
    }
  }
}
</style>
