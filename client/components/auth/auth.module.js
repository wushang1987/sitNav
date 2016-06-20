'use strict';

angular.module('sitNavApp.auth', ['sitNavApp.constants', 'sitNavApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
