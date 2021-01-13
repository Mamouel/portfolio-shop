<template>
  <div class="footer">
    <div
      class="footer__wrapper footer__wrapper_panel wrapper"
      :class="panelSelected === index ? 'visible' : 'hidden'"
      v-for="(link, index) in text.utils"
      :key="index"
    >
      <p
        class="link link_white link_footer"
        v-for="(item, index) in link.panelContent"
        :key="index"
      >
        <span>{{ item.icon }}</span>
        <span>{{ item.social }}</span>
      </p>
    </div>
    <div class="footer__wrapper footer__wrapper_up wrapper">
      <p class="footer__title">nice shop</p>
    </div>
    <div class="footer__wrapper wrapper">
      <router-link
        class="link link_white link_footer"
        v-for="link in text.links"
        :key="link.to"
        :to="link.to"
      >
        {{ link[lang] }}
      </router-link>
      <span
        class="link link_white"
        v-for="(link, index) in text.utils"
        :key="index"
        @click="handlePanel(index)"
      >
        {{ link[lang] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    lang: String,
  },
  data() {
    return {
      panelSelected: null,
      text: {
        links: [
          {
            en: "Newsletter",
            fr: "Newsletter",
            to: "/newsletter",
          },
          {
            en: "Help",
            fr: "Aide",
            to: "/help",
          },
          {
            en: "Shops",
            fr: "Magasins",
            to: "/shops",
          },
          {
            en: "Legal notice",
            fr: "Mentions légales",
            to: "/legal",
          },
          {
            en: "Cookies",
            fr: "Cookies",
            to: "/cookies",
          },
          {
            en: "Career",
            fr: "Jobs",
            to: "/career",
          },
        ],
        utils: [
          {
            en: "Follow us",
            fr: "Suivez-nous",
            panelContent: [
              {
                icon: "",
                social: "Facebook",
              },
              {
                icon: "",
                social: "Twitter",
              },
              {
                icon: "",
                social: "Instagram",
              },
            ],
          },
          {
            en: "Sitemap",
            fr: "Plan du site",
            panelContent: [
              {
                icon: "",
                social: "Lorem ipsum",
              },
              {
                icon: "",
                social: "Lorem ipsum",
              },
              {
                icon: "",
                social: "Lorem ipsum",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handlePanel(index) {
      this.panelSelected === index
        ? (this.panelSelected = null)
        : (this.panelSelected = index);
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_mixins";
@import "@/style/_colors";
.footer {
  background-color: $black;
  color: $white;
  position: relative;
  &__wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &_panel {
      background-color: $black;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 155px;
      width: 100%;
      @include transition(
        height 0.3s ease,
        visibility 0.3s ease,
        opacity 0.3s ease
      );
      @include mq(xxs) {
        flex-direction: column;
        bottom: 200px;
      }
      &.visible {
        height: 250px;
        visibility: visible;
        opacity: 1;
      }
      &.hidden {
        height: 0px;
        visibility: hidden;
        opacity: 0;
      }
    }
  }
  &__title {
    border-bottom: 1px solid $greyLight;
    width: 100%;
    padding: 32px 0;
    @include font(25px, bold, 25px);
    text-transform: uppercase;
  }
  &__mention {
    @include font(10px, 100, 12px);
    padding: 32px 0;
  }
}
</style>
