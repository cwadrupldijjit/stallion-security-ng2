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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var PerfectParallax;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PerfectParallax = (function () {
                function PerfectParallax(cssKey) {
                    console.log(cssKey);
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
                        selector: '[perfect-parallax]',
                        inputs: [
                            'cssKey: arbitrary'
                        ]
                    }),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [String])
                ], PerfectParallax);
                return PerfectParallax;
            })();
            exports_1("PerfectParallax", PerfectParallax);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYWxsYXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBlcmZlY3RQYXJhbGxheCIsIlBlcmZlY3RQYXJhbGxheC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBZ0JDQSx5QkFBb0JBLE1BQWNBO29CQUNqQ0MsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3JCQSxDQUFDQTtnQkFWREQ7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsbUNBQU1BLFVBQVNBO2dCQUN4QkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EscUNBQVFBLFVBQVNBO2dCQUMxQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0Esd0NBQVdBLFVBQVdBO2dCQUMvQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsMkNBQWNBLFVBQVNBO2dCQUNoQ0E7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsMkNBQWNBLFVBQVNBO2dCQUNoQ0E7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsMENBQWFBLFVBQVNBO2dCQUMvQkE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsNENBQWVBLFVBQVNBO2dCQUNqQ0E7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EseUNBQVlBLFVBQVVBO2dCQWZoQ0E7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsb0JBQW9CQTt3QkFDOUJBLE1BQU1BLEVBQUVBOzRCQUNQQSxtQkFBbUJBO3lCQUNuQkE7cUJBQ0RBLENBQUNBO29CQVdXQSxXQUFDQSxXQUFJQSxFQUFFQSxDQUFBQTs7b0NBR25CQTtnQkFBREEsc0JBQUNBO1lBQURBLENBQUNBLEFBbkJELElBbUJDO1lBRU8sNkNBQWUifQ==