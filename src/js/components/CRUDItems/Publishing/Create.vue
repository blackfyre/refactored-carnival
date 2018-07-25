<template>
    <div>
        <b-modal ref="creator">
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
      }
    };
  },
  components: {
    bModal
  },
  computed: {
    schema() {
      return publicationSchema;
    }
  },
  methods: {
    ...mapActions([]),
    openModal() {
      this.$refs.creator.show();
    },
    closeModal() {
      this.$refs.creator.hide();
    }
  }
};
</script>

<style>
</style>
