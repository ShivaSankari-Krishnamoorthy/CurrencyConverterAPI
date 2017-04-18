/*
This file loads all the dependencies and creates currencyConverter component
*/
define(['appModule', 'directives', 'currencyConverterController'], function (app, directives, currencyConverterController) {
  'use strict';
  app.component('currencyConverter', {
    templateUrl: 'app/components/templates/CurrencyConverterTemplate.html',
    controller: currencyConverterController
  });
});