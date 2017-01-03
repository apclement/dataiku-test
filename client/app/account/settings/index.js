'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('dataikuTestApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
