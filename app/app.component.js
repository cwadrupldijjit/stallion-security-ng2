System.register(['angular2/core', 'angular2/common', 'angular2/router', './components/HomeComponent/home.component', './components/ServicesComponent/services.component', './components/RecommendComponent/recommend.component', './components/MissingPageComponent/missing.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, home_component_1, services_component_1, recommend_component_1, missing_component_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_routerLink) {
                    this['router-link'] = _routerLink;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [
                            common_1.COMMON_DIRECTIVES,
                            common_1.CORE_DIRECTIVES,
                            router_1.ROUTER_DIRECTIVES,
                            router_1.RouterLink
                        ],
                        providers: [
                            core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
                        ]
                    }),
                    core_1.View({
                        templateUrl: './app/app.html',
                        directives: router_1.ROUTER_DIRECTIVES
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_component_1.HomeComponent, as: 'Home' },
                        { path: '/services', component: services_component_1.ServicesComponent, as: 'Services' },
                        { path: '/recommendations', component: recommend_component_1.RecommendComponent, as: 'Recommendations' },
                        { path: '/404', component: missing_component_1.MissingPageComponent, as: 'Missing-Page', useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouterLink])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map