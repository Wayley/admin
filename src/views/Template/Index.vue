<template>
  <div class="main">MAIN-{{name}}--{{title}}</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    name() {
      return this.$route.name;
    },
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  height: 30px;
  line-height: 30px;
  font-size: 24px;
  color: #333;
  text-align: center;
}
</style>
