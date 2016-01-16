System.register(['angular2/core', '../../directives/parallax/parallax.directive', '../../app.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, parallax_directive_1, app_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (parallax_directive_1_1) {
                parallax_directive_1 = parallax_directive_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                    app_component_1.logoResize.emit(null);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', HTMLElement)
                ], HomeComponent.prototype, "scrollElement", void 0);
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/components/HomeComponent/home.html',
                        styleUrls: [
                            'app/styles/home.styles.css'
                        ],
                        selector: 'home-html',
                        directives: [parallax_directive_1.Parallax]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7Z0JBa0JBQyxDQUFDQTtnQkFSQUQsZ0NBQVFBLEdBQVJBO29CQUNDRSwwQkFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFLREY7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0Esd0NBQWFBLFVBQWNBO2dCQWpCckNBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFdBQVdBLEVBQUVBLHdDQUF3Q0E7d0JBQ3JEQSxTQUFTQSxFQUFFQTs0QkFDVkEsNEJBQTRCQTt5QkFDNUJBO3dCQUNEQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFVBQVVBLEVBQUVBLENBQUNBLDZCQUFRQSxDQUFDQTtxQkFDdEJBLENBQUNBOztrQ0FXREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQWxCQSxBQWtCQ0EsSUFBQTtZQWxCRCx5Q0FrQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50L2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBcclxuXHRcdCBJbnB1dCwgXHJcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBsb2dvUmVzaXplIH0gZnJvbSAnLi4vLi4vYXBwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCdhcHAvc3R5bGVzL2hvbWUuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdHNlbGVjdG9yOiAnaG9tZS1odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbUGFyYWxsYXhdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRsb2dvUmVzaXplLmVtaXQobnVsbCk7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBzaXRlV2VsY29tZTogc3RyaW5nO1xyXG5cdHB1YmxpYyB3ZWxjb21lUGFyYWdyYXBoOiBzdHJpbmc7XHJcblx0cHVibGljIGJhbm5lckltYWdlOiBzdHJpbmc7XHJcblx0QElucHV0KCkgc2Nyb2xsRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
