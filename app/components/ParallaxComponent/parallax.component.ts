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
	template : '{{cssKey}}'
})

class ParallaxComponent {
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


export {PerfectParallax, ParallaxComponent}