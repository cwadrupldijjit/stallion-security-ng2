import {Component, provide} from 'angular2/core';
import {RouteConfig,
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
	templateUrl: './app/app.html',
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		ROUTER_PROVIDERS,
		provide(LocationStrategy, {useClass: HashLocationStrategy})
	]
})
@RouteConfig([
	{ path: '/', 				component: HomeComponent, 		 as: 'Home'				},
	{ path: '/services',		component: ServicesComponent,	 as: 'Services'			},
	{ path: '/recommendations',	component: RecommendComponent,	 as: 'Recommendations'	},
	{ path: '/404',				component: MissingPageComponent, as: 'Missing-Page',	useAsDefault: true }
])

export class AppComponent {
	
}