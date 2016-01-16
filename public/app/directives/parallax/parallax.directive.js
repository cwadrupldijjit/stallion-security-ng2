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
                    this.cb_context = null;
                    this.cb_args = [];
                    this.isSpecialVal = false;
                    this.evaluateScroll = function () {
                        var resultVal;
                        var calcVal;
                        calcVal = _this.scrollElement.scrollTop * _this.parallaxRatio + _this.parallaxInitVal;
                        if (_this.maxValue !== undefined && calcVal >= _this.maxValue)
                            calcVal = _this.maxValue;
                        else if (_this.minValue !== undefined && calcVal <= _this.minValue)
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
                        if (_this.cb) {
                            _this.cb.apply(_this.cb_context, _this.cb_args);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6WyJQYXJhbGxheCIsIlBhcmFsbGF4LmNvbnN0cnVjdG9yIiwiUGFyYWxsYXgubmdPbkluaXQiXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnRWY7Z0JBeUdJQSxrQkFBWUEsT0FBbUJBO29CQXpHbkNDLGlCQTRHQ0E7b0JBdkdBQSxTQUFJQSxHQUFXQSxtQkFBbUJBLENBQUNBO29CQUdoQ0EsV0FBTUEsR0FBV0Esb0JBQW9CQSxDQUFDQTtvQkFDekNBLGdCQUFXQSxHQUFXQSxxQkFBcUJBLENBQUNBO29CQUM1Q0EsaUJBQVlBLEdBQVdBLEdBQUdBLENBQUNBO29CQUN4QkEsa0JBQWFBLEdBQVdBLENBQUNBLEVBQUVBLENBQUNBO29CQUM1QkEsb0JBQWVBLEdBQVdBLENBQUNBLENBQUNBO29CQUkvQkEsWUFBT0EsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBRXZCQSxlQUFVQSxHQUFRQSxJQUFJQSxDQUFDQTtvQkFDdkJBLFlBQU9BLEdBQVVBLEVBQUVBLENBQUNBO29CQUdqQkEsaUJBQVlBLEdBQVlBLEtBQUtBLENBQUNBO29CQU16QkEsbUJBQWNBLEdBQUdBO3dCQUN4QkEsSUFBSUEsU0FBaUJBLENBQUNBO3dCQUN0QkEsSUFBSUEsT0FBZUEsQ0FBQ0E7d0JBRXBCQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxLQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTt3QkFFbkZBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFFBQVFBLEtBQUtBLFNBQVNBLElBQUlBLE9BQU9BLElBQUlBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBOzRCQUMzREEsT0FBT0EsR0FBR0EsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ3pCQSxJQUFJQSxDQUFDQSxF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LGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsWUFBWUE7cUJBQ3pCQSxDQUFDQTs7NkJBMEdEQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0E1R0EsQUE0R0NBLElBQUE7WUFHTywrQkFBUSIsImZpbGUiOiJhcHAvZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZzItcGFyYWxsYXhcclxuXHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbi8qIFxyXG5UaGVzZSBhcmUgb3B0aW9uYWwgdmFsdWVzIHlvdSBjYW4gaW5jbHVkZSBpbiB0aGUgY29uZmlnIG9iamVjdCB5b3UgY2FuIHBhc3MgaW50byB0aGUgXHJcbmRpcmVjdGl2ZSBmb3IgY3VzdG9tIHByb3BlcnRpZXMgeW91IHdhbnQgdG8gdXNlIHRoaXMgd2l0aC4gIFRoaXMgdG9vbCBjYW4gYmUgdXNlZCBmb3IgXHJcbm1vcmUgdGhhbiBqdXN0IHRoZSBwYXJhbGxheCBlZmZlY3QsIGFuZCBpdCBpcyBhYmxlIHRvIHRyYW5zZm9ybSBhbnl0aGluZyBhYm91dCB0aGUgXHJcbltwYXJhbGxheEVsZW1lbnRdIHRoYXQgeW91IHdhbnQgdG8gaGF2ZSBib3VuZCB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBuZXN0ZWQgZWxlbWVudC4gIFxyXG5cclxuKi9cclxuaW50ZXJmYWNlIFBhcmFsbGF4Q29uZmlnIHtcclxuXHQvLyB0aGUgY3NzIHByb3BlcnR5IChjb252ZXJ0ZWQgdG8gY2FtZWxDYXNlKSB0aGF0IHlvdSB3YW50IGNoYW5nZWQgYWxvbmcgd2l0aCB0aGVcclxuXHQvLyB2YWx1ZSB5b3Ugd2FudCB0byBhc3NpZ24gdG8gdGhlIGNzcyBrZXk7IHlvdSBzaG91bGQgdXNlIFBhcmFsbGF4Q3NzIGlmIHlvdSdyZSBcclxuXHQvLyBqdXN0IGRlZmluaW5nIG9uZSBwcm9wZXJ0eSB3aXRob3V0IHNwZWNpYWwgdmFsdWVzXHJcblx0Y3NzS2V5Pzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIHRoaXMgaXMgdXNlZCB0byBkZWZpbmUgdGhlIGNzcyBwcm9wZXJ0eSB5b3UnZCBsaWtlIHRvIG1vZGlmeSBhcyB5b3Ugc2Nyb2xsXHJcblx0Ly8gZGVmYXVsdCBpcyBiYWNrZ3JvdW5kUG9zaXRpb25ZXHJcblx0cGFyYWxsYXhDc3M/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gcmF0aW8gZGVmaW5pbmcgaG93IGZhc3QsIHNsb3csIG9yIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNoYW5nZXMgb24gc2Nyb2xsaW5nXHJcblx0cGFyYWxsYXhSYXRpbz86IG51bWJlcjtcclxuXHRcclxuXHQvLyB0aGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIGluIHBpeGVscyBmb3IgdGhlIHBhcmFsbGF4Q3NzIHByb3BlcnR5IHlvdSBkZWZpbmVkXHJcblx0Ly8gYmVmb3JlIG9yLCBpZiB5b3UgZGlkbid0IGRlZmluZSBvbmUsIGl0IGRlZmF1bHRzIHRvIDBcclxuXHRwYXJhbGxheEluaXRWYWw/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhlIGlkIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgcGFnZSB5b3UnZCBsaWtlIHRvIHRyYWNrIHRoZSBzY3JvbGxpbmcgb2YgaW4gdGhlIFxyXG5cdC8vIGNhc2Ugd2hlcmUgdGhlIGVsZW1lbnQgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBjb21wb25lbnQ7IFxyXG5cdC8vIGlmIG5vIGlkIGlzIGRlZmluZWQgYWxvbmcgd2l0aCBubyBzY3JvbGxFbGVtZW50IGJlbG93LCBcclxuXHQvLyBpdCBkZWZhdWx0cyB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBib2R5XHJcblx0c2Nyb2xsZXJJZD86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGUgdXBwZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxyXG5cdG1heFZhbHVlPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoZSBsb3dlciBjb25zdHJhaW50IGZvciB0aGUgY3NzIHRyYW5zZm9ybWF0aW9uXHJcblx0bWluVmFsdWU/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhlIHVuaXQgKGUuZy4gJ3B4JywgJ2VtJywgJyUnLCAndmgnLCBldGMuKSB5b3Ugd2FudCBmb3IgdGhlIHBhcmFsbGF4IGVmZmVjdCB0byB1c2UgXHJcblx0Y3NzVW5pdD86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGUgZWxlbWVudCBpbiB0aGUgY3VycmVudCBjb21wb25lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBkaXJlY3RpdmUgdG8gdHJhY2sgaXRzIFxyXG5cdC8vIHBvc2l0aW9uIGFzIGl0IHNjcm9sbHM7ICBnZXRzIGFzc2lnbmVkIHRvIHRoZSBib2R5IGlmIG5vdGhpbmcgaXMgZGVmaW5lZFxyXG5cdHNjcm9sbEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcclxuXHRcclxuXHQvLyB0aGUgZWxlbWVudCB0aGF0IHlvdSdkIGxpa2UgdGhlIGVmZmVjdHMgZnJvbSBzY3JvbGxpbmcgdGhlIHNjcm9sbEVsZW1lbnQgYXBwbGllZCBcclxuXHQvLyB0bzsgZXNzZW50aWFsbHkgdGhlIGVsZW1lbnQgdGhhdCBtb3ZlcyBhcyB5b3Ugc2Nyb2xsXHJcblx0cGFyYWxsYXhFbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0Ly8gd2hhdCB5b3Ugd2FudCB0byBjYWxsIGl0IHRvIGZpbmQgdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2Ugb2YgaXQgaWYgeW91IG5lZWQgdG8gZGVidWdcclxuXHRuYW1lPzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGFjdGlvbnMgZHVyaW5nIHNjYWxpbmdcclxuXHRjYj8oKTogdm9pZDtcclxuXHRcclxuXHQvLyBhcmd1bWVudHMgZm9yIG9wdGlvbmFsIGNhbGxiYWNrIGVudGVyZWQgaW50byBhbiBhcnJheTsgZm9yIGNvbnRleHQtc3BlY2lmaWMgXHJcblx0Y2JfYXJncz86IGFueVtdO1xyXG5cdFxyXG5cdC8vIGNhbGxiYWNrIGNvbnRleHQgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGNhbGxiYWNrIGlzIGNvbnRleHQtc3BlY2lmaWNcclxuXHRjYl9jb250ZXh0PzogYW55O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3BhcmFsbGF4XSdcclxufSlcclxuXHJcbmNsYXNzIFBhcmFsbGF4IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuYW1lOiBzdHJpbmcgPSAncGFyYWxsYXhEaXJlY3RpdmUnO1xyXG5cdFxyXG4gICAgQElucHV0KCkgY29uZmlnOiBQYXJhbGxheENvbmZpZztcclxuICAgIGNzc0tleTogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XHJcblx0cGFyYWxsYXhDc3M6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcclxuXHRwYXJhbGxheEF4aXM6IHN0cmluZyA9ICdZJztcclxuICAgIHBhcmFsbGF4UmF0aW86IG51bWJlciA9IC0uNztcclxuICAgIHBhcmFsbGF4SW5pdFZhbDogbnVtYmVyID0gMDtcclxuXHRzY3JvbGxlcklkOiBzdHJpbmc7XHJcblx0bWF4VmFsdWU6IG51bWJlcjtcclxuXHRtaW5WYWx1ZTogbnVtYmVyO1xyXG5cdGNzc1VuaXQ6IHN0cmluZyA9ICdweCc7XHJcblx0Y2I7XHJcblx0Y2JfY29udGV4dDogYW55ID0gbnVsbDtcclxuXHRjYl9hcmdzOiBhbnlbXSA9IFtdO1xyXG5cdFxyXG4gICAgY3NzVmFsdWU6IHN0cmluZztcclxuICAgIGlzU3BlY2lhbFZhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFxyXG5cdGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRzY3JvbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRwYXJhbGxheEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdHByaXZhdGUgZXZhbHVhdGVTY3JvbGwgPSAoKSA9PiB7XHJcblx0XHRsZXQgcmVzdWx0VmFsOiBzdHJpbmc7XHJcblx0XHRsZXQgY2FsY1ZhbDogbnVtYmVyO1xyXG5cdFx0XHJcblx0XHRjYWxjVmFsID0gdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCAqIHRoaXMucGFyYWxsYXhSYXRpbyArIHRoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5tYXhWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPj0gdGhpcy5tYXhWYWx1ZSlcclxuXHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWF4VmFsdWU7XHJcblx0XHRlbHNlIGlmICh0aGlzLm1pblZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FsY1ZhbCA8PSB0aGlzLm1pblZhbHVlKVxyXG5cdFx0XHRjYWxjVmFsID0gdGhpcy5taW5WYWx1ZTtcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMuY3NzS2V5ID09PSAnYmFja2dyb3VuZFBvc2l0aW9uJykge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJhbGxheEF4aXMgPT09ICdYJykge1xyXG5cdFx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnIDAnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdFZhbCA9ICcwICcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNTcGVjaWFsVmFsKSB7XHJcblx0XHRcdHJlc3VsdFZhbCA9IHRoaXMuY3NzVmFsdWUgKyAnKCcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyknO1xyXG5cdFx0fSBlbHNlIHsgXHJcblx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmNiKSB7XHJcblx0XHRcdHRoaXMuY2IuYXBwbHkodGhpcy5jYl9jb250ZXh0LCB0aGlzLmNiX2FyZ3MpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudC5zdHlsZVt0aGlzLmNzc0tleV0gPSByZXN1bHRWYWw7XHJcblx0fVxyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0bGV0IGNzc1ZhbEFycmF5OiBzdHJpbmdbXTtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coJyVzIGluaXRpYWxpemVkIG9uIGVsZW1lbnQnLCB0aGlzLm5hbWUsIHRoaXMuaG9zdEVsZW1lbnQpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcyk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHByb3AgaW4gdGhpcy5jb25maWcpIHsgdGhpc1twcm9wXSA9IHRoaXMuY29uZmlnW3Byb3BdOyB9XHJcblx0XHR0aGlzLnBhcmFsbGF4Q3NzID0gdGhpcy5wYXJhbGxheENzcyA/IHRoaXMucGFyYWxsYXhDc3MgOiAnYmFja2dyb3VuZFBvc2l0aW9uWSc7XHJcblx0XHRpZiAodGhpcy5wYXJhbGxheENzcy5tYXRjaCgvYmFja2dyb3VuZFBvc2l0aW9uL2kpKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCdiYWNrZ3JvdW5kUG9zaXRpb24nKVsxXS50b1VwcGVyQ2FzZSgpID09PSAnWCcpIHtcclxuXHRcdFx0XHR0aGlzLnBhcmFsbGF4QXhpcyA9ICdYJztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5wYXJhbGxheENzcyA9ICdiYWNrZ3JvdW5kUG9zaXRpb24nO1xyXG5cdFx0fVxyXG5cdFx0XHJcbiAgICAgICAgY3NzVmFsQXJyYXkgPSB0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgdGhpcy5jc3NLZXkgPSBjc3NWYWxBcnJheVswXTtcclxuICAgICAgICB0aGlzLmNzc1ZhbHVlID0gY3NzVmFsQXJyYXlbMV07XHJcblx0XHRcclxuICAgICAgICB0aGlzLmlzU3BlY2lhbFZhbCA9IHRoaXMuY3NzVmFsdWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNzc1ZhbHVlKSB0aGlzLmNzc1ZhbHVlID0gdGhpcy5jc3NLZXk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnBhcmFsbGF4UmF0aW8gPSArdGhpcy5wYXJhbGxheFJhdGlvO1xyXG4gICAgICAgIHRoaXMucGFyYWxsYXhJbml0VmFsID0gK3RoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudCA9IHRoaXMucGFyYWxsYXhFbGVtZW50IHx8IHRoaXMuaG9zdEVsZW1lbnQ7XHJcblx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudCkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJykpXHJcblx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJyk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuc2Nyb2xsZXJJZCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNjcm9sbGVySWQpO1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpXHJcblx0XHRcdFx0XHRcdHRocm93KGBUaGUgSUQgcGFzc2VkIHRocm91Z2ggdGhlIHBhcmFsbGF4Q29uZmlnICgnJHt0aGlzLnNjcm9sbGVySWR9Jykgb2JqZWN0IHdhcyBub3QgZm91bmQgaW4gdGhlIGRvY3VtZW50LiAgRGVmYXVsdGluZyB0byB3YXRjaCBzY3JvbGxpbmcgb2YgdGhlIGJvZHkuYCk7XHJcblx0XHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMuZXZhbHVhdGVTY3JvbGwoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZXZhbHVhdGVTY3JvbGwpO1xyXG5cdH1cclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMuaG9zdEVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1BhcmFsbGF4fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
