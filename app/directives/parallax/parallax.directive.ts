import {Directive, ElementRef, Host, Input, OnInit} from 'angular2/core';

/* 
These are optional values you can include in the config object you can pass into the 
directive for custom properties you want to use this with.  This tool can be used for 
more than just the parallax effect, and it is able to transform anything about the 
[parallaxElement] that you want to have bound to the scrolling of the nested element.  

*/
interface ParallaxConfig {
	cssKey?: string;
	cssValue?: string;
	parallaxCss?: string;
	parallaxCssVal?: string;
	parallaxOffset?: number;
	parallaxRatio?: number;
	parallaxInitVal?: number;
	scrollElement?: HTMLElement;
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
    parallaxOffset: number;
    parallaxRatio: number;
    parallaxInitVal: number;
    isSpecialVal: boolean;
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
		let cssValArray;
		
		console.log(this.name, 'initialized');
		console.log(this)
		
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
		
		this.scrollElement = this.scrollElement || document.getElementsByTagName('body')[0];
		
		this.evaluateScroll();
		
		this.scrollElement.addEventListener('scroll', this.evaluateScroll);
	}
	
    constructor(element: ElementRef) {
		this.hostElement = element.nativeElement;
    }
}


export {Parallax}