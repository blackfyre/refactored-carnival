<template>
<highcharts :options="options" ref="highcharts"></highcharts>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      reallyRaw: require("../../../data_src/reach.json")
    };
  },
  computed: {
    options() {
      return {
        title: "Reach"
      };
    },
    xAxis() {
      let collector = [];

      _.each(this.reallyRaw, row => {
        console.log(row["post_impressions"][0]["timestamp"]);
        collector[collector.length] = row["post_impressions"][0]["timestamp"];
      });

      return collector;
    }
  }
};
</script>

<style>
</style>
