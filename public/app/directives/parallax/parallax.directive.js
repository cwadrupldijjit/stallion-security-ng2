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
                            // console.log('this should be running')
                            _this.cb.apply(_this.cb_context, _this.cb_args);
                        }
                        _this.parallaxElement.style[_this.cssKey] = resultVal;
                    };
                    this.hostElement = element.nativeElement;
                }
                Parallax.prototype.ngOnInit = function () {
                    var cssValArray;
                    // console.log('%s initialized on element', this.name, this.hostElement);
                    // console.log(this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6WyJQYXJhbGxheCIsIlBhcmFsbGF4LmNvbnN0cnVjdG9yIiwiUGFyYWxsYXgubmdPbkluaXQiXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnRWY7Z0JBMEdJQSxrQkFBWUEsT0FBbUJBO29CQTFHbkNDLGlCQTZHQ0E7b0JBeEdBQSxTQUFJQSxHQUFXQSxtQkFBbUJBLENBQUNBO29CQUdoQ0EsV0FBTUEsR0FBV0Esb0JBQW9CQSxDQUFDQTtvQkFDekNBLGdCQUFXQSxHQUFXQSxxQkFBcUJBLENBQUNBO29CQUM1Q0EsaUJBQVlBLEdBQVdBLEdBQUdBLENBQUNBO29CQUN4QkEsa0JBQWFBLEdBQVdBLENBQUNBLEVBQUVBLENBQUNBO29CQUM1QkEsb0JBQWVBLEdBQVdBLENBQUNBLENBQUNBO29CQUkvQkEsWUFBT0EsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBRXZCQSxlQUFVQSxHQUFRQSxJQUFJQSxDQUFDQTtvQkFDdkJBLFlBQU9BLEdBQVVBLEVBQUVBLENBQUNBO29CQUdqQkEsaUJBQVlBLEdBQVlBLEtBQUtBLENBQUNBO29CQU16QkEsbUJBQWNBLEdBQUdBO3dCQUN4QkEsSUFBSUEsU0FBaUJBLENBQUNBO3dCQUN0QkEsSUFBSUEsT0FBZUEsQ0FBQ0E7d0JBRXBCQSxPQUFPQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxhQUFhQSxHQUFHQSxLQUFJQSxDQUFDQSxlQUFlQSxDQUFDQTt3QkFFbkZBLEVBQUVBLENBQUNBLENBQUNBLEtBQUlBLENBQUNBLFFBQVFBLEtBQUtBLFNBQVNBLElBQUlBLE9BQU9BLElBQUlBLEtBQUlBLENBQUNBLFFBQVFBLENBQUNBOzRCQUMzREEsT0FBT0EsR0FBR0EsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7d0JBQ3pCQSxJQUFJQSxDQUFDQSxF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TywrQkFBUSIsImZpbGUiOiJhcHAvZGlyZWN0aXZlcy9wYXJhbGxheC9wYXJhbGxheC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZzItcGFyYWxsYXhcclxuXHJcbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbi8qIFxyXG5UaGVzZSBhcmUgb3B0aW9uYWwgdmFsdWVzIHlvdSBjYW4gaW5jbHVkZSBpbiB0aGUgY29uZmlnIG9iamVjdCB5b3UgY2FuIHBhc3MgaW50byB0aGUgXHJcbmRpcmVjdGl2ZSBmb3IgY3VzdG9tIHByb3BlcnRpZXMgeW91IHdhbnQgdG8gdXNlIHRoaXMgd2l0aC4gIFRoaXMgdG9vbCBjYW4gYmUgdXNlZCBmb3IgXHJcbm1vcmUgdGhhbiBqdXN0IHRoZSBwYXJhbGxheCBlZmZlY3QsIGFuZCBpdCBpcyBhYmxlIHRvIHRyYW5zZm9ybSBhbnl0aGluZyBhYm91dCB0aGUgXHJcbltwYXJhbGxheEVsZW1lbnRdIHRoYXQgeW91IHdhbnQgdG8gaGF2ZSBib3VuZCB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBuZXN0ZWQgZWxlbWVudC4gIFxyXG5cclxuKi9cclxuaW50ZXJmYWNlIFBhcmFsbGF4Q29uZmlnIHtcclxuXHQvLyB0aGUgY3NzIHByb3BlcnR5IChjb252ZXJ0ZWQgdG8gY2FtZWxDYXNlKSB0aGF0IHlvdSB3YW50IGNoYW5nZWQgYWxvbmcgd2l0aCB0aGVcclxuXHQvLyB2YWx1ZSB5b3Ugd2FudCB0byBhc3NpZ24gdG8gdGhlIGNzcyBrZXk7IHlvdSBzaG91bGQgdXNlIFBhcmFsbGF4Q3NzIGlmIHlvdSdyZSBcclxuXHQvLyBqdXN0IGRlZmluaW5nIG9uZSBwcm9wZXJ0eSB3aXRob3V0IHNwZWNpYWwgdmFsdWVzXHJcblx0Y3NzS2V5Pzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIHRoaXMgaXMgdXNlZCB0byBkZWZpbmUgdGhlIGNzcyBwcm9wZXJ0eSB5b3UnZCBsaWtlIHRvIG1vZGlmeSBhcyB5b3Ugc2Nyb2xsXHJcblx0Ly8gZGVmYXVsdCBpcyBiYWNrZ3JvdW5kUG9zaXRpb25ZXHJcblx0cGFyYWxsYXhDc3M/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gcmF0aW8gZGVmaW5pbmcgaG93IGZhc3QsIHNsb3csIG9yIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNoYW5nZXMgb24gc2Nyb2xsaW5nXHJcblx0cGFyYWxsYXhSYXRpbz86IG51bWJlcjtcclxuXHRcclxuXHQvLyB0aGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIGluIHBpeGVscyBmb3IgdGhlIHBhcmFsbGF4Q3NzIHByb3BlcnR5IHlvdSBkZWZpbmVkXHJcblx0Ly8gYmVmb3JlIG9yLCBpZiB5b3UgZGlkbid0IGRlZmluZSBvbmUsIGl0IGRlZmF1bHRzIHRvIDBcclxuXHRwYXJhbGxheEluaXRWYWw/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhlIGlkIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgcGFnZSB5b3UnZCBsaWtlIHRvIHRyYWNrIHRoZSBzY3JvbGxpbmcgb2YgaW4gdGhlIFxyXG5cdC8vIGNhc2Ugd2hlcmUgdGhlIGVsZW1lbnQgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBjb21wb25lbnQ7IFxyXG5cdC8vIGlmIG5vIGlkIGlzIGRlZmluZWQgYWxvbmcgd2l0aCBubyBzY3JvbGxFbGVtZW50IGJlbG93LCBcclxuXHQvLyBpdCBkZWZhdWx0cyB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBib2R5XHJcblx0c2Nyb2xsZXJJZD86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGUgdXBwZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxyXG5cdG1heFZhbHVlPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoZSBsb3dlciBjb25zdHJhaW50IGZvciB0aGUgY3NzIHRyYW5zZm9ybWF0aW9uXHJcblx0bWluVmFsdWU/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdGhlIHVuaXQgKGUuZy4gJ3B4JywgJ2VtJywgJyUnLCAndmgnLCBldGMuKSB5b3Ugd2FudCBmb3IgdGhlIHBhcmFsbGF4IGVmZmVjdCB0byB1c2UgXHJcblx0Y3NzVW5pdD86IHN0cmluZztcclxuXHRcclxuXHQvLyB0aGUgZWxlbWVudCBpbiB0aGUgY3VycmVudCBjb21wb25lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBkaXJlY3RpdmUgdG8gdHJhY2sgaXRzIFxyXG5cdC8vIHBvc2l0aW9uIGFzIGl0IHNjcm9sbHM7ICBnZXRzIGFzc2lnbmVkIHRvIHRoZSBib2R5IGlmIG5vdGhpbmcgaXMgZGVmaW5lZFxyXG5cdHNjcm9sbEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcclxuXHRcclxuXHQvLyB0aGUgZWxlbWVudCB0aGF0IHlvdSdkIGxpa2UgdGhlIGVmZmVjdHMgZnJvbSBzY3JvbGxpbmcgdGhlIHNjcm9sbEVsZW1lbnQgYXBwbGllZCBcclxuXHQvLyB0bzsgZXNzZW50aWFsbHkgdGhlIGVsZW1lbnQgdGhhdCBtb3ZlcyBhcyB5b3Ugc2Nyb2xsXHJcblx0cGFyYWxsYXhFbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0Ly8gd2hhdCB5b3Ugd2FudCB0byBjYWxsIGl0IHRvIGZpbmQgdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2Ugb2YgaXQgaWYgeW91IG5lZWQgdG8gZGVidWdcclxuXHRuYW1lPzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGFjdGlvbnMgZHVyaW5nIHNjYWxpbmdcclxuXHRjYj8oKTogdm9pZDtcclxuXHRcclxuXHQvLyBhcmd1bWVudHMgZm9yIG9wdGlvbmFsIGNhbGxiYWNrIGVudGVyZWQgaW50byBhbiBhcnJheTsgZm9yIGNvbnRleHQtc3BlY2lmaWMgXHJcblx0Y2JfYXJncz86IGFueVtdO1xyXG5cdFxyXG5cdC8vIGNhbGxiYWNrIGNvbnRleHQgaW4gdGhlIGNhc2Ugd2hlcmUgdGhlIGNhbGxiYWNrIGlzIGNvbnRleHQtc3BlY2lmaWNcclxuXHRjYl9jb250ZXh0PzogYW55O1xyXG59XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3BhcmFsbGF4XSdcclxufSlcclxuXHJcbmNsYXNzIFBhcmFsbGF4IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRuYW1lOiBzdHJpbmcgPSAncGFyYWxsYXhEaXJlY3RpdmUnO1xyXG5cdFxyXG4gICAgQElucHV0KCkgY29uZmlnOiBQYXJhbGxheENvbmZpZztcclxuICAgIGNzc0tleTogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XHJcblx0cGFyYWxsYXhDc3M6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcclxuXHRwYXJhbGxheEF4aXM6IHN0cmluZyA9ICdZJztcclxuICAgIHBhcmFsbGF4UmF0aW86IG51bWJlciA9IC0uNztcclxuICAgIHBhcmFsbGF4SW5pdFZhbDogbnVtYmVyID0gMDtcclxuXHRzY3JvbGxlcklkOiBzdHJpbmc7XHJcblx0bWF4VmFsdWU6IG51bWJlcjtcclxuXHRtaW5WYWx1ZTogbnVtYmVyO1xyXG5cdGNzc1VuaXQ6IHN0cmluZyA9ICdweCc7XHJcblx0Y2I7XHJcblx0Y2JfY29udGV4dDogYW55ID0gbnVsbDtcclxuXHRjYl9hcmdzOiBhbnlbXSA9IFtdO1xyXG5cdFxyXG4gICAgY3NzVmFsdWU6IHN0cmluZztcclxuICAgIGlzU3BlY2lhbFZhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdFxyXG5cdGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRzY3JvbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRwYXJhbGxheEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdHByaXZhdGUgZXZhbHVhdGVTY3JvbGwgPSAoKSA9PiB7XHJcblx0XHRsZXQgcmVzdWx0VmFsOiBzdHJpbmc7XHJcblx0XHRsZXQgY2FsY1ZhbDogbnVtYmVyO1xyXG5cdFx0XHJcblx0XHRjYWxjVmFsID0gdGhpcy5zY3JvbGxFbGVtZW50LnNjcm9sbFRvcCAqIHRoaXMucGFyYWxsYXhSYXRpbyArIHRoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5tYXhWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPj0gdGhpcy5tYXhWYWx1ZSlcclxuXHRcdFx0Y2FsY1ZhbCA9IHRoaXMubWF4VmFsdWU7XHJcblx0XHRlbHNlIGlmICh0aGlzLm1pblZhbHVlICE9PSB1bmRlZmluZWQgJiYgY2FsY1ZhbCA8PSB0aGlzLm1pblZhbHVlKVxyXG5cdFx0XHRjYWxjVmFsID0gdGhpcy5taW5WYWx1ZTtcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMuY3NzS2V5ID09PSAnYmFja2dyb3VuZFBvc2l0aW9uJykge1xyXG5cdFx0XHRpZiAodGhpcy5wYXJhbGxheEF4aXMgPT09ICdYJykge1xyXG5cdFx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQgKyAnIDAnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdFZhbCA9ICcwICcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuaXNTcGVjaWFsVmFsKSB7XHJcblx0XHRcdHJlc3VsdFZhbCA9IHRoaXMuY3NzVmFsdWUgKyAnKCcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyknO1xyXG5cdFx0fSBlbHNlIHsgXHJcblx0XHRcdHJlc3VsdFZhbCA9IGNhbGNWYWwgKyB0aGlzLmNzc1VuaXQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmNiKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCd0aGlzIHNob3VsZCBiZSBydW5uaW5nJylcclxuXHRcdFx0dGhpcy5jYi5hcHBseSh0aGlzLmNiX2NvbnRleHQsIHRoaXMuY2JfYXJncyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMucGFyYWxsYXhFbGVtZW50LnN0eWxlW3RoaXMuY3NzS2V5XSA9IHJlc3VsdFZhbDtcclxuXHR9XHJcblx0XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRsZXQgY3NzVmFsQXJyYXk6IHN0cmluZ1tdO1xyXG5cdFx0XHJcblx0XHQvLyBjb25zb2xlLmxvZygnJXMgaW5pdGlhbGl6ZWQgb24gZWxlbWVudCcsIHRoaXMubmFtZSwgdGhpcy5ob3N0RWxlbWVudCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgcHJvcCBpbiB0aGlzLmNvbmZpZykgeyB0aGlzW3Byb3BdID0gdGhpcy5jb25maWdbcHJvcF07IH1cclxuXHRcdHRoaXMucGFyYWxsYXhDc3MgPSB0aGlzLnBhcmFsbGF4Q3NzID8gdGhpcy5wYXJhbGxheENzcyA6ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcclxuXHRcdGlmICh0aGlzLnBhcmFsbGF4Q3NzLm1hdGNoKC9iYWNrZ3JvdW5kUG9zaXRpb24vaSkpIHtcclxuXHRcdFx0aWYgKHRoaXMucGFyYWxsYXhDc3Muc3BsaXQoJ2JhY2tncm91bmRQb3NpdGlvbicpWzFdLnRvVXBwZXJDYXNlKCkgPT09ICdYJykge1xyXG5cdFx0XHRcdHRoaXMucGFyYWxsYXhBeGlzID0gJ1gnO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnBhcmFsbGF4Q3NzID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XHJcblx0XHR9XHJcblx0XHRcclxuICAgICAgICBjc3NWYWxBcnJheSA9IHRoaXMucGFyYWxsYXhDc3Muc3BsaXQoJzonKTtcclxuICAgICAgICB0aGlzLmNzc0tleSA9IGNzc1ZhbEFycmF5WzBdO1xyXG4gICAgICAgIHRoaXMuY3NzVmFsdWUgPSBjc3NWYWxBcnJheVsxXTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMuaXNTcGVjaWFsVmFsID0gdGhpcy5jc3NWYWx1ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuY3NzVmFsdWUpIHRoaXMuY3NzVmFsdWUgPSB0aGlzLmNzc0tleTtcclxuXHRcdFxyXG4gICAgICAgIHRoaXMucGFyYWxsYXhSYXRpbyA9ICt0aGlzLnBhcmFsbGF4UmF0aW87XHJcbiAgICAgICAgdGhpcy5wYXJhbGxheEluaXRWYWwgPSArdGhpcy5wYXJhbGxheEluaXRWYWw7XHJcblx0XHRcclxuXHRcdHRoaXMucGFyYWxsYXhFbGVtZW50ID0gdGhpcy5wYXJhbGxheEVsZW1lbnQgfHwgdGhpcy5ob3N0RWxlbWVudDtcclxuXHRcdGlmICghdGhpcy5zY3JvbGxFbGVtZW50KSB7XHJcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXhTY3JvbGwnKSlcclxuXHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFyYWxsYXhTY3JvbGwnKTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5zY3JvbGxlcklkKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2Nyb2xsZXJJZCk7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudClcclxuXHRcdFx0XHRcdFx0dGhyb3coYFRoZSBJRCBwYXNzZWQgdGhyb3VnaCB0aGUgcGFyYWxsYXhDb25maWcgKCcke3RoaXMuc2Nyb2xsZXJJZH0nKSBvYmplY3Qgd2FzIG5vdCBmb3VuZCBpbiB0aGUgZG9jdW1lbnQuICBEZWZhdWx0aW5nIHRvIHdhdGNoIHNjcm9sbGluZyBvZiB0aGUgYm9keS5gKTtcclxuXHRcdFx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybihlKTtcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgdGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5ldmFsdWF0ZVNjcm9sbCgpO1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjcm9sbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ldmFsdWF0ZVNjcm9sbCk7XHJcblx0fVxyXG5cdFxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xyXG5cdFx0dGhpcy5ob3N0RWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7UGFyYWxsYXh9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
