/**
 * Created by liurui on 15/11/13.
 */

(function (angular) {
    angular.module('lr.menu')
        .directive('sideNavigation',function sideNavigation($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element) {

                    // Call the metsiMenu plugin and plug it to sidebar navigation
                    $timeout(function () {
                        element.metisMenu();
                    });

                    // Enable initial fixed sidebar
                    var sidebar = element.parent();
                    sidebar.slimScroll({
                        height: '100%',
                        railOpacity: 0.9,
                    });
                }
            };
        })
        .directive('navigation', function ($timeout, $rootScope, $compile) {
            return {
                templateUrl: './app/menu/navigation.html',
                link: function (scope, element) {

                    var menuData = scope.menuCtrl.menuData;

                    var _html = '';
                    menuData.forEach(function (data) {
                        if (data.children != null) {
                            _html += '<li ng-class="{active: $state.includes(' + data.sref + '\')}">' +
                                '<a><i class="fa fa-' + data.icon + '"></i> <span class="nav-label">' + data.title + '</span> <span class="fa arrow"></span></a>' +
                                '<ul class="nav nav-second-level collapse" ng-class="{in: $state.includes(\'' + data.sref + '\')}">';

                            data.children.forEach(function (_child) {
                                if (_child.children != null) {
                                    _html += '<li ng-class="{in: $state.includes(\'' + _child.sref + '\')}"> <a href="">' + _child.title + ' <span class="fa arrow"></span></a> ' +
                                        '<ul class="nav nav-third-level collapse " ng-class="{in: $state.includes(\'' + _child.sref + '\')}">'

                                    _child.children.forEach(function (__child) {
                                        _html += '<li ui-sref-active="active"><a ui-sref="' + __child.sref + '">' + __child.title + '</a></li>'
                                    })
                                    _html += '</ul></li>'

                                } else {
                                    _html += '<li ui-sref-active="active"><a ui-sref="' + _child.sref + '">' + _child.title + '</a></li>'
                                }
                            });

                            _html += '</ul>'


                        } else {
                            _html +=
                                '<li ui-sref-active="active">' +
                                '<a ui-sref="' + data.sref + '"><i class="fa fa-' + data.icon + '"></i> <span class="nav-label">' + data.title + '</span> </a>' +
                                '</li>';
                        }
                    });

                    element.find('#side-menu').append($compile(_html)(scope));
                }
            };
        });
})(angular)

