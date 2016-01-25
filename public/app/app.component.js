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
                        // debugger;
                        // let routeElem = document.getElementsByClassName('route')[0];
                        // if (routeElem.scrollHeight > routeElem.offsetHeight) {
                        // 	let scrollbarCustomizations = {
                        // 		scrollBarClass: 'scrollbar',
                        // 		scrollBarContainerClass: 'scrollbar-container',
                        // 		scrollBarMinHeight: 30,
                        // 		wrapperClass: 'wrapper route-wrapper centered-container',
                        // 		wrapperId: 'route'
                        // 	};
                        // 	var elem: Attr;
                        // 	// elem.
                        // 	// console.log('slimscroll should initialize...')
                        // 	this.customScroll = new slimScroll(document.getElementsByClassName('route')[0], scrollbarCustomizations);
                        // 	console.log(routeElem.firstElementChild.setAttribute('id', 'route'))
                        // 	// console.log('customScroll', this.customScroll);
                        // 	window.addEventListener('resize', () => {
                        // 		this.customScroll.resetValues()
                        // 	}, false);
                        // }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFwcENvbXBvbmVudCIsIkFwcENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkFwcENvbXBvbmVudC5uZ09uSW5pdCIsIkFwcENvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiLCJBcHBDb21wb25lbnQubmdBZnRlclZpZXdJbml0IiwiQXBwQ29tcG9uZW50Lm5nQWZ0ZXJWaWV3Q2hlY2tlZCIsIkFwcENvbXBvbmVudC5uZ09uRGVzdHJveSIsIkFwcENvbXBvbmVudC5wcmludFN0dWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQXFCTSxVQUFVLEVBQ2IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQURSLFVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsRUFDbEMsV0FBVyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1lBRXBDO2dCQXFHQ0Esc0JBQW9CQSxnQkFBa0NBO29CQXJHdkRDLGlCQXVHQ0E7b0JBRm9CQSxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQWtCQTtvQkF6RXREQSxjQUFTQSxHQUFHQSxVQUFDQSxLQUFLQTt3QkFDakJBLEtBQUlBLENBQUNBLGNBQWNBLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO3dCQUN4REEsK0JBQStCQTtvQkFDaENBLENBQUNBLENBQUNBO29CQUVGQSxxQkFBZ0JBLEdBQUdBLFVBQUNBLEtBQUtBO3dCQUN4QkEsWUFBWUE7d0JBQ1pBLCtEQUErREE7d0JBQy9EQSx5REFBeURBO3dCQUN6REEsbUNBQW1DQTt3QkFDbkNBLGlDQUFpQ0E7d0JBQ2pDQSxvREFBb0RBO3dCQUNwREEsNEJBQTRCQTt3QkFDNUJBLDhEQUE4REE7d0JBQzlEQSx1QkFBdUJBO3dCQUN2QkEsTUFBTUE7d0JBQ05BLG1CQUFtQkE7d0JBQ25CQSxZQUFZQTt3QkFDWkEscURBQXFEQTt3QkFDckRBLDZHQUE2R0E7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QSxFQUFFQTt3QkFDbkZBLEVBQUVBLElBQUlBLEVBQUVBLE1BQU1BLEVBQUtBLFNBQVNBLEVBQUVBLHdDQUFvQkEsRUFBRUEsRUFBRUEsRUFBRUEsY0FBY0EsRUFBRUEsWUFBWUEsRUFBRUEsSUFBSUEsRUFBRUE7cUJBQzVGQSxDQUFDQTs7aUNBOEVEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBdkdBLEFBdUdDQSxJQUFBO1lBRU8sbUNBQVU7WUFBRSxxQ0FBVztZQUFFLHVDQUFZIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBcclxuXHRcdCBWaWV3LFxyXG5cdFx0IE9uSW5pdCxcclxuXHRcdCBBZnRlckNvbnRlbnRJbml0LFxyXG5cdFx0IEFmdGVyVmlld0luaXQsXHJcblx0XHQgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuXHRcdCBPbkRlc3Ryb3ksXHJcblx0XHQgRXZlbnRFbWl0dGVyIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0IENPUkVfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlQ29uZmlnLFxyXG5cdFx0IFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0IFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9TZXJ2aWNlc0NvbXBvbmVudC9zZXJ2aWNlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWNvbW1lbmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvUmVjb21tZW5kQ29tcG9uZW50L3JlY29tbWVuZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNaXNzaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9NaXNzaW5nUGFnZUNvbXBvbmVudC9taXNzaW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExpZ2h0bmluZ1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0xpZ2h0bmluZ1NlcnZpY2UvbGlnaHRuaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJy4vZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBzbGltU2Nyb2xsIH0gZnJvbSAnLi9zbGltc2Nyb2xsJztcclxuXHJcbmNvbnN0IGxvZ29SZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyKCksXHJcblx0ICByb3V0ZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwJyxcclxuXHRwcm92aWRlcnM6IFtcclxuICAgICAgICBST1VURVJfUFJPVklERVJTLFxyXG5cdFx0TGlnaHRuaW5nU2VydmljZVxyXG5cdF1cclxufSlcclxuQFZpZXcoe1xyXG5cdHRlbXBsYXRlVXJsOiAnLi9hcHAvYXBwLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0Jy4vYXBwL3N0eWxlcy9hcHAuc3R5bGVzLmNzcycsXHJcblx0XHQnLi9hcHAvc3R5bGVzL2hlYWRlci5zdHlsZXMuY3NzJyxcclxuXHRdLFxyXG5cdGRpcmVjdGl2ZXM6IFtcclxuXHRcdENPTU1PTl9ESVJFQ1RJVkVTLFxyXG5cdFx0Q09SRV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG5cdFx0UGFyYWxsYXhcclxuXHRdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcblx0eyBwYXRoOiAnLycsIFx0XHRcdFx0Y29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBcdFx0IGFzOiAnSG9tZSdcdFx0XHRcdH0sXHJcblx0eyBwYXRoOiAnL3NlcnZpY2VzJyxcdFx0Y29tcG9uZW50OiBTZXJ2aWNlc0NvbXBvbmVudCxcdCBhczogJ1NlcnZpY2VzJ1x0XHRcdH0sXHJcblx0eyBwYXRoOiAnL3JlY29tbWVuZGF0aW9ucycsXHRjb21wb25lbnQ6IFJlY29tbWVuZENvbXBvbmVudCxcdCBhczogJ1JlY29tbWVuZGF0aW9ucydcdH0sXHJcblx0eyBwYXRoOiAnLzQwNCcsXHRcdFx0XHRjb21wb25lbnQ6IE1pc3NpbmdQYWdlQ29tcG9uZW50LCBhczogJ01pc3NpbmctUGFnZScsXHR1c2VBc0RlZmF1bHQ6IHRydWUgfVxyXG5dKVxyXG5cclxuY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xyXG5cdGV2ZW50RnVuYyA9IChldmVudCkgPT4ge1xyXG5cdFx0dGhpcy5hZGp1c3RMb2dvU2l6ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nby1sZycpKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdyZXNpemUgZXZlbnQnKTtcclxuXHR9O1xyXG5cdFxyXG5cdHJvdXRlTG9hZEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuXHRcdC8vIGRlYnVnZ2VyO1xyXG5cdFx0Ly8gbGV0IHJvdXRlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JvdXRlJylbMF07XHJcblx0XHQvLyBpZiAocm91dGVFbGVtLnNjcm9sbEhlaWdodCA+IHJvdXRlRWxlbS5vZmZzZXRIZWlnaHQpIHtcclxuXHRcdC8vIFx0bGV0IHNjcm9sbGJhckN1c3RvbWl6YXRpb25zID0ge1xyXG5cdFx0Ly8gXHRcdHNjcm9sbEJhckNsYXNzOiAnc2Nyb2xsYmFyJyxcclxuXHRcdC8vIFx0XHRzY3JvbGxCYXJDb250YWluZXJDbGFzczogJ3Njcm9sbGJhci1jb250YWluZXInLFxyXG5cdFx0Ly8gXHRcdHNjcm9sbEJhck1pbkhlaWdodDogMzAsXHJcblx0XHQvLyBcdFx0d3JhcHBlckNsYXNzOiAnd3JhcHBlciByb3V0ZS13cmFwcGVyIGNlbnRlcmVkLWNvbnRhaW5lcicsXHJcblx0XHQvLyBcdFx0d3JhcHBlcklkOiAncm91dGUnXHJcblx0XHQvLyBcdH07XHJcblx0XHQvLyBcdHZhciBlbGVtOiBBdHRyO1xyXG5cdFx0Ly8gXHQvLyBlbGVtLlxyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZygnc2xpbXNjcm9sbCBzaG91bGQgaW5pdGlhbGl6ZS4uLicpXHJcblx0XHQvLyBcdHRoaXMuY3VzdG9tU2Nyb2xsID0gbmV3IHNsaW1TY3JvbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncm91dGUnKVswXSwgc2Nyb2xsYmFyQ3VzdG9taXphdGlvbnMpO1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhyb3V0ZUVsZW0uZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKCdpZCcsICdyb3V0ZScpKVxyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZygnY3VzdG9tU2Nyb2xsJywgdGhpcy5jdXN0b21TY3JvbGwpO1xyXG5cdFx0XHRcclxuXHRcdC8vIFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuXHRcdC8vIFx0XHR0aGlzLmN1c3RvbVNjcm9sbC5yZXNldFZhbHVlcygpXHJcblx0XHQvLyBcdH0sIGZhbHNlKTtcclxuXHRcdC8vIH1cclxuXHR9O1xyXG5cdFxyXG5cdHBhcmFsbGF4Q29uZmlnID0ge1xyXG5cdFx0cGFyYWxsYXhDc3M6ICdoZWlnaHQnLFxyXG5cdFx0bWluVmFsdWU6IDgwLFxyXG5cdFx0bWF4VmFsdWU6IDE3OCxcclxuXHRcdHBhcmFsbGF4SW5pdFZhbDogMTc4LFxyXG5cdFx0cGFyYWxsYXhSYXRpbzogLTIsXHJcblx0XHRzY3JvbGxlcklkOiAncm91dGUnLFxyXG5cdFx0Y2I6IHRoaXMuZXZlbnRGdW5jXHJcblx0fTtcclxuXHRcclxuXHRyZXNpemVTdWJzY3JpcHRpb24gPSBsb2dvUmVzaXplLnN1YnNjcmliZSh0aGlzLmV2ZW50RnVuYyk7XHJcblx0cm91dGVMb2FkU3Vic2NyaXB0aW9uO1xyXG5cdFxyXG5cdGN1c3RvbVNjcm9sbDtcclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMucm91dGVMb2FkU3Vic2NyaXB0aW9uID0gcm91dGVMb2FkZWQuc3Vic2NyaWJlKHRoaXMucm91dGVMb2FkSGFuZGxlcik7XHJcblx0fTtcclxuXHRcclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblx0fTtcclxuXHRcclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblx0fTtcclxuXHRcclxuXHRuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcblx0fVxyXG5cdFxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy5yZXNpemVTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG5cdFx0dGhpcy5yb3V0ZUxvYWRTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xyXG5cdH07XHJcblx0XHJcblx0cHJpbnRTdHVmZihkYXRhKSB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHR9O1xyXG5cdFxyXG5cdGFkanVzdExvZ29TaXplID0gKGxvZ29FbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvLWxnJykpID0+IHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRsb2dvRWxlbWVudC5zdHlsZS53aWR0aCA9IChsb2dvRWxlbWVudC5vZmZzZXRIZWlnaHQgKiAyLjIzMTQyODU3MTQyODU3MSkgKyAncHgnO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKVxyXG5cdFx0fSwgMCk7XHJcblx0fTtcclxuXHRcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxpZ2h0bmluZ1NlcnZpY2U6IExpZ2h0bmluZ1NlcnZpY2UpIHtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQge2xvZ29SZXNpemUsIHJvdXRlTG9hZGVkLCBBcHBDb21wb25lbnR9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
