<template>
  <div class="sider-menu">
    <Menu
      active-name="1-2"
      :open-names="[]"
      width="auto"
      theme="dark"
      v-show="!isCollapsed"
    >
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics" />
          Nav 1
        </template>
        <MenuGroup title="Item 1">
          <MenuItem name="1-1">Option 1</MenuItem>
          <MenuItem name="1-2">Option 2</MenuItem>
        </MenuGroup>
        <MenuGroup title="Item 2">
          <MenuItem name="1-3">Option 3</MenuItem>
          <MenuItem name="1-4">Option 4</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-filing" />
          Nav 2
        </template>
        <MenuItem name="2-1">Option 5</MenuItem>
        <MenuItem name="2-2">Option 6</MenuItem>
        <Submenu name="3">
          <template slot="title">Submenu</template>
          <MenuItem name="3-1">Option 7</MenuItem>
          <MenuItem name="3-2">Option 8</MenuItem>
        </Submenu>
      </Submenu>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-cog" />
          Nav 3
        </template>
        <MenuItem name="4-1">Option 9</MenuItem>
        <MenuItem name="4-2">Option 10</MenuItem>
        <MenuItem name="4-3">Option 11</MenuItem>
        <MenuItem name="4-4">Option 12</MenuItem>
      </Submenu>
    </Menu>

    <div v-show="isCollapsed">
      <CollapsedMenu :list="list"></CollapsedMenu>
    </div>
  </div>
</template>
<script>
import CollapsedMenu from './CollapsedMenu';
export default {
  name: '',
  components: { CollapsedMenu },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="less">
.sider-menu {
  color: red;
  font-size: 16px;
}
</style>
