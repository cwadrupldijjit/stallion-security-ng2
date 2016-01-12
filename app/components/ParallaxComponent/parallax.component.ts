import {Directive, Component, Host, Input} from 'angular2/core';

interface ParallaxConfig {
	cssKey?: string;
	cssValue?: string;
	cssValArray?: string[];
	parallaxCss?: string;
	parallaxCssVal?: string;
	parallaxOffset?: number;
	parallaxRatio?: number;
	parallaxInitVal?: number;
	isSpecialVal?: boolean;
	linkedElement: HTMLElement;
}

@Directive({
    selector: '[perfectParallax]',
    inputs: [
        'cssKey: arbitrary'
    ]
})

class PerfectParallax {
    @Input() config: ParallaxConfig;
    
    @Input('css-key') cssKey: string;
    @Input() cssValue: string;
    @Input() cssValArray: string[];
	@Input() parallaxCss: string;
    @Input() parallaxCssVal: string;
    @Input() parallaxOffset: number;
    @Input() parallaxRatio: number;
    @Input() parallaxInitVal: number;
    @Input() isSpecialVal: boolean;
	
	onChange(changes) {
		console.log('changed PerfectParallax span')
	}
	
	@Host() parallaxRun(data) {
		let cssValArray;
		
		console.log(this.cssKey);
	}
	
    constructor() {
		// this.parallaxCssVal = this.parallaxCss ? this.parallaxCss : 'top';
        // this.cssValArray = this.parallaxCssVal.split(':');
        // this.cssKey = this.cssValArray[0];
        // this.cssValue = this.cssValArray[1];

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
		
		setTimeout(() => {
			
			console.log(this.config);
		}, 0);
		
		// console.log(this.config);
        
        // this.printStuff = (data) => {
        //     console.log(data);
        // };
        
        // window.addEventListener('scroll', _onScroll);
    }
}


@Component({
    selector: 'perfect-parallax',
    template: '<div>{{cssKey}}</div>',
	styles: [`
		* {
			height: 70px;
		}
	`]
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