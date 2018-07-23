<template>
<nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <nav-item router-tag="li" v-for="(item, key) in navItems" v-bind:key="key" :to="item.path" >
                <i :class="iconClass(item.icon)"></i>
                  <a>{{item.name}}</a>
                </nav-item>
            </ul>
          </div>
        </nav>
</template>

<script>
import NavItem from "bootstrap-vue/es/components/nav/nav-item";
export default {
  data() {
    return {
      navItems: []
    };
  },
  components: {
    NavItem
  },
  created() {
    this.navItems = this.$router.options.routes;
  },
  methods: {
    iconClass(icon) {
      return `fa fa-${icon}`;
    }
  }
};
</script>

<style>
</style>
