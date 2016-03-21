import { Component, 
		 View,
		 OnInit,
		 AfterContentInit,
		 AfterViewInit,
		 AfterViewChecked,
		 OnDestroy,
		 EventEmitter } from 'angular2/core';
import { COMMON_DIRECTIVES,
		 CORE_DIRECTIVES } from 'angular2/common';
import { RouteConfig,
		 ROUTER_DIRECTIVES,
		 ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './components/HomeComponent/home.component';
import { ServicesComponent } from './components/ServicesComponent/services.component';
import { RecommendComponent } from './components/RecommendComponent/recommend.component';
import { MissingPageComponent } from './components/MissingPageComponent/missing.component';
import { LightningService } from './services/LightningService/lightning.service';
import { Parallax } from './directives/parallax/parallax.directive';

const logoResize = new EventEmitter(),
	  routeLoaded = new EventEmitter();

@Component({
	selector: 'app',
	providers: [
        ROUTER_PROVIDERS,
		LightningService
	]
})
@View({
	templateUrl: './app/app.html',
	styleUrls: [
		'./app/styles/app.styles.css',
		'./app/styles/header.styles.css',
	],
	directives: [
		COMMON_DIRECTIVES,
		CORE_DIRECTIVES,
        ROUTER_DIRECTIVES,
		Parallax
	]
})
@RouteConfig([
	{ path: '/', 				component: HomeComponent, 		 as: 'Home'				},
	{ path: '/services',		component: ServicesComponent,	 as: 'Services'			},
	{ path: '/recommendations',	component: RecommendComponent,	 as: 'Recommendations'	},
	{ path: '/404',				component: MissingPageComponent, as: 'Missing-Page',	useAsDefault: true }
])

class AppComponent implements OnInit, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
	eventFunc = (event) => {
		this.adjustLogoSize(document.getElementById('logo-lg'));
		// console.log('resize event');
	};
	
	routeLoadHandler = (event) => {
		console.log(event);
	};
	
	parallaxConfig = {
		parallaxCss: 'height',
		minValue: 80,
		maxValue: 178,
		parallaxInitVal: 178,
		parallaxRatio: -2,
		scrollerId: 'route',
		cb: this.eventFunc
	};
	
	resizeSubscription = logoResize.subscribe(this.eventFunc);
	routeLoadSubscription;
	
	customScroll;
	
	ngOnInit() {
		this.routeLoadSubscription = routeLoaded.subscribe(this.routeLoadHandler);
	};
	
	ngAfterContentInit() {
	};
	
	ngAfterViewInit() {
	};
	
	ngAfterViewChecked() {
	}
	
	ngOnDestroy() {
		this.resizeSubscription.dispose();
		this.routeLoadSubscription.dispose();
	};
	
	printStuff(data) {
		console.log(data);
	};
	
	adjustLogoSize = (logoElement: HTMLElement = document.getElementById('logo-lg')) => {
		setTimeout(() => {
			logoElement.style.width = (logoElement.offsetHeight * 2.231428571428571) + 'px';
			// console.log(this)
		}, 0);
	};
	
	constructor(private lightningService: LightningService) {
	};
}

export {logoResize, routeLoaded, AppComponent};