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
                    this.resizeSubscription = logoResize.subscribe(function (event) {
                        _this.adjustLogoSize(document.getElementById('logo-lg'));
                        // console.log('resize event');
                    });
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
                AppComponent.prototype.adjustLogoSize = function (logoElement) {
                    if (logoElement === void 0) { logoElement = document.getElementById('logo-lg'); }
                    setTimeout(function () {
                        logoElement.style.width = (logoElement.offsetHeight * 2.231428571428571) + 'px';
                    }, 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5uZ09uRGVzdHJveSIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIiwiQXBwQ29tcG9uZW50LmFkanVzdExvZ29TaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQWlCTSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQVYsVUFBVSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1lBRXRDO2dCQWtEQ0Esc0JBQW9CQSxnQkFBa0NBO29CQWxEdkRDLGlCQW9EQ0E7b0JBRm9CQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtvQkF0QnREQSx1QkFBa0JBLEdBQUdBLFVBQVVBLENBQUNBLFNBQVNBLENBQUNBLFVBQUNBLEtBQUtBO3dCQUMvQ0EsS0FBSUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7d0JBQ3ZEQSwrQkFBK0JBO29CQUNoQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBb0JIQSxDQUFDQTtnQkFsQkRELCtCQUFRQSxHQUFSQTtnQkFDQUUsQ0FBQ0E7O2dCQUVERixrQ0FBV0EsR0FBWEE7b0JBQ0NHLElBQUlBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ25DQSxDQUFDQTs7Z0JBRURILGlDQUFVQSxHQUFWQSxVQUFXQSxJQUFJQTtvQkFDZEksT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ25CQSxDQUFDQTs7Z0JBRURKLHFDQUFjQSxHQUFkQSxVQUFlQSxXQUE2REE7b0JBQTdESywyQkFBNkRBLEdBQTdEQSxjQUEyQkEsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7b0JBQzNFQSxVQUFVQSxDQUFDQTt3QkFDVkEsV0FBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsR0FBR0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDakZBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQTs7O2dCQWhERkw7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsS0FBS0E7d0JBQ2ZBLFNBQVNBLEVBQUVBOzRCQUNKQSx5QkFBZ0JBOzRCQUN0QkEsb0NBQWdCQTt5QkFDaEJBO3FCQUNEQSxDQUFDQTtvQkFDREEsV0FBSUEsQ0FBQ0E7d0JBQ0xBLFdBQVdBLEVBQUVBLGdCQUFnQkE7d0JBQzdCQSxTQUFTQSxFQUFFQTs0QkFDVkEsNkJBQTZCQTs0QkFDN0JBLGdDQUFnQ0E7eUJBQ2hDQTt3QkFDREEsVUFBVUEsRUFBRUE7NEJBQ1hBLDBCQUFpQkE7NEJBQ2pCQSx3QkFBZUE7NEJBQ1RBLDBCQUFpQkE7NEJBQ3ZCQSw2QkFBUUE7eUJBQ1JBO3FCQUNEQSxDQUFDQTtvQkFDREEsb0JBQVdBLENBQUNBO3dCQUNaQSxFQUFFQSxJQUFJQSxFQUFFQSxHQUFHQSxFQUFNQSxTQUFTQSxFQUFFQSw4QkFBYUEsRUFBS0EsRUFBRUEsRUFBRUEsTUFBTUEsRUFBS0E7d0JBQzdEQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFHQSxTQUFTQSxFQUFFQSxzQ0FBaUJBLEVBQUdBLEVBQUVBLEVBQUVBLFVBQVVBLEVBQUlBO3dCQUN2RUEsRUFBRUEsSUFBSUEsRUFBRUEsa0JBQWtCQSxFQUFFQSxTQUFTQSxFQUFFQSx3Q0FBa0JBLEVBQUdBLEVBQUVBLEVBQUVBLGlCQUFpQkEsRUFBRUE7d0JBQ25GQSxFQUFFQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFLQSxTQUFTQSxFQUFFQSx3Q0FBb0JBLEVBQUVBLEVBQUVBLEVBQUVBLGNBQWNBLEVBQUVBLFlBQVlBLEVBQUVBLElBQUlBLEVBQUVBO3FCQUM1RkEsQ0FBQ0E7O2lDQTJCREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQXBEQSxBQW9EQ0EsSUFBQTtZQUVPLG1DQUFVO1lBQUUsdUNBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFxyXG5cdFx0IFZpZXcsXHJcblx0XHQgT25Jbml0LFxyXG5cdFx0IE9uRGVzdHJveSxcclxuXHRcdCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQ09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHQgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVDb25maWcsXHJcblx0XHQgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHQgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlcnZpY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL1NlcnZpY2VzQ29tcG9uZW50L3NlcnZpY2VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlY29tbWVuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9SZWNvbW1lbmRDb21wb25lbnQvcmVjb21tZW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1pc3NpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL01pc3NpbmdQYWdlQ29tcG9uZW50L21pc3NpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRuaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvTGlnaHRuaW5nU2VydmljZS9saWdodG5pbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZSc7XHJcblxyXG5jb25zdCBsb2dvUmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnLFxyXG5cdHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcblx0XHRMaWdodG5pbmdTZXJ2aWNlXHJcblx0XVxyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9hcHAuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9hcHAvc3R5bGVzL2FwcC5zdHlsZXMuY3NzJyxcclxuXHRcdCcuL2FwcC9zdHlsZXMvaGVhZGVyLnN0eWxlcy5jc3MnLFxyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Q09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHRDT1JFX0RJUkVDVElWRVMsXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRQYXJhbGxheFxyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIFx0XHQgYXM6ICdIb21lJ1x0XHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvc2VydmljZXMnLFx0XHRjb21wb25lbnQ6IFNlcnZpY2VzQ29tcG9uZW50LFx0IGFzOiAnU2VydmljZXMnXHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvcmVjb21tZW5kYXRpb25zJyxcdGNvbXBvbmVudDogUmVjb21tZW5kQ29tcG9uZW50LFx0IGFzOiAnUmVjb21tZW5kYXRpb25zJ1x0fSxcclxuXHR7IHBhdGg6ICcvNDA0JyxcdFx0XHRcdGNvbXBvbmVudDogTWlzc2luZ1BhZ2VDb21wb25lbnQsIGFzOiAnTWlzc2luZy1QYWdlJyxcdHVzZUFzRGVmYXVsdDogdHJ1ZSB9XHJcbl0pXHJcblxyXG5jbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0cmVzaXplU3Vic2NyaXB0aW9uID0gbG9nb1Jlc2l6ZS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XHJcblx0XHR0aGlzLmFkanVzdExvZ29TaXplKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLWxnJykpXHJcblx0XHQvLyBjb25zb2xlLmxvZygncmVzaXplIGV2ZW50Jyk7XHJcblx0fSk7IFxyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH07XHJcblx0XHJcblx0bmdPbkRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnJlc2l6ZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XHJcblx0fTtcclxuXHRcclxuXHRwcmludFN0dWZmKGRhdGEpIHtcclxuXHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdH07XHJcblx0XHJcblx0YWRqdXN0TG9nb1NpemUobG9nb0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ28tbGcnKSkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGxvZ29FbGVtZW50LnN0eWxlLndpZHRoID0gKGxvZ29FbGVtZW50Lm9mZnNldEhlaWdodCAqIDIuMjMxNDI4NTcxNDI4NTcxKSArICdweCc7XHJcblx0XHR9LCAwKTtcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlnaHRuaW5nU2VydmljZTogTGlnaHRuaW5nU2VydmljZSkge1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCB7bG9nb1Jlc2l6ZSwgQXBwQ29tcG9uZW50fTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
