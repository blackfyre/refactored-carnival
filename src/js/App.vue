<template>
 <div class="container-fluid">
      <div class="row">

        <side-bar></side-bar>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

            <router-view></router-view>

        </main>
      </div>
    </div>
</template>

<script>
import SideBar from "./views/partials/SideBar.vue";
export default {
  components: {
    SideBar
  }
};
</script>

<style lang="scss">
</style>
