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
                    this.cssUnit = 'px';
                    this.isSpecialVal = false;
                    this.evaluateScroll = function () {
                        var resultVal;
                        var calcVal;
                        calcVal = _this.scrollElement.scrollTop * _this.parallaxRatio + _this.parallaxInitVal;
                        if (_this.maxValue && calcVal >= _this.maxValue)
                            calcVal = _this.maxValue;
                        else if (_this.minValue && calcVal <= _this.minValue)
                            calcVal = _this.minValue;
                        if (_this.cssKey === 'backgroundPosition') {
                            if (_this.parallaxAxis === 'X') {
                                resultVal = calcVal + _this.cssUnit + ' 0';
                            }
                            else {
                                resultVal = '0 ' + calcVal + _this.cssUnit;
                            }
                        }
                        else if (_this.isSpecialVal) {
                            resultVal = _this.cssValue + '(' + calcVal + _this.cssUnit + ')';
                        }
                        else {
                            resultVal = calcVal + _this.cssUnit;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6WyJQYXJhbGxheCIsIlBhcmFsbGF4LmNvbnN0cnVjdG9yIiwiUGFyYWxsYXgubmdPbkluaXQiXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1RGY7Z0JBaUdJQSxrQkFBWUEsT0FBbUJBO29CQWpHbkNDLGlCQW9HQ0E7b0JBL0ZBQSxTQUFJQSxHQUFXQSxtQkFBbUJBLENBQUNBO29CQUdoQ0EsV0FBTUEsR0FBV0Esb0JBQW9CQSxDQUFDQTtvQkFDekNBLGdCQUFXQSxHQUFXQSxxQkFBcUJBLENBQUNBO29CQUM1Q0EsaUJBQVlBLEdBQVdBLEdBQUdBLENBQUNBO29CQUN4QkEsa0JBQWFBLEdBQVdBLENBQUNBLEVBQUVBLENBQUNBO29CQUM1QkEsb0JBQWVBLEdBQVdBLENBQUNBLENBQUNBO29CQUkvQkEsWUFBT0EsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBR3BCQSxpQkFBWUEsR0FBWUEsS0FBS0EsQ0FBQ0E7b0JBTXpCQSxtQkFBY0EsR0FBR0E7d0JBQ3hCQSxJQUFJQSxTQUFpQkEsQ0FBQ0E7d0JBQ3RCQSxJQUFJQSxPQUFlQSxDQUFDQTt3QkFFcEJBLE9BQU9BLEdBQUdBLEtBQUlBLENBQUNBLGFBQWFBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEtBQUlBLENBQUNBLGVBQWVBLENBQUNBO3dCQUVuRkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsUUFBUUEsSUFBSUEsT0FBT0EsSUFBSUEsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7NEJBQzdDQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDekJBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFFBQVFBLElBQUlBLE9BQU9BLElBQUlBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNB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LENBQUNBLGFBQWFBLENBQUNBO29DQUN2QkEsTUFBS0EsQ0FBQ0EsZ0RBQThDQSxJQUFJQSxDQUFDQSxVQUFVQSx5RkFBc0ZBLENBQUNBLENBQUNBOzRCQUM3SkEsQ0FBRUE7NEJBQUFBLEtBQUtBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dDQUNYQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQ0FDaEJBLElBQUlBLENBQUNBLGFBQWFBLEdBQUdBLFFBQVFBLENBQUNBLG9CQUFvQkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQy9EQSxDQUFDQTt3QkFDRkEsQ0FBQ0E7d0JBQUNBLElBQUlBOzRCQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxRQUFRQSxDQUFDQSxvQkFBb0JBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN0RUEsQ0FBQ0E7b0JBRURBLElBQUlBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO29CQUV0QkEsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxDQUFDQTtnQkFDcEVBLENBQUNBO2dCQXhGRUY7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EsNEJBQU1BLFVBQWlCQTtnQkFQcENBO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLFlBQVlBO3FCQUN6QkEsQ0FBQ0E7OzZCQWtHREE7Z0JBQURBLGVBQUNBO1lBQURBLENBcEdBLEFBb0dDQSxJQUFBO1lBR08sK0JBQVEiLCJmaWxlIjoiYXBwL2RpcmVjdGl2ZXMvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmcyLXBhcmFsbGF4XHJcblxyXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG4vKiBcclxuVGhlc2UgYXJlIG9wdGlvbmFsIHZhbHVlcyB5b3UgY2FuIGluY2x1ZGUgaW4gdGhlIGNvbmZpZyBvYmplY3QgeW91IGNhbiBwYXNzIGludG8gdGhlIFxyXG5kaXJlY3RpdmUgZm9yIGN1c3RvbSBwcm9wZXJ0aWVzIHlvdSB3YW50IHRvIHVzZSB0aGlzIHdpdGguICBUaGlzIHRvb2wgY2FuIGJlIHVzZWQgZm9yIFxyXG5tb3JlIHRoYW4ganVzdCB0aGUgcGFyYWxsYXggZWZmZWN0LCBhbmQgaXQgaXMgYWJsZSB0byB0cmFuc2Zvcm0gYW55dGhpbmcgYWJvdXQgdGhlIFxyXG5bcGFyYWxsYXhFbGVtZW50XSB0aGF0IHlvdSB3YW50IHRvIGhhdmUgYm91bmQgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgbmVzdGVkIGVsZW1lbnQuICBcclxuXHJcbiovXHJcbmludGVyZmFjZSBQYXJhbGxheENvbmZpZyB7XHJcblx0Ly8gdGhlIGNzcyBwcm9wZXJ0eSAoY29udmVydGVkIHRvIGNhbWVsQ2FzZSkgdGhhdCB5b3Ugd2FudCBjaGFuZ2VkIGFsb25nIHdpdGggdGhlXHJcblx0Ly8gdmFsdWUgeW91IHdhbnQgdG8gYXNzaWduIHRvIHRoZSBjc3Mga2V5OyB5b3Ugc2hvdWxkIHVzZSBQYXJhbGxheENzcyBpZiB5b3UncmUgXHJcblx0Ly8ganVzdCBkZWZpbmluZyBvbmUgcHJvcGVydHkgd2l0aG91dCBzcGVjaWFsIHZhbHVlc1xyXG5cdGNzc0tleT86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGlzIGlzIHVzZWQgdG8gZGVmaW5lIHRoZSBjc3MgcHJvcGVydHkgeW91J2QgbGlrZSB0byBtb2RpZnkgYXMgeW91IHNjcm9sbFxyXG5cdC8vIGRlZmF1bHQgaXMgYmFja2dyb3VuZFBvc2l0aW9uWVxyXG5cdHBhcmFsbGF4Q3NzPzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIHJhdGlvIGRlZmluaW5nIGhvdyBmYXN0LCBzbG93LCBvciB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjaGFuZ2VzIG9uIHNjcm9sbGluZ1xyXG5cdHBhcmFsbGF4UmF0aW8/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhpcyBpcyB0aGUgaW5pdGlhbCB2YWx1ZSBpbiBwaXhlbHMgZm9yIHRoZSBwYXJhbGxheENzcyBwcm9wZXJ0eSB5b3UgZGVmaW5lZFxyXG5cdC8vIGJlZm9yZSBvciwgaWYgeW91IGRpZG4ndCBkZWZpbmUgb25lLCBpdCBkZWZhdWx0cyB0byAwXHJcblx0cGFyYWxsYXhJbml0VmFsPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoZSBpZCBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIHBhZ2UgeW91J2QgbGlrZSB0byB0cmFjayB0aGUgc2Nyb2xsaW5nIG9mIGluIHRoZSBcclxuXHQvLyBjYXNlIHdoZXJlIHRoZSBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50OyBcclxuXHQvLyBpZiBubyBpZCBpcyBkZWZpbmVkIGFsb25nIHdpdGggbm8gc2Nyb2xsRWxlbWVudCBiZWxvdywgXHJcblx0Ly8gaXQgZGVmYXVsdHMgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgYm9keVxyXG5cdHNjcm9sbGVySWQ/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gdGhlIHVwcGVyIGNvbnN0cmFpbnQgZm9yIHRoZSBjc3MgdHJhbnNmb3JtYXRpb25cclxuXHRtYXhWYWx1ZT86IG51bWJlcjtcclxuXHRcclxuXHQvLyB0aGUgbG93ZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxyXG5cdG1pblZhbHVlPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoZSB1bml0IChlLmcuICdweCcsICdlbScsICclJywgJ3ZoJywgZXRjLikgeW91IHdhbnQgZm9yIHRoZSBwYXJhbGxheCBlZmZlY3QgdG8gdXNlIFxyXG5cdGNzc1VuaXQ/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gdGhlIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50IHRoYXQgeW91J2QgbGlrZSB0aGUgZGlyZWN0aXZlIHRvIHRyYWNrIGl0cyBcclxuXHQvLyBwb3NpdGlvbiBhcyBpdCBzY3JvbGxzOyAgZ2V0cyBhc3NpZ25lZCB0byB0aGUgYm9keSBpZiBub3RoaW5nIGlzIGRlZmluZWRcclxuXHRzY3JvbGxFbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0Ly8gdGhlIGVsZW1lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBlZmZlY3RzIGZyb20gc2Nyb2xsaW5nIHRoZSBzY3JvbGxFbGVtZW50IGFwcGxpZWQgXHJcblx0Ly8gdG87IGVzc2VudGlhbGx5IHRoZSBlbGVtZW50IHRoYXQgbW92ZXMgYXMgeW91IHNjcm9sbFxyXG5cdHBhcmFsbGF4RWxlbWVudD86IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdC8vIHdoYXQgeW91IHdhbnQgdG8gY2FsbCBpdCB0byBmaW5kIHRoZSBwYXJ0aWN1bGFyIGluc3RhbmNlIG9mIGl0IGlmIHlvdSBuZWVkIHRvIGRlYnVnXHJcblx0bmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3BhcmFsbGF4XSdcclxufSlcclxuXHJcbmNsYXNzIFBhcmFsbGF4IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuYW1lOiBzdHJpbmcgPSAncGFyYWxsYXhEaXJlY3RpdmUnO1xyXG5cdFxyXG4gICAgQElucHV0KCkgY29uZmlnOiBQYXJhbGxheENvbmZpZztcclxuICAgIGNzc0tleTogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XHJcblx0cGFyYWxsYXhDc3M6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcclxuXHRwYXJhbGxheEF4aXM6IHN0cmluZyA9ICdZJztcclxuICAgIHBhcmFsbGF4UmF0aW86IG51bWJlciA9IC0uNztcclxuICAgIHBhcmFsbGF4SW5pdFZhbDogbnVtYmVyID0gMDtcclxuXHRzY3JvbGxlcklkOiBzdHJpbmc7XHJcblx0bWF4VmFsdWU6IG51bWJlcjtcclxuXHRtaW5WYWx1ZTogbnVtYmVyO1xyXG5cdGNzc1VuaXQ6IHN0cmluZyA9ICdweCc7XHJcblx0XHJcbiAgICBjc3NWYWx1ZTogc3RyaW5nO1xyXG4gICAgaXNTcGVjaWFsVmFsOiBib29sZWFuID0gZmFsc2U7XHJcblx0XHJcblx0aG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdHNjcm9sbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdHBhcmFsbGF4RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0cHJpdmF0ZSBldmFsdWF0ZVNjcm9sbCA9ICgpID0+IHtcclxuXHRcdGxldCByZXN1bHRWYWw6IHN0cmluZztcclxuXHRcdGxldCBjYWxjVmFsOiBudW1iZXI7XHJcblx0XHRcclxuXHRcdGNhbGNWYWwgPSB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wICogdGhpcy5wYXJhbGxheFJhdGlvICsgdGhpcy5wYXJhbGxheEluaXRWYWw7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLm1heFZhbHVlICYmIGNhbGNWYWwgPj0gdGhpcy5tYXhWYWx1ZSlcclxuXHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWF4VmFsdWU7XHJcblx0XHRlbHNlIGlmICh0aGlzLm1pblZhbHVlICYmIGNhbGNWYWwgPD0gdGhpcy5taW5WYWx1ZSlcclxuXHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWluVmFsdWU7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmNzc0tleSA9PT0gJ2JhY2tncm91bmRQb3NpdGlvbicpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyYWxsYXhBeGlzID09PSAnWCcpIHtcclxuXHRcdFx0XHRyZXN1bHRWYWwgPSBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyAwJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHRWYWwgPSAnMCAnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdDtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzU3BlY2lhbFZhbCkge1xyXG5cdFx0XHRyZXN1bHRWYWwgPSB0aGlzLmNzc1ZhbHVlICsgJygnICsgY2FsY1ZhbCArIHRoaXMuY3NzVW5pdCArICcpJztcclxuXHRcdH0gZWxzZSB7IFxyXG5cdFx0XHRyZXN1bHRWYWwgPSBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wYXJhbGxheEVsZW1lbnQuc3R5bGVbdGhpcy5jc3NLZXldID0gcmVzdWx0VmFsO1xyXG5cdH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGxldCBjc3NWYWxBcnJheTogc3RyaW5nW107XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKCclcyBpbml0aWFsaXplZCBvbiBlbGVtZW50JywgdGhpcy5uYW1lLCB0aGlzLmhvc3RFbGVtZW50KTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBwcm9wIGluIHRoaXMuY29uZmlnKSB7IHRoaXNbcHJvcF0gPSB0aGlzLmNvbmZpZ1twcm9wXTsgfVxyXG5cdFx0dGhpcy5wYXJhbGxheENzcyA9IHRoaXMucGFyYWxsYXhDc3MgPyB0aGlzLnBhcmFsbGF4Q3NzIDogJ2JhY2tncm91bmRQb3NpdGlvblknO1xyXG5cdFx0aWYgKHRoaXMucGFyYWxsYXhDc3MubWF0Y2goL2JhY2tncm91bmRQb3NpdGlvbi9pKSkge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJhbGxheENzcy5zcGxpdCgnYmFja2dyb3VuZFBvc2l0aW9uJylbMV0udG9VcHBlckNhc2UoKSA9PT0gJ1gnKSB7XHJcblx0XHRcdFx0dGhpcy5wYXJhbGxheEF4aXMgPSAnWCc7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRoaXMucGFyYWxsYXhDc3MgPSAnYmFja2dyb3VuZFBvc2l0aW9uJztcclxuXHRcdH1cclxuXHRcdFxyXG4gICAgICAgIGNzc1ZhbEFycmF5ID0gdGhpcy5wYXJhbGxheENzcy5zcGxpdCgnOicpO1xyXG4gICAgICAgIHRoaXMuY3NzS2V5ID0gY3NzVmFsQXJyYXlbMF07XHJcbiAgICAgICAgdGhpcy5jc3NWYWx1ZSA9IGNzc1ZhbEFycmF5WzFdO1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5pc1NwZWNpYWxWYWwgPSB0aGlzLmNzc1ZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5jc3NWYWx1ZSkgdGhpcy5jc3NWYWx1ZSA9IHRoaXMuY3NzS2V5O1xyXG5cdFx0XHJcbiAgICAgICAgdGhpcy5wYXJhbGxheFJhdGlvID0gK3RoaXMucGFyYWxsYXhSYXRpbztcclxuICAgICAgICB0aGlzLnBhcmFsbGF4SW5pdFZhbCA9ICt0aGlzLnBhcmFsbGF4SW5pdFZhbDtcclxuXHRcdFxyXG5cdFx0dGhpcy5wYXJhbGxheEVsZW1lbnQgPSB0aGlzLnBhcmFsbGF4RWxlbWVudCB8fCB0aGlzLmhvc3RFbGVtZW50O1xyXG5cdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpIHtcclxuXHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheFNjcm9sbCcpKVxyXG5cdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJhbGxheFNjcm9sbCcpO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLnNjcm9sbGVySWQpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zY3JvbGxlcklkKTtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5zY3JvbGxFbGVtZW50KVxyXG5cdFx0XHRcdFx0XHR0aHJvdyhgVGhlIElEIHBhc3NlZCB0aHJvdWdoIHRoZSBwYXJhbGxheENvbmZpZyAoJyR7dGhpcy5zY3JvbGxlcklkfScpIG9iamVjdCB3YXMgbm90IGZvdW5kIGluIHRoZSBkb2N1bWVudC4gIERlZmF1bHRpbmcgdG8gd2F0Y2ggc2Nyb2xsaW5nIG9mIHRoZSBib2R5LmApO1xyXG5cdFx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLmV2YWx1YXRlU2Nyb2xsKCk7XHJcblx0XHRcclxuXHRcdHRoaXMuc2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmV2YWx1YXRlU2Nyb2xsKTtcclxuXHR9XHJcblx0XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcblx0XHR0aGlzLmhvc3RFbGVtZW50ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtQYXJhbGxheH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
