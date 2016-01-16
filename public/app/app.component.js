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
                    this.lightningService = lightningService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var resizeSubscription = logoResize.subscribe(function (event) {
                        _this.adjustLogoSize(document.getElementById('logo-lg'));
                        // console.log('resize event');
                    });
                };
                AppComponent.prototype.printStuff = function (data) {
                    console.log(data);
                };
                ;
                AppComponent.prototype.adjustLogoSize = function (logoElement) {
                    if (logoElement === void 0) { logoElement = document.getElementById('logo-lg'); }
                    logoElement.style.width = (logoElement.offsetHeight * 2.231428571428571) + 'px';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIiwiQXBwQ29tcG9uZW50LmFkanVzdExvZ29TaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQWdCTSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQVYsVUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1lBRXRDO2dCQTJDQ0Esc0JBQW9CQSxnQkFBa0NBO29CQUFsQ0MscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFrQkE7Z0JBQ3REQSxDQUFDQTtnQkFoQkRELCtCQUFRQSxHQUFSQTtvQkFBQUUsaUJBS0NBO29CQUpBQSxJQUFJQSxrQkFBa0JBLEdBQUdBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLEtBQUtBO3dCQUNuREEsS0FBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7d0JBQ3ZEQSwrQkFBK0JBO29CQUNoQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLENBQUNBO2dCQUVERixpQ0FBVUEsR0FBVkEsVUFBV0EsSUFBSUE7b0JBQ2RHLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNuQkEsQ0FBQ0E7O2dCQUVESCxxQ0FBY0EsR0FBZEEsVUFBZUEsV0FBNkRBO29CQUE3REksMkJBQTZEQSxHQUE3REEsY0FBMkJBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBO29CQUMzRUEsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsR0FBR0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDakZBLENBQUNBOzs7Z0JBekNGSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsU0FBU0EsRUFBRUE7NEJBQ0pBLHlCQUFnQkE7NEJBQ3RCQSxvQ0FBZ0JBO3lCQUNoQkE7cUJBQ0RBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDTEEsV0FBV0EsRUFBRUEsZ0JBQWdCQTt3QkFDN0JBLFNBQVNBLEVBQUVBOzRCQUNWQSw2QkFBNkJBOzRCQUM3QkEsZ0NBQWdDQTt5QkFDaENBO3dCQUNEQSxVQUFVQSxFQUFFQTs0QkFDWEEsMEJBQWlCQTs0QkFDakJBLHdCQUFlQTs0QkFDVEEsMEJBQWlCQTs0QkFDdkJBLDZCQUFRQTt5QkFDUkE7cUJBQ0RBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1pBLEVBQUVBLElBQUlBLEVBQUVBLEdBQUdBLEVBQU1BLFNBQVNBLEVBQUVBLDhCQUFhQSxFQUFLQSxFQUFFQSxFQUFFQSxNQUFNQSxFQUFLQTt3QkFDN0RBLEVBQUVBLElBQUlBLEVBQUVBLFdBQVdBLEVBQUdBLFNBQVNBLEVBQUVBLHNDQUFpQkEsRUFBR0EsRUFBRUEsRUFBRUEsVUFBVUEsRUFBSUE7d0JBQ3ZFQSxFQUFFQSxJQUFJQSxFQUFFQSxrQkFBa0JBLEVBQUVBLFNBQVNBLEVBQUVBLHdDQUFrQkEsRUFBR0EsRUFBRUEsRUFBRUEsaUJBQWlCQSxFQUFFQTt3QkFDbkZBLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUtBLFNBQVNBLEVBQUVBLHdDQUFvQkEsRUFBRUEsRUFBRUEsRUFBRUEsY0FBY0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7cUJBQzVGQSxDQUFDQTs7aUNBb0JEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBN0NBLEFBNkNDQSxJQUFBO1lBRU8sbUNBQVU7WUFBRSx1Q0FBWSIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgXHJcblx0XHQgVmlldyxcclxuXHRcdCBPbkluaXQsXHJcblx0XHQgRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxyXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9TZXJ2aWNlc0NvbXBvbmVudC9zZXJ2aWNlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvUmVjb21tZW5kQ29tcG9uZW50L3JlY29tbWVuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNaXNzaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9NaXNzaW5nUGFnZUNvbXBvbmVudC9taXNzaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0bmluZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0xpZ2h0bmluZ1NlcnZpY2UvbGlnaHRuaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJy4vZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgbG9nb1Jlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwJyxcclxuXHRwcm92aWRlcnM6IFtcclxuICAgICAgICBST1VURVJfUFJPVklERVJTLFxyXG5cdFx0TGlnaHRuaW5nU2VydmljZVxyXG5cdF1cclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnLi9hcHAvYXBwLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0Jy4vYXBwL3N0eWxlcy9hcHAuc3R5bGVzLmNzcycsXHJcblx0XHQnLi9hcHAvc3R5bGVzL2hlYWRlci5zdHlsZXMuY3NzJyxcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0Q09SRV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0UGFyYWxsYXhcclxuXHRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0eyBwYXRoOiAnLycsIFx0XHRcdFx0Y29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBcdFx0IGFzOiAnSG9tZSdcdFx0XHRcdH0sXHJcblx0eyBwYXRoOiAnL3NlcnZpY2VzJyxcdFx0Y29tcG9uZW50OiBTZXJ2aWNlc0NvbXBvbmVudCxcdCBhczogJ1NlcnZpY2VzJ1x0XHRcdH0sXHJcblx0eyBwYXRoOiAnL3JlY29tbWVuZGF0aW9ucycsXHRjb21wb25lbnQ6IFJlY29tbWVuZENvbXBvbmVudCxcdCBhczogJ1JlY29tbWVuZGF0aW9ucydcdH0sXHJcblx0eyBwYXRoOiAnLzQwNCcsXHRcdFx0XHRjb21wb25lbnQ6IE1pc3NpbmdQYWdlQ29tcG9uZW50LCBhczogJ01pc3NpbmctUGFnZScsXHR1c2VBc0RlZmF1bHQ6IHRydWUgfVxyXG5dKVxyXG5cclxuY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGxldCByZXNpemVTdWJzY3JpcHRpb24gPSBsb2dvUmVzaXplLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcclxuXHRcdFx0dGhpcy5hZGp1c3RMb2dvU2l6ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nby1sZycpKVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygncmVzaXplIGV2ZW50Jyk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0cHJpbnRTdHVmZihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHR9O1xyXG5cdFxyXG5cdGFkanVzdExvZ29TaXplKGxvZ29FbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLWxnJykpIHtcclxuXHRcdGxvZ29FbGVtZW50LnN0eWxlLndpZHRoID0gKGxvZ29FbGVtZW50Lm9mZnNldEhlaWdodCAqIDIuMjMxNDI4NTcxNDI4NTcxKSArICdweCc7XHJcblx0fTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxpZ2h0bmluZ1NlcnZpY2U6IExpZ2h0bmluZ1NlcnZpY2UpIHtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQge2xvZ29SZXNpemUsIEFwcENvbXBvbmVudH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
