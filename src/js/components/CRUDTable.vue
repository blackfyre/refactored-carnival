<template>
    <div>
        <p v-if="createRow"><button class="btn btn-primary" v-on:click="emitEvent('item-create')"><i class="fa fa-plus"></i> {{newButtonText}}</button></p>

        <b-table
            :id="tableId"
            show-empty
            :items="data"
            :fields="actualFields"
            :filter="null"
        >
          <template slot="actions" slot-scope="row">
            <button v-if="readRow" class="btn btn-sm btn-primary" v-on:click="emitEvent('item-details', row.item)">Details</button>
            <button v-if="updateRow" class="btn btn-sm btn-warning" v-on:click="emitEvent('item-edit', row.item)">Edit</button>
            <button v-if="deleteRow" class="btn btn-sm btn-danger" v-on:click="emitEvent('item-delete', row.item)">Delete</button>
          </template>
        </b-table>
    </div>
</template>

<script>
import bTable from "bootstrap-vue/es/components/table/table";
import _ from "lodash";
export default {
  name: "crud-table",
  components: { bTable },
  props: {
    data: {
      required: true,
      type: [Array, Function]
    },
    createRow: {
      type: Boolean,
      default: true
    },
    readRow: {
      type: Boolean,
      default: true
    },
    updateRow: {
      type: Boolean,
      default: true
    },
    deleteRow: {
      type: Boolean,
      default: true
    },
    fields: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    },
    tableId: {
      type: String,
      default: _.uniqueId("crud-")
    },
    newButtonText: {
      type: String,
      default: "New item"
    }
  },
  computed: {
    actualFields() {
      let fields = this.fields;
      fields.actions = {
        label: "Actions"
      };
      return fields;
    }
  },
  methods: {
    emitEvent(eventType, data) {
      this.$emit(eventType, data);
    }
  }
};
</script>

<style>
</style>
