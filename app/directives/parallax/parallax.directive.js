// ng2-parallax
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
    var Parallax;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Parallax = (function () {
                function Parallax(element) {
                    var _this = this;
                    this.name = 'parallaxDirective';
                    this.cssKey = 'backgroundPosition';
                    this.parallaxCss = 'backgroundPositionY';
                    this.parallaxAxis = 'Y';
                    this.parallaxRatio = -.7;
                    this.parallaxInitVal = 0;
                    this.isSpecialVal = false;
                    this.evaluateScroll = function () {
                        var resultVal;
                        var calcVal;
                        calcVal = _this.scrollElement.scrollTop * _this.parallaxRatio + _this.parallaxInitVal;
                        if (_this.cssKey === 'backgroundPosition') {
                            if (_this.parallaxAxis === 'X') {
                                resultVal = calcVal + 'px 0';
                            }
                            else {
                                resultVal = '0 ' + calcVal + 'px';
                            }
                        }
                        else if (_this.isSpecialVal) {
                            resultVal = _this.cssValue + '(' + calcVal + 'px)';
                        }
                        else {
                            resultVal = calcVal + 'px';
                        }
                        _this.parallaxElement.style[_this.cssKey] = resultVal;
                    };
                    this.hostElement = element.nativeElement;
                }
                Parallax.prototype.ngOnInit = function () {
                    var cssValArray;
                    console.log('%s initialized on element', this.name, this.hostElement);
                    console.log(this);
                    for (var prop in this.config) {
                        this[prop] = this.config[prop];
                    }
                    this.parallaxCss = this.parallaxCss ? this.parallaxCss : 'backgroundPositionY';
                    if (this.parallaxCss.match(/backgroundPosition/i)) {
                        if (this.parallaxCss.split('backgroundPosition')[1].toUpperCase() === 'X') {
                            this.parallaxAxis = 'X';
                        }
                        this.parallaxCss = 'backgroundPosition';
                    }
                    cssValArray = this.parallaxCss.split(':');
                    this.cssKey = cssValArray[0];
                    this.cssValue = cssValArray[1];
                    this.isSpecialVal = this.cssValue ? true : false;
                    if (!this.cssValue)
                        this.cssValue = this.cssKey;
                    this.parallaxRatio = +this.parallaxRatio;
                    this.parallaxInitVal = +this.parallaxInitVal;
                    this.parallaxElement = this.parallaxElement || this.hostElement;
                    if (!this.scrollElement) {
                        if (document.getElementById('parallaxScroll'))
                            this.scrollElement = document.getElementById('parallaxScroll');
                        else if (this.scrollerId) {
                            try {
                                this.scrollElement = document.getElementById(this.scrollerId);
                                if (!this.scrollElement)
                                    throw ("The ID passed through the parallaxConfig ('" + this.scrollerId + "') object was not found in the document.  Defaulting to watch scrolling of the body.");
                            }
                            catch (e) {
                                console.warn(e);
                                this.scrollElement = document.getElementsByTagName('body')[0];
                            }
                        }
                        else
                            this.scrollElement = document.getElementsByTagName('body')[0];
                    }
                    this.evaluateScroll();
                    this.scrollElement.addEventListener('scroll', this.evaluateScroll);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "config", void 0);
                Parallax = __decorate([
                    core_1.Directive({
                        selector: '[parallax]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Parallax);
                return Parallax;
            })();
            exports_1("Parallax", Parallax);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYWxsYXguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIlBhcmFsbGF4IiwiUGFyYWxsYXguY29uc3RydWN0b3IiLCJQYXJhbGxheC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVEZjtnQkF5RklBLGtCQUFZQSxPQUFtQkE7b0JBekZuQ0MsaUJBNEZDQTtvQkF2RkFBLFNBQUlBLEdBQVdBLG1CQUFtQkEsQ0FBQ0E7b0JBR2hDQSxXQUFNQSxHQUFXQSxvQkFBb0JBLENBQUNBO29CQUN6Q0EsZ0JBQVdBLEdBQVdBLHFCQUFxQkEsQ0FBQ0E7b0JBQzVDQSxpQkFBWUEsR0FBV0EsR0FBR0EsQ0FBQ0E7b0JBQ3hCQSxrQkFBYUEsR0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7b0JBQzVCQSxvQkFBZUEsR0FBV0EsQ0FBQ0EsQ0FBQ0E7b0JBSTVCQSxpQkFBWUEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBTXpCQSxtQkFBY0EsR0FBR0E7d0JBQ3hCQSxJQUFJQSxTQUFpQkEsQ0FBQ0E7d0JBQ3RCQSxJQUFJQSxPQUFlQSxDQUFDQTt3QkFFcEJBLE9BQU9BLEdBQUdBLEtBQUlBLENBQUNBLGFBQWFBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEtBQUlBLENBQUNBLGVBQWVBLENBQUNBO3dCQUVuRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsS0FBS0Esb0JBQW9CQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDMUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFlBQVlBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO2dDQUMvQkEsU0FBU0EsR0FBR0EsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0E7NEJBQzlCQSxDQUFDQTs0QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0NB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