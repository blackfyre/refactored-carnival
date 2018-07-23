<template>
    <b-table show-empty :items="data"></b-table>
</template>

<script>
import bTable from "bootstrap-vue/es/components/table/table";
export default {
  name: "crud-table",
  components: { bTable },
  props: {
    data: {
      required: true,
      type: Array
    },
    create: {
      type: Boolean,
      default: true
    },
    read: {
      type: Boolean,
      default: true
    },
    update: {
      type: Boolean,
      default: true
    },
    delete: {
      type: Boolean,
      default: true
    },
    endpoints: {
      type: Object,
      required: true,
      default() {
        return {
          create: "",
          read: "",
          update: "",
          delete: ""
        };
      }
    },
    fields: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
</style>
