<template>
    <div>
        <b-modal
            ref="editor"
            :title="modalTitle"
        >
            <vue-form-generator
            :schema="schema"
            :model="publication"
            :options="formOptions"
            ></vue-form-generator>
        </b-modal>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import bModal from "bootstrap-vue/es/components/modal/modal";
import tz from "timezones.json";
import publicationSchema from "../../../forms/publication";

export default {
  data() {
    return {
      publication: {},
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      },
      readonly: false
    };
  },
  components: {
    bModal
  },
  computed: {
    ...mapGetters(["singlePublication"]),
    schema() {
      let schema = publicationSchema;
      schema.groups.forEach(group => {
        group.fields.forEach(field => {
          field.readonly = this.readonly;
        });
      });

      return schema;
    },
    modalTitle() {
      let title = "Edit publication";

      if (this.readonly) {
        title = "Publication details";
      }

      return title;
    }
  },
  methods: {
    ...mapActions([]),
    openModal(id, readonly = false) {
      this.publication = this.singlePublication(id);
      this.readonly = readonly;
      this.$refs.editor.show();
    },
    closeModal() {
      this.$refs.editor.hide();
    }
  }
};
</script>

<style>
</style>
