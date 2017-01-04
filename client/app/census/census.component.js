'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './census.routes';

export class CensusComponent {
  $http;

  colnames = [];

  colname = '';

  groups = [];

  clipped;

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/records/colnames')
      .then(response => {
        this.colnames = response.data;
      });
  }

  colSelect() {
    this.$http.get('/api/records/colstats/'+ this.colname)
      .then(response => {
        this.groups = response.data.records;
        this.clipped = response.data.clipped;
      });
  }


}

export default angular.module('dataikuTestApp.census', [uiRouter])
  .config(routes)
  .component('census', {
    template: require('./census.html'),
    controller: CensusComponent
  })
  .name;
