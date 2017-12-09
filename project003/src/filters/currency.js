import Vue from 'vue'

Vue.filter('currency', function (value) {
  return '$' + parseFloat(value).toFixed(2);
});