<template>
    <div>
        <highcharts :options="options" ref="highcharts"></highcharts>
        <crud-table
        :data="crud"
        :fields="crudFields"
        />
    </div>
</template>

<script>
import _ from "lodash";
import CrudTable from "../components/CRUDTable.vue";
export default {
  data() {
    return {
      reallyRaw: require("../../../data_src/reach.json"),
      crudFields: {
        post_impressions: {
          label: "Total impressions",
          sortable: true
        },
        post_impressions_organic: {
          label: "Organic impressions",
          sortable: true
        },
        post_impressions_viral: {
          label: "Viral impressions",
          sortable: true
        },
        post_impressions_paid: {
          label: "Paid impressions",
          sortable: true
        },
        timestamp: {
          label: "Timestamp",
          sortable: false
        }
      }
    };
  },
  components: {
    CrudTable
  },
  computed: {
    options() {
      return {
        title: "Reach",
        xAxis: {
          categories: this.createXAxis()
        },
        yAxis: {
          title: {
            text: "Views"
          }
        },
        series: this.createSeries(),
        legend: {
          layout: "vertical",
          align: "right",
          verticalAlign: "middle",
          borderWidth: 0
        }
      };
    },
    crud() {
      let collector = [];

      _.each(this.reallyRaw, row => {
        if ("post_impressions" in row) {
          collector.push({
            timestamp: row["post_impressions"][0].timestamp,
            post_impressions: row["post_impressions"][0].value,
            post_impressions_organic: row["post_impressions_organic"][0].value,
            post_impressions_viral: row["post_impressions_viral"][0].value,
            post_impressions_paid: row["post_impressions_paid"][0].value
          });
        }
      });

      return collector;
    }
  },
  methods: {
    createXAxis() {
      let collector = [];

      _.each(this.reallyRaw, row => {
        if ("post_impressions" in row) {
          if (!_.isUndefined(row["post_impressions"][0]["timestamp"])) {
            collector[collector.length] =
              row["post_impressions"][0]["timestamp"];
          }
        }
      });

      return collector;
    },
    createSeries() {
      let collector1 = {};
      let collector2 = [];

      _.each(this.reallyRaw, row => {
        if ("post_impressions" in row) {
          _.each(row, (content, impressionType) => {
            if (_.isUndefined(collector1[impressionType])) {
              collector1[impressionType] = [];
            }

            collector1[impressionType].push(parseInt(content[0].value));
          });
        }
      });

      console.log(collector1);

      _.each(collector1, (data, type) => {
        collector2.push({
          name: type,
          data
        });
      });

      return collector2;
    }
  },
  created() {
    /* TODO: subscribe to socket namespace */
    /* TODO: update local data on new item */
    /* TODO: update local data on item update */
    /* TODO: update local data on item delete */
  }
};
</script>

<style>
</style>
