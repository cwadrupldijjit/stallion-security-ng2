import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ROUTER_LINK_DSL_PROVIDER} from 'angular2/router/router_link_dsl';

bootstrap(AppComponent, [ROUTER_PROVIDERS, ROUTER_LINK_DSL_PROVIDER]);