<template>
    <crud-table :data="items" :endpoints="endpoints" :fields="fields"></crud-table>
</template>

<script>
import CrudTable from "../components/CRUDTable.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      items: [],
      endpoints: {
        create: "/api/publications",
        read: "/api/publications/:id",
        update: "/api/publications/:id",
        delete: "/api/publications/:id"
      },
      fields: {
        "content.message": {
          label: "Message",
          sortable: true
        }
      }
    };
  },
  components: {
    CrudTable
  },
  computed: {
    ...mapGetters([])
  },
  created() {
    /* TODO: initial load to store */
    this.fetchLatestPublications();
    /* TODO: add listener for socket, and add new row as requested */
  },
  methods: {
    ...mapActions(["storeInitialPublishings"]),
    fetchLatestPublications() {
      this.$http
        .get("/api/publishings")
        .then(response => {
          console.log(response);
          this.storeInitialPublishings(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
