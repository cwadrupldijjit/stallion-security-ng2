System.register(['angular2/core', '../../directives/parallax/parallax.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, parallax_directive_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (parallax_directive_1_1) {
                parallax_directive_1 = parallax_directive_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtnQkFjQUMsQ0FBQ0E7Z0JBREFEO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLHdDQUFhQSxVQUFjQTtnQkFickNBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1ZBLFdBQVdBLEVBQUVBLHdDQUF3Q0E7d0JBQ3JEQSxTQUFTQSxFQUFFQTs0QkFDVkEsNEJBQTRCQTt5QkFDNUJBO3dCQUNEQSxRQUFRQSxFQUFFQSxXQUFXQTt3QkFDckJBLFVBQVVBLEVBQUVBLENBQUNBLDZCQUFRQSxDQUFDQTtxQkFDdEJBLENBQUNBOztrQ0FPREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQWRBLEFBY0NBLElBQUE7WUFkRCx5Q0FjQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1BhcmFsbGF4fSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCdhcHAvc3R5bGVzL2hvbWUuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdHNlbGVjdG9yOiAnaG9tZS1odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbUGFyYWxsYXhdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcblx0cHVibGljIHNpdGVXZWxjb21lOiBzdHJpbmc7XHJcblx0cHVibGljIHdlbGNvbWVQYXJhZ3JhcGg6IHN0cmluZztcclxuXHRwdWJsaWMgYmFubmVySW1hZ2U6IHN0cmluZztcclxuXHRASW5wdXQoKSBzY3JvbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
