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
                AppComponent.prototype.ngOnInit = function () {
                    document.getElementById('logo-lg')
                        .addEventListener('changes', function (e) {
                        console.log(e);
                        // this.adjustLogoSize(e)
                    }, true);
                };
                AppComponent.prototype.printStuff = function (data) {
                    console.log(data);
                };
                ;
                AppComponent.prototype.adjustLogoSize = function (logoElement) {
                    logoElement.width = logoElement.height * 2.231428571428571;
                };
                ;
                AppComponent.prototype.parallaxInit = function (elem) {
                    console.log(elem);
                    // this.routeScroll = elem;
                };
                ;
                ;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIiwiQXBwQ29tcG9uZW50LmFkanVzdExvZ29TaXplIiwiQXBwQ29tcG9uZW50LnBhcmFsbGF4SW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBaURDQSxzQkFBb0JBLGdCQUFrQ0E7b0JBQWxDQyxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtnQkFDdERBLENBQUNBO2dCQXRCREQsK0JBQVFBLEdBQVJBO29CQUNDRSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQTt5QkFDL0JBLGdCQUFnQkEsQ0FBQ0EsU0FBU0EsRUFBRUEsVUFBQ0EsQ0FBQ0E7d0JBQzlCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDZkEseUJBQXlCQTtvQkFDMUJBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLENBQUFBO2dCQUNYQSxDQUFDQTtnQkFFREYsaUNBQVVBLEdBQVZBLFVBQVdBLElBQUlBO29CQUNkRyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDbkJBLENBQUNBOztnQkFFREgscUNBQWNBLEdBQWRBLFVBQWVBLFdBQVdBO29CQUN6QkksV0FBV0EsQ0FBQ0EsS0FBS0EsR0FBR0EsV0FBV0EsQ0FBQ0EsTUFBTUEsR0FBR0EsaUJBQWlCQSxDQUFDQTtnQkFDNURBLENBQUNBOztnQkFFREosbUNBQVlBLEdBQVpBLFVBQWFBLElBQUlBO29CQUNoQkssT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2xCQSwyQkFBMkJBO2dCQUM1QkEsQ0FBQ0E7OztnQkEvQ0ZMO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO3dCQUNmQSxTQUFTQSxFQUFFQTs0QkFDSkEseUJBQWdCQTs0QkFDdEJBLG9DQUFnQkE7eUJBQ2hCQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSxnQkFBZ0JBO3dCQUM3QkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLDZCQUE2QkE7NEJBQzdCQSxnQ0FBZ0NBO3lCQUNoQ0E7d0JBQ0RBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBOzRCQUNqQkEsd0JBQWVBOzRCQUNUQSwwQkFBaUJBOzRCQUN2QkEsNkJBQVFBO3lCQUNSQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBTUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUtBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUtBO3dCQUM3REEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBR0EsU0FBU0EsRUFBRUEsc0NBQWlCQSxFQUFHQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFJQTt3QkFDdkVBLEVBQUVBLElBQUlBLEVBQUVBLGtCQUFrQkEsRUFBRUEsU0FBU0EsRUFBRUEsd0NBQWtCQSxFQUFHQSxFQUFFQSxFQUFFQSxpQkFBaUJBLEVBQUVBO3dCQUNuRkEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBS0EsU0FBU0EsRUFBRUEsd0NBQW9CQSxFQUFFQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFFQTtxQkFDNUZBLENBQUNBOztpQ0EwQkRBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FuREEsQUFtRENBLElBQUE7WUFuREQsdUNBbURDLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFxyXG5cdFx0IFZpZXcsXHJcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxyXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9TZXJ2aWNlc0NvbXBvbmVudC9zZXJ2aWNlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvUmVjb21tZW5kQ29tcG9uZW50L3JlY29tbWVuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNaXNzaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9NaXNzaW5nUGFnZUNvbXBvbmVudC9taXNzaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0bmluZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0xpZ2h0bmluZ1NlcnZpY2UvbGlnaHRuaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJy4vZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnLFxyXG5cdHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcblx0XHRMaWdodG5pbmdTZXJ2aWNlXHJcblx0XVxyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9hcHAuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9hcHAvc3R5bGVzL2FwcC5zdHlsZXMuY3NzJyxcclxuXHRcdCcuL2FwcC9zdHlsZXMvaGVhZGVyLnN0eWxlcy5jc3MnLFxyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Q09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHRDT1JFX0RJUkVDVElWRVMsXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRQYXJhbGxheFxyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIFx0XHQgYXM6ICdIb21lJ1x0XHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvc2VydmljZXMnLFx0XHRjb21wb25lbnQ6IFNlcnZpY2VzQ29tcG9uZW50LFx0IGFzOiAnU2VydmljZXMnXHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvcmVjb21tZW5kYXRpb25zJyxcdGNvbXBvbmVudDogUmVjb21tZW5kQ29tcG9uZW50LFx0IGFzOiAnUmVjb21tZW5kYXRpb25zJ1x0fSxcclxuXHR7IHBhdGg6ICcvNDA0JyxcdFx0XHRcdGNvbXBvbmVudDogTWlzc2luZ1BhZ2VDb21wb25lbnQsIGFzOiAnTWlzc2luZy1QYWdlJyxcdHVzZUFzRGVmYXVsdDogdHJ1ZSB9XHJcbl0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLWxnJylcclxuXHRcdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlcycsIChlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0XHRcdC8vIHRoaXMuYWRqdXN0TG9nb1NpemUoZSlcclxuXHRcdFx0XHR9LCB0cnVlKVxyXG5cdH1cclxuXHRcclxuXHRwcmludFN0dWZmKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblx0XHJcblx0YWRqdXN0TG9nb1NpemUobG9nb0VsZW1lbnQpIHtcclxuXHRcdGxvZ29FbGVtZW50LndpZHRoID0gbG9nb0VsZW1lbnQuaGVpZ2h0ICogMi4yMzE0Mjg1NzE0Mjg1NzE7XHJcblx0fTtcclxuXHRcclxuXHRwYXJhbGxheEluaXQoZWxlbSkge1xyXG5cdFx0Y29uc29sZS5sb2coZWxlbSk7XHJcblx0XHQvLyB0aGlzLnJvdXRlU2Nyb2xsID0gZWxlbTtcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlnaHRuaW5nU2VydmljZTogTGlnaHRuaW5nU2VydmljZSkge1xyXG5cdH07XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
