'use strict';

angular.module('sitNavApp.admin')
	.config(function($stateProvider) {
		$stateProvider.state('admin', {
			url: '/admin',
			views: {
				"": {
					templateUrl: 'app/admin/admin.html',
					controller: 'AdminController',
					controllerAs: 'admin',
					authenticate: 'admin'

				},
				"adminContent": {
					templateUrl: 'app/admin/userMsg/userMsg.html',

				},
			}
		});

		$stateProvider.state('admin.userMsg', {
			url: '/user',
			views: {
				"adminContent": {
					templateUrl: 'app/admin/userMsg/userMsg.html',
				},
			}
		});

		$stateProvider.state('admin.websiteMsg', {
			url: '/websiteMsg',
			views: {
				"adminContent": {
					templateUrl: 'app/admin/websiteMsg/websiteMsg.html',
					controller: 'websiteMsg',
					controllerAs:'website'
				},
			}
		});
	});