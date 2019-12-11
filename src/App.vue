<template>
  <div id="app">
    <div class="login" v-if="isLoginPage">
      <router-view name="login"></router-view>
    </div>
    <Layout v-if="!isLoginPage" class="layout">
      <Sider
        ref="menuSider"
        hide-trigger
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <Menu
          active-name="1-2"
          theme="dark"
          width="auto"
          :class="['menu-item', isCollapsed ? 'collapsed-menu' : '']"
        >
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="[
              'menu-icon collapse-icon',
              isCollapsed ? 'rotate-icon' : ''
            ]"
            type="md-menu"
            size="24"
          ></Icon>
          <Breadcrumb class="breadcrumb">
            <BreadcrumbItem to="/">
              <Icon type="ios-home-outline"></Icon> Home
            </BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">
              <Icon type="logo-buffer"></Icon> Components
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Icon type="ios-cafe"></Icon> Breadcrumb
            </BreadcrumbItem>
          </Breadcrumb>
        </Header>
        <Content
          :style="{ margin: '20px', background: '#fff', minHeight: '260px' }"
        >
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';
import './theme/app.less';
export default {
  name: 'app',
  components: {
    Welcome
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.name == 'login';
    }
  },
  mounted() {},
  methods: {
    collapsedSider() {
      this.$refs['menuSider'].toggleCollapse();
    }
  }
};
</script>
<style scoped lang="less">
.layout {
  height: 100%;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.collapse-icon {
  margin: 0 20px;
  cursor: pointer;
}
.breadcrumb {
  display: inline-block;
}
</style>
