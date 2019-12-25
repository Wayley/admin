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
        :width="menuWidth"
        :collapsed-width="menuCollapsedWidth"
        v-model="isCollapsed"
      >
        <Logo :height="headerHeight"></Logo>
        <SiderMenu :isCollapsed="isCollapsed" :list="menuList"></SiderMenu>
      </Sider>
      <Layout>
        <Header class="layout-header-bar">
          <MenuTrigger
            :height="headerHeight"
            v-model="isCollapsed"
          ></MenuTrigger>
        </Header>
        <Content class="layout-main">
          {{ isCollapsed }}
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import './theme/app.less';
import Logo from './components/Logo.vue';
import MenuTrigger from './components/MenuTrigger.vue';
import SiderMenu from './components/Menu';
import mockedMenuList from './mock/menu';
export default {
  name: 'app',
  components: { Logo, MenuTrigger, SiderMenu },
  data() {
    return {
      isCollapsed: true,
      headerHeight: '64px',

      menuWidth: 180, // 左侧菜单正常宽度
      menuCollapsedWidth: 75, // 左侧菜单收起宽度
      menuList: []
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.name == 'login';
    }
  },
  mounted() {
    // TODO:
    this.$apis.getUserDetail({ id: 11 });
    this.$apis.login();

    setTimeout(() => {
      this.menuList = mockedMenuList;
    }, 500);
  },
  watch: {},
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
.ivu-layout-header {
  padding: 0;
}
/************ LAYOUT-MAIN ************/
.layout-main {
  margin: 20px;
  background: #fff;
  min-height: 260px;
}
/************ LOGO ************/
.layout-logo {
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: #ccc;
  text-align: center;
  color: #000;
}
</style>
