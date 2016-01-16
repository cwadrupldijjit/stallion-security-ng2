import { Component, 
		 View,
		 OnInit,
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

const logoResize = new EventEmitter();

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

class AppComponent implements OnInit {
	ngOnInit() {
		let resizeSubscription = logoResize.subscribe((event) => {
			this.adjustLogoSize(document.getElementById('logo-lg'))
			// console.log('resize event');
		});
	}
	
	printStuff(data) {
		console.log(data);
	};
	
	adjustLogoSize(logoElement: HTMLElement = document.getElementById('logo-lg')) {
		logoElement.style.width = (logoElement.offsetHeight * 2.231428571428571) + 'px';
	};
	
	constructor(private lightningService: LightningService) {
	};
}

export {logoResize, AppComponent};