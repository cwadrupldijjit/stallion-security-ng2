System.register(['angular2/core', '../../app.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_component_1;
    var ServicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            ServicesComponent = (function () {
                function ServicesComponent() {
                }
                ServicesComponent.prototype.ngOnInit = function () {
                    app_component_1.logoResize.emit(null);
                };
                ServicesComponent.prototype.ngAfterContentInit = function () {
                    app_component_1.routeLoaded.emit(null);
                };
                ServicesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/ServicesComponent/services.html',
                        selector: 'services-html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ServicesComponent);
                return ServicesComponent;
            })();
            exports_1("ServicesComponent", ServicesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1NlcnZpY2VzQ29tcG9uZW50L3NlcnZpY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTZXJ2aWNlc0NvbXBvbmVudCIsIlNlcnZpY2VzQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiU2VydmljZXNDb21wb25lbnQubmdPbkluaXQiLCJTZXJ2aWNlc0NvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkFhQUMsQ0FBQ0E7Z0JBUEFELG9DQUFRQSxHQUFSQTtvQkFDQ0UsMEJBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBRURGLDhDQUFrQkEsR0FBbEJBO29CQUNDRywyQkFBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkFaRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsV0FBV0EsRUFBRUEsZ0RBQWdEQTt3QkFDN0RBLFFBQVFBLEVBQUVBLGVBQWVBO3FCQUN6QkEsQ0FBQ0E7O3NDQVVEQTtnQkFBREEsd0JBQUNBO1lBQURBLENBYkEsQUFhQ0EsSUFBQTtZQWJELGlEQWFDLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvU2VydmljZXNDb21wb25lbnQvc2VydmljZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxyXG5cdFx0IE9uSW5pdCxcclxuXHRcdCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IGxvZ29SZXNpemUsXHJcblx0XHQgcm91dGVMb2FkZWQgfSBmcm9tICcuLi8uLi9hcHAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvU2VydmljZXNDb21wb25lbnQvc2VydmljZXMuaHRtbCcsXHJcblx0c2VsZWN0b3I6ICdzZXJ2aWNlcy1odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZpY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGxvZ29SZXNpemUuZW1pdChudWxsKTtcclxuXHR9XHJcblx0XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0cm91dGVMb2FkZWQuZW1pdChudWxsKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
