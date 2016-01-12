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
                    this.parallaxCssVal = this.parallaxCss ? this.parallaxCss : 'top';
                    this.cssValArray = this.parallaxCssVal.split(':');
                    this.cssKey = this.cssValArray[0];
                    this.cssValue = this.cssValArray[1];
                    this.isSpecialVal = this.cssValue ? true : false;
                    if (!this.cssValue)
                        this.cssValue = this.cssKey;
                    this.parallaxRatio = this.parallaxRatio ? +this.parallaxRatio : 1.1;
                    this.parallaxInitVal = this.parallaxInitVal ? +this.parallaxInitVal : 0;
                    if (this.elem)
                        console.log(this.elem.style); //(this.cssKey, this.parallaxInitVal + 'px');
                    function _onScroll() {
                        var resultVal;
                        var calcVal = window.pageYOffset * this.parallaxRatio + this.parallaxInitVal;
                        if (this.isSpecialVal) {
                            resultVal = '' + this.cssValue + '(' + calcVal + 'px)';
                        }
                        else {
                            resultVal = calcVal + 'px';
                        }
                        this.elem.css(this.cssKey, resultVal);
                    }
                    ;
                    this.printStuff = function (data) {
                        console.log(data.style);
                    };
                    window.addEventListener('scroll', _onScroll);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', HTMLElement)
                ], ParallaxComponent.prototype, "elem", void 0);
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
                    __metadata('design:type', String)
                ], ParallaxComponent.prototype, "parallaxCss", void 0);
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
                    __metadata('design:type', Number)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYWxsYXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBlcmZlY3RQYXJhbGxheCIsIlBlcmZlY3RQYXJhbGxheC5jb25zdHJ1Y3RvciIsIlBhcmFsbGF4Q29tcG9uZW50IiwiUGFyYWxsYXhDb21wb25lbnQuY29uc3RydWN0b3IiLCJQYXJhbGxheENvbXBvbmVudC5jb25zdHJ1Y3Rvci5fb25TY3JvbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQWdCSUE7Z0JBQ0FDLENBQUNBO2dCQVRERDtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSxtQ0FBTUEsVUFBU0E7Z0JBQ3hCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSxxQ0FBUUEsVUFBU0E7Z0JBQzFCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSx3Q0FBV0EsVUFBV0E7Z0JBQy9CQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwyQ0FBY0EsVUFBU0E7Z0JBQ2hDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwyQ0FBY0EsVUFBU0E7Z0JBQ2hDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwwQ0FBYUEsVUFBU0E7Z0JBQy9CQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw0Q0FBZUEsVUFBU0E7Z0JBQ2pDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSx5Q0FBWUEsVUFBVUE7Z0JBZm5DQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxtQkFBbUJBO3dCQUM3QkEsTUFBTUEsRUFBRUE7NEJBQ0pBLG1CQUFtQkE7eUJBQ3RCQTtxQkFDSkEsQ0FBQ0E7O29DQWFEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBQUNBLEFBbEJELElBa0JDO1lBR0Q7Z0JBaUJJRTtvQkFDSUMsSUFBSUEsQ0FBQ0EsY0FBY0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ2xFQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDbERBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRXBDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDakRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFFaERBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEdBQUdBLENBQUNBO29CQUNwRUEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3hFQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDVkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0EsNkNBQTZDQTtvQkFFOUVBO3dCQUNJQyxJQUFJQSxTQUFTQSxDQUFDQTt3QkFDZEEsSUFBSUEsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7d0JBRTdFQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDcEJBLFNBQVNBLEdBQUdBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEdBQUdBLEdBQUdBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO3dCQUMzREEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLENBQUNBOzRCQUNKQSxTQUFTQSxHQUFHQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFDL0JBLENBQUNBO3dCQUNEQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDMUNBLENBQUNBO29CQUFBRCxDQUFDQTtvQkFFRkEsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBR0EsVUFBQ0EsSUFBSUE7d0JBQ25CQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDNUJBLENBQUNBLENBQUNBO29CQUVGQSxNQUFNQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFFBQVFBLEVBQUVBLFNBQVNBLENBQUNBLENBQUNBO2dCQUNqREEsQ0FBQ0E7Z0JBekNERDtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSxtQ0FBSUEsVUFBY0E7Z0JBQzNCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSxxQ0FBTUEsVUFBU0E7Z0JBQ3hCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSx1Q0FBUUEsVUFBU0E7Z0JBQzFCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwwQ0FBV0EsVUFBV0E7Z0JBQy9CQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw2Q0FBY0EsVUFBU0E7Z0JBQ2hDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwwQ0FBV0EsVUFBU0E7Z0JBQzdCQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw2Q0FBY0EsVUFBU0E7Z0JBQ2hDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw0Q0FBYUEsVUFBU0E7Z0JBQy9CQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSw4Q0FBZUEsVUFBU0E7Z0JBQ2pDQTtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSwyQ0FBWUEsVUFBVUE7Z0JBaEJuQ0E7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsa0JBQWtCQTt3QkFDNUJBLFFBQVFBLEVBQUVBLFlBQVlBO3FCQUN6QkEsQ0FBQ0E7O3NDQThDREE7Z0JBQURBLHdCQUFDQTtZQUFEQSxDQUFDQSxBQWpERCxJQWlEQztZQUdPLDZDQUFlO1lBQUUsaURBQWlCIn0=