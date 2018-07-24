<template>
    <div>
        <crud-table
        :data="latestPublications"
        :endpoints="endpoints"
        :fields="fields"
        @item-create="createRow"
        @item-edit="updateRow"
        @item-delete="deleteRow"
        :table-id="tableId"
        ></crud-table>

        <b-modal
            ref="delete-modal"
            id="delete-query"
            centered
            title="Are you sure?"
            v-model="modals.deleteModal"
            @ok="deleteRowAction"
        >
            <p>Are you sure you want to delete the selected record?</p>
        </b-modal>
    </div>
</template>

<script>
import CrudTable from "../components/CRUDTable.vue";
import { mapGetters, mapActions } from "vuex";
import bModal from "bootstrap-vue/es/components/modal/modal";
import _ from "lodash";
export default {
  data() {
    return {
      endpoints: {
        create: "/api/publishings/publication",
        read: "/api/publishings/publication/:id",
        update: "/api/publishings/publication/:id",
        delete: "/api/publishings/publication/:id"
      },
      fields: {
        "content.network": {
          label: "Network",
          sortable: true
        },
        "content.message": {
          label: "Message",
          sortable: true
        },
        status: {
          label: "Status",
          sortable: true
        }
      },
      modals: {
        deleteModal: false
      },
      tempStorage: {},
      tableId: _.uniqueId("p-crud-")
    };
  },
  components: {
    CrudTable,
    bModal
  },
  computed: {
    ...mapGetters(["latestPublications"])
  },
  created() {
    /* TODO: initial load to store */
    this.fetchLatestPublications();
    /* TODO: add listener for socket, and add new row as requested */
  },
  methods: {
    ...mapActions(["storeInitialPublishings", "deletePublication"]),
    fetchLatestPublications() {
      let $vm = this;
      $vm.$http
        .get("/api/publishings")
        .then(response => {
          $vm.storeInitialPublishings(response.data);
        })
        .catch(error => {
          $vm.$eventBus.$emit("ajax-error", error);
        });
    },
    createRow(event) {
      console.log(event);
    },
    updateRow(event) {
      console.log(event);
    },
    deleteRow(event) {
      this.modals.deleteModal = true;
      this.tempStorage = event;
    },
    deleteRowAction() {
      let $vm = this;
      /* Send delete request */
      $vm.$http
        .delete(this.endpoints.delete.replace(":id", $vm.tempStorage.id))
        .then(response => {
          $vm.deletePublication($vm.tempStorage.id);
          $vm.tempStorage = {};
          /* on completion reset tempStorage to base state */
          /* on completion remove item from vuex state as well */
        })
        .catch(error => {
          $vm.$eventBus.$emit("ajax-error", error);
        });
    }
  }
};
</script>

<style>
</style>
