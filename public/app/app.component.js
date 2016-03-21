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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0IiwiQXBwQ29tcG9uZW50Lm5nQWZ0ZXJWaWV3Q2hlY2tlZCIsIkFwcENvbXBvbmVudC5uZ09uRGVzdHJveSIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQW9CTSxVQUFVLEVBQ2IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQURSLFVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsRUFDbEMsV0FBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1lBRXBDO2dCQWlGQ0Esc0JBQW9CQSxnQkFBa0NBO29CQWpGdkRDLGlCQW1GQ0E7b0JBRm9CQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtvQkFyRHREQSxjQUFTQSxHQUFHQSxVQUFDQSxLQUFLQTt3QkFDakJBLEtBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4REEsK0JBQStCQTtvQkFDaENBLENBQUNBLENBQUNBO29CQUVGQSxxQkFBZ0JBLEdBQUdBLFVBQUNBLEtBQUtBO3dCQUN4QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxDQUFDQSxDQUFDQTtvQkFFRkEsbUJBQWNBLEdBQUdBO3dCQUNoQkEsV0FBV0EsRUFBRUEsUUFBUUE7d0JBQ3JCQSxRQUFRQSxFQUFFQSxFQUFFQTt3QkFDWkEsUUFBUUEsRUFBRUEsR0FBR0E7d0JBQ2JBLGVBQWVBLEVBQUVBLEdBQUdBO3dCQUNwQkEsYUFBYUEsRUFBRUEsQ0FB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bnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBcclxuXHRcdCBWaWV3LFxyXG5cdFx0IE9uSW5pdCxcclxuXHRcdCBBZnRlckNvbnRlbnRJbml0LFxyXG5cdFx0IEFmdGVyVmlld0luaXQsXHJcblx0XHQgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuXHRcdCBPbkRlc3Ryb3ksXHJcblx0XHQgRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxyXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9TZXJ2aWNlc0NvbXBvbmVudC9zZXJ2aWNlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvUmVjb21tZW5kQ29tcG9uZW50L3JlY29tbWVuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNaXNzaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9NaXNzaW5nUGFnZUNvbXBvbmVudC9taXNzaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0bmluZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0xpZ2h0bmluZ1NlcnZpY2UvbGlnaHRuaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJy4vZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgbG9nb1Jlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKSxcclxuXHQgIHJvdXRlTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnLFxyXG5cdHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcblx0XHRMaWdodG5pbmdTZXJ2aWNlXHJcblx0XVxyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9hcHAuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9hcHAvc3R5bGVzL2FwcC5zdHlsZXMuY3NzJyxcclxuXHRcdCcuL2FwcC9zdHlsZXMvaGVhZGVyLnN0eWxlcy5jc3MnLFxyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Q09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHRDT1JFX0RJUkVDVElWRVMsXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRQYXJhbGxheFxyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIFx0XHQgYXM6ICdIb21lJ1x0XHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvc2VydmljZXMnLFx0XHRjb21wb25lbnQ6IFNlcnZpY2VzQ29tcG9uZW50LFx0IGFzOiAnU2VydmljZXMnXHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvcmVjb21tZW5kYXRpb25zJyxcdGNvbXBvbmVudDogUmVjb21tZW5kQ29tcG9uZW50LFx0IGFzOiAnUmVjb21tZW5kYXRpb25zJ1x0fSxcclxuXHR7IHBhdGg6ICcvNDA0JyxcdFx0XHRcdGNvbXBvbmVudDogTWlzc2luZ1BhZ2VDb21wb25lbnQsIGFzOiAnTWlzc2luZy1QYWdlJyxcdHVzZUFzRGVmYXVsdDogdHJ1ZSB9XHJcbl0pXHJcblxyXG5jbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XHJcblx0ZXZlbnRGdW5jID0gKGV2ZW50KSA9PiB7XHJcblx0XHR0aGlzLmFkanVzdExvZ29TaXplKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLWxnJykpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3Jlc2l6ZSBldmVudCcpO1xyXG5cdH07XHJcblx0XHJcblx0cm91dGVMb2FkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cdH07XHJcblx0XHJcblx0cGFyYWxsYXhDb25maWcgPSB7XHJcblx0XHRwYXJhbGxheENzczogJ2hlaWdodCcsXHJcblx0XHRtaW5WYWx1ZTogODAsXHJcblx0XHRtYXhWYWx1ZTogMTc4LFxyXG5cdFx0cGFyYWxsYXhJbml0VmFsOiAxNzgsXHJcblx0XHRwYXJhbGxheFJhdGlvOiAtMixcclxuXHRcdHNjcm9sbGVySWQ6ICdyb3V0ZScsXHJcblx0XHRjYjogdGhpcy5ldmVudEZ1bmNcclxuXHR9O1xyXG5cdFxyXG5cdHJlc2l6ZVN1YnNjcmlwdGlvbiA9IGxvZ29SZXNpemUuc3Vic2NyaWJlKHRoaXMuZXZlbnRGdW5jKTtcclxuXHRyb3V0ZUxvYWRTdWJzY3JpcHRpb247XHJcblx0XHJcblx0Y3VzdG9tU2Nyb2xsO1xyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5yb3V0ZUxvYWRTdWJzY3JpcHRpb24gPSByb3V0ZUxvYWRlZC5zdWJzY3JpYmUodGhpcy5yb3V0ZUxvYWRIYW5kbGVyKTtcclxuXHR9O1xyXG5cdFxyXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuXHR9O1xyXG5cdFxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHR9O1xyXG5cdFxyXG5cdG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuXHR9XHJcblx0XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnJlc2l6ZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcblx0XHR0aGlzLnJvdXRlTG9hZFN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcblx0fTtcclxuXHRcclxuXHRwcmludFN0dWZmKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblx0XHJcblx0YWRqdXN0TG9nb1NpemUgPSAobG9nb0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28tbGcnKSkgPT4ge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGxvZ29FbGVtZW50LnN0eWxlLndpZHRoID0gKGxvZ29FbGVtZW50Lm9mZnNldEhlaWdodCAqIDIuMjMxNDI4NTcxNDI4NTcxKSArICdweCc7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpXHJcblx0XHR9LCAwKTtcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlnaHRuaW5nU2VydmljZTogTGlnaHRuaW5nU2VydmljZSkge1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9nb1Jlc2l6ZSwgcm91dGVMb2FkZWQsIEFwcENvbXBvbmVudH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
