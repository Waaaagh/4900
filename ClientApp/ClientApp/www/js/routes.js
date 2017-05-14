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
  })

  .state('register', {
    url: '/form',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'
  })

  .state('login', {
    url: '/form',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('collectiveAgreement', {
    url: '/docs',
    templateUrl: 'templates/collectiveAgreement.html',
    controller: 'collectiveAgreementCtrl'
  })

$urlRouterProvider.otherwise('/form')

  

});