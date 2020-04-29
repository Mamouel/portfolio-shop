<template>
  <div class="navbar" :class="bodyScroll ? 'navbar_scrolled' : ''">
    <div class="navbar__ctn wrapper">
      <img src="@/assets/logo-v2.png" alt />
      <div
        class="navbar__links"
        @mouseover="menuOpen = true"
        @mouseleave="menuOpen = false"
        :class="menuOpen ? 'open' : 'closed'"
      >
        <router-link
          @click.native="menuOpen = !menuOpen"
          class="button side-menu-btn"
          to="/"
        >Lessons</router-link>
        <router-link
          @click.native="menuOpen = !menuOpen"
          class="button side-menu-btn"
          to="/"
        >Teacher</router-link>
        <router-link
          @click.native="menuOpen = !menuOpen"
          class="button side-menu-btn"
          to="/"
        >Packagess</router-link>
      </div>
      <div class="menu-burger" @mouseover="menuOpen = true" @mouseleave="menuOpen = false">
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
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    lang: String
  },
  data() {
    return {
      menuOpen: false,
      bodyScroll: false,
      displayLang: false
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
  @include transition(background-color 0.3s ease);
  &__ctn {
    display: flex;
    align-items: center;
    img {
      height: 80px;
      margin-right: auto;
      padding: 20px 0;
    }
  }

  &_scrolled {
    background-color: $white;
    @include box-shadow(
      0 0 0 1px rgba(63, 63, 68, 0.05),
      0 1px 3px 0 rgba(63, 63, 68, 0.15)
    );
  }

  &__links {
    z-index: 100;
    display: flex;
    align-items: center;
    height: $navbarHeight;
    background-color: $transparentColor;
    @include transition(transform 0.3s ease);
    @include mq(xxs) {
      width: 100vw;
    }

    a {
      margin: 10px;
      @include font(16px, normal, 20px);
    }

    &.open {
      .menu-burger-btn {
        .line {
          background-color: $primaryDark;
        }
      }
    }

    &.closed {
      transform: translateY(-100%);
    }

    &_theme {
      margin-top: auto;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
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

    // .menu-burger-btn.open {
    //   .top {
    //     transform: rotate(45deg);
    //     top: 40%;
    //   }

    //   .middle,
    //   .bottom {
    //     transform: rotate(-45deg);
    //     top: 40%;
    //   }
    // }
  }
  .lang {
    position: relative;
    height: 60px;
    width: 60px;
    .lang-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $transparentColor;
      @include font(16px, bold, 20px);
      width: 60px;
      height: 60px;
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
        width: 50px;
        padding: 5px;
        cursor: pointer;
        &:hover {
          background-color: $primaryLight;
        }
      }
    }
  }
}
</style>
