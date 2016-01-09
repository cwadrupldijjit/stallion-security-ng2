import {Component} from 'angular2/core';

@Component({
	templateUrl: 'app/components/HomeComponent/home.html',
	selector: 'home-html'
})

export class HomeComponent {
	public siteWelcome: string;
	public welcomeParagraph: string;
	public bannerImage: string;
}