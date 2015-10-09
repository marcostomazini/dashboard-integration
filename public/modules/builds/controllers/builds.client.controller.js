'use strict';

angular.module('builds').controller('BuildsController', ['$scope', '$stateParams', '$location', '$interval', 'Authentication', 'Builds', 'Projects',
    function($scope, $stateParams, $location, $interval, Authentication, Builds, Projects) {
        $scope.authentication = Authentication;

        $scope.initialize = function() {
            $scope.projects = [];
            $scope.buildDefinitions = [];
            $scope.initializeProjects();
        };

        $scope.initializeProjects = function() {
            Projects.projectsSearch()
                .then(function(result) {
                    $scope.projects = result.data.value;
                    $scope.initializeBuildDefinitions();
                });
        };

        $scope.initializeBuildDefinitions = function() {
            angular.forEach($scope.projects, function(project) {
                Builds.buildDefinitionsSearch(project.id)
                    .then(function(result) {
                        if (result.data.count <= 0) {
                            return;
                        }
                        var definitions = _.filter(result.data.value, function(definition) {
                            return definition.name.endsWith('.CI');
                        });

                        angular.forEach(definitions, function(definition) {
                            definition.status = 'succeeded';
                            definition.buildNumber = '';
                        });

                        $scope.buildDefinitions = definitions;
                        $scope.queryBuildStatus();
                    })
            })
        };

        $scope.queryBuildStatus = function() {
            angular.forEach($scope.buildDefinitions, function(definition) {
                Builds.latestBuildSearch(definition.project.id, definition.id)
                    .then(function(result) {
                        var build = result.data.value[0];
                        if (!build) {
                            return;
                        }

                        definition.status = result.data.value[0].result;
                        definition.buildNumber = result.data.value[0].buildNumber;
                    })
            });
        };
    }
]);
