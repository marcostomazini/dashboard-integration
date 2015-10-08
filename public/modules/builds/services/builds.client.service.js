'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('builds').factory('Builds', ['$http', '$base64',
    function($http, $base64) {
        var baseApiUrl = 'http://192.168.198.26:8080/tfs/DefaultCollection/';
        var service = [];

        var _buildDefinitionsSearch = function(projectId) {
            return $http({
                url: baseApiUrl + projectId + '/_apis/build/definitions',
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + $base64.encode('Qualidade' + ':' + '!@#Mudar')
                }
            }).success(function(data) {
                return data;
            }).error(function(data) {
                return data;
            });
        };

        var _latestBuildSearch = function(projectId, buildDefinitionId) {
            return $http({
                url: baseApiUrl + projectId + '/_apis/build/builds?statusFilter=completed&$top=1&definitions=' + buildDefinitionId,
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + $base64.encode('Qualidade' + ':' + '!@#Mudar')
                }
            }).success(function(data) {
                return data;
            }).error(function(data) {
                return data;
            });
        };

        service.buildDefinitionsSearch = _buildDefinitionsSearch;
        service.latestBuildSearch = _latestBuildSearch;

        return service;
    }
]);