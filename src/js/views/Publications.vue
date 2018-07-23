<template>
    <crud-table :data="items" :endpoints="endpoints" :fields="fields"></crud-table>
</template>

<script>
import CrudTable from "../components/CRUDTable.vue";
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
  created() {
    /* TODO: initial load to store */
    /* TODO: add listener for socket, and add new row as requested */
  }
};
</script>

<style>
</style>
