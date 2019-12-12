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
        <div class="layout-logo">LOGO</div>
        <Menu
          :active-name="routerName"
          :theme="theme"
          width="auto"
          accordion
          :class="['menu-item', isCollapsed ? 'collapsed-menu' : '']"
          :open-names="[]"
          @on-select="menuSelect"
        >
          <template v-for="item in menu">
            <Submenu
              v-if="item.children && item.children.length > 0"
              :name="item.path"
              :key="item.path"
            >
              <template slot="title">
                <Icon :type="item.icon || defaultMenuIcon"></Icon
                >{{ item.name }}
              </template>
              <MenuItem
                v-for="_item in item.children"
                :name="_item.path"
                :key="_item.path"
              >
                {{ _item.name }}
              </MenuItem>
            </Submenu>
            <!--  -->
            <MenuItem v-else :name="item.path" :key="item.path">
              <Icon
                :type="item.icon || defaultMenuIcon"
                style="margin-right:8px"
              ></Icon>
              {{ item.name }}
            </MenuItem>
          </template>
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
              <Icon type="ios-home-outline"></Icon> 首页
            </BreadcrumbItem>
            <BreadcrumbItem to="/sys">
              <Icon type="md-settings"></Icon> 系统管理
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Icon type="ios-people"></Icon> 用户管理
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

import menu from './mock/menu';

export default {
  name: 'app',
  components: {
    Welcome
  },
  data() {
    return {
      isCollapsed: false,
      menu: [],
      theme: 'dark', // 菜单主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal",
      defaultMenuIcon: 'ios-apps'
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.name == 'login';
    },
    routerName() {
      return this.$route.name;
    }
  },
  mounted() {
    setTimeout(() => {
      this.menu = menu;
    }, 800);
  },
  methods: {
    collapsedSider() {
      this.$refs['menuSider'].toggleCollapse();
    },
    menuSelect(name) {
      console.log(name, '---');
      this.$router.push({ name });
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
.layout-logo {
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: #ccc;
  text-align: center;
  color: #000;
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
