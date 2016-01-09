import {Component, View, provide} from 'angular2/core';
import {COMMON_DIRECTIVES,
		CORE_DIRECTIVES} from 'angular2/common';
import {RouteConfig,
		RouterLink,
		RouterOutlet,
		ROUTER_DIRECTIVES,
		ROUTER_PROVIDERS,
		LocationStrategy,
		HashLocationStrategy } from 'angular2/router';
import {HomeComponent} from './components/HomeComponent/home.component';
import {ServicesComponent} from './components/ServicesComponent/services.component';
import {RecommendComponent} from './components/RecommendComponent/recommend.component';
import {MissingPageComponent} from './components/MissingPageComponent/missing.component';
import {LightningService} from './services/LightningService/lightning.service';

@Component({
	selector: 'app',
	providers: [
        ROUTER_PROVIDERS,
		LightningService
		// provide(LocationStrategy, {useClass: HashLocationStrategy})
	]
})
@View({
	templateUrl: './app/app.html',
	directives: [
		COMMON_DIRECTIVES,
		CORE_DIRECTIVES,
		// RouterOutlet,
		// RouterLink
        ROUTER_DIRECTIVES
	]
})
@RouteConfig([
	{ path: '/', 				component: HomeComponent, 		 as: 'Home'				},
	{ path: '/services',		component: ServicesComponent,	 as: 'Services'			},
	{ path: '/recommendations',	component: RecommendComponent,	 as: 'Recommendations'	},
	{ path: '/404',				component: MissingPageComponent, as: 'Missing-Page',	useAsDefault: true }
])

export class AppComponent {
	// 'router-link': RouterLink;
	lightningService;
	constructor(lightningService: LightningService) {
		this.lightningService = lightningService;
	}
}