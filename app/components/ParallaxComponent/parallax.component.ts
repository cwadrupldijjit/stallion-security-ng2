import {Directive, Component, Host, Input} from 'angular2/core';

@Directive({
    selector: '[perfectParallax]',
    inputs: [
        'cssKey: arbitrary'
    ]
})

class PerfectParallax {
    @Input() cssKey: string;
    @Input() cssValue: string;
    @Input() cssValArray: string[];
    @Input() parallaxCssVal: string;
    @Input() parallaxOffset: number;
    @Input() parallaxRatio: number;
    @Input() parallaxInitVal: string;
    @Input() isSpecialVal: boolean;
    constructor() {
    }
}


@Component({
    selector: 'perfect-parallax',
    template: '{{cssKey}}'
})

class ParallaxComponent {
    public printStuff;
    @Input() elem: HTMLElement;
    @Input() cssKey: string;
    @Input() cssValue: string;
    @Input() cssValArray: string[];
    @Input() parallaxCssVal: string;
    @Input() parallaxCss: string;
    @Input() parallaxOffset: number;
    @Input() parallaxRatio: number;
    @Input() parallaxInitVal: number;
    @Input() isSpecialVal: boolean;
    constructor() {
        this.parallaxCssVal = this.parallaxCss ? this.parallaxCss : 'top';
        this.cssValArray = this.parallaxCssVal.split(':');
        this.cssKey = this.cssValArray[0];
        this.cssValue = this.cssValArray[1];

        this.isSpecialVal = this.cssValue ? true : false;
        if (!this.cssValue) this.cssValue = this.cssKey;
        
        this.parallaxRatio = this.parallaxRatio ? +this.parallaxRatio : 1.1;
        this.parallaxInitVal = this.parallaxInitVal ? +this.parallaxInitVal : 0;
        if (this.elem)
            console.log(this.elem.style) //(this.cssKey, this.parallaxInitVal + 'px');
        
        function _onScroll() {
            var resultVal;
            var calcVal = window.pageYOffset * this.parallaxRatio + this.parallaxInitVal;

            if (this.isSpecialVal) {
                resultVal = '' + this.cssValue + '(' + calcVal + 'px)';
            } else {
                resultVal = calcVal + 'px';
            }
            this.elem.css(this.cssKey, resultVal);
        };
        
        this.printStuff = (data) => {
            console.log(data.style);
        };
        
        window.addEventListener('scroll', _onScroll);
    }
}


export {PerfectParallax, ParallaxComponent}