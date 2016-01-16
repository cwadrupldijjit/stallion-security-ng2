import { Component,
		 OnInit } from 'angular2/core';
import { logoResize } from '../../app.component';

@Component({
	templateUrl: 'app/components/ServicesComponent/services.html',
	selector: 'services-html'
})

export class ServicesComponent implements OnInit {
	ngOnInit() {
		logoResize.emit(null);
	}
}