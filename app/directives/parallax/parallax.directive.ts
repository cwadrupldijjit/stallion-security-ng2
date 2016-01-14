// ng2-parallax

import {Directive, ElementRef, Host, Input, OnInit} from 'angular2/core';

/* 
These are optional values you can include in the config object you can pass into the 
directive for custom properties you want to use this with.  This tool can be used for 
more than just the parallax effect, and it is able to transform anything about the 
[parallaxElement] that you want to have bound to the scrolling of the nested element.  

*/
interface ParallaxConfig {
	// the css property (converted to camelCase) that you want changed along with the
	// value you want to assign to the css key; you should use ParallaxCss if you're 
	// just defining one property without special values
	cssKey?: string;
	
	// this is used to define the css property you'd like to modify as you scroll
	// default is backgroundPositionY
	parallaxCss?: string;
	
	// ratio defining how fast, slow, or the direction of the changes on scrolling
	parallaxRatio?: number;
	
	// this is the initial value in pixels for the parallaxCss property you defined
	// before or, if you didn't define one, it defaults to 0
	parallaxInitVal?: number;
	
	// the id for the element on the page you'd like to track the scrolling of in the 
	// case where the element is not available in the current component; 
	// if no id is defined along with no scrollElement below, 
	// it defaults to the scrolling of the body
	scrollerId?: string;
	
	// the upper constraint for the css transformation
	maxValue?: number;
	
	// the lower constraint for the css transformation
	minValue?: number;
	
	// the unit (e.g. 'px', 'em', '%', 'vh', etc.) you want for the parallax effect to use 
	cssUnit?: string;
	
	// the element in the current component that you'd like the directive to track its 
	// position as it scrolls;  gets assigned to the body if nothing is defined
	scrollElement?: HTMLElement;
	
	// the element that you'd like the effects from scrolling the scrollElement applied 
	// to; essentially the element that moves as you scroll
	parallaxElement?: HTMLElement;
	
	// what you want to call it to find the particular instance of it if you need to debug
	name: string;
}

@Directive({
    selector: '[parallax]'
})

class Parallax implements OnInit {
	name: string = 'parallaxDirective';
	
    @Input() config: ParallaxConfig;
    cssKey: string = 'backgroundPosition';
	parallaxCss: string = 'backgroundPositionY';
	parallaxAxis: string = 'Y';
    parallaxRatio: number = -.7;
    parallaxInitVal: number = 0;
	scrollerId: string;
	maxValue: number;
	minValue: number;
	cssUnit: string = 'px';
	
    cssValue: string;
    isSpecialVal: boolean = false;
	
	hostElement: HTMLElement;
	scrollElement: HTMLElement;
	parallaxElement: HTMLElement;
	
	private evaluateScroll = () => {
		let resultVal: string;
		let calcVal: number;
		
		calcVal = this.scrollElement.scrollTop * this.parallaxRatio + this.parallaxInitVal;
		
		if (this.maxValue && calcVal >= this.maxValue)
			calcVal = this.maxValue;
		else if (this.minValue && calcVal <= this.minValue)
			calcVal = this.minValue;
		
		if (this.cssKey === 'backgroundPosition') {
			if (this.parallaxAxis === 'X') {
				resultVal = calcVal + this.cssUnit + ' 0';
			} else {
				resultVal = '0 ' + calcVal + this.cssUnit;
			}
		} else if (this.isSpecialVal) {
			resultVal = this.cssValue + '(' + calcVal + this.cssUnit + ')';
		} else { 
			resultVal = calcVal + this.cssUnit;
		}
		this.parallaxElement.style[this.cssKey] = resultVal;
	}
	
	ngOnInit() {
		let cssValArray: string[];
		
		console.log('%s initialized on element', this.name, this.hostElement);
		console.log(this);
		
		for (let prop in this.config) { this[prop] = this.config[prop]; }
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
        if (!this.cssValue) this.cssValue = this.cssKey;
		
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
						throw(`The ID passed through the parallaxConfig ('${this.scrollerId}') object was not found in the document.  Defaulting to watch scrolling of the body.`);
				} catch(e) {
					console.warn(e);
					this.scrollElement = document.getElementsByTagName('body')[0];
				}
			} else this.scrollElement = document.getElementsByTagName('body')[0];
		}
		
		this.evaluateScroll();
		
		this.scrollElement.addEventListener('scroll', this.evaluateScroll);
	}
	
    constructor(element: ElementRef) {
		this.hostElement = element.nativeElement;
    }
}


export {Parallax}