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
    var PerfectParallax;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PerfectParallax = (function () {
                function PerfectParallax(element) {
                    var _this = this;
                    this.name = 'parallaxDirective';
                    this.evaluateScroll = function () {
                        var resultVal;
                        var calcVal = _this.scrollElement.scrollTop * _this.parallaxRatio + _this.parallaxInitVal;
                        if (_this.isSpecialVal) {
                            resultVal = _this.cssValue + '(' + calcVal + 'px)';
                        }
                        else {
                            resultVal = calcVal + 'px';
                        }
                        _this.parallaxElement.style[_this.cssKey] = resultVal;
                    };
                    this.hostElement = element.nativeElement;
                }
                PerfectParallax.prototype.ngOnInit = function () {
                    console.log(this.name, 'initialized');
                    for (var prop in this.config) {
                        this[prop] = this.config[prop];
                    }
                    this.parallaxCss = this.parallaxCss ? this.parallaxCss : 'top';
                    this.cssValArray = this.parallaxCss.split(':');
                    this.cssKey = this.cssValArray[0];
                    this.cssValue = this.cssValArray[1];
                    this.isSpecialVal = this.cssValue ? true : false;
                    if (!this.cssValue)
                        this.cssValue = this.cssKey;
                    this.parallaxRatio = this.parallaxRatio ? +this.parallaxRatio : 1.1;
                    this.parallaxInitVal = this.parallaxInitVal ? +this.parallaxInitVal : 0;
                    this.parallaxElement = this.parallaxElement || this.hostElement;
                    this.scrollElement = this.scrollElement || document.getElementsByTagName('body')[0];
                    this.scrollElement.addEventListener('scroll', this.evaluateScroll);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PerfectParallax.prototype, "config", void 0);
                PerfectParallax = __decorate([
                    core_1.Directive({
                        selector: '[perfectParallax]',
                        inputs: [
                            'cssKey: arbitrary'
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], PerfectParallax);
                return PerfectParallax;
            })();
            exports_1("PerfectParallax", PerfectParallax);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYWxsYXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBlcmZlY3RQYXJhbGxheCIsIlBlcmZlY3RQYXJhbGxheC5jb25zdHJ1Y3RvciIsIlBlcmZlY3RQYXJhbGxheC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBOERJQSx5QkFBWUEsT0FBbUJBO29CQTlEbkNDLGlCQWlFQ0E7b0JBekRBQSxTQUFJQSxHQUFXQSxtQkFBbUJBLENBQUNBO29CQWtCM0JBLG1CQUFjQSxHQUFHQTt3QkFDeEJBLElBQUlBLFNBQVNBLENBQUNBO3dCQUNkQSxJQUFJQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxLQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTt3QkFFdkZBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBOzRCQUN2QkEsU0FBU0EsR0FBR0EsS0FBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsR0FBR0EsR0FBR0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7d0JBQ25EQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ1BBLFNBQVNBLEdBQUdBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO3dCQUM1QkEsQ0FBQ0E7d0JBQ0RBLEtBQUlBLENBQUNBLGVBQWVBLENBQUNBLEtBQUtBLENBQUNBLEtBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLFNBQVNBLENBQUNBO29CQUNyREEsQ0FBQ0EsQ0FBQUE7b0JBMkJBQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQTtnQkFDdkNBLENBQUNBO2dCQTFCSkQsa0NBQVFBLEdBQVJBO29CQUNDRSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxhQUFhQSxDQUFDQSxDQUFDQTtvQkFFdENBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLElBQUlBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO3dCQUM5QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxDQUFDQTtvQkFFREEsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3pEQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDL0NBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRXBDQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDakRBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBO3dCQUFDQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFFaERBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEdBQUdBLENBQUNBO29CQUNwRUEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBRTlFQSxJQUFJQSxDQUFDQSxlQUFlQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxJQUFJQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQTtvQkFDaEVBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLElBQUlBLENBQUNBLGFBQWFBLElBQUlBLFFBQVFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRXBGQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO2dCQUNwRUEsQ0FBQ0E7Z0JBbERFRjtvQkFBQ0EsWUFBS0EsRUFBRUE7O21CQUFDQSxtQ0FBTUEsVUFBaUJBO2dCQVZwQ0E7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsbUJBQW1CQTt3QkFDN0JBLE1BQU1BLEVBQUVBOzRCQUNKQSxtQkFBbUJBO3lCQUN0QkE7cUJBQ0pBLENBQUNBOztvQ0E0RERBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0FBQ0EsQUFqRUQsSUFpRUM7WUE0RE8sNkNBQWUifQ==