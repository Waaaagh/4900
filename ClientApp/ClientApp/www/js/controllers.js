angular.module('app.controllers', [])

.controller('homePageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('registerCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $scope.data = {};

    $scope.submit = function () {
        var link = 'http://ebon1111.000webhostapp.com/api.php';
        //pass all data to server
        $http.post(link, {
            fname: $scope.data.fname,
            lname: $scope.data.lname,
            personnelNum: $scope.data.personnelNum,
            password: $scope.data.password,
            phoneNum: $scope.data.phoneNum,
            location: $scope.data.location,
            depot: $scope.data.depot,
            position: $scope.data.position
        }).then(function (res) {
            $scope.response = res.data;
        });
        alert("Request sent");
    };
}])

.controller('loginCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

    //var blocker = false;

    //$scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

    //    if (toState.name === 'register' && blocker) event.preventDefault();

    //});

    $scope.data = {
        account: '',
        password: ''
    };

    $scope.signIn = function (form) {
        if (form.$valid) {
            $state.go('homePage');
        }
    };

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
        }).error(function (data, status, headers, config) {
            alert("Invalid ID or password.");
            $scope.response = data;
            $scope.response += " : " + status;
        });
        
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