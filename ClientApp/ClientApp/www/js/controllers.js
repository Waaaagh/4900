angular.module('app.controllers', [])

.controller('homePageCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $scope.compose = function () {
        alert("Request sent");
        var link = 'http://ebon1111.000webhostapp.com/mailer.php';
        $http.post(link, {}).then(function (res) {
            alert(res.data);
            //$scope.response = res.data;
        });
    }

}])

.controller('registerCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $state) {
    $scope.data = {};

    $scope.submit = function () {
        var link = 'http://ebon1111.000webhostapp.com/api.php';
        //pass all data to server
        $http({
            url: link,
            method: 'POST',
            data: {
                fname: $scope.data.fname,
                lname: $scope.data.lname,
                personnelNum: $scope.data.personnelNum,
                password: $scope.data.password,
                phoneNum: $scope.data.phoneNum,
                location: $scope.data.location,
                depot: $scope.data.depot,
                position: $scope.data.position
            }
        }).success(function (data, status, headers, config) {
            $scope.response = data;
            if (data === $scope.data.fname) {
                alert("Hello, " + data + "\nPlease Login in the next page.");
                $state.go('login');
            } else {
                alert(data);
            }

        }).error(function (data, status, headers, config) {
            alert("Connection fails.");
            //alert("Invalid ID or password.");
            $scope.response = data;
            $scope.response += " : " + status;
        });
    };
}])

.controller('loginCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $state) {

    //var blocker = false;

    //$scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    //    if (toState.name === 'register' && blocker) event.preventDefault();

    //});

    $scope.data = {};
    $scope.submit = function () {

        var link = 'http://ebon1111.000webhostapp.com/login.php';
        alert("Request sent");
        $http({
            url: link,
            method: 'POST',
            data: { account: $scope.data.account, password: $scope.data.password }
        }).success(function (data, status, headers, config) {
            $scope.response = data;
            if (data !== "") {
                // Implement: Clear the input box
                $state.go('homePage');
            } else {
                alert("Invalid Personnel Number or Password.");
            }

        }).error(function (data, status, headers, config) {
            alert("Connection fails.");
            //alert("Invalid ID or password.");
            $scope.response = data;
            $scope.response += " : " + status;
        });
        // callback function --> get ready message --> return status 400
        // js ajax --> check two conditions 
        // send back a page as invalid state

        // html page -> form
        // action -> myform.php
        // iPage, go daddy 
        //$http.post(link, { account: $scope.data.account, password: $scope.data.password }).then(function (res) {
        //    $scope.response = res.data;
        //});
    };
}])

.controller('collectiveAgreementCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}]);