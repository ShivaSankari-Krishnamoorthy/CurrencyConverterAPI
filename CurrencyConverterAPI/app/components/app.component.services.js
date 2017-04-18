/*
This file contains the factory/service calls used in this application
*/
define(['appModule'], function(app){
    'use strict';
    app.factory("currencyConverterService", function($http) {
        var services = {};
        services.getRates = function(callbackFunc){
             //making a service call to FixerAPI using its url and getting Json data with specific needed currencies
            $http.get('http://api.fixer.io/latest?base=INR&symbols=USD,CAD,EUR')
                .then(function(res) {
                    return callbackFunc(res);            
                }, function(){
                    return callbackFunc(false);
            });
        };
        return services;
     });   
});