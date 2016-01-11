System.register(['angular2/core', 'angular2/common', 'angular2/router', './components/HomeComponent/home.component', './components/ServicesComponent/services.component', './components/RecommendComponent/recommend.component', './components/MissingPageComponent/missing.component', './services/LightningService/lightning.service', './components/ParallaxComponent/parallax.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, home_component_1, services_component_1, recommend_component_1, missing_component_1, lightning_service_1, parallax_component_1;
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
            function (parallax_component_1_1) {
                parallax_component_1 = parallax_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(lightningService) {
                    this.lightningService = lightningService;
                }
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
                            parallax_component_1.PerfectParallax,
                            parallax_component_1.ParallaxComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkE4QkNBLHNCQUFZQSxnQkFBa0NBO29CQUM3Q0MsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxnQkFBZ0JBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBaENGRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsU0FBU0EsRUFBRUE7NEJBQ0pBLHlCQUFnQkE7NEJBQ3RCQSxvQ0FBZ0JBO3lCQUNoQkE7cUJBQ0RBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsZ0JBQWdCQTt3QkFDN0JBLFNBQVNBLEVBQUVBOzRCQUNWQSw2QkFBNkJBOzRCQUM3QkEsZ0NBQWdDQTt5QkFDaENBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLHdCQUFlQTs0QkFDVEEsMEJBQWlCQTs0QkFDdkJBLG9DQUFlQTs0QkFDZkEsc0NBQWlCQTt5QkFDakJBO3FCQUNEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFNQSxTQUFTQSxFQUFFQSw4QkFBYUEsRUFBS0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBS0E7d0JBQzdEQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFHQSxTQUFTQSxFQUFFQSxzQ0FBaUJBLEVBQUdBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUlBO3dCQUN2RUEsRUFBRUEsSUFBSUEsRUFBRUEsa0JBQWtCQSxFQUFFQSxTQUFTQSxFQUFFQSx3Q0FBa0JBLEVBQUdBLEVBQUVBLEVBQUVBLGlCQUFpQkEsRUFBRUE7d0JBQ25GQSxFQUFFQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFLQSxTQUFTQSxFQUFFQSx3Q0FBb0JBLEVBQUVBLEVBQUVBLEVBQUVBLGNBQWNBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUVBO3FCQUM1RkEsQ0FBQ0E7O2lDQU9EQTtnQkFBREEsbUJBQUNBO1lBQURBLENBQUNBLEFBakNELElBaUNDO1lBakNELHVDQWlDQyxDQUFBIn0=