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
                    this.bannerParallaxConfig = {
                        scrollerId: 'route',
                        parallaxInitVal: -250,
                        parallaxRatio: .8
                    };
                    // bannerParallaxConfig = {
                    // 	scrollerId: 'route'
                    // };
                    this.welcomeParallaxConfig = {
                        name: 'site-welcome',
                        scrollerId: 'route',
                        parallaxRatio: 1,
                        parallaxCss: 'top',
                        parallaxInitVal: -100,
                        parallaxIf: true,
                        maxValue: 0
                    };
                    this.textParallaxConfig = {
                        name: 'site-welcome',
                        scrollerId: 'route',
                        parallaxRatio: .6,
                        parallaxCss: 'top',
                        parallaxInitVal: -70,
                        parallaxIf: true,
                        maxValue: 0
                    };
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
                    // debugger;		
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0hvbWVDb21wb25lbnQvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQ29tcG9uZW50Lm5nT25Jbml0IiwiSG9tZUNvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQW9FQ0EsdUJBQVlBLE9BQW1CQTtvQkEzQy9CQyx5QkFBb0JBLEdBQW1CQTt3QkFDdENBLFVBQVVBLEVBQUVBLE9BQU9BO3dCQUNuQkEsZUFBZUEsRUFBRUEsQ0FBQ0EsR0FBR0E7d0JBQ3JCQSxhQUFhQSxFQUFFQSxFQUFFQTtxQkFDakJBLENBQUNBO29CQUVGQSwyQkFBMkJBO29CQUMzQkEsdUJBQXVCQTtvQkFDdkJBLEtBQUtBO29CQUVMQSwwQkFBcUJBLEdBQUdBO3dCQUN2QkEsSUFBSUEsRUFBRUEsY0FBY0E7d0JBQ3BCQSxVQUFVQSxFQUFFQSxPQUFPQTt3QkFDbkJBLGFBQWFBLEVBQUVBLENBQUNBO3dCQUNoQkEsV0FBV0EsRUFBRUEsS0FBS0E7d0JBQ2xCQSxlQUFlQSxFQUFFQSxDQUFDQSxHQUFHQTt3QkFDckJBLFVBQVVBLEVBQUVBLElBQUlBO3dCQUNoQkEsUUFBUUEsRUFBRUEsQ0FBQ0E7cUJBQ1hBLENBQUNBO29CQUVGQSx1QkFBa0JBLEdBQUdBO3dCQUNwQkEsSUFBSUEsRUFBRUEsY0FBY0E7d0JBQ3BCQSxVQUFVQSxFQUFFQSxPQUFPQTt3QkFDbkJBLGFBQWFBLEVBQUVBLEVBQUVBO3dCQUNqQkEsV0FBV0EsRUFBRUEsS0FBS0E7d0JBQ2xCQSxlQUFlQSxFQUFFQSxDQUFDQSxFQUFFQTt3QkFDcEJBLFVBQVVBLEVBQUVBLElBQUlBO3dCQUNoQkEsUUFBUUEsRUFBRUEsQ0FBQ0E7cUJBQ1hBLENBQUNBO29CQUVGQSxnQkFBV0EsR0FBV0EsOENBQThDQSxDQUFDQTtvQkFDckVBLGdCQUFXQSxHQUNWQSxpaURBSTBvQkEsQ0FBQ0E7b0JBRTVvQkEsZ0JBQVdBLEdBQVdBLDhCQUE4QkEsQ0FBQ0E7b0JBTXBEQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQTVEREQsZ0NBQVFBLEdBQVJBO29CQUNDRSwwQkFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBRXRCQSxRQUFRQSxDQUFDQSxjQUFjQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxHQUFHQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxHQUFHQSxDQUFDQTtvQkFFL0ZBLFFBQVFBLENBQUNBLGNBQWNBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBO2dCQUN0RUEsQ0FBQ0E7Z0JBRURGLDBDQUFrQkEsR0FBbEJBO29CQUNDRywyQkFBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZCQSxjQUFjQTtnQkFDZkEsQ0FBQ0E7Z0JBNkNESDtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSx3Q0FBYUEsVUFBY0E7Z0JBbEVyQ0E7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsV0FBV0EsRUFBRUEsd0NBQXdDQTt3QkFDckRBLFNBQVNBLEVBQUVBOzRCQUNWQSw0QkFBNEJBO3lCQUM1QkE7d0JBQ0RBLFFBQVFBLEVBQUVBLFdBQVdBO3dCQUNyQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsNkJBQVFBLENBQUNBO3FCQUN0QkEsQ0FBQ0E7O2tDQWdFREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQXZFQSxBQXVFQ0EsSUFBQTtZQXZFRCx5Q0F1RUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50L2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBcclxuXHRcdCBJbnB1dCwgXHJcblx0XHQgT25Jbml0LFxyXG5cdFx0IEFmdGVyQ29udGVudEluaXQsXHJcblx0XHQgRWxlbWVudFJlZiB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYXJhbGxheCxcclxuXHRcdCBQYXJhbGxheENvbmZpZyB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgbG9nb1Jlc2l6ZSxcclxuXHRcdCByb3V0ZUxvYWRlZCB9IGZyb20gJy4uLy4uL2FwcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9Ib21lQ29tcG9uZW50L2hvbWUuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbXHJcblx0XHQnYXBwL3N0eWxlcy9ob21lLnN0eWxlcy5jc3MnXHJcblx0XSxcclxuXHRzZWxlY3RvcjogJ2hvbWUtaHRtbCcsXHJcblx0ZGlyZWN0aXZlczogW1BhcmFsbGF4XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0bG9nb1Jlc2l6ZS5lbWl0KG51bGwpO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1iYW5uZXInKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyB0aGlzLmJhbm5lckltYWdlICsgJyknO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZS10ZXh0JykuaW5uZXJIVE1MID0gdGhpcy53ZWxjb21lVGV4dDtcclxuXHR9XHJcblx0XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0cm91dGVMb2FkZWQuZW1pdChudWxsKTtcclxuXHRcdC8vIGRlYnVnZ2VyO1x0XHRcclxuXHR9XHJcblx0XHJcblx0aG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdGJhbm5lclBhcmFsbGF4Q29uZmlnOiBQYXJhbGxheENvbmZpZyA9IHtcclxuXHRcdHNjcm9sbGVySWQ6ICdyb3V0ZScsXHJcblx0XHRwYXJhbGxheEluaXRWYWw6IC0yNTAsXHJcblx0XHRwYXJhbGxheFJhdGlvOiAuOFxyXG5cdH07XHJcblx0XHJcblx0Ly8gYmFubmVyUGFyYWxsYXhDb25maWcgPSB7XHJcblx0Ly8gXHRzY3JvbGxlcklkOiAncm91dGUnXHJcblx0Ly8gfTtcclxuXHRcclxuXHR3ZWxjb21lUGFyYWxsYXhDb25maWcgPSB7XHJcblx0XHRuYW1lOiAnc2l0ZS13ZWxjb21lJyxcclxuXHRcdHNjcm9sbGVySWQ6ICdyb3V0ZScsXHJcblx0XHRwYXJhbGxheFJhdGlvOiAxLFxyXG5cdFx0cGFyYWxsYXhDc3M6ICd0b3AnLFxyXG5cdFx0cGFyYWxsYXhJbml0VmFsOiAtMTAwLFxyXG5cdFx0cGFyYWxsYXhJZjogdHJ1ZSxcclxuXHRcdG1heFZhbHVlOiAwXHJcblx0fTtcclxuXHRcclxuXHR0ZXh0UGFyYWxsYXhDb25maWcgPSB7XHJcblx0XHRuYW1lOiAnc2l0ZS13ZWxjb21lJyxcclxuXHRcdHNjcm9sbGVySWQ6ICdyb3V0ZScsXHJcblx0XHRwYXJhbGxheFJhdGlvOiAuNixcclxuXHRcdHBhcmFsbGF4Q3NzOiAndG9wJyxcclxuXHRcdHBhcmFsbGF4SW5pdFZhbDogLTcwLFxyXG5cdFx0cGFyYWxsYXhJZjogdHJ1ZSxcclxuXHRcdG1heFZhbHVlOiAwXHJcblx0fTtcclxuXHRcclxuXHRzaXRlV2VsY29tZTogc3RyaW5nID0gJ1dlbGNvbWUgdG8gdGhlIHdlYnNpdGUgZm9yIFN0YWxsaW9uIFNlY3VyaXR5JztcclxuXHR3ZWxjb21lVGV4dDogc3RyaW5nID0gXHJcblx0XHRgQmFjb24gaXBzdW0gZG9sb3IgYW1ldCB0LWJvbmUgcnVtcCBwcm9zY2l1dHRvIGxlYmVya2FzLiBIYW0gaG9jayBraWVsYmFzYSBhbmRvdWlsbGUgdHVya2V5IGRydW1zdGljayBmcmFua2Z1cnRlciBzaGFuay4gSGFtIGhvY2sgdHJpLXRpcCB0YWlsIHNob3VsZGVyIG1lYXRsb2FmLCBwaWcgYmFsbCB0aXAgdHVya2V5IGJyZXNhb2xhIHNoYW5rbGUgYmVlZiBraWVsYmFzYSBwYXN0cmFtaS4gRHJ1bXN0aWNrIGNvcm5lZCBiZWVmIGZsYW5rIHNwYXJlIHJpYnMgam93bCBzaG9ydCByaWJzIHByb3NjaXV0dG8gdHVyZHVja2VuIHBvcmsgbG9pbiB0b25ndWUgY293LiBNZWF0bG9hZiBzYWxhbWkgY3VwaW0gYm91ZGluLCBjaHVjayBzaG9ydCBsb2luIHQtYm9uZSBkcnVtc3RpY2suPGJyPjxicj5cclxuXHRcdFxyXG5cdFx0UG9yayBiZWxseSBqb3dsIHNpcmxvaW4gcG9yay4gUG9yY2hldHRhIHNob3J0IHJpYnMgY2hpY2tlbiB0LWJvbmUsIGFuZG91aWxsZSBmYXRiYWNrIGJpbHRvbmcgbGViZXJrYXMga2llbGJhc2Egc2lybG9pbiBjaHVjayBiYWNvbi4gUHJvc2NpdXR0byBtZWF0YmFsbCBzaXJsb2luIGNoaWNrZW4gdHVya2V5IHNob3VsZGVyIGRvbmVyIGZyYW5rZnVydGVyIHNhbGFtaSB0YWlsIHRlbmRlcmxvaW4gcG9yayBib3VkaW4gdmVuaXNvbiBraWVsYmFzYS4gVGFpbCBzaG9ydCByaWJzIGJyZXNhb2xhIHBvcmsgYmVsbHkgYmVlZi4gSm93bCBwYXN0cmFtaSBicmlza2V0IGtldmluIGJhbGwgdGlwLCBicmVzYW9sYSBtZWF0bG9hZiBwb3JrLiBUdXJkdWNrZW4gZmF0YmFjayBwb3JrIGxvaW4gc2F1c2FnZSBmcmFua2Z1cnRlciBib3VkaW4gamVya3kgc2FsYW1pIHBpZyB2ZW5pc29uIGRydW1zdGljayBncm91bmQgcm91bmQgYmVlZiByaWJzIHNob3J0IGxvaW4gdGVuZGVybG9pbi48YnI+PGJyPlxyXG5cdFx0XHJcblx0XHRDb3cgc2FsYW1pIGpvd2wgcHJvc2NpdXR0byBqZXJreSBhbGNhdHJhIHNpcmxvaW4gbWVhdGJhbGwgdHJpLXRpcCB0LWJvbmUgcmliZXllIHNob3VsZGVyIHN3aW5lLiBWZW5pc29uIGNvcm5lZCBiZWVmIHR1cmR1Y2tlbiBwb3JrIHRvbmd1ZSBib3VkaW4gY293IGhhbSBob2NrIHBvcmsgbG9pbiB0cmktdGlwIGxhbmRqYWVnZXIgcGljYW5oYSBwYW5jZXR0YSBtZWF0bG9hZi4gVGVuZGVybG9pbiBwcm9zY2l1dHRvIHJpYmV5ZSBoYW0gaG9jay4gR3JvdW5kIHJvdW5kIGRydW1zdGljayB0b25ndWUgcGlnIHBvcmsgbG9pbiBjb3cgdC1ib25lIGJlZWYgYmlsdG9uZyB0dXJkdWNrZW4uIEZhdGJhY2sgc3RyaXAgc3RlYWsgcHJvc2NpdXR0byBzaG9ydCBsb2luIGJlZWYgcGFuY2V0dGEgYWxjYXRyYSBzYXVzYWdlIGRydW1zdGljayBwb3JrIGJlbGx5IHRvbmd1ZS4gU2lybG9pbiBmcmFua2Z1cnRlciBncm91bmQgcm91bmQgcmliZXllIGhhbWJ1cmdlciwgdGVuZGVybG9pbiBwb3JrIGJlbGx5IHNoYW5rIHQtYm9uZSBwcm9zY2l1dHRvIHN0cmlwIHN0ZWFrIHNoYW5rbGUgY2hpY2tlbi4gQnJpc2tldCBkcnVtc3RpY2sgc2hvdWxkZXIgZmF0YmFjayBoYW0gaGFtYnVyZ2VyIHBpY2FuaGEgbGViZXJrYXMga2llbGJhc2EgcHJvc2NpdXR0by48YnI+YDtcclxuXHRcclxuXHRiYW5uZXJJbWFnZTogc3RyaW5nID0gJ2FwcC9hc3NldHMvcnVubmluZy1ob3JzZS5qcGcnO1xyXG5cdC8vIGJhbm5lckltYWdlOiBzdHJpbmcgPSAnYXBwL2Fzc2V0cy9kYXduLTE5MDA1NS5qcGcnO1xyXG5cdFxyXG5cdEBJbnB1dCgpIHNjcm9sbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMuaG9zdEVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
