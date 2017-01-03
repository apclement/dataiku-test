'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('census', {
      url: '/census',
      template: '<census></census>'
    });
}
