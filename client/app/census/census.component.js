'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './census.routes';

export class CensusComponent {
  $http;

  colnames = [];

  colname = '';

  groups = [];

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
        this.groups = [];
        angular.forEach(response.data, function(value, key) {
          if (value[this.colname] !== null)
            this.groups.push(value);
        }, this);

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
