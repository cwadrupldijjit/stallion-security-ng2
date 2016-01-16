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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1NlcnZpY2VzQ29tcG9uZW50L3NlcnZpY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTZXJ2aWNlc0NvbXBvbmVudCIsIlNlcnZpY2VzQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiU2VydmljZXNDb21wb25lbnQubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBQTtnQkFTQUMsQ0FBQ0E7Z0JBSEFELG9DQUFRQSxHQUFSQTtvQkFDQ0UsMEJBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBUkZGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFdBQVdBLEVBQUVBLGdEQUFnREE7d0JBQzdEQSxRQUFRQSxFQUFFQSxlQUFlQTtxQkFDekJBLENBQUNBOztzQ0FNREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQVRBLEFBU0NBLElBQUE7WUFURCxpREFTQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL1NlcnZpY2VzQ29tcG9uZW50L3NlcnZpY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcclxuXHRcdCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgbG9nb1Jlc2l6ZSB9IGZyb20gJy4uLy4uL2FwcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9TZXJ2aWNlc0NvbXBvbmVudC9zZXJ2aWNlcy5odG1sJyxcclxuXHRzZWxlY3RvcjogJ3NlcnZpY2VzLWh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0bG9nb1Jlc2l6ZS5lbWl0KG51bGwpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
