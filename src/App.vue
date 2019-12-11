<template>
  <div id="app">
    <div class="login" v-if="isLoginPage">
      <router-view name="login"></router-view>
    </div>
    <div class="layout" v-if="!isLoginPage">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue';

export default {
  name: 'app',
  components: {
    Welcome
  },
  computed: {
    isLoginPage() {
      return this.$route.name == 'login';
    }
  },
  mounted() {
    this.$store.commit('account', 'HB_WANGZHENG');
    const store = this.$store.getters;
    console.log(store, '---');
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
