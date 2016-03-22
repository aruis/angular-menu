/**
 *
 * Created by liurui on 16/3/22.
 */
(function (angular) {
    var app = angular.module('lr.menu', ['ui.router']);

    app.config(function ($stateProvider) {
        $stateProvider
            .state('test2', {
                url: "/test2",
                templateUrl: "views/test2.html"
            })
            .state('test111', {
                url: "/test111",
                templateUrl: "views/test111.html"
            })
            .state('test112', {
                url: "/test112",
                templateUrl: "views/test112.html"
            })
    });

    app.controller('menuController', function () {
        this.name = 'test'
        this.menuData = [
            {
                title: 'test', icon: 'list-ol', children: [
                {
                    title: '测试菜单1.1', children: [
                    {title: '测试菜单1.1.1', sref: 'test111'},
                    {title: '测试菜单1.1.2', sref: 'test112'},
                ]
                },
                {title: '测试菜单1.2', sref: 'test2'},
            ]
            }
        ]
    })
})(angular);
