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
	scrollId?: string;
	
	// scrolling direction (x or y) you'd like the parallaxElement to be effected by
	scrollDirection: string;
	
	// the element in the current component that you'd like the directive to track its 
	// position as it scrolls;  gets assigned to the body if nothing is defined
	scrollElement?: HTMLElement;
	
	// the element that you'd like the effects from scrolling the scrollElement applied 
	// to; essentially the element that moves as you scroll
	parallaxElement?: HTMLElement;
}

@Directive({
    selector: '[parallax]'
})

class Parallax implements OnInit {
	name: string = 'parallaxDirective';
    @Input() config: ParallaxConfig;
    cssKey: string = 'backgroundPosition';
    cssValue: string;
	parallaxCss: string = 'backgroundPositionY';
	parallaxAxis: string = 'Y';
    parallaxRatio: number = 1.1;
    parallaxInitVal: number = 0;
    isSpecialVal: boolean = false;
	scrollId: string;
	// scrollDirection: string = 'y';
	hostElement: HTMLElement;
	scrollElement: HTMLElement;
	parallaxElement: HTMLElement;
	
	private evaluateScroll = () => {
		let resultVal: string;
		let calcVal: number;
		
		// if (this.scrollDirection === 'x') {
		// 	calcVal = this.scrollElement.scrollLeft * this.parallaxRatio + this.parallaxInitVal;
		// } else {
			calcVal = this.scrollElement.scrollTop * this.parallaxRatio + this.parallaxInitVal;
		// }
		
		if (this.cssKey === 'backgroundPosition') {
			if (this.parallaxAxis === 'X') {
				resultVal = calcVal + 'px 0';
			} else {
				resultVal = '0 ' + calcVal + 'px';
			}
		} else if (this.isSpecialVal) {
			resultVal = this.cssValue + '(' + calcVal + 'px)';
		} else { 
			resultVal = calcVal + 'px';
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
		
		// if (typeof this.scrollDirection === 'string') {
		// 	if (this.scrollDirection.toLowerCase() === 'x')
		// 		this.scrollDirection = 'x';
		// 	else this.scrollDirection = 'y';
		// }
		
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
			else if (this.scrollId) {
				try {
					this.scrollElement = document.getElementById(this.scrollId);
					if (!this.scrollElement)
						throw(`The ID passed through the parallaxConfig ('${this.scrollId}') object was not found in the document.  Defaulting to watch scrolling of the body.`);
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