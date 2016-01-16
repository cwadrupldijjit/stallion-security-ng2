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
                    // the following @Inputs are all part of the config object, which for 
                    // brevity's sake, you can do a bunch of operations in bulk by passing 
                    // in the config object; caveat for this is that angular 2 won't permit 
                    // more than 9 keys being passed in an object via the template
                    this.cssKey = 'backgroundPosition';
                    this.parallaxCss = 'backgroundPositionY';
                    this.parallaxAxis = 'Y';
                    this.parallaxRatio = -.7;
                    this.parallaxInitVal = 0;
                    this.parallaxIf = true;
                    this.cssUnit = 'px';
                    this.cb_context = null;
                    this.cb_args = [];
                    this.isSpecialVal = false;
                    this.evaluateScroll = function () {
                        if (_this.parallaxIf) {
                            var resultVal;
                            var calcVal;
                            calcVal = _this.scrollElement.scrollTop * _this.parallaxRatio + _this.parallaxInitVal;
                            if (_this.maxValue !== undefined && calcVal >= _this.maxValue)
                                calcVal = _this.maxValue;
                            else if (_this.minValue !== undefined && calcVal <= _this.minValue)
                                calcVal = _this.minValue;
                            // added after realizing original setup wasn't compatible in Firefox
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
                            _this.parallaxStyles[_this.cssKey] = resultVal;
                        }
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
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "cssKey", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "parallaxCss", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "parallaxAxis", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "parallaxRatio", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "parallaxInitVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "parallaxIf", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "scrollerId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "maxValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Parallax.prototype, "minValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Parallax.prototype, "cssUnit", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "cb", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Parallax.prototype, "cb_context", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], Parallax.prototype, "cb_args", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', HTMLElement)
                ], Parallax.prototype, "scrollElement", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', HTMLElement)
                ], Parallax.prototype, "parallaxElement", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kaXJlY3RpdmVzL3BhcmFsbGF4L3BhcmFsbGF4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6WyJQYXJhbGxheCIsIlBhcmFsbGF4LmNvbnN0cnVjdG9yIiwiUGFyYWxsYXgubmdPbkluaXQiXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5RWY7Z0JBb0hJQSxrQkFBWUEsT0FBbUJBO29CQXBIbkNDLGlCQXVIQ0E7b0JBbEhBQSxTQUFJQSxHQUFXQSxtQkFBbUJBLENBQUNBO29CQUduQ0Esc0VBQXNFQTtvQkFDdEVBLHVFQUF1RUE7b0JBQ3ZFQSx3RUFBd0VBO29CQUN4RUEsOERBQThEQTtvQkFDbERBLFdBQU1BLEdBQVdBLG9CQUFvQkEsQ0FBQ0E7b0JBQ3pDQSxnQkFBV0EsR0FBV0EscUJBQXFCQSxDQUFDQTtvQkFDNUNBLGlCQUFZQSxHQUFXQSxHQUFHQSxDQUFDQTtvQkFDeEJBLGtCQUFhQSxHQUFXQSxDQUFDQSxFQUFFQSxDQUFDQTtvQkFDNUJBLG9CQUFlQSxHQUFXQSxDQUFDQSxDQUFDQTtvQkFDL0JBLGVBQVVBLEdBQVFBLElBQUlBLENBQUNBO29CQUl2QkEsWUFBT0EsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBRXZCQSxlQUFVQSxHQUFRQSxJQUFJQSxDQUFDQTtvQkFDdkJBLFlBQU9BLEdBQVVBLEVBQUVBLENBQUNBO29CQUtsQkEsaUJBQVlBLEdBQVlBLEtBQUtBLENBQUNBO29CQU1qQ0EsbUJBQWNBLEdBQUdBO3dCQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBQ3JCQSxJQUFJQSxTQUFpQkEsQ0FBQ0E7NEJBQ3RCQSxJQUFJQSxPQUFlQSxDQUFDQTs0QkFFcEJBLE9BQU9BLEdBQUdBLEtBQUlBLENBQUNBLGFBQWFBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUlBLENBQUNBLGFBQWFBLEdBQUdBLEtBQUlBLENBQUNBLGVBQWVBLENBQUNBOzRCQUVu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K0JBQVEiLCJmaWxlIjoiYXBwL2RpcmVjdGl2ZXMvcGFyYWxsYXgvcGFyYWxsYXguZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmcyLXBhcmFsbGF4XHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIFxyXG5cdFx0IEVsZW1lbnRSZWYsIFxyXG5cdFx0IEhvc3QsIFxyXG5cdFx0IElucHV0LFxyXG5cdFx0IE9wdGlvbmFsLCBcclxuXHRcdCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbi8qIFxyXG5UaGVzZSBhcmUgb3B0aW9uYWwgdmFsdWVzIHlvdSBjYW4gaW5jbHVkZSBpbiB0aGUgY29uZmlnIG9iamVjdCB5b3UgY2FuIHBhc3MgaW50byB0aGUgXHJcbmRpcmVjdGl2ZSBmb3IgY3VzdG9tIHByb3BlcnRpZXMgeW91IHdhbnQgdG8gdXNlIHRoaXMgd2l0aC4gIFRoaXMgdG9vbCBjYW4gYmUgdXNlZCBmb3IgXHJcbm1vcmUgdGhhbiBqdXN0IHRoZSBwYXJhbGxheCBlZmZlY3QsIGFuZCBpdCBpcyBhYmxlIHRvIHRyYW5zZm9ybSBhbnl0aGluZyBhYm91dCB0aGUgXHJcbltwYXJhbGxheEVsZW1lbnRdIHRoYXQgeW91IHdhbnQgdG8gaGF2ZSBib3VuZCB0byB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBuZXN0ZWQgZWxlbWVudC4gIFxyXG5cclxuKi9cclxuaW50ZXJmYWNlIFBhcmFsbGF4Q29uZmlnIHtcclxuXHQvLyB0aGUgY3NzIHByb3BlcnR5IChjb252ZXJ0ZWQgdG8gY2FtZWxDYXNlKSB0aGF0IHlvdSB3YW50IGNoYW5nZWQgYWxvbmcgd2l0aCB0aGVcclxuXHQvLyB2YWx1ZSB5b3Ugd2FudCB0byBhc3NpZ24gdG8gdGhlIGNzcyBrZXk7IHlvdSBzaG91bGQgdXNlIFBhcmFsbGF4Q3NzIGlmIHlvdSdyZSBcclxuXHQvLyBqdXN0IGRlZmluaW5nIG9uZSBwcm9wZXJ0eSB3aXRob3V0IHNwZWNpYWwgdmFsdWVzXHJcblx0Y3NzS2V5Pzogc3RyaW5nO1xyXG5cdFxyXG5cdC8vIHRoaXMgaXMgdXNlZCB0byBkZWZpbmUgdGhlIGNzcyBwcm9wZXJ0eSB5b3UnZCBsaWtlIHRvIG1vZGlmeSBhcyB5b3Ugc2Nyb2xsXHJcblx0Ly8gZGVmYXVsdCBpcyBiYWNrZ3JvdW5kUG9zaXRpb25ZXHJcblx0cGFyYWxsYXhDc3M/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gcmF0aW8gZGVmaW5pbmcgaG93IGZhc3QsIHNsb3csIG9yIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNoYW5nZXMgb24gc2Nyb2xsaW5nXHJcblx0cGFyYWxsYXhSYXRpbz86IG51bWJlcjtcclxuXHRcclxuXHQvLyB0aGlzIGlzIHRoZSBpbml0aWFsIHZhbHVlIGluIHBpeGVscyBmb3IgdGhlIHBhcmFsbGF4Q3NzIHByb3BlcnR5IHlvdSBkZWZpbmVkXHJcblx0Ly8gYmVmb3JlIG9yLCBpZiB5b3UgZGlkbid0IGRlZmluZSBvbmUsIGl0IGRlZmF1bHRzIHRvIDBcclxuXHRwYXJhbGxheEluaXRWYWw/OiBudW1iZXI7XHJcblx0XHJcblx0Ly8gdXNlIHRoaXMgaWYgeW91IHdhbnQgdGhlIHBhcmFsbGF4IGVmZmVjdCBvbmx5IGlmIHRoZSBwYXNzZWQgaW4gc3RhdGVtZW50IGlzIFxyXG5cdC8vIHRydXRoeTsgZGVmYXVsdCBpcyBib29sZWFuIHRydWVcclxuXHRwYXJhbGxheElmPzogYW55O1xyXG5cdFxyXG5cdC8vIHRoZSBpZCBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIHBhZ2UgeW91J2QgbGlrZSB0byB0cmFjayB0aGUgc2Nyb2xsaW5nIG9mIGluIHRoZSBcclxuXHQvLyBjYXNlIHdoZXJlIHRoZSBlbGVtZW50IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50OyBcclxuXHQvLyBpZiBubyBpZCBpcyBkZWZpbmVkIGFsb25nIHdpdGggbm8gc2Nyb2xsRWxlbWVudCBiZWxvdywgXHJcblx0Ly8gaXQgZGVmYXVsdHMgdG8gdGhlIHNjcm9sbGluZyBvZiB0aGUgYm9keVxyXG5cdHNjcm9sbGVySWQ/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gdGhlIHVwcGVyIGNvbnN0cmFpbnQgZm9yIHRoZSBjc3MgdHJhbnNmb3JtYXRpb25cclxuXHRtYXhWYWx1ZT86IG51bWJlcjtcclxuXHRcclxuXHQvLyB0aGUgbG93ZXIgY29uc3RyYWludCBmb3IgdGhlIGNzcyB0cmFuc2Zvcm1hdGlvblxyXG5cdG1pblZhbHVlPzogbnVtYmVyO1xyXG5cdFxyXG5cdC8vIHRoZSB1bml0IChlLmcuICdweCcsICdlbScsICclJywgJ3ZoJywgZXRjLikgeW91IHdhbnQgZm9yIHRoZSBwYXJhbGxheCBlZmZlY3QgdG8gdXNlIFxyXG5cdGNzc1VuaXQ/OiBzdHJpbmc7XHJcblx0XHJcblx0Ly8gdGhlIGVsZW1lbnQgaW4gdGhlIGN1cnJlbnQgY29tcG9uZW50IHRoYXQgeW91J2QgbGlrZSB0aGUgZGlyZWN0aXZlIHRvIHRyYWNrIGl0cyBcclxuXHQvLyBwb3NpdGlvbiBhcyBpdCBzY3JvbGxzOyAgZ2V0cyBhc3NpZ25lZCB0byB0aGUgYm9keSBpZiBub3RoaW5nIGlzIGRlZmluZWRcclxuXHRzY3JvbGxFbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcblx0XHJcblx0Ly8gdGhlIGVsZW1lbnQgdGhhdCB5b3UnZCBsaWtlIHRoZSBlZmZlY3RzIGZyb20gc2Nyb2xsaW5nIHRoZSBzY3JvbGxFbGVtZW50IGFwcGxpZWQgXHJcblx0Ly8gdG87IGVzc2VudGlhbGx5IHRoZSBlbGVtZW50IHRoYXQgbW92ZXMgYXMgeW91IHNjcm9sbFxyXG5cdHBhcmFsbGF4RWxlbWVudD86IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdC8vIHdoYXQgeW91IHdhbnQgdG8gY2FsbCBpdCB0byBmaW5kIHRoZSBwYXJ0aWN1bGFyIGluc3RhbmNlIG9mIGl0IGlmIHlvdSBuZWVkIHRvIGRlYnVnXHJcblx0bmFtZT86IHN0cmluZztcclxuXHRcclxuXHQvLyBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBhY3Rpb25zIGR1cmluZyBzY2FsaW5nXHJcblx0Y2I/KCk6IHZvaWQ7XHJcblx0XHJcblx0Ly8gYXJndW1lbnRzIGZvciBvcHRpb25hbCBjYWxsYmFjayBlbnRlcmVkIGludG8gYW4gYXJyYXk7IGZvciBjb250ZXh0LXNwZWNpZmljIFxyXG5cdGNiX2FyZ3M/OiBhbnlbXTtcclxuXHRcclxuXHQvLyBjYWxsYmFjayBjb250ZXh0IGluIHRoZSBjYXNlIHdoZXJlIHRoZSBjYWxsYmFjayBpcyBjb250ZXh0LXNwZWNpZmljXHJcblx0Y2JfY29udGV4dD86IGFueTtcclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1twYXJhbGxheF0nXHJcbn0pXHJcblxyXG5jbGFzcyBQYXJhbGxheCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0bmFtZTogc3RyaW5nID0gJ3BhcmFsbGF4RGlyZWN0aXZlJztcclxuXHRcclxuICAgIEBJbnB1dCgpIGNvbmZpZzogUGFyYWxsYXhDb25maWc7XHJcblx0Ly8gdGhlIGZvbGxvd2luZyBASW5wdXRzIGFyZSBhbGwgcGFydCBvZiB0aGUgY29uZmlnIG9iamVjdCwgd2hpY2ggZm9yIFxyXG5cdC8vIGJyZXZpdHkncyBzYWtlLCB5b3UgY2FuIGRvIGEgYnVuY2ggb2Ygb3BlcmF0aW9ucyBpbiBidWxrIGJ5IHBhc3NpbmcgXHJcblx0Ly8gaW4gdGhlIGNvbmZpZyBvYmplY3Q7IGNhdmVhdCBmb3IgdGhpcyBpcyB0aGF0IGFuZ3VsYXIgMiB3b24ndCBwZXJtaXQgXHJcblx0Ly8gbW9yZSB0aGFuIDkga2V5cyBiZWluZyBwYXNzZWQgaW4gYW4gb2JqZWN0IHZpYSB0aGUgdGVtcGxhdGVcclxuICAgIEBJbnB1dCgpIGNzc0tleTogc3RyaW5nID0gJ2JhY2tncm91bmRQb3NpdGlvbic7XHJcblx0QElucHV0KCkgcGFyYWxsYXhDc3M6IHN0cmluZyA9ICdiYWNrZ3JvdW5kUG9zaXRpb25ZJztcclxuXHRASW5wdXQoKSBwYXJhbGxheEF4aXM6IHN0cmluZyA9ICdZJztcclxuICAgIEBJbnB1dCgpIHBhcmFsbGF4UmF0aW86IG51bWJlciA9IC0uNztcclxuICAgIEBJbnB1dCgpIHBhcmFsbGF4SW5pdFZhbDogbnVtYmVyID0gMDtcclxuXHRASW5wdXQoKSBwYXJhbGxheElmOiBhbnkgPSB0cnVlO1xyXG5cdEBJbnB1dCgpIHNjcm9sbGVySWQ6IHN0cmluZztcclxuXHRASW5wdXQoKSBtYXhWYWx1ZTogbnVtYmVyO1xyXG5cdEBJbnB1dCgpIG1pblZhbHVlOiBudW1iZXI7XHJcblx0QElucHV0KCkgY3NzVW5pdDogc3RyaW5nID0gJ3B4JztcclxuXHRASW5wdXQoKSBjYjtcclxuXHRASW5wdXQoKSBjYl9jb250ZXh0OiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpIGNiX2FyZ3M6IGFueVtdID0gW107XHJcblx0XHJcblx0cGFyYWxsYXhTdHlsZXM6IHt9O1xyXG5cdFxyXG4gICAgcHJpdmF0ZSBjc3NWYWx1ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpc1NwZWNpYWxWYWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcclxuXHRwcml2YXRlIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRASW5wdXQoKSBzY3JvbGxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHRASW5wdXQoKSBwYXJhbGxheEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdFxyXG5cdHByaXZhdGUgZXZhbHVhdGVTY3JvbGwgPSAoKSA9PiB7XHJcblx0XHRpZiAodGhpcy5wYXJhbGxheElmKSB7XHJcblx0XHRcdGxldCByZXN1bHRWYWw6IHN0cmluZztcclxuXHRcdFx0bGV0IGNhbGNWYWw6IG51bWJlcjtcclxuXHRcdFx0XHJcblx0XHRcdGNhbGNWYWwgPSB0aGlzLnNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wICogdGhpcy5wYXJhbGxheFJhdGlvICsgdGhpcy5wYXJhbGxheEluaXRWYWw7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGhpcy5tYXhWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPj0gdGhpcy5tYXhWYWx1ZSlcclxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5tYXhWYWx1ZTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5taW5WYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGNhbGNWYWwgPD0gdGhpcy5taW5WYWx1ZSlcclxuXHRcdFx0XHRjYWxjVmFsID0gdGhpcy5taW5WYWx1ZTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGFkZGVkIGFmdGVyIHJlYWxpemluZyBvcmlnaW5hbCBzZXR1cCB3YXNuJ3QgY29tcGF0aWJsZSBpbiBGaXJlZm94XHJcblx0XHRcdGlmICh0aGlzLmNzc0tleSA9PT0gJ2JhY2tncm91bmRQb3NpdGlvbicpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5wYXJhbGxheEF4aXMgPT09ICdYJykge1xyXG5cdFx0XHRcdFx0cmVzdWx0VmFsID0gY2FsY1ZhbCArIHRoaXMuY3NzVW5pdCArICcgMCc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlc3VsdFZhbCA9ICcwICcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmlzU3BlY2lhbFZhbCkge1xyXG5cdFx0XHRcdHJlc3VsdFZhbCA9IHRoaXMuY3NzVmFsdWUgKyAnKCcgKyBjYWxjVmFsICsgdGhpcy5jc3NVbml0ICsgJyknO1xyXG5cdFx0XHR9IGVsc2UgeyBcclxuXHRcdFx0XHRyZXN1bHRWYWwgPSBjYWxjVmFsICsgdGhpcy5jc3NVbml0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGhpcy5jYikge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCd0aGlzIHNob3VsZCBiZSBydW5uaW5nJylcclxuXHRcdFx0XHR0aGlzLmNiLmFwcGx5KHRoaXMuY2JfY29udGV4dCwgdGhpcy5jYl9hcmdzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5wYXJhbGxheFN0eWxlc1t0aGlzLmNzc0tleV0gPSByZXN1bHRWYWw7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0bGV0IGNzc1ZhbEFycmF5OiBzdHJpbmdbXTtcclxuXHRcdFxyXG5cdFx0Ly8gY29uc29sZS5sb2coJyVzIGluaXRpYWxpemVkIG9uIGVsZW1lbnQnLCB0aGlzLm5hbWUsIHRoaXMuaG9zdEVsZW1lbnQpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcyk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHByb3AgaW4gdGhpcy5jb25maWcpIHsgdGhpc1twcm9wXSA9IHRoaXMuY29uZmlnW3Byb3BdOyB9XHJcblx0XHR0aGlzLnBhcmFsbGF4Q3NzID0gdGhpcy5wYXJhbGxheENzcyA/IHRoaXMucGFyYWxsYXhDc3MgOiAnYmFja2dyb3VuZFBvc2l0aW9uWSc7XHJcblx0XHRpZiAodGhpcy5wYXJhbGxheENzcy5tYXRjaCgvYmFja2dyb3VuZFBvc2l0aW9uL2kpKSB7XHJcblx0XHRcdGlmICh0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCdiYWNrZ3JvdW5kUG9zaXRpb24nKVsxXS50b1VwcGVyQ2FzZSgpID09PSAnWCcpIHtcclxuXHRcdFx0XHR0aGlzLnBhcmFsbGF4QXhpcyA9ICdYJztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5wYXJhbGxheENzcyA9ICdiYWNrZ3JvdW5kUG9zaXRpb24nO1xyXG5cdFx0fVxyXG5cdFx0XHJcbiAgICAgICAgY3NzVmFsQXJyYXkgPSB0aGlzLnBhcmFsbGF4Q3NzLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgdGhpcy5jc3NLZXkgPSBjc3NWYWxBcnJheVswXTtcclxuICAgICAgICB0aGlzLmNzc1ZhbHVlID0gY3NzVmFsQXJyYXlbMV07XHJcblx0XHRcclxuICAgICAgICB0aGlzLmlzU3BlY2lhbFZhbCA9IHRoaXMuY3NzVmFsdWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNzc1ZhbHVlKSB0aGlzLmNzc1ZhbHVlID0gdGhpcy5jc3NLZXk7XHJcblx0XHRcclxuICAgICAgICB0aGlzLnBhcmFsbGF4UmF0aW8gPSArdGhpcy5wYXJhbGxheFJhdGlvO1xyXG4gICAgICAgIHRoaXMucGFyYWxsYXhJbml0VmFsID0gK3RoaXMucGFyYWxsYXhJbml0VmFsO1xyXG5cdFx0XHJcblx0XHR0aGlzLnBhcmFsbGF4RWxlbWVudCA9IHRoaXMucGFyYWxsYXhFbGVtZW50IHx8IHRoaXMuaG9zdEVsZW1lbnQ7XHJcblx0XHRpZiAoIXRoaXMuc2Nyb2xsRWxlbWVudCkge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJykpXHJcblx0XHRcdFx0dGhpcy5zY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmFsbGF4U2Nyb2xsJyk7XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuc2Nyb2xsZXJJZCkge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNjcm9sbGVySWQpO1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnNjcm9sbEVsZW1lbnQpXHJcblx0XHRcdFx0XHRcdHRocm93KGBUaGUgSUQgcGFzc2VkIHRocm91Z2ggdGhlIHBhcmFsbGF4Q29uZmlnICgnJHt0aGlzLnNjcm9sbGVySWR9Jykgb2JqZWN0IHdhcyBub3QgZm91bmQgaW4gdGhlIGRvY3VtZW50LiAgRGVmYXVsdGluZyB0byB3YXRjaCBzY3JvbGxpbmcgb2YgdGhlIGJvZHkuYCk7XHJcblx0XHRcdFx0fSBjYXRjaChlKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHRoaXMuc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMuZXZhbHVhdGVTY3JvbGwoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY3JvbGxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuZXZhbHVhdGVTY3JvbGwpO1xyXG5cdH1cclxuXHRcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcclxuXHRcdHRoaXMuaG9zdEVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQge1BhcmFsbGF4fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
