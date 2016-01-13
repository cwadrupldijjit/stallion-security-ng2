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
	// just defining one key without special properties
	cssKey?: string;
	
	// this is used to define the css property you'd like to modify as you scroll
	// default is backgroundPositionY
	parallaxCss?: string;
	
	// ratio defining how fast, slow, or the direction of the changes on scrolling
	parallaxRatio?: number;
	
	// this is the initial value for the parallaxCss property you defined before or,
	// if you didn't define one, it defaults to 0
	parallaxInitVal?: number;
	
	// the id for the element on the page you'd like to track the scrolling of in the 
	// case where the element is not available in the current component; 
	// if no id is defined along with no scrollElement below, 
	// it defaults to the scrolling of the body
	scrollId?: string;
	
	// the element you'd like to track the scrolling of
	scrollElement?: HTMLElement;
	
	// 
	parallaxElement?: HTMLElement;
}

@Directive({
    selector: '[parallax]'
})

class Parallax implements OnInit {
	name: string = 'parallaxDirective';
    @Input() config: ParallaxConfig;
    cssKey: string;
    cssValue: string;
	parallaxCss: string;
    parallaxRatio: number;
    parallaxInitVal: number;
    isSpecialVal: boolean;
	scrollId: string;
	hostElement: HTMLElement;
	scrollElement: HTMLElement;
	parallaxElement: HTMLElement;
	
	private evaluateScroll = () => {
		let resultVal, calcVal = this.scrollElement.scrollTop * this.parallaxRatio + this.parallaxInitVal;
		if (this.isSpecialVal) resultVal = this.cssValue + '(' + calcVal + 'px)';
		else resultVal = calcVal + 'px';
		this.parallaxElement.style[this.cssKey] = resultVal;
	}
	
	ngOnInit() {
		let cssValArray: string[];
		
		// console.log('%s initialized on element', this.name, this.hostElement);
		
		for (let prop in this.config) { this[prop] = this.config[prop]; }
		
		this.parallaxCss = this.parallaxCss ? this.parallaxCss : 'backgroundPositionY';
        cssValArray = this.parallaxCss.split(':');
        this.cssKey = cssValArray[0];
        this.cssValue = cssValArray[1];
		
        this.isSpecialVal = this.cssValue ? true : false;
        if (!this.cssValue) this.cssValue = this.cssKey;
		
        this.parallaxRatio = this.parallaxRatio ? +this.parallaxRatio : 1.1;
        this.parallaxInitVal = this.parallaxInitVal ? +this.parallaxInitVal : 0;
		
		this.parallaxElement = this.parallaxElement || this.hostElement;
		if (!this.scrollElement) {
			if (document.getElementById('parallaxScroll'))
				this.scrollElement = document.getElementById('parallaxScroll');
			else if (this.scrollId) {
				this.scrollElement = document.getElementById(this.scrollId);
				if (!this.scrollElement)
					throw(`The ID passed through the parallaxConfig (${this.scrollId}) object was not found in the document. Context reported below.`);
			}
			else
				this.scrollElement = document.getElementsByTagName('body')[0]; 
		}
			
		
		this.evaluateScroll();
		
		this.scrollElement.addEventListener('scroll', this.evaluateScroll);
	}
	
    constructor(element: ElementRef) {
		this.hostElement = element.nativeElement;
    }
}


export {Parallax}