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
            location: $scope.data.location,
            depot: $scope.data.depot,
            position: $scope.data.position
        }).then(function (res) {
            $scope.response = res.data;
        });
    };
}])

.controller('loginCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $scope.data = {};
    //var permissions = cordova.plugins.permissions;
    $scope.submit = function () {
        alert("In submit");
        //permissions.requestPermission(cordova.plugins.permissions.INTERNET, success, error);
        ////cordova.requestPermission(CordovaPlugin plugin, int requestCode, String permission);

        //function error() {
        //    alert('Internet permission is not turned on');
        //}

        //function success(status) {
        //    alert("Request Success");
        //    if (!status.hasPermission) error();
        //}

        var link = 'http://ebon1111.000webhostapp.com/login.php';
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


}])