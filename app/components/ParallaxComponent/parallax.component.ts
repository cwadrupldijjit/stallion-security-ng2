import {Directive, Host, Input} from 'angular2/core';

@Directive({
	selector: '[perfect-parallax]',
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

export {PerfectParallax}