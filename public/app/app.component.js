System.register(['angular2/core', 'angular2/common', 'angular2/router', './components/HomeComponent/home.component', './components/ServicesComponent/services.component', './components/RecommendComponent/recommend.component', './components/MissingPageComponent/missing.component', './services/LightningService/lightning.service', './directives/parallax/parallax.directive', './slimscroll'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, home_component_1, services_component_1, recommend_component_1, missing_component_1, lightning_service_1, parallax_directive_1, slimscroll_1;
    var logoResize, AppComponent;
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
            },
            function (slimscroll_1_1) {
                slimscroll_1 = slimscroll_1_1;
            }],
        execute: function() {
            logoResize = new core_1.EventEmitter();
            AppComponent = (function () {
                function AppComponent(lightningService) {
                    var _this = this;
                    this.lightningService = lightningService;
                    this.eventFunc = function (event) {
                        _this.adjustLogoSize(document.getElementById('logo-lg'));
                        // console.log('resize event');
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
                };
                ;
                AppComponent.prototype.ngAfterContentInit = function () {
                    // debugger;
                    var scrollbarCustomizations = {
                        scrollBarClass: 'scrollbar'
                    };
                    // document.getElementById('route').addEventListener('load', () => {
                    console.log('slimscroll should initialize...');
                    this.customScroll = Object.create(slimscroll_1.slimScroll.bind(null, document.getElementById('route'), scrollbarCustomizations));
                    console.log('customScroll');
                    // window.addEventListener('resize', () => {
                    // 	this.customScroll.resetValues}, false);
                    // }, false);
                };
                ;
                AppComponent.prototype.ngAfterViewInit = function () {
                    // debugger;
                    console.log('AfterViewInit');
                };
                ;
                AppComponent.prototype.ngAfterViewChecked = function () {
                    debugger;
                };
                AppComponent.prototype.ngOnDestroy = function () {
                    this.resizeSubscription.dispose();
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
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0IiwiQXBwQ29tcG9uZW50Lm5nQWZ0ZXJWaWV3Q2hlY2tlZCIsIkFwcENvbXBvbmVudC5uZ09uRGVzdHJveSIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQXFCTSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQVYsVUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1lBRXRDO2dCQWdGQ0Esc0JBQW9CQSxnQkFBa0NBO29CQWhGdkRDLGlCQWtGQ0E7b0JBRm9CQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtvQkFwRHREQSxjQUFTQSxHQUFHQSxVQUFDQSxLQUFLQTt3QkFDakJBLEtBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4REEsK0JBQStCQTtvQkFDaENBLENBQUNBLENBQUFBO29CQUVEQSx1QkFBa0JBLEdBQUdBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQXdDMURBLG1CQUFjQSxHQUFHQSxVQUFDQSxXQUE2REE7d0JBQTdEQSwyQkFBNkRBLEdBQTdEQSxjQUEyQkEsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQzlFQSxVQUFVQSxDQUFDQTs0QkFDVkEsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsR0FBR0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTs0QkFDaEZBLG9CQUFvQkE7d0JBQ3JCQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDUEEsQ0FBQ0EsQ0FBQ0E7Z0JBR0ZBLENBQUNBO2dCQTVDREQsK0JBQVFBLEdBQVJBO2dCQUNBRSxDQUFDQTs7Z0JBRURGLHlDQUFrQkEsR0FBbEJBO29CQUNDRyxZQUFZQTtvQkFDWkEsSUFBSUEsdUJBQXVCQSxHQUFHQTt3QkFDN0JBLGNBQWNBLEVBQUVBLFdBQVdBO3FCQUMzQkEsQ0FBQ0E7b0JBQ0ZBLG9FQUFvRUE7b0JBQ25FQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxpQ0FBaUNBLENBQUNBLENBQUFBO29CQUM5Q0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsdUJBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLE9BQU9BLENBQUNBLEVBQUVBLHVCQUF1QkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRXBIQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtvQkFFNUJBLDRDQUE0Q0E7b0JBQzVDQSwyQ0FBMkNBO29CQUM1Q0EsYUFBYUE7Z0JBQ2RBLENBQUNBOztnQkFFREgsc0NBQWVBLEdBQWZBO29CQUNDSSxZQUFZQTtvQkFDWkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQUE7Z0JBQzdCQSxDQUFDQTs7Z0JBRURKLHlDQUFrQkEsR0FBbEJBO29CQUNDSyxRQUFRQSxDQUFDQTtnQkFDVkEsQ0FBQ0E7Z0JBRURMLGtDQUFXQSxHQUFYQTtvQkFDQ00sSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDbkNBLENBQUNBOztnQkFFRE4saUNBQVVBLEdBQVZBLFVBQVdBLElBQUlBO29CQUNkTyxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDbkJBLENBQUNBOzs7Z0JBdkVGUDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsU0FBU0EsRUFBRUE7NEJBQ0pBLHlCQUFnQkE7NEJBQ3RCQSxvQ0FBZ0JBO3lCQUNoQkE7cUJBQ0RBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsZ0JBQWdCQTt3QkFDN0JBLFNBQVNBLEVBQUVBOzRCQUNWQSw2QkFBNkJBOzRCQUM3QkEsZ0NBQWdDQTt5QkFDaENBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLHdCQUFlQTs0QkFDVEEsMEJBQWlCQTs0QkFDdkJBLDZCQUFRQTt5QkFDUkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQU1BLFNBQVNBLEVBQUVBLDhCQUFhQSxFQUFLQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFLQTt3QkFDN0RBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUdBLFNBQVNBLEVBQUVBLHNDQUFpQkEsRUFBR0EsRUFBRUEsRUFBRUEsVUFBVUEsRUFBSUE7d0JBQ3ZFQSxFQUFFQSxJQUFJQSxFQUFFQSxrQkFBa0JBLEVBQUVBLFNBQVNBLEVBQUVBLHdDQUFrQkEsRUFBR0EsRUFBRUEsRUFBRUEsaUJBQWlCQSxFQUFFQTt3QkFDbkZBLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUtBLFNBQVNBLEVBQUVBLHdDQUFvQkEsRUFBRUEsRUFBRUEsRUFBRUEsY0FBY0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7cUJBQzVGQSxDQUFDQTs7aUNBeUREQTtnQkFBREEsbUJBQUNBO1lBQURBLENBbEZBLEFBa0ZDQSxJQUFBO1lBRU8sbUNBQVU7WUFBRSx1Q0FBWSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgXHJcblx0XHQgVmlldyxcclxuXHRcdCBPbkluaXQsXHJcblx0XHQgQWZ0ZXJDb250ZW50SW5pdCxcclxuXHRcdCBBZnRlclZpZXdJbml0LFxyXG5cdFx0IEFmdGVyVmlld0NoZWNrZWQsXHJcblx0XHQgT25EZXN0cm95LFxyXG5cdFx0IEV2ZW50RW1pdHRlciB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT01NT05fRElSRUNUSVZFUyxcclxuXHRcdCBDT1JFX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZyxcclxuXHRcdCBST1VURVJfRElSRUNUSVZFUyxcclxuXHRcdCBST1VURVJfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9Ib21lQ29tcG9uZW50L2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VydmljZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvU2VydmljZXNDb21wb25lbnQvc2VydmljZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVjb21tZW5kQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL1JlY29tbWVuZENvbXBvbmVudC9yZWNvbW1lbmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWlzc2luZ1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvTWlzc2luZ1BhZ2VDb21wb25lbnQvbWlzc2luZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWdodG5pbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9MaWdodG5pbmdTZXJ2aWNlL2xpZ2h0bmluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICcuL2RpcmVjdGl2ZXMvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgc2xpbVNjcm9sbCB9IGZyb20gJy4vc2xpbXNjcm9sbCc7XHJcblxyXG5jb25zdCBsb2dvUmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnLFxyXG5cdHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcblx0XHRMaWdodG5pbmdTZXJ2aWNlXHJcblx0XVxyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9hcHAuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9hcHAvc3R5bGVzL2FwcC5zdHlsZXMuY3NzJyxcclxuXHRcdCcuL2FwcC9zdHlsZXMvaGVhZGVyLnN0eWxlcy5jc3MnLFxyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Q09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHRDT1JFX0RJUkVDVElWRVMsXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRQYXJhbGxheFxyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIFx0XHQgYXM6ICdIb21lJ1x0XHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvc2VydmljZXMnLFx0XHRjb21wb25lbnQ6IFNlcnZpY2VzQ29tcG9uZW50LFx0IGFzOiAnU2VydmljZXMnXHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvcmVjb21tZW5kYXRpb25zJyxcdGNvbXBvbmVudDogUmVjb21tZW5kQ29tcG9uZW50LFx0IGFzOiAnUmVjb21tZW5kYXRpb25zJ1x0fSxcclxuXHR7IHBhdGg6ICcvNDA0JyxcdFx0XHRcdGNvbXBvbmVudDogTWlzc2luZ1BhZ2VDb21wb25lbnQsIGFzOiAnTWlzc2luZy1QYWdlJyxcdHVzZUFzRGVmYXVsdDogdHJ1ZSB9XHJcbl0pXHJcblxyXG5jbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XHJcblx0ZXZlbnRGdW5jID0gKGV2ZW50KSA9PiB7XHJcblx0XHR0aGlzLmFkanVzdExvZ29TaXplKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLWxnJykpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3Jlc2l6ZSBldmVudCcpO1xyXG5cdH1cclxuXHRcclxuXHRyZXNpemVTdWJzY3JpcHRpb24gPSBsb2dvUmVzaXplLnN1YnNjcmliZSh0aGlzLmV2ZW50RnVuYyk7XHJcblx0XHJcblx0Y3VzdG9tU2Nyb2xsO1xyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH07XHJcblx0XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0Ly8gZGVidWdnZXI7XHJcblx0XHRsZXQgc2Nyb2xsYmFyQ3VzdG9taXphdGlvbnMgPSB7XHJcblx0XHRcdHNjcm9sbEJhckNsYXNzOiAnc2Nyb2xsYmFyJ1xyXG5cdFx0fTtcclxuXHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb3V0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdzbGltc2Nyb2xsIHNob3VsZCBpbml0aWFsaXplLi4uJylcclxuXHRcdFx0dGhpcy5jdXN0b21TY3JvbGwgPSBPYmplY3QuY3JlYXRlKHNsaW1TY3JvbGwuYmluZChudWxsLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm91dGUnKSwgc2Nyb2xsYmFyQ3VzdG9taXphdGlvbnMpKTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnNvbGUubG9nKCdjdXN0b21TY3JvbGwnKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcblx0XHRcdC8vIFx0dGhpcy5jdXN0b21TY3JvbGwucmVzZXRWYWx1ZXN9LCBmYWxzZSk7XHJcblx0XHQvLyB9LCBmYWxzZSk7XHJcblx0fTtcclxuXHRcclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0XHQvLyBkZWJ1Z2dlcjtcclxuXHRcdGNvbnNvbGUubG9nKCdBZnRlclZpZXdJbml0JylcclxuXHR9O1xyXG5cdFxyXG5cdG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuXHRcdGRlYnVnZ2VyO1xyXG5cdH1cclxuXHRcclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMucmVzaXplU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuXHR9O1xyXG5cdFxyXG5cdHByaW50U3R1ZmYoZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0fTtcclxuXHRcclxuXHRhZGp1c3RMb2dvU2l6ZSA9IChsb2dvRWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nby1sZycpKSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0bG9nb0VsZW1lbnQuc3R5bGUud2lkdGggPSAobG9nb0VsZW1lbnQub2Zmc2V0SGVpZ2h0ICogMi4yMzE0Mjg1NzE0Mjg1NzEpICsgJ3B4JztcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcylcclxuXHRcdH0sIDApO1xyXG5cdH07XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsaWdodG5pbmdTZXJ2aWNlOiBMaWdodG5pbmdTZXJ2aWNlKSB7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IHtsb2dvUmVzaXplLCBBcHBDb21wb25lbnR9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
