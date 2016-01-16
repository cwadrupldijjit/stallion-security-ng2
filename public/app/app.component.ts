import { Component, 
		 View,
		 OnInit } from 'angular2/core';
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

export class AppComponent implements OnInit {
	ngOnInit() {
		document.getElementById('logo-lg')
				.addEventListener('changes', (e) => {
					console.log(e);
					// this.adjustLogoSize(e)
				}, true)
	}
	
	printStuff(data) {
		console.log(data);
	};
	
	adjustLogoSize(logoElement) {
		logoElement.width = logoElement.height * 2.231428571428571;
	};
	
	parallaxInit(elem) {
		console.log(elem);
		// this.routeScroll = elem;
	};
	
	constructor(private lightningService: LightningService) {
	};
}