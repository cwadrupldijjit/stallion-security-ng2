import {Component, Input} from 'angular2/core';
import {Parallax} from '../../directives/parallax/parallax.directive';

@Component({
	templateUrl: 'app/components/HomeComponent/home.html',
	styleUrls: [
		'app/styles/home.styles.css'
	],
	selector: 'home-html',
	directives: [Parallax]
})

export class HomeComponent {
	public siteWelcome: string;
	public welcomeParagraph: string;
	public bannerImage: string;
	@Input() scrollElement: HTMLElement;
}