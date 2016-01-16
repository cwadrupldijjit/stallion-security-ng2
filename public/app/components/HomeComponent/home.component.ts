import { Component, 
		 Input, 
		 OnInit } from 'angular2/core';
import { Parallax } from '../../directives/parallax/parallax.directive';
import { logoResize } from '../../app.component';

@Component({
	templateUrl: 'app/components/HomeComponent/home.html',
	styleUrls: [
		'app/styles/home.styles.css'
	],
	selector: 'home-html',
	directives: [Parallax]
})

export class HomeComponent implements OnInit {
	ngOnInit() {
		logoResize.emit(null);
	}
	
	public siteWelcome: string;
	public welcomeParagraph: string;
	public bannerImage: string;
	@Input() scrollElement: HTMLElement;
}