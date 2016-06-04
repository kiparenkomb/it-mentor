'use strict';

angular.module('itMentorApp.auth', ['itMentorApp.constants', 'itMentorApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
