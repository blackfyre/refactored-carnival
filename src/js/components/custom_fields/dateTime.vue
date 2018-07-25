<template>
    <!-- input 
        class="form-control" 
        type="text" 
        v-model="value" 
        :disabled="disabled"
        :maxlength="schema.max"
        :placeholder="schema.placeholder"
        :readonly="schema.readonly" -->
<div class="form-group">
        <datetime 
        v-model="value"
        type="datetime"
        input-class='form-control'
        :format="format"
        ></datetime>
        </div>
</template>

<script>
import { Datetime } from "vue-datetime";
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";
import { abstractField } from "vue-form-generator";
import { DateTime } from "luxon";

export default {
  mixins: [abstractField],
  data() {
    return {
      format: DateTime.DATETIME_MED
    };
  },
  components: {
    Datetime
  }
};
</script>
