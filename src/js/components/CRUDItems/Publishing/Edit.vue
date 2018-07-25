<template>
    <div>
        <b-modal ref="editor">
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
  props: {
    readonly: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      publication: {},
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
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
    }
  },
  methods: {
    ...mapActions([]),
    openModal(id) {
      this.publication = this.singlePublication(id);
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
