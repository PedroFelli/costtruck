var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   //$locationProvider.html5Mode(true);

   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'app/views/login.html',
      controller     : 'LoginCtrl',
   })
   .when('/cadastro', {
      templateUrl : 'app/views/cadastro.html',
      controller     : 'CadastroCtrl',
   })
   .when('/cargainfo', {
      templateUrl : 'app/views/cargainfo.html',
      controller     : 'CargaInfoCtrl',
   })
   .when('/home', {
      templateUrl : 'app/views/home.html',
      controller     : 'HomeCtrl',
   })
   .when('/fretes', {
    templateUrl : 'app/views/fretes.html',
    controller  : 'FretesCtrl',
 })
   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/sobre', {
      templateUrl : 'app/views/sobre.html',
      controller  : 'SobreCtrl',
   })
   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contato', {
      templateUrl : 'app/views/contato.html',
      controller  : 'ContatoCtrl',
   })

   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});