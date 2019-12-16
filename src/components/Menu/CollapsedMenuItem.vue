<template>
  <!-- <div class="collapsed-menu-item">
    <Dropdown
      :placement="placement"
      trigger="hover"
      class="collapsed-menu-item-main"
      @on-click="dropdownHandle"
      v-if="!single"
    >
      <a href="javascript:void(0)" class="collapsed-menu-item-rel">
        <Icon type="ios-search"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>萨芬</DropdownItem>
        <DropdownItem>酱是的面</DropdownItem>
        <DropdownItem>风飒儿e </DropdownItem>
        <DropdownItem>地方萨芬</DropdownItem>
        <DropdownItem>高度射污染</DropdownItem>
        <Dropdown :placement="placement">
          <DropdownItem>
            北京烤鸭
            <Icon type="ios-arrow-forward"></Icon>
          </DropdownItem>
          <DropdownMenu slot="list">
            <DropdownItem>挂炉烤鸭</DropdownItem>
            <DropdownItem>焖炉烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </DropdownMenu>
    </Dropdown>
    <div @click="clickHandle">
      <Tooltip
        content="Right Center text"
        placement="right"
        v-if="single"
        class="collapsed-menu-item-main"
      >
        <a href="javascript:void(0)" class="collapsed-menu-item-rel">
          <Icon type="ios-search"></Icon>
        </a>
      </Tooltip>
    </div>
  </div> -->
  <div class="collapsed-menu-item">
    <Dropdown
      v-if="hasChildren"
      :placement="placement"
      trigger="hover"
      class="collapsed-menu-item-main"
      @on-click="dropdownHandle"
    >
      <a href="javascript:void(0)" class="collapsed-menu-item-rel">
        <Icon :type="data.icon" :size="iconSize"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem
          v-for="child in data.children"
          :name="child.path"
          :key="child.id"
          >{{ child.name }}</DropdownItem
        >
        <!-- <Dropdown :placement="placement">
          <DropdownItem>
            北京烤鸭
            <Icon type="ios-arrow-forward"></Icon>
          </DropdownItem>
          <DropdownMenu slot="list">
            <DropdownItem>挂炉烤鸭</DropdownItem>
            <DropdownItem>焖炉烤鸭</DropdownItem>
          </DropdownMenu>
        </Dropdown> -->
      </DropdownMenu>
    </Dropdown>
    <div @click="clickHandle" v-else>
      <Tooltip
        :content="data.name"
        placement="right"
        class="collapsed-menu-item-main collapsed-menu-item-tooltip"
      >
        <a href="javascript:void(0)" class="collapsed-menu-item-rel">
          <Icon :type="data.icon" :size="iconSize"></Icon>
        </a>
      </Tooltip>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CollapsedMenuItem',
  components: {},
  props: {
    placement: {
      type: String,
      default: 'right-start'
    },
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      iconSize: 20
    };
  },
  computed: {
    hasChildren() {
      return this.data.children && this.data.children.length > 0;
    }
  },
  methods: {
    dropdownHandle(name) {
      this.$router.push({ name });
    },
    clickHandle() {
      this.$router.push({ name: this.data.path });
    }
  }
};
</script>
<style scoped lang="less">
.collapsed-menu-item {
  .collapsed-menu-item-main {
    min-width: 100%;
    position: relative;
    .collapsed-menu-item-rel {
      padding: 14px 0px;
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }
  .collapsed-menu-item-tooltip {
    width: 100%;
  }
}
</style>
