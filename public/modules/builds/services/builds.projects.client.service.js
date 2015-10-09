'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('builds').factory('Projects', ['$http', '$base64',
    function($http, $base64) {
        var baseApiUrl = 'http://192.168.198.26:8080/tfs/DefaultCollection/_apis/';
        var service = [];

        var _projectsSearch = function() {
            return $http({
                url: baseApiUrl + 'projects/',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + $base64.encode('Qualidade' + ':' + '!@#Mudar')
                }
            }).success(function(data) {
                return data;
            }).error(function(data) {
                return data;
            });
        }

        var _teamsSearch = function(projectId) {
            return $http({
                url: baseApiUrl + 'projects/' + projectId + '/teams/',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + $base64.encode('Qualidade' + ':' + '!@#Mudar')
                }
            }).success(function(data) {
                return data;
            }).error(function(data) {
                return data;
            });
        }

        var _membersSearch = function(projectId, teamId) {
            return $http({
                url: baseApiUrl + 'projects/' + projectId + '/teams/' + teamId + '/members/',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + $base64.encode('Qualidade' + ':' + '!@#Mudar')
                }
            }).success(function(data) {
                return data;
            }).error(function(data) {
                return data;
            });
        }

        service.projectsSearch = _projectsSearch;
        service.teamsSearch = _teamsSearch;
        service.membersSearch = _membersSearch;

        return service;
    }
]);
