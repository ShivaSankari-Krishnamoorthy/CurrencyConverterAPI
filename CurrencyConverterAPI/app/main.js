/*
This file contains requireJS configuration and code to bootsrap the angular
*/
require.config({
  paths: {
      'angular' : '../../node_modules/angular/angular.min',
      'appModule' : 'app.module',
      'appComponent' : 'components/app.component',
      'currencyConverterController' : 'components/app.component.controller',
      'directives' : 'components/app.component.directives',
      'services' : 'components/app.component.services'
  },
  shim: {
      angular: {
          exports : 'angular'
      }
  }
});
require(['angular', 'appModule', 'appComponent'], function (angular, app, appComponent) {
  angular.bootstrap(document, ['app']);
});
