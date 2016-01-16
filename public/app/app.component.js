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
            },
            function (slimscroll_1_1) {
                slimscroll_1 = slimscroll_1_1;
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
                        // debugger;
                        var routeElem = document.getElementsByClassName('route')[0];
                        if (routeElem.scrollHeight > routeElem.offsetHeight) {
                            var scrollbarCustomizations = {
                                scrollBarClass: 'scrollbar',
                                scrollBarContainerClass: 'scrollbar-container',
                                scrollBarMinHeight: 30,
                                wrapperClass: 'wrapper route-wrapper centered-container',
                                wrapperId: 'route'
                            };
                            var elem;
                            // elem.
                            // console.log('slimscroll should initialize...')
                            _this.customScroll = new slimscroll_1.slimScroll(document.getElementsByClassName('route')[0], scrollbarCustomizations);
                            console.log(routeElem.firstElementChild.setAttribute('id', 'route'));
                            // console.log('customScroll', this.customScroll);
                            window.addEventListener('resize', function () {
                                _this.customScroll.resetValues();
                            }, false);
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0IiwiQXBwQ29tcG9uZW50Lm5nQWZ0ZXJWaWV3Q2hlY2tlZCIsIkFwcENvbXBvbmVudC5uZ09uRGVzdHJveSIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQXFCTSxVQUFVLEVBQ2IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQURSLFVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsRUFDbEMsV0FBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1lBRXBDO2dCQTJGQ0Esc0JBQW9CQSxnQkFBa0NBO29CQTNGdkRDLGlCQTZGQ0E7b0JBRm9CQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtvQkEvRHREQSxjQUFTQSxHQUFHQSxVQUFDQSxLQUFLQTt3QkFDakJBLEtBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4REEsK0JBQStCQTtvQkFDaENBLENBQUNBLENBQUNBO29CQUVGQSxxQkFBZ0JBLEdBQUdBLFVBQUNBLEtBQUtBO3dCQUN4QkEsWUFBWUE7d0JBQ1pBLElBQUlBLFNBQVNBLEdBQUdBLFFBQVFBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQzVEQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxZQUFZQSxHQUFHQSxTQUFTQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDckRBLElBQUlBLHVCQUF1QkEsR0FB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REEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBTUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUtBLEVBQUVBLEVBQUVBLE1BQU1BLEVBQUtBO3dCQUM3REEsRUFBRUEsSUFBSUEsRUFBRUEsV0FBV0EsRUFBR0EsU0FBU0EsRUFBRUEsc0NBQWlCQSxFQUFHQSxFQUFFQSxFQUFFQSxVQUFVQSxFQUFJQTt3QkFDdkVBLEVBQUVBLElBQUlBLEVBQUVBLGtCQUFrQkEsRUFBRUEsU0FBU0EsRUFBRUEsd0NBQWtCQSxFQUFHQSxFQUFFQSxFQUFFQSxpQkFBaUJBLEVBQUVBO3dCQUNuRkEsRUFBRUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBS0EsU0FBU0EsRUFBRUEsd0NBQW9CQSxFQUFFQSxFQUFFQSxFQUFFQSxjQUFjQSxFQUFFQSxZQUFZQSxFQUFFQSxJQUFJQSxFQUFFQTtxQkFDNUZBLENBQUNBOztpQ0FvRURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0E3RkEsQUE2RkNBLElBQUE7WUFFTyxtQ0FBVTtZQUFFLHFDQUFXO1lBQUUsdUNBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFxyXG5cdFx0IFZpZXcsXHJcblx0XHQgT25Jbml0LFxyXG5cdFx0IEFmdGVyQ29udGVudEluaXQsXHJcblx0XHQgQWZ0ZXJWaWV3SW5pdCxcclxuXHRcdCBBZnRlclZpZXdDaGVja2VkLFxyXG5cdFx0IE9uRGVzdHJveSxcclxuXHRcdCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQ09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHQgQ09SRV9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVDb25maWcsXHJcblx0XHQgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHQgUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlcnZpY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL1NlcnZpY2VzQ29tcG9uZW50L3NlcnZpY2VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlY29tbWVuZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9SZWNvbW1lbmRDb21wb25lbnQvcmVjb21tZW5kLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1pc3NpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL01pc3NpbmdQYWdlQ29tcG9uZW50L21pc3NpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlnaHRuaW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvTGlnaHRuaW5nU2VydmljZS9saWdodG5pbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAnLi9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IHNsaW1TY3JvbGwgfSBmcm9tICcuL3NsaW1zY3JvbGwnO1xyXG5cclxuY29uc3QgbG9nb1Jlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKSxcclxuXHQgIHJvdXRlTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdhcHAnLFxyXG5cdHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcblx0XHRMaWdodG5pbmdTZXJ2aWNlXHJcblx0XVxyXG59KVxyXG5AVmlldyh7XHJcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9hcHAuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnLi9hcHAvc3R5bGVzL2FwcC5zdHlsZXMuY3NzJyxcclxuXHRcdCcuL2FwcC9zdHlsZXMvaGVhZGVyLnN0eWxlcy5jc3MnLFxyXG5cdF0sXHJcblx0ZGlyZWN0aXZlczogW1xyXG5cdFx0Q09NTU9OX0RJUkVDVElWRVMsXHJcblx0XHRDT1JFX0RJUkVDVElWRVMsXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcblx0XHRQYXJhbGxheFxyXG5cdF1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuXHR7IHBhdGg6ICcvJywgXHRcdFx0XHRjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIFx0XHQgYXM6ICdIb21lJ1x0XHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvc2VydmljZXMnLFx0XHRjb21wb25lbnQ6IFNlcnZpY2VzQ29tcG9uZW50LFx0IGFzOiAnU2VydmljZXMnXHRcdFx0fSxcclxuXHR7IHBhdGg6ICcvcmVjb21tZW5kYXRpb25zJyxcdGNvbXBvbmVudDogUmVjb21tZW5kQ29tcG9uZW50LFx0IGFzOiAnUmVjb21tZW5kYXRpb25zJ1x0fSxcclxuXHR7IHBhdGg6ICcvNDA0JyxcdFx0XHRcdGNvbXBvbmVudDogTWlzc2luZ1BhZ2VDb21wb25lbnQsIGFzOiAnTWlzc2luZy1QYWdlJyxcdHVzZUFzRGVmYXVsdDogdHJ1ZSB9XHJcbl0pXHJcblxyXG5jbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XHJcblx0ZXZlbnRGdW5jID0gKGV2ZW50KSA9PiB7XHJcblx0XHR0aGlzLmFkanVzdExvZ29TaXplKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLWxnJykpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3Jlc2l6ZSBldmVudCcpO1xyXG5cdH07XHJcblx0XHJcblx0cm91dGVMb2FkSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG5cdFx0Ly8gZGVidWdnZXI7XHJcblx0XHRsZXQgcm91dGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncm91dGUnKVswXTtcclxuXHRcdGlmIChyb3V0ZUVsZW0uc2Nyb2xsSGVpZ2h0ID4gcm91dGVFbGVtLm9mZnNldEhlaWdodCkge1xyXG5cdFx0XHRsZXQgc2Nyb2xsYmFyQ3VzdG9taXphdGlvbnMgPSB7XHJcblx0XHRcdFx0c2Nyb2xsQmFyQ2xhc3M6ICdzY3JvbGxiYXInLFxyXG5cdFx0XHRcdHNjcm9sbEJhckNvbnRhaW5lckNsYXNzOiAnc2Nyb2xsYmFyLWNvbnRhaW5lcicsXHJcblx0XHRcdFx0c2Nyb2xsQmFyTWluSGVpZ2h0OiAzMCxcclxuXHRcdFx0XHR3cmFwcGVyQ2xhc3M6ICd3cmFwcGVyIHJvdXRlLXdyYXBwZXIgY2VudGVyZWQtY29udGFpbmVyJyxcclxuXHRcdFx0XHR3cmFwcGVySWQ6ICdyb3V0ZSdcclxuXHRcdFx0fTtcclxuXHRcdFx0dmFyIGVsZW06IEF0dHI7XHJcblx0XHRcdC8vIGVsZW0uXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdzbGltc2Nyb2xsIHNob3VsZCBpbml0aWFsaXplLi4uJylcclxuXHRcdFx0dGhpcy5jdXN0b21TY3JvbGwgPSBuZXcgc2xpbVNjcm9sbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyb3V0ZScpWzBdLCBzY3JvbGxiYXJDdXN0b21pemF0aW9ucyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJvdXRlRWxlbS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdXRlJykpXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdjdXN0b21TY3JvbGwnLCB0aGlzLmN1c3RvbVNjcm9sbCk7XHJcblx0XHRcdFxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY3VzdG9tU2Nyb2xsLnJlc2V0VmFsdWVzKClcclxuXHRcdFx0fSwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0XHJcblx0cmVzaXplU3Vic2NyaXB0aW9uID0gbG9nb1Jlc2l6ZS5zdWJzY3JpYmUodGhpcy5ldmVudEZ1bmMpO1xyXG5cdHJvdXRlTG9hZFN1YnNjcmlwdGlvbjtcclxuXHRcclxuXHRjdXN0b21TY3JvbGw7XHJcblx0XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnJvdXRlTG9hZFN1YnNjcmlwdGlvbiA9IHJvdXRlTG9hZGVkLnN1YnNjcmliZSh0aGlzLnJvdXRlTG9hZEhhbmRsZXIpO1xyXG5cdH07XHJcblx0XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdH07XHJcblx0XHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdH07XHJcblx0XHJcblx0bmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG5cdH1cclxuXHRcclxuXHRuZ09uRGVzdHJveSgpIHtcclxuXHRcdHRoaXMucmVzaXplU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuXHRcdHRoaXMucm91dGVMb2FkU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcclxuXHR9O1xyXG5cdFxyXG5cdHByaW50U3R1ZmYoZGF0YSkge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0fTtcclxuXHRcclxuXHRhZGp1c3RMb2dvU2l6ZSA9IChsb2dvRWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nby1sZycpKSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0bG9nb0VsZW1lbnQuc3R5bGUud2lkdGggPSAobG9nb0VsZW1lbnQub2Zmc2V0SGVpZ2h0ICogMi4yMzE0Mjg1NzE0Mjg1NzEpICsgJ3B4JztcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcylcclxuXHRcdH0sIDApO1xyXG5cdH07XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsaWdodG5pbmdTZXJ2aWNlOiBMaWdodG5pbmdTZXJ2aWNlKSB7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IHtsb2dvUmVzaXplLCByb3V0ZUxvYWRlZCwgQXBwQ29tcG9uZW50fTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
