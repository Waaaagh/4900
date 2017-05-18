angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('homePage', {
    url: '/home',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
    //resolve: {
    //    function ($q)
    //    {
    //        var defer = $q.defer();

    //        defer.resolve(); // call to allow routing

    //        return defer.promise;
    //    }
    //}
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('collectiveAgreement', {
    url: '/docs',
    templateUrl: 'templates/collectiveAgreement.html',
    controller: 'collectiveAgreementCtrl'
  })

    .state('compose', {
        url: '/compose',
        templateUrl: 'templates/compose.html',
        controller: 'composeCtrl'
    })

  .state('list', {
      url: '/list',
      templateUrl: 'templates/list.html',
      controller: 'listCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});