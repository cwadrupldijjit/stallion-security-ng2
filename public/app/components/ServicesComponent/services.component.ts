import { Component,
		 OnInit,
		 AfterContentInit } from 'angular2/core';
import { logoResize,
		 routeLoaded } from '../../app.component';

@Component({
	templateUrl: 'app/components/ServicesComponent/services.html',
	selector: 'services-html'
})

export class ServicesComponent implements OnInit, AfterContentInit {
	ngOnInit() {
		logoResize.emit(null);
	}
	
	ngAfterContentInit() {
		routeLoaded.emit(null);
	}
}