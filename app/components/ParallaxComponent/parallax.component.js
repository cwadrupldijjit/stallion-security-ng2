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
                    // this.parallaxCssVal = this.parallaxCss ? this.parallaxCss : 'top';
                    // this.cssValArray = this.parallaxCssVal.split(':');
                    // this.cssKey = this.cssValArray[0];
                    // this.cssValue = this.cssValArray[1];
                    var _this = this;
                    // this.isSpecialVal = this.cssValue ? true : false;
                    // if (!this.cssValue) this.cssValue = this.cssKey;
                    // this.parallaxRatio = this.parallaxRatio ? +this.parallaxRatio : 1.1;
                    // this.parallaxInitVal = this.parallaxInitVal ? +this.parallaxInitVal : 0;
                    // // if (this.elem)
                    // //     console.log(this.elem.style) //(this.cssKey, this.parallaxInitVal + 'px');
                    // function _onScroll() {
                    //     var resultVal;
                    //     var calcVal = window.pageYOffset * this.parallaxRatio + this.parallaxInitVal;
                    //     if (this.isSpecialVal) {
                    //         resultVal = '' + this.cssValue + '(' + calcVal + 'px)';
                    //     } else {
                    //         resultVal = calcVal + 'px';
                    //     }
                    //     this.elem.css(this.cssKey, resultVal);
                    // };
                    setTimeout(function () {
                        console.log(_this.config);
                    }, 0);
                    // console.log(this.config);
                    // this.printStuff = (data) => {
                    //     console.log(data);
                    // };
                    // window.addEventListener('scroll', _onScroll);
                }
                PerfectParallax.prototype.onChange = function (changes) {
                    console.log('changed PerfectParallax span');
                };
                PerfectParallax.prototype.parallaxRun = function (data) {
                    var cssValArray;
                    console.log(this.cssKey);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PerfectParallax.prototype, "config", void 0);
                __decorate([
                    core_1.Input('css-key'), 
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
                ], PerfectParallax.prototype, "parallaxCss", void 0);
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
                    __metadata('design:type', Number)
                ], PerfectParallax.prototype, "parallaxInitVal", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PerfectParallax.prototype, "isSpecialVal", void 0);
                __decorate([
                    core_1.Host(), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], PerfectParallax.prototype, "parallaxRun", null);
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
                        template: '<div>{{cssKey}}</div>',
                        styles: ["\n\t\t* {\n\t\t\theight: 70px;\n\t\t}\n\t"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWxsYXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYWxsYXguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlBlcmZlY3RQYXJhbGxheCIsIlBlcmZlY3RQYXJhbGxheC5jb25zdHJ1Y3RvciIsIlBlcmZlY3RQYXJhbGxheC5vbkNoYW5nZSIsIlBlcmZlY3RQYXJhbGxheC5wYXJhbGxheFJ1biIsIlBhcmFsbGF4Q29tcG9uZW50IiwiUGFyYWxsYXhDb21wb25lbnQuY29uc3RydWN0b3IiLCJQYXJhbGxheENvbXBvbmVudC5jb25zdHJ1Y3Rvci5fb25TY3JvbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQThCSUE7b0JBQ0ZDLHFFQUFxRUE7b0JBQy9EQSxxREFBcURBO29CQUNyREEscUNBQXFDQTtvQkFDckNBLHVDQUF1Q0E7b0JBbEMvQ0EsaUJBcUVDQTtvQkFqQ09BLG9EQUFvREE7b0JBQ3BEQSxtREFBbURBO29CQUVuREEsdUVBQXVFQTtvQkFDdkVBLDJFQUEyRUE7b0JBQzNFQSxvQkFBb0JBO29CQUNwQkEsb0ZBQW9GQTtvQkFFcEZBLHlCQUF5QkE7b0JBQ3pCQSxxQkFBcUJBO29CQUNyQkEsb0ZBQW9GQTtvQkFFcEZBLCtCQUErQkE7b0JBQy9CQSxrRUFBa0VBO29CQUNsRUEsZUFBZUE7b0JBQ2ZBLHNDQUFzQ0E7b0JBQ3RDQSxRQUFRQTtvQkFDUkEsNkNBQTZDQTtvQkFDN0NBLEtBQUtBO29CQUVYQSxVQUFVQSxDQUFDQTt3QkFFVkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFFTkEsNEJBQTRCQTtvQkFFdEJBLGdDQUFnQ0E7b0JBQ2hDQSx5QkFBeUJBO29CQUN6QkEsS0FBS0E7b0JBRUxBLGdEQUFnREE7Z0JBQ3BEQSxDQUFDQTtnQkFoREpELGtDQUFRQSxH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