<template>
  <div class="collapsed-menu">
    <CollapsedMenuItem
      v-for="item in list"
      :data="item"
      :key="item.id"
      :placement="placement"
    ></CollapsedMenuItem>
  </div>
</template>
<script>
import CollapsedMenuItem from './CollapsedMenuItem.vue';
export default {
  name: 'CollapsedMenu',
  components: { CollapsedMenuItem },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      placement: 'right-start'
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">
.collapsed-menu {
  color: red;
}
</style>
