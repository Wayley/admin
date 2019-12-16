<template>
  <div class="logo" :style="style">
    <div class="layout-logo">LOGO</div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {
    height: String
  },
  data() {
    return {};
  },
  computed: {
    style() {
      const height = this.height;
      return { height, lineHeight: height };
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.logo {
  color: #fff;
  font-size: 24px;
  text-align: center;
}
</style>
