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
    var logoResize, routeLoaded, AppComponent;
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
            logoResize = new core_1.EventEmitter(), routeLoaded = new core_1.EventEmitter();
            AppComponent = (function () {
                function AppComponent(lightningService) {
                    var _this = this;
                    this.lightningService = lightningService;
                    this.eventFunc = function (event) {
                        _this.adjustLogoSize(document.getElementById('logo-lg'));
                        // console.log('resize event');
                    };
                    this.routeLoadHandler = function (event) {
                        console.log(event);
                    };
                    this.parallaxConfig = {
                        parallaxCss: 'height',
                        minValue: 80,
                        maxValue: 178,
                        parallaxInitVal: 178,
                        parallaxRatio: -2,
                        scrollerId: 'route',
                        cb: this.eventFunc
                    };
                    this.resizeSubscription = logoResize.subscribe(this.eventFunc);
                    this.adjustLogoSize = function (logoElement) {
                        if (logoElement === void 0) { logoElement = document.getElementById('logo-lg'); }
                        setTimeout(function () {
                            logoElement.style.width = (logoElement.offsetHeight * 2.231428571428571) + 'px';
                            // console.log(this)
                        }, 0);
                    };
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.routeLoadSubscription = routeLoaded.subscribe(this.routeLoadHandler);
                };
                ;
                AppComponent.prototype.ngAfterContentInit = function () {
                };
                ;
                AppComponent.prototype.ngAfterViewInit = function () {
                };
                ;
                AppComponent.prototype.ngAfterViewChecked = function () {
                };
                ;
                AppComponent.prototype.ngOnDestroy = function () {
                    this.resizeSubscription.dispose();
                    this.routeLoadSubscription.dispose();
                };
                ;
                AppComponent.prototype.printStuff = function (data) {
                    console.log(data);
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
            exports_1("logoResize", logoResize);
            exports_1("routeLoaded", routeLoaded);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0IiwiQXBwQ29tcG9uZW50Lm5nQWZ0ZXJWaWV3Q2hlY2tlZCIsIkFwcENvbXBvbmVudC5uZ09uRGVzdHJveSIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQW9CTSxVQUFVLEVBQ2IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQURSLFVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsRUFDbEMsV0FBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1lBRXBDO2dCQWlGQ0Esc0JBQW9CQSxnQkFBa0NBO29CQWpGdkRDLGlCQW1GQ0E7b0JBRm9CQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtvQkFyRHREQSxjQUFTQSxHQUFHQSxVQUFDQSxLQUFLQTt3QkFDakJBLEtBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4REEsK0JBQStCQTtvQkFDaENBLENBQUNBLENBQUNBO29CQUVGQSxxQkFBZ0JBLEdBQUdBLFVBQUNBLEtBQUtBO3dCQUN4QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxDQUFDQSxDQUFDQTtvQkFFRkEsbUJBQWNBLEdBQUdBO3dCQUNoQkEsV0FBV0EsRUFBRUEsUUFBUUE7d0JBQ3JCQSxRQUFRQSxFQUFFQSxFQUFFQTt3QkFDWkEsUUFBUUEsRUFBRUEsR0FBR0E7d0JBQ2JBLGVBQWVBLEVBQUVBLEdBQUdBO3dCQUNwQkEsYUFBYUEsRUFBRUEsQ0FB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b250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgXHJcblx0XHQgVmlldyxcclxuXHRcdCBPbkluaXQsXHJcblx0XHQgQWZ0ZXJDb250ZW50SW5pdCxcclxuXHRcdCBBZnRlclZpZXdJbml0LFxyXG5cdFx0IEFmdGVyVmlld0NoZWNrZWQsXHJcblx0XHQgT25EZXN0cm95LFxyXG5cdFx0IEV2ZW50RW1pdHRlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT01NT05fRElSRUNUSVZFUyxcclxuXHRcdCBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyxcclxuXHRcdCBST1VURVJfRElSRUNUSVZFUyxcclxuXHRcdCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9Ib21lQ29tcG9uZW50L2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VydmljZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvU2VydmljZXNDb21wb25lbnQvc2VydmljZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVjb21tZW5kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL1JlY29tbWVuZENvbXBvbmVudC9yZWNvbW1lbmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWlzc2luZ1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvTWlzc2luZ1BhZ2VDb21wb25lbnQvbWlzc2luZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodG5pbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9MaWdodG5pbmdTZXJ2aWNlL2xpZ2h0bmluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IGxvZ29SZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyKCksXHJcblx0ICByb3V0ZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwJyxcclxuXHRwcm92aWRlcnM6IFtcclxuICAgICAgICBST1VURVJfUFJPVklERVJTLFxyXG5cdFx0TGlnaHRuaW5nU2VydmljZVxyXG5cdF1cclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnLi9hcHAvYXBwLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0Jy4vYXBwL3N0eWxlcy9hcHAuc3R5bGVzLmNzcycsXHJcblx0XHQnLi9hcHAvc3R5bGVzL2hlYWRlci5zdHlsZXMuY3NzJyxcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0Q09SRV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0UGFyYWxsYXhcclxuXHRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0eyBwYXRoOiAnLycsIFx0XHRcdFx0Y29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBcdFx0IGFzOiAnSG9tZSdcdFx0XHRcdH0sXHJcblx0eyBwYXRoOiAnL3NlcnZpY2VzJyxcdFx0Y29tcG9uZW50OiBTZXJ2aWNlc0NvbXBvbmVudCxcdCBhczogJ1NlcnZpY2VzJ1x0XHRcdH0sXHJcblx0eyBwYXRoOiAnL3JlY29tbWVuZGF0aW9ucycsXHRjb21wb25lbnQ6IFJlY29tbWVuZENvbXBvbmVudCxcdCBhczogJ1JlY29tbWVuZGF0aW9ucydcdH0sXHJcblx0eyBwYXRoOiAnLzQwNCcsXHRcdFx0XHRjb21wb25lbnQ6IE1pc3NpbmdQYWdlQ29tcG9uZW50LCBhczogJ01pc3NpbmctUGFnZScsXHR1c2VBc0RlZmF1bHQ6IHRydWUgfVxyXG5dKVxyXG5cclxuY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xyXG5cdGV2ZW50RnVuYyA9IChldmVudCkgPT4ge1xyXG5cdFx0dGhpcy5hZGp1c3RMb2dvU2l6ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nby1sZycpKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdyZXNpemUgZXZlbnQnKTtcclxuXHR9O1xyXG5cdFxyXG5cdHJvdXRlTG9hZEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHR9O1xyXG5cdFxyXG5cdHBhcmFsbGF4Q29uZmlnID0ge1xyXG5cdFx0cGFyYWxsYXhDc3M6ICdoZWlnaHQnLFxyXG5cdFx0bWluVmFsdWU6IDgwLFxyXG5cdFx0bWF4VmFsdWU6IDE3OCxcclxuXHRcdHBhcmFsbGF4SW5pdFZhbDogMTc4LFxyXG5cdFx0cGFyYWxsYXhSYXRpbzogLTIsXHJcblx0XHRzY3JvbGxlcklkOiAncm91dGUnLFxyXG5cdFx0Y2I6IHRoaXMuZXZlbnRGdW5jXHJcblx0fTtcclxuXHRcclxuXHRyZXNpemVTdWJzY3JpcHRpb24gPSBsb2dvUmVzaXplLnN1YnNjcmliZSh0aGlzLmV2ZW50RnVuYyk7XHJcblx0cm91dGVMb2FkU3Vic2NyaXB0aW9uO1xyXG5cdFxyXG5cdGN1c3RvbVNjcm9sbDtcclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMucm91dGVMb2FkU3Vic2NyaXB0aW9uID0gcm91dGVMb2FkZWQuc3Vic2NyaWJlKHRoaXMucm91dGVMb2FkSGFuZGxlcik7XHJcblx0fTtcclxuXHRcclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblx0fTtcclxuXHRcclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0fTtcclxuXHRcclxuXHRuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcblx0fTtcclxuXHRcclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMucmVzaXplU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuXHRcdHRoaXMucm91dGVMb2FkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuXHR9O1xyXG5cdFxyXG5cdHByaW50U3R1ZmYoZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0fTtcclxuXHRcclxuXHRhZGp1c3RMb2dvU2l6ZSA9IChsb2dvRWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nby1sZycpKSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0bG9nb0VsZW1lbnQuc3R5bGUud2lkdGggPSAobG9nb0VsZW1lbnQub2Zmc2V0SGVpZ2h0ICogMi4yMzE0Mjg1NzE0Mjg1NzEpICsgJ3B4JztcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcylcclxuXHRcdH0sIDApO1xyXG5cdH07XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsaWdodG5pbmdTZXJ2aWNlOiBMaWdodG5pbmdTZXJ2aWNlKSB7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IHtsb2dvUmVzaXplLCByb3V0ZUxvYWRlZCwgQXBwQ29tcG9uZW50fTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
