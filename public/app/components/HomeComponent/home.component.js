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
                function HomeComponent(element) {
                    this.siteWelcome = 'Welcome to the website for Stallion Security';
                    this.welcomeText = "Bacon ipsum dolor amet t-bone rump prosciutto leberkas. Ham hock kielbasa andouille turkey drumstick frankfurter shank. Ham hock tri-tip tail shoulder meatloaf, pig ball tip turkey bresaola shankle beef kielbasa pastrami. Drumstick corned beef flank spare ribs jowl short ribs prosciutto turducken pork loin tongue cow. Meatloaf salami cupim boudin, chuck short loin t-bone drumstick.<br><br>\n\t\t\n\t\tPork belly jowl sirloin pork. Porchetta short ribs chicken t-bone, andouille fatback biltong leberkas kielbasa sirloin chuck bacon. Prosciutto meatball sirloin chicken turkey shoulder doner frankfurter salami tail tenderloin pork boudin venison kielbasa. Tail short ribs bresaola pork belly beef. Jowl pastrami brisket kevin ball tip, bresaola meatloaf pork. Turducken fatback pork loin sausage frankfurter boudin jerky salami pig venison drumstick ground round beef ribs short loin tenderloin.<br><br>\n\t\t\n\t\tCow salami jowl prosciutto jerky alcatra sirloin meatball tri-tip t-bone ribeye shoulder swine. Venison corned beef turducken pork tongue boudin cow ham hock pork loin tri-tip landjaeger picanha pancetta meatloaf. Tenderloin prosciutto ribeye ham hock. Ground round drumstick tongue pig pork loin cow t-bone beef biltong turducken. Fatback strip steak prosciutto short loin beef pancetta alcatra sausage drumstick pork belly tongue. Sirloin frankfurter ground round ribeye hamburger, tenderloin pork belly shank t-bone prosciutto strip steak shankle chicken. Brisket drumstick shoulder fatback ham hamburger picanha leberkas kielbasa prosciutto.<br>";
                    this.bannerImage = 'app/assets/running-horse.jpg';
                    this.hostElement = element.nativeElement;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    app_component_1.logoResize.emit(null);
                    document.getElementById('home-banner').style.backgroundImage = 'url(' + this.bannerImage + ')';
                    document.getElementById('welcome-text').innerHTML = this.welcomeText;
                };
                HomeComponent.prototype.ngAfterContentInit = function () {
                    app_component_1.routeLoaded.emit(null);
                    debugger;
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
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQ29tcG9uZW50Lm5nT25Jbml0IiwiSG9tZUNvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQW1DQ0EsdUJBQVlBLE9BQW1CQTtvQkFWeEJDLGdCQUFXQSxHQUFXQSw4Q0FBOENBLENBQUNBO29CQUNyRUEsZ0JBQVdBLEdBQ2pCQSxpaURBSTBvQkEsQ0FBQ0E7b0JBQ3JvQkEsZ0JBQVdBLEdBQVdBLDhCQUE4QkEsQ0FBQ0E7b0JBSTNEQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQTNCREQsZ0NBQVFBLEdBQVJBO29CQUNDRSwwQkFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBRXRCQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxHQUFHQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxHQUFHQSxDQUFDQTtvQkFFL0ZBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO2dCQUN0RUEsQ0FBQ0E7Z0JBRURGLDBDQUFrQkEsR0FBbEJBO29CQUNDRywyQkFBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZCQSxRQUFRQSxDQUFDQTtnQkFDVkEsQ0FBQ0E7Z0JBWURIO29CQUFDQSxZQUFLQSxFQUFFQTs7bUJBQUNBLHdDQUFhQSxVQUFjQTtnQkFqQ3JDQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxXQUFXQSxFQUFFQSx3Q0FBd0NBO3dCQUNyREEsU0FBU0EsRUFBRUE7NEJBQ1ZBLDRCQUE0QkE7eUJBQzVCQTt3QkFDREEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3JCQSxVQUFVQSxFQUFFQSxDQUFDQSw2QkFBUUEsQ0FBQ0E7cUJBQ3RCQSxDQUFDQTs7a0NBK0JEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBdENBLEFBc0NDQSxJQUFBO1lBdENELHlDQXNDQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFxyXG5cdFx0IElucHV0LCBcclxuXHRcdCBPbkluaXQsXHJcblx0XHQgQWZ0ZXJDb250ZW50SW5pdCxcclxuXHRcdCBFbGVtZW50UmVmIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBsb2dvUmVzaXplLFxyXG5cdFx0IHJvdXRlTG9hZGVkIH0gZnJvbSAnLi4vLi4vYXBwLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5odG1sJyxcclxuXHRzdHlsZVVybHM6IFtcclxuXHRcdCdhcHAvc3R5bGVzL2hvbWUuc3R5bGVzLmNzcydcclxuXHRdLFxyXG5cdHNlbGVjdG9yOiAnaG9tZS1odG1sJyxcclxuXHRkaXJlY3RpdmVzOiBbUGFyYWxsYXhdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRsb2dvUmVzaXplLmVtaXQobnVsbCk7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWJhbm5lcicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIHRoaXMuYmFubmVySW1hZ2UgKyAnKSc7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lLXRleHQnKS5pbm5lckhUTUwgPSB0aGlzLndlbGNvbWVUZXh0O1xyXG5cdH1cclxuXHRcclxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblx0XHRyb3V0ZUxvYWRlZC5lbWl0KG51bGwpO1xyXG5cdFx0ZGVidWdnZXI7XHRcdFxyXG5cdH1cclxuXHRcclxuXHRob3N0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0cHVibGljIHNpdGVXZWxjb21lOiBzdHJpbmcgPSAnV2VsY29tZSB0byB0aGUgd2Vic2l0ZSBmb3IgU3RhbGxpb24gU2VjdXJpdHknO1xyXG5cdHB1YmxpYyB3ZWxjb21lVGV4dDogc3RyaW5nID0gXHJcblx0XHRgQmFjb24gaXBzdW0gZG9sb3IgYW1ldCB0LWJvbmUgcnVtcCBwcm9zY2l1dHRvIGxlYmVya2FzLiBIYW0gaG9jayBraWVsYmFzYSBhbmRvdWlsbGUgdHVya2V5IGRydW1zdGljayBmcmFua2Z1cnRlciBzaGFuay4gSGFtIGhvY2sgdHJpLXRpcCB0YWlsIHNob3VsZGVyIG1lYXRsb2FmLCBwaWcgYmFsbCB0aXAgdHVya2V5IGJyZXNhb2xhIHNoYW5rbGUgYmVlZiBraWVsYmFzYSBwYXN0cmFtaS4gRHJ1bXN0aWNrIGNvcm5lZCBiZWVmIGZsYW5rIHNwYXJlIHJpYnMgam93bCBzaG9ydCByaWJzIHByb3NjaXV0dG8gdHVyZHVja2VuIHBvcmsgbG9pbiB0b25ndWUgY293LiBNZWF0bG9hZiBzYWxhbWkgY3VwaW0gYm91ZGluLCBjaHVjayBzaG9ydCBsb2luIHQtYm9uZSBkcnVtc3RpY2suPGJyPjxicj5cclxuXHRcdFxyXG5cdFx0UG9yayBiZWxseSBqb3dsIHNpcmxvaW4gcG9yay4gUG9yY2hldHRhIHNob3J0IHJpYnMgY2hpY2tlbiB0LWJvbmUsIGFuZG91aWxsZSBmYXRiYWNrIGJpbHRvbmcgbGViZXJrYXMga2llbGJhc2Egc2lybG9pbiBjaHVjayBiYWNvbi4gUHJvc2NpdXR0byBtZWF0YmFsbCBzaXJsb2luIGNoaWNrZW4gdHVya2V5IHNob3VsZGVyIGRvbmVyIGZyYW5rZnVydGVyIHNhbGFtaSB0YWlsIHRlbmRlcmxvaW4gcG9yayBib3VkaW4gdmVuaXNvbiBraWVsYmFzYS4gVGFpbCBzaG9ydCByaWJzIGJyZXNhb2xhIHBvcmsgYmVsbHkgYmVlZi4gSm93bCBwYXN0cmFtaSBicmlza2V0IGtldmluIGJhbGwgdGlwLCBicmVzYW9sYSBtZWF0bG9hZiBwb3JrLiBUdXJkdWNrZW4gZmF0YmFjayBwb3JrIGxvaW4gc2F1c2FnZSBmcmFua2Z1cnRlciBib3VkaW4gamVya3kgc2FsYW1pIHBpZyB2ZW5pc29uIGRydW1zdGljayBncm91bmQgcm91bmQgYmVlZiByaWJzIHNob3J0IGxvaW4gdGVuZGVybG9pbi48YnI+PGJyPlxyXG5cdFx0XHJcblx0XHRDb3cgc2FsYW1pIGpvd2wgcHJvc2NpdXR0byBqZXJreSBhbGNhdHJhIHNpcmxvaW4gbWVhdGJhbGwgdHJpLXRpcCB0LWJvbmUgcmliZXllIHNob3VsZGVyIHN3aW5lLiBWZW5pc29uIGNvcm5lZCBiZWVmIHR1cmR1Y2tlbiBwb3JrIHRvbmd1ZSBib3VkaW4gY293IGhhbSBob2NrIHBvcmsgbG9pbiB0cmktdGlwIGxhbmRqYWVnZXIgcGljYW5oYSBwYW5jZXR0YSBtZWF0bG9hZi4gVGVuZGVybG9pbiBwcm9zY2l1dHRvIHJpYmV5ZSBoYW0gaG9jay4gR3JvdW5kIHJvdW5kIGRydW1zdGljayB0b25ndWUgcGlnIHBvcmsgbG9pbiBjb3cgdC1ib25lIGJlZWYgYmlsdG9uZyB0dXJkdWNrZW4uIEZhdGJhY2sgc3RyaXAgc3RlYWsgcHJvc2NpdXR0byBzaG9ydCBsb2luIGJlZWYgcGFuY2V0dGEgYWxjYXRyYSBzYXVzYWdlIGRydW1zdGljayBwb3JrIGJlbGx5IHRvbmd1ZS4gU2lybG9pbiBmcmFua2Z1cnRlciBncm91bmQgcm91bmQgcmliZXllIGhhbWJ1cmdlciwgdGVuZGVybG9pbiBwb3JrIGJlbGx5IHNoYW5rIHQtYm9uZSBwcm9zY2l1dHRvIHN0cmlwIHN0ZWFrIHNoYW5rbGUgY2hpY2tlbi4gQnJpc2tldCBkcnVtc3RpY2sgc2hvdWxkZXIgZmF0YmFjayBoYW0gaGFtYnVyZ2VyIHBpY2FuaGEgbGViZXJrYXMga2llbGJhc2EgcHJvc2NpdXR0by48YnI+YDtcclxuXHRwdWJsaWMgYmFubmVySW1hZ2U6IHN0cmluZyA9ICdhcHAvYXNzZXRzL3J1bm5pbmctaG9yc2UuanBnJztcclxuXHRASW5wdXQoKSBzY3JvbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
