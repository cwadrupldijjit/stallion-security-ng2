import { Component, 
		 OnInit,
		 AfterContentInit } from 'angular2/core';
import { logoResize,
		 routeLoaded } from '../../app.component';

@Component({
	selector: 'recommend-html',
	templateUrl: 'app/components/RecommendComponent/recommend.html'
})

export class RecommendComponent implements OnInit, AfterContentInit {
	ngOnInit() {
		logoResize.emit(null);
	}
	
	ngAfterContentInit() {
		routeLoaded.emit(null);
	}
}