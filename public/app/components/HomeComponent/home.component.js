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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQ29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkE4QkNBLHVCQUFZQSxPQUFtQkE7b0JBVnhCQyxnQkFBV0EsR0FBV0EsOENBQThDQSxDQUFDQTtvQkFDckVBLGdCQUFXQSxHQUNqQkEsaWlEQUkwb0JBLENBQUNBO29CQUNyb0JBLGdCQUFXQSxHQUFXQSw4QkFBOEJBLENBQUNBO29CQUkzREEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsT0FBT0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7Z0JBQzFDQSxDQUFDQTtnQkF0QkRELGdDQUFRQSxHQUFSQTtvQkFDQ0UsMEJBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUV0QkEsUUFBUUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsZUFBZUEsR0FBR0EsTUFBTUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsR0FBR0EsQ0FBQ0E7b0JBRS9GQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtnQkFDdEVBLENBQUNBO2dCQVlERjtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSx3Q0FBYUEsVUFBY0E7Z0JBNUJyQ0E7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsV0FBV0EsRUFBRUEsd0NBQXdDQTt3QkFDckRBLFNBQVNBLEVBQUVBOzRCQUNWQSw0QkFBNEJBO3lCQUM1QkE7d0JBQ0RBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsNkJBQVFBLENBQUNBO3FCQUN0QkEsQ0FBQ0E7O2tDQTBCREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQWpDQSxBQWlDQ0EsSUFBQTtZQWpDRCx5Q0FpQ0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50L2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBcclxuXHRcdCBJbnB1dCwgXHJcblx0XHQgT25Jbml0LFxyXG5cdFx0IEVsZW1lbnRSZWYgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGxvZ29SZXNpemUgfSBmcm9tICcuLi8uLi9hcHAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvSG9tZUNvbXBvbmVudC9ob21lLmh0bWwnLFxyXG5cdHN0eWxlVXJsczogW1xyXG5cdFx0J2FwcC9zdHlsZXMvaG9tZS5zdHlsZXMuY3NzJ1xyXG5cdF0sXHJcblx0c2VsZWN0b3I6ICdob21lLWh0bWwnLFxyXG5cdGRpcmVjdGl2ZXM6IFtQYXJhbGxheF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGxvZ29SZXNpemUuZW1pdChudWxsKTtcclxuXHRcdFxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYmFubmVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgdGhpcy5iYW5uZXJJbWFnZSArICcpJztcclxuXHRcdFxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWUtdGV4dCcpLmlubmVySFRNTCA9IHRoaXMud2VsY29tZVRleHQ7XHJcblx0fVxyXG5cdFxyXG5cdGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRcclxuXHRwdWJsaWMgc2l0ZVdlbGNvbWU6IHN0cmluZyA9ICdXZWxjb21lIHRvIHRoZSB3ZWJzaXRlIGZvciBTdGFsbGlvbiBTZWN1cml0eSc7XHJcblx0cHVibGljIHdlbGNvbWVUZXh0OiBzdHJpbmcgPSBcclxuXHRcdGBCYWNvbiBpcHN1bSBkb2xvciBhbWV0IHQtYm9uZSBydW1wIHByb3NjaXV0dG8gbGViZXJrYXMuIEhhbSBob2NrIGtpZWxiYXNhIGFuZG91aWxsZSB0dXJrZXkgZHJ1bXN0aWNrIGZyYW5rZnVydGVyIHNoYW5rLiBIYW0gaG9jayB0cmktdGlwIHRhaWwgc2hvdWxkZXIgbWVhdGxvYWYsIHBpZyBiYWxsIHRpcCB0dXJrZXkgYnJlc2FvbGEgc2hhbmtsZSBiZWVmIGtpZWxiYXNhIHBhc3RyYW1pLiBEcnVtc3RpY2sgY29ybmVkIGJlZWYgZmxhbmsgc3BhcmUgcmlicyBqb3dsIHNob3J0IHJpYnMgcHJvc2NpdXR0byB0dXJkdWNrZW4gcG9yayBsb2luIHRvbmd1ZSBjb3cuIE1lYXRsb2FmIHNhbGFtaSBjdXBpbSBib3VkaW4sIGNodWNrIHNob3J0IGxvaW4gdC1ib25lIGRydW1zdGljay48YnI+PGJyPlxyXG5cdFx0XHJcblx0XHRQb3JrIGJlbGx5IGpvd2wgc2lybG9pbiBwb3JrLiBQb3JjaGV0dGEgc2hvcnQgcmlicyBjaGlja2VuIHQtYm9uZSwgYW5kb3VpbGxlIGZhdGJhY2sgYmlsdG9uZyBsZWJlcmthcyBraWVsYmFzYSBzaXJsb2luIGNodWNrIGJhY29uLiBQcm9zY2l1dHRvIG1lYXRiYWxsIHNpcmxvaW4gY2hpY2tlbiB0dXJrZXkgc2hvdWxkZXIgZG9uZXIgZnJhbmtmdXJ0ZXIgc2FsYW1pIHRhaWwgdGVuZGVybG9pbiBwb3JrIGJvdWRpbiB2ZW5pc29uIGtpZWxiYXNhLiBUYWlsIHNob3J0IHJpYnMgYnJlc2FvbGEgcG9yayBiZWxseSBiZWVmLiBKb3dsIHBhc3RyYW1pIGJyaXNrZXQga2V2aW4gYmFsbCB0aXAsIGJyZXNhb2xhIG1lYXRsb2FmIHBvcmsuIFR1cmR1Y2tlbiBmYXRiYWNrIHBvcmsgbG9pbiBzYXVzYWdlIGZyYW5rZnVydGVyIGJvdWRpbiBqZXJreSBzYWxhbWkgcGlnIHZlbmlzb24gZHJ1bXN0aWNrIGdyb3VuZCByb3VuZCBiZWVmIHJpYnMgc2hvcnQgbG9pbiB0ZW5kZXJsb2luLjxicj48YnI+XHJcblx0XHRcclxuXHRcdENvdyBzYWxhbWkgam93bCBwcm9zY2l1dHRvIGplcmt5IGFsY2F0cmEgc2lybG9pbiBtZWF0YmFsbCB0cmktdGlwIHQtYm9uZSByaWJleWUgc2hvdWxkZXIgc3dpbmUuIFZlbmlzb24gY29ybmVkIGJlZWYgdHVyZHVja2VuIHBvcmsgdG9uZ3VlIGJvdWRpbiBjb3cgaGFtIGhvY2sgcG9yayBsb2luIHRyaS10aXAgbGFuZGphZWdlciBwaWNhbmhhIHBhbmNldHRhIG1lYXRsb2FmLiBUZW5kZXJsb2luIHByb3NjaXV0dG8gcmliZXllIGhhbSBob2NrLiBHcm91bmQgcm91bmQgZHJ1bXN0aWNrIHRvbmd1ZSBwaWcgcG9yayBsb2luIGNvdyB0LWJvbmUgYmVlZiBiaWx0b25nIHR1cmR1Y2tlbi4gRmF0YmFjayBzdHJpcCBzdGVhayBwcm9zY2l1dHRvIHNob3J0IGxvaW4gYmVlZiBwYW5jZXR0YSBhbGNhdHJhIHNhdXNhZ2UgZHJ1bXN0aWNrIHBvcmsgYmVsbHkgdG9uZ3VlLiBTaXJsb2luIGZyYW5rZnVydGVyIGdyb3VuZCByb3VuZCByaWJleWUgaGFtYnVyZ2VyLCB0ZW5kZXJsb2luIHBvcmsgYmVsbHkgc2hhbmsgdC1ib25lIHByb3NjaXV0dG8gc3RyaXAgc3RlYWsgc2hhbmtsZSBjaGlja2VuLiBCcmlza2V0IGRydW1zdGljayBzaG91bGRlciBmYXRiYWNrIGhhbSBoYW1idXJnZXIgcGljYW5oYSBsZWJlcmthcyBraWVsYmFzYSBwcm9zY2l1dHRvLjxicj5gO1xyXG5cdHB1YmxpYyBiYW5uZXJJbWFnZTogc3RyaW5nID0gJ2FwcC9hc3NldHMvcnVubmluZy1ob3JzZS5qcGcnO1xyXG5cdEBJbnB1dCgpIHNjcm9sbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMuaG9zdEVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
