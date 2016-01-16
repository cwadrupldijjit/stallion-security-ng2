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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5uZ09uRGVzdHJveSIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQWtCTSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQVYsVUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1lBRXRDO2dCQXFEQ0Esc0JBQW9CQSxnQkFBa0NBO29CQXJEdkRDLGlCQXVEQ0E7b0JBRm9CQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtvQkF6QnREQSxjQUFTQSxHQUFHQSxVQUFDQSxLQUFLQTt3QkFDakJBLEtBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUFBO3dCQUN2REEsK0JBQStCQTtvQkFDaENBLENBQUNBLENBQUFBO29CQUVEQSx1QkFBa0JBLEdBQUdBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO29CQWExREEsbUJBQWNBLEdBQUdBLFVBQUNBLFdBQTZEQTt3QkFBN0RBLDJCQUE2REEsR0FBN0RBLGNBQTJCQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQTt3QkFDOUVBLFVBQVVBLENBQUNBOzRCQUNWQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxXQUFXQSxDQUFDQSxZQUFZQSxHQUFHQSxpQkFBaUJBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBOzRCQUNoRkEsb0JBQW9CQTt3QkFDckJBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO29CQUNQQSxDQUFDQSxDQUFDQTtnQkFHRkEsQ0FBQ0E7Z0JBbkJERCwrQkFBUUEsR0FBUkE7Z0JBQ0FFLENBQUNBOztnQkFFREYsa0NBQVdBLEdBQVhBO29CQUNDRyxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7O2dCQUVESCxpQ0FBVUEsR0FBVkEsVUFBV0EsSUFBSUE7b0JBQ2RJLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNuQkEsQ0FBQ0E7OztnQkE1Q0ZKO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFFBQVFBLEVBQUVBLEtBQUtBO3dCQUNmQSxTQUFTQSxFQUFFQTs0QkFDSkEseUJBQWdCQTs0QkFDdEJBLG9DQUFnQkE7eUJBQ2hCQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLFdBQUlBLENBQUNBO3dCQUNMQSxXQUFXQSxFQUFFQSxnQkFBZ0JBO3dCQUM3QkEsU0FBU0EsRUFBRUE7NEJBQ1ZBLDZCQUE2QkE7NEJBQzdCQSxnQ0FBZ0NBO3lCQUNoQ0E7d0JBQ0RBLFVBQVVBLEVBQUVBOzRCQUNYQSwwQkFBaUJBOzRCQUNqQkEsd0JBQWVBOzRCQUNUQSwwQkFBaUJBOzRCQUN2QkEsNkJBQVFBO3lCQUNSQTtxQkFDREEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBTUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUtBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUtBO3dCQUM3REEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBR0EsU0FBU0EsRUFBRUEsc0NBQWlCQSxFQUFHQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFJQTt3QkFDdkVBLEVBQUVBLElBQUlBLEVBQUVBLGtCQUFrQkEsRUFBRUEsU0FBU0EsRUFBRUEsd0NBQWtCQSxFQUFHQSxFQUFFQSxFQUFFQSxpQkFBaUJBLEVBQUVBO3dCQUNuRkEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBS0EsU0FBU0EsRUFBRUEsd0NBQW9CQSxFQUFFQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFFQTtxQkFDNUZBLENBQUNBOztpQ0E4QkRBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0F2REEsQUF1RENBLElBQUE7WUFFTyxtQ0FBVTtZQUFFLHVDQUFZIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBcclxuXHRcdCBWaWV3LFxyXG5cdFx0IE9uSW5pdCxcclxuXHRcdCBPbkRlc3Ryb3ksXHJcblx0XHQgRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxyXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9TZXJ2aWNlc0NvbXBvbmVudC9zZXJ2aWNlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvUmVjb21tZW5kQ29tcG9uZW50L3JlY29tbWVuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNaXNzaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9NaXNzaW5nUGFnZUNvbXBvbmVudC9taXNzaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0bmluZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0xpZ2h0bmluZ1NlcnZpY2UvbGlnaHRuaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJy4vZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTbGltU2Nyb2xsIH0gZnJvbSAnLi9zbGltc2Nyb2xsJztcclxuXHJcbmNvbnN0IGxvZ29SZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2FwcCcsXHJcblx0cHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUk9VVEVSX1BST1ZJREVSUyxcclxuXHRcdExpZ2h0bmluZ1NlcnZpY2VcclxuXHRdXHJcbn0pXHJcbkBWaWV3KHtcclxuXHR0ZW1wbGF0ZVVybDogJy4vYXBwL2FwcC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCcuL2FwcC9zdHlsZXMvYXBwLnN0eWxlcy5jc3MnLFxyXG5cdFx0Jy4vYXBwL3N0eWxlcy9oZWFkZXIuc3R5bGVzLmNzcycsXHJcblx0XSxcclxuXHRkaXJlY3RpdmVzOiBbXHJcblx0XHRDT01NT05fRElSRUNUSVZFUyxcclxuXHRcdENPUkVfRElSRUNUSVZFUyxcclxuICAgICAgICBST1VURVJfRElSRUNUSVZFUyxcclxuXHRcdFBhcmFsbGF4XHJcblx0XVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG5cdHsgcGF0aDogJy8nLCBcdFx0XHRcdGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgXHRcdCBhczogJ0hvbWUnXHRcdFx0XHR9LFxyXG5cdHsgcGF0aDogJy9zZXJ2aWNlcycsXHRcdGNvbXBvbmVudDogU2VydmljZXNDb21wb25lbnQsXHQgYXM6ICdTZXJ2aWNlcydcdFx0XHR9LFxyXG5cdHsgcGF0aDogJy9yZWNvbW1lbmRhdGlvbnMnLFx0Y29tcG9uZW50OiBSZWNvbW1lbmRDb21wb25lbnQsXHQgYXM6ICdSZWNvbW1lbmRhdGlvbnMnXHR9LFxyXG5cdHsgcGF0aDogJy80MDQnLFx0XHRcdFx0Y29tcG9uZW50OiBNaXNzaW5nUGFnZUNvbXBvbmVudCwgYXM6ICdNaXNzaW5nLVBhZ2UnLFx0dXNlQXNEZWZhdWx0OiB0cnVlIH1cclxuXSlcclxuXHJcbmNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHRldmVudEZ1bmMgPSAoZXZlbnQpID0+IHtcclxuXHRcdHRoaXMuYWRqdXN0TG9nb1NpemUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28tbGcnKSlcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdyZXNpemUgZXZlbnQnKTtcclxuXHR9XHJcblx0XHJcblx0cmVzaXplU3Vic2NyaXB0aW9uID0gbG9nb1Jlc2l6ZS5zdWJzY3JpYmUodGhpcy5ldmVudEZ1bmMpO1xyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH07XHJcblx0XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnJlc2l6ZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcblx0fTtcclxuXHRcclxuXHRwcmludFN0dWZmKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblx0XHJcblx0YWRqdXN0TG9nb1NpemUgPSAobG9nb0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28tbGcnKSkgPT4ge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGxvZ29FbGVtZW50LnN0eWxlLndpZHRoID0gKGxvZ29FbGVtZW50Lm9mZnNldEhlaWdodCAqIDIuMjMxNDI4NTcxNDI4NTcxKSArICdweCc7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpXHJcblx0XHR9LCAwKTtcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlnaHRuaW5nU2VydmljZTogTGlnaHRuaW5nU2VydmljZSkge1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9nb1Jlc2l6ZSwgQXBwQ29tcG9uZW50fTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
