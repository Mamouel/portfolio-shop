<template>
  <div class="contact wrapper">
    <div class="contact__links">
      <a class="contact__mail" href="mailto:nikobigorre@gmail.com"
        >nikobigorre@gmail.com</a
      >
      <p class="contact__phone">0041 76 230 17 22</p>

      <a
        href="https://www.facebook.com/nikodod"
        target="_blank"
        rel="nooponer noreferrer"
        class="contact__fb"
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 60.734 60.733"
          style="enable-background:new 0 0 60.734 60.733;"
          xml:space="preserve"
        >
          <g>
            <path
              d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914
        v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462
        v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"
            />
          </g>
        </svg>
      </a>
    </div>
    <p class="contact__bg">Get in touch</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/index";

.contact {
  height: 230px;
  overflow: hidden;
  width: 100%;
  position: relative;
  &__bg {
    @include font(200px, 900, 130px);
    font-family: $heading-font;
    text-transform: uppercase;
    position: absolute;
    user-select: none;
    margin: 0;
    top: 0px;
    left: 0;
    z-index: 1;
    color: $black;
    opacity: 0.03;
    overflow: hidden;
    width: 100%;
    cursor: default;
    @include mq(xl) {
      @include font(200px, 900, 120px);
    }
    @include mq(s) {
      @include font(150px, 900, 100px);
    }
    @include mq(xxs) {
      @include font(100px, 900, 70px);
    }
  }
  &__links {
    width: 100%;
    height: 230px;
    display: flex;
    justify-content: left;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    @include mq(s) {
      flex-direction: column;
      margin: auto;
      justify-content: space-evenly;
    }
  }
  &__fb {
    z-index: 2;
    svg {
      height: 38px;
      width: 38px;
      fill: #3b5998;
      cursor: pointer;
      @include transition(fill 0.3s ease);
      &:hover {
        fill: $primary;
      }
    }
  }
  &__mail {
    z-index: 2;
    cursor: pointer;
    color: $primary;
    @include font(18px, 400, 24px);
  }
  &__phone {
    z-index: 2;
    cursor: text;
    margin: 0 35px;

    color: $primary;
  }
}
</style>