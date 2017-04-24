/*
This file contains the directive used in this application
*/
// loads the dependency file 'appmodule' using requirejs
define(['appModule'], function(app){
    'use strict';
    // This directive is for restricting the user from entering only numeric values(avoiding alphabets and special characters except '.') and only 2 digits after decimal point. 
    app.directive('validNumber', function() {
        return {
            require: '?ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                if (!ngModelCtrl) {
                    return;
                }
                ngModelCtrl.$parsers.push(function(val) {
                    if (angular.isUndefined(val)) {
                        var val = '';
                    }
					//using regex for getting only numeric inputs and dot(.) character
                    var clean = val.replace(/[^0-9\.]/g, '');
					//checking whether the input numeric value has decimal point and getting only first 2 digits of that
                    var decimalCheck = clean.split('.');
                    if (!angular.isUndefined(decimalCheck[1])) {
                        decimalCheck[1] = decimalCheck[1].slice(0, 2);
                        clean = decimalCheck[0] + '.' + decimalCheck[1];
                    }
                    if (val !== clean) {
                        ngModelCtrl.$setViewValue(clean);
                        ngModelCtrl.$render();
                    }
                    return clean;
                });
		element.bind('keypress', function(event) {
		    // preventing from adding space by pressing spacebar in keyboard
                    var oldValue = this.value;
                    if (event.charCode === 32) {
                        event.preventDefault();
                    }
                    else if(oldValue.indexOf('.') >= 0 && event.charCode == 46){
                        event.preventDefault();
                    }
                });
            }
        };
    });
});
