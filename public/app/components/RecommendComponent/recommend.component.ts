import { Component, 
		 OnInit } from 'angular2/core';
import { logoResize } from '../../app.component';

@Component({
	selector: 'recommend-html',
	templateUrl: 'app/components/RecommendComponent/recommend.html'
})

export class RecommendComponent implements OnInit {
	ngOnInit() {
		logoResize.emit(null);
	}
}