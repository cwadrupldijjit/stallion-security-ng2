import {Component, View, provide} from 'angular2/core';
import {COMMON_DIRECTIVES,
		CORE_DIRECTIVES} from 'angular2/common';
import {RouteConfig,
		RouterLink,
		ROUTER_DIRECTIVES,
		ROUTER_PROVIDERS,
		LocationStrategy,
		HashLocationStrategy } from 'angular2/router';
import {HomeComponent} from './components/HomeComponent/home.component';
import {ServicesComponent} from './components/ServicesComponent/services.component';
import {RecommendComponent} from './components/RecommendComponent/recommend.component';
import {MissingPageComponent} from './components/MissingPageComponent/missing.component';

@Component({
	selector: 'app',
	directives: [
		COMMON_DIRECTIVES,
		CORE_DIRECTIVES,
		ROUTER_DIRECTIVES,
		RouterLink
	],
	providers: [
		provide(LocationStrategy, {useClass: HashLocationStrategy})
	]
})
@View({
	templateUrl: './app/app.html',
	directives: ROUTER_DIRECTIVES
})
@RouteConfig([
	{ path: '/', 				component: HomeComponent, 		 as: 'Home'				},
	{ path: '/services',		component: ServicesComponent,	 as: 'Services'			},
	{ path: '/recommendations',	component: RecommendComponent,	 as: 'Recommendations'	},
	{ path: '/404',				component: MissingPageComponent, as: 'Missing-Page',	useAsDefault: true }
])

export class AppComponent {
	'router-link': RouterLink;
	constructor(_routerLink: RouterLink) {
		this['router-link'] = _routerLink;
	}
}