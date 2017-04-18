/*
This file contains the logic codes for converting the currencies to the selected type.
*/
//loads the dependency (app.component.services.js)  and includes 'services' which contains the Fixer API service call codes and returns the status of the service call 
define(['services'], function(currencyConverterService) {
    return function($scope, currencyConverterService){
        $scope.rates = {};
        // by default the service error message is kept hidden
        $scope.serviceErrorMsg = false;
       // invoking the getrates function of currencyConverterService to get the values of currency
        currencyConverterService.getRates(function(res) {
            // checking whether the value is not null and the status is equal to 200(http success status)
            if (res && res.status == 200) {
                $scope.rates = res.data.rates;
                if ($scope.rates != null) {  
                   // setting default currency type for from and to conversion dropdown                      
                    $scope.toType = $scope.rates.USD;
                    $scope.fromType = $scope.rates.CAD;
                    // converting function which has calculation logic has been called.
                    $scope.currencyConverterFunction(); 
                }
            } else {
                console.log(res.status);
                // this displays the service error message 
                $scope.serviceErrorMsg = true;
            }
        });
       
        //function for converting values
        $scope.currencyConverterFunction = function() {
            $scope.toValue = $scope.fromValue * ($scope.toType * (1 / $scope.fromType));
            //for showing the converted output upto 2 decimal values 
            $scope.toValue = Math.round($scope.toValue * 100) / 100; 

        };
        // isActive = true is to make the class(which has float:right style) for disclaimer inorder to keep the link in right corner by default 
        $scope.isActive = true; 
        // ng-show is used and by default disclaimer message is kept hidden
        $scope.disclaimerText = false;
        // this function shows and hides the disclaimer message on clicking the discliamer link
        $scope.toggleDisclaimerMessage = function() {
            $scope.disclaimerText = !$scope.disclaimerText;
            $scope.isActive = !$scope.isActive;
        };
    }
});