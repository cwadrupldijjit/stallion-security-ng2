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
    var RecommendComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            RecommendComponent = (function () {
                function RecommendComponent() {
                }
                RecommendComponent.prototype.ngOnInit = function () {
                    app_component_1.logoResize.emit(null);
                };
                RecommendComponent.prototype.ngAfterContentInit = function () {
                    app_component_1.routeLoaded.emit(null);
                };
                RecommendComponent = __decorate([
                    core_1.Component({
                        selector: 'recommend-html',
                        templateUrl: 'app/components/RecommendComponent/recommend.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RecommendComponent);
                return RecommendComponent;
            })();
            exports_1("RecommendComponent", RecommendComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1JlY29tbWVuZENvbXBvbmVudC9yZWNvbW1lbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlJlY29tbWVuZENvbXBvbmVudCIsIlJlY29tbWVuZENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlJlY29tbWVuZENvbXBvbmVudC5uZ09uSW5pdCIsIlJlY29tbWVuZENvbXBvbmVudC5uZ0FmdGVyQ29udGVudEluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkFhQUMsQ0FBQ0E7Z0JBUEFELHFDQUFRQSxHQUFSQTtvQkFDQ0UsMEJBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUN2QkEsQ0FBQ0E7Z0JBRURGLCtDQUFrQkEsR0FBbEJBO29CQUNDRywyQkFBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkFaRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsZ0JBQWdCQTt3QkFDMUJBLFdBQVdBLEVBQUVBLGtEQUFrREE7cUJBQy9EQSxDQUFDQTs7dUNBVURBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FiQSxBQWFDQSxJQUFBO1lBYkQsbURBYUMsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9SZWNvbW1lbmRDb21wb25lbnQvcmVjb21tZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgXHJcblx0XHQgT25Jbml0LFxyXG5cdFx0IEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgbG9nb1Jlc2l6ZSxcclxuXHRcdCByb3V0ZUxvYWRlZCB9IGZyb20gJy4uLy4uL2FwcC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdyZWNvbW1lbmQtaHRtbCcsXHJcblx0dGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9SZWNvbW1lbmRDb21wb25lbnQvcmVjb21tZW5kLmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjb21tZW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGxvZ29SZXNpemUuZW1pdChudWxsKTtcclxuXHR9XHJcblx0XHJcblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cdFx0cm91dGVMb2FkZWQuZW1pdChudWxsKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
