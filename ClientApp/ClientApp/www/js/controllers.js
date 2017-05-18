angular.module('app.controllers', [])

.controller('homePageCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    //$scope.compose = function () {
    //    alert("Request sent");
    //    var link = 'http://ebon1111.000webhostapp.com/mailer.php';
    //    $http.post(link, {}).then(function (res) {
    //        alert(res.data);
    //        //$scope.response = res.data;
    //    });
    //}

    $scope.pdfviewer = function () {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + '/www/CA_2016.pdf', function (fileEntry) {

            window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {

                fileEntry.copyTo(dirEntry, 'CA_2016.pdf', function (newFileEntry) {

                    cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf');
                });
            });
        });
    }

}])

    .controller('composeCtrl', function ($scope, $http) {
        var init = function () {




            //            $scope.data.toEmail = "sksmszhdzk@gmail.com"

        };

        init();

    })

.controller('listCtrl', function ($scope, $http) {
    var init = function () {
        var link = 'http://ebon1111.000webhostapp.com/list.php'
        $http({
            url: link,
            method: 'GET'
        }).success(function (data) {

            $scope.array = data;

        }).error(function (data) {
            alert("Connection fails.");
        });
    };

    init();
})

.controller('registerCtrl', ['$scope', '$stateParams', '$http', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $state) {
    $scope.data = {};
    $scope.locations = [{
        name: 'Vancouver'
    }, {
        name: 'Fraser Valley'
    }, {
        name: 'Kelowna'
    }, {
        name: 'Royal City'
    }, {
        name: 'Mech & Tech'
    }];

    $scope.depots = [{
        name: 'New West',
        belong: 'Fraser Valley'
    }, {
        name: 'ODC',
        belong: 'Vancouver'
    }, {
        name: 'NFDD',
        belong: 'Kelowna'
    }, {
        name: 'LCD1',
        belong: 'Royal City'
    }, {
        name: 'White Rock',
        belong: 'Mech & Tech'
    }, {
        name: 'Calgary',
        belong: 'Fraser Valley'
    }];

    $scope.checkLocal = function () {
        $scope.data.depot = null;
    }

    $scope.submit = function () {
        alert($scope.data.fname + "\n" + $scope.data.lname + "\n" + $scope.data.personnelNum + "\n" + $scope.data.password + "\n" + $scope.data.phoneNum + "\n" + $scope.data.email + "\n" + $scope.data.loc.name + "\n" + $scope.data.depot + "\n" + $scope.data.position);

        if ($scope.data.fname === null || !angular.isDefined($scope.data.fname) ||
            $scope.data.lname === null || !angular.isDefined($scope.data.lname) ||
            $scope.data.personnelNum === null || !angular.isDefined($scope.data.personnelNum) ||
            $scope.data.password === null || !angular.isDefined($scope.data.password) ||
            $scope.data.phoneNum === null || !angular.isDefined($scope.data.phoneNum) ||
            $scope.data.email === null || !angular.isDefined($scope.data.email) ||
            $scope.data.loc === null || !angular.isDefined($scope.data.loc) ||
            $scope.data.depot === null || !angular.isDefined($scope.data.depot) ||
            $scope.data.position === null || !angular.isDefined($scope.data.position))
            alert("Please fill in every fields.");
        else {
            var link = 'http://ebon1111.000webhostapp.com/api.php';
            // var link = 'http://theninjasheep.com/registration.php';
            //pass all data to server
            alert("Request sent");
            $http({
                url: link,
                method: 'POST',
                data: {
                    fname: $scope.data.fname,
                    lname: $scope.data.lname,
                    personnelNum: $scope.data.personnelNum,
                    password: $scope.data.password,
                    phoneNum: $scope.data.phoneNum,
                    email: $scope.data.email,
                    location: $scope.data.loc.name,
                    depot: $scope.data.depot,
                    position: $scope.data.position
                }
            }).success(function (data, status, headers, config) {
                $scope.response = data;
                if (data === $scope.data.fname) {
                    alert("Hello, " + data + "\nPlease Login in the next page.");
                    $state.go('login');
                } else if (status === 200) {
                    alert("Sorry, database issue encountered; Please try again later." + status);
                } else {
                    alert(data + status);
                }

            }).error(function (data, status, headers, config) {
                alert("Connection fails.");
                //alert("Invalid ID or password.");
                $scope.response = data;
                $scope.response += " : " + status;
            });
        }
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
        // var link = 'http://theninjasheep.com/login.php';
        alert("Request sent");
        $http({
            url: link,
            method: 'POST',
            data: { account: $scope.data.account, password: $scope.data.password }
        }).success(function (data, status, headers, config) {
            $scope.response = data;
            if (data === $scope.data.account) {
                // Implement: Clear the input box
                $state.go('homePage');
            } else if (status === 200) {
                alert(data);
                //alert("Invalid Personnel Number or Password.");
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