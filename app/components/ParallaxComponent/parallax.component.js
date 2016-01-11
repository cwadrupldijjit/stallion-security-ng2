System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PerfectParallax, ParallaxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PerfectParallax = (function () {
                function PerfectParallax() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PerfectParallax.prototype, "cssKey", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PerfectParallax.prototype, "cssValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], PerfectParallax.prototype, "cssValArray", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PerfectParallax.prototype, "parallaxCssVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], PerfectParallax.prototype, "parallaxOffset", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], PerfectParallax.prototype, "parallaxRatio", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], PerfectParallax.prototype, "parallaxInitVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PerfectParallax.prototype, "isSpecialVal", void 0);
                PerfectParallax = __decorate([
                    core_1.Directive({
                        selector: '[perfectParallax]',
                        inputs: [
                            'cssKey: arbitrary'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PerfectParallax);
                return PerfectParallax;
            })();
            ParallaxComponent = (function () {
                function ParallaxComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ParallaxComponent.prototype, "cssKey", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ParallaxComponent.prototype, "cssValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ParallaxComponent.prototype, "cssValArray", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ParallaxComponent.prototype, "parallaxCssVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ParallaxComponent.prototype, "parallaxOffset", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ParallaxComponent.prototype, "parallaxRatio", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ParallaxComponent.prototype, "parallaxInitVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], ParallaxComponent.prototype, "isSpecialVal", void 0);
                ParallaxComponent = __decorate([
                    core_1.Component({
                        selector: 'perfect-parallax',
                        template: '{{cssKey}}'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ParallaxComponent);
                return ParallaxComponent;
            })();
            exports_1("PerfectParallax", PerfectParallax);
            exports_1("ParallaxComponent", ParallaxComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYWxsYXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBlcmZlY3RQYXJhbGxheCIsIlBlcmZlY3RQYXJhbGxheC5jb25zdHJ1Y3RvciIsIlBhcmFsbGF4Q29tcG9uZW50IiwiUGFyYWxsYXhDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQWdCQ0E7Z0JBQ0FDLENBQUNBO2dCQVRERDtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSxtQ0FBTUEsVUFBU0E7Z0JBQ3hCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSxxQ0FBUUEsVUFBU0E7Z0JBQzFCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSx3Q0FBV0EsVUFBV0E7Z0JBQy9CQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwyQ0FBY0EsVUFBU0E7Z0JBQ2hDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwyQ0FBY0EsVUFBU0E7Z0JBQ2hDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwwQ0FBYUEsVUFBU0E7Z0JBQy9CQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw0Q0FBZUEsVUFBU0E7Z0JBQ2pDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSx5Q0FBWUEsVUFBVUE7Z0JBZmhDQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxtQkFBbUJBO3dCQUM3QkEsTUFBTUEsRUFBRUE7NEJBQ1BBLG1CQUFtQkE7eUJBQ25CQTtxQkFDREEsQ0FBQ0E7O29DQWFEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBQUNBLEFBbEJELElBa0JDO1lBR0Q7Z0JBY0NFO2dCQUNBQyxDQUFDQTtnQkFUREQ7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EscUNBQU1BLFVBQVNBO2dCQUN4QkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsdUNBQVFBLFVBQVNBO2dCQUMxQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsMENBQVdBLFVBQVdBO2dCQUMvQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsNkNBQWNBLFVBQVNBO2dCQUNoQ0E7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsNkNBQWNBLFVBQVNBO2dCQUNoQ0E7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsNENBQWFBLFVBQVNBO2dCQUMvQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsOENBQWVBLFVBQVNBO2dCQUNqQ0E7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsMkNBQVlBLFVBQVVBO2dCQWJoQ0E7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsa0JBQWtCQTt3QkFDNUJBLFFBQVFBLEVBQUdBLFlBQVlBO3FCQUN2QkEsQ0FBQ0E7O3NDQWFEQTtnQkFBREEsd0JBQUNBO1lBQURBLENBQUNBLEFBaEJELElBZ0JDO1lBR08sNkNBQWU7WUFBRSxpREFBaUIifQ==