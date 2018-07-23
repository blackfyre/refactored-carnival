<template>
    <div>
        <h1>Publications</h1>
        <p><button class="btn btn-primary"><i class="fa fa-plus"></i> Add new publication</button></p>

        <b-table show-empty :items="data" :fields="actualFields"></b-table>
    </div>
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
  },
  computed: {
    actualFields() {
      let fields = this.fields;
      fields.actions = {
        label: "Actions"
      };
      return;
    }
  }
};
</script>

<style>
</style>
