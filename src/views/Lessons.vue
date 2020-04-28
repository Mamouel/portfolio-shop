<template>
  <div class="lessons">
    <Banner :lang="lang" type="page" title="Cours de groupes et individuels" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "Lessons",
  props: {
    lang: String
  },
  components: {
    Banner
  }
};
</script>
