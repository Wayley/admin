<template>
  <div class="menu-trigger">
    <span class="menu-trigger-icon" :style="style">
      <Icon
        type="md-menu"
        :class="{ 'rotate-icon': isCollapsed }"
        :size="isCollapsed ? 26 : 24"
        @click.native="collapsedSider"
      ></Icon>
    </span>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: '64px'
    }
  },
  data() {
    return {
      isCollapsed: this.value
    };
  },
  computed: {
    style() {
      return { width: this.height }; // 宽高同等
    }
  },
  methods: {
    collapsedSider() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('input', this.isCollapsed);
    }
  }
};
</script>
<style scoped lang="less">
.menu-trigger {
  height: 100%;
  .menu-trigger-icon {
    display: inline-block;
    color: red;
    text-align: center;
    cursor: pointer;
    .rotate-icon {
      transform: rotate(-90deg);
    }
  }
}
</style>
