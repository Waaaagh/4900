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

    var blocker = false;

    $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        if (toState.name === 'register' && blocker) event.preventDefault();

    });

    $scope.data = {};
}])

.controller('collectiveAgreementCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}]);