System.register(['angular2/core', 'angular2/common', 'angular2/router', './components/HomeComponent/home.component', './components/ServicesComponent/services.component', './components/RecommendComponent/recommend.component', './components/MissingPageComponent/missing.component', './services/LightningService/lightning.service', './directives/parallax/parallax.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, home_component_1, services_component_1, recommend_component_1, missing_component_1, lightning_service_1, parallax_directive_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (services_component_1_1) {
                services_component_1 = services_component_1_1;
            },
            function (recommend_component_1_1) {
                recommend_component_1 = recommend_component_1_1;
            },
            function (missing_component_1_1) {
                missing_component_1 = missing_component_1_1;
            },
            function (lightning_service_1_1) {
                lightning_service_1 = lightning_service_1_1;
            },
            function (parallax_directive_1_1) {
                parallax_directive_1 = parallax_directive_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(lightningService) {
                    this.lightningService = lightningService;
                }
                // @Output() routeScroll: HTMLElement;
                AppComponent.prototype.printStuff = function (data) {
                    console.log(data);
                };
                ;
                AppComponent.prototype.parallaxInit = function (elem) {
                    console.log(elem);
                    // this.routeScroll = elem;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            lightning_service_1.LightningService
                        ]
                    }),
                    core_1.View({
                        templateUrl: './app/app.html',
                        // template: ``,
                        styleUrls: [
                            './app/styles/app.styles.css',
                            './app/styles/header.styles.css',
                        ],
                        directives: [
                            common_1.COMMON_DIRECTIVES,
                            common_1.CORE_DIRECTIVES,
                            router_1.ROUTER_DIRECTIVES,
                            parallax_directive_1.Parallax
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_component_1.HomeComponent, as: 'Home' },
                        { path: '/services', component: services_component_1.ServicesComponent, as: 'Services' },
                        { path: '/recommendations', component: recommend_component_1.RecommendComponent, as: 'Recommendations' },
                        { path: '/404', component: missing_component_1.MissingPageComponent, as: 'Missing-Page', useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [lightning_service_1.LightningService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIiwiQXBwQ29tcG9uZW50LnBhcmFsbGF4SW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBdUNDQSxzQkFBb0JBLGdCQUFrQ0E7b0JBQWxDQyxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtnQkFDdERBLENBQUNBO2dCQVhFRCxzQ0FBc0NBO2dCQUN6Q0EsaUNBQVVBLEdBQVZBLFVBQVdBLElBQUlBO29CQUNkRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDbkJBLENBQUNBOztnQkFFREYsbUNBQVlBLEdBQVpBLFVBQWFBLElBQUlBO29CQUNoQkcsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSwyQkFBMkJBO2dCQUM1QkEsQ0FBQ0E7Z0JBckNGSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsU0FBU0EsRUFBRUE7NEJBQ0pBLHlCQUFnQkE7NEJBQ3RCQSxvQ0FBZ0JBO3lCQUNoQkE7cUJBQ0RBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsZ0JBQWdCQTt3QkFDN0JBLGdCQUFnQkE7d0JBQ2hCQSxTQUFTQSxFQUFFQTs0QkFDVkEsNkJBQTZCQTs0QkFDN0JBLGdDQUFnQ0E7eUJBQ2hDQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7NEJBQ2pCQSx3QkFBZUE7NEJBQ1RBLDBCQUFpQkE7NEJBQ3ZCQSw2QkFBUUE7eUJBQ1JBO3FCQUNEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFNQSxTQUFTQSxFQUFFQSw4QkFBYUEsRUFBS0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBS0E7d0JBQzdEQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFHQSxTQUFTQSxFQUFFQSxzQ0FBaUJBLEVBQUdBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUlBO3dCQUN2RUEsRUFBRUEsSUFBSUEsRUFBRUEsa0JBQWtCQSxFQUFFQSxTQUFTQSxFQUFFQSx3Q0FBa0JBLEVBQUdBLEVBQUVBLEVBQUVBLGlCQUFpQkEsRUFBRUE7d0JBQ25GQSxFQUFFQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFLQSxTQUFTQSxFQUFFQSx3Q0FBb0JBLEVBQUVBLEVBQUVBLEVBQUVBLGNBQWNBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUVBO3FCQUM1RkEsQ0FBQ0E7O2lDQWVEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBekNBLEFBeUNDQSxJQUFBO1lBekNELHVDQXlDQyxDQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXcsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBwcm92aWRlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT01NT05fRElSRUNUSVZFUyxcclxuXHRcdENPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZyxcclxuXHRcdFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0Uk9VVEVSX1BST1ZJREVSUyxcclxuXHRcdExvY2F0aW9uU3RyYXRlZ3ksXHJcblx0XHRIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlcnZpY2VzQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvU2VydmljZXNDb21wb25lbnQvc2VydmljZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtSZWNvbW1lbmRDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9SZWNvbW1lbmRDb21wb25lbnQvcmVjb21tZW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWlzc2luZ1BhZ2VDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9NaXNzaW5nUGFnZUNvbXBvbmVudC9taXNzaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TGlnaHRuaW5nU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9MaWdodG5pbmdTZXJ2aWNlL2xpZ2h0bmluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHtQYXJhbGxheH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcCcsXHJcblx0cHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUk9VVEVSX1BST1ZJREVSUyxcclxuXHRcdExpZ2h0bmluZ1NlcnZpY2VcclxuXHRdXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJy4vYXBwL2FwcC5odG1sJyxcclxuXHQvLyB0ZW1wbGF0ZTogYGAsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9hcHAvc3R5bGVzL2FwcC5zdHlsZXMuY3NzJyxcclxuXHRcdCcuL2FwcC9zdHlsZXMvaGVhZGVyLnN0eWxlcy5jc3MnLFxyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Q09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHRDT1JFX0RJUkVDVElWRVMsXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRQYXJhbGxheFxyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIFx0XHQgYXM6ICdIb21lJ1x0XHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvc2VydmljZXMnLFx0XHRjb21wb25lbnQ6IFNlcnZpY2VzQ29tcG9uZW50LFx0IGFzOiAnU2VydmljZXMnXHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvcmVjb21tZW5kYXRpb25zJyxcdGNvbXBvbmVudDogUmVjb21tZW5kQ29tcG9uZW50LFx0IGFzOiAnUmVjb21tZW5kYXRpb25zJ1x0fSxcclxuXHR7IHBhdGg6ICcvNDA0JyxcdFx0XHRcdGNvbXBvbmVudDogTWlzc2luZ1BhZ2VDb21wb25lbnQsIGFzOiAnTWlzc2luZy1QYWdlJyxcdHVzZUFzRGVmYXVsdDogdHJ1ZSB9XHJcbl0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIC8vIEBPdXRwdXQoKSByb3V0ZVNjcm9sbDogSFRNTEVsZW1lbnQ7XHJcblx0cHJpbnRTdHVmZihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHR9O1xyXG5cdFxyXG5cdHBhcmFsbGF4SW5pdChlbGVtKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlbGVtKTtcclxuXHRcdC8vIHRoaXMucm91dGVTY3JvbGwgPSBlbGVtO1xyXG5cdH1cclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxpZ2h0bmluZ1NlcnZpY2U6IExpZ2h0bmluZ1NlcnZpY2UpIHtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
