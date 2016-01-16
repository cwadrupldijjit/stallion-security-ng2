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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL1JlY29tbWVuZENvbXBvbmVudC9yZWNvbW1lbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlJlY29tbWVuZENvbXBvbmVudCIsIlJlY29tbWVuZENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlJlY29tbWVuZENvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUFBO2dCQVNBQyxDQUFDQTtnQkFIQUQscUNBQVFBLEdBQVJBO29CQUNDRSwwQkFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFSRkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsZ0JBQWdCQTt3QkFDMUJBLFdBQVdBLEVBQUVBLGtEQUFrREE7cUJBQy9EQSxDQUFDQTs7dUNBTURBO2dCQUFEQSx5QkFBQ0E7WUFBREEsQ0FUQSxBQVNDQSxJQUFBO1lBVEQsbURBU0MsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9SZWNvbW1lbmRDb21wb25lbnQvcmVjb21tZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgXHJcblx0XHQgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IGxvZ29SZXNpemUgfSBmcm9tICcuLi8uLi9hcHAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncmVjb21tZW5kLWh0bWwnLFxyXG5cdHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvUmVjb21tZW5kQ29tcG9uZW50L3JlY29tbWVuZC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY29tbWVuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRsb2dvUmVzaXplLmVtaXQobnVsbCk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
