import { Component, 
		 Input, 
		 OnInit,
		 AfterContentInit,
		 ElementRef } from 'angular2/core';
import { Parallax,
		 ParallaxConfig } from '../../directives/parallax/parallax.directive';
import { logoResize,
		 routeLoaded } from '../../app.component';

@Component({
	templateUrl: 'app/components/HomeComponent/home.html',
	styleUrls: [
		'app/styles/home.styles.css'
	],
	selector: 'home-html',
	directives: [Parallax]
})

export class HomeComponent implements OnInit, AfterContentInit {
	ngOnInit() {
		logoResize.emit(null);
		
		document.getElementById('home-banner').style.backgroundImage = 'url(' + this.bannerImage + ')';
		
		document.getElementById('welcome-text').innerHTML = this.welcomeText;
	}
	
	ngAfterContentInit() {
		routeLoaded.emit(null);
		// debugger;		
	}
	
	hostElement: HTMLElement;
	
	bannerParallaxConfig: ParallaxConfig = {
		scrollerId: 'route',
		parallaxInitVal: -250,
		parallaxRatio: .8
	};
	
	// bannerParallaxConfig = {
	// 	scrollerId: 'route'
	// };
	
	welcomeParallaxConfig = {
		name: 'site-welcome',
		scrollerId: 'route',
		parallaxRatio: 1,
		parallaxCss: 'top',
		parallaxInitVal: -100,
		parallaxIf: true,
		maxValue: 0
	};
	
	textParallaxConfig = {
		name: 'site-welcome',
		scrollerId: 'route',
		parallaxRatio: .6,
		parallaxCss: 'top',
		parallaxInitVal: -70,
		parallaxIf: true,
		maxValue: 0
	};
	
	siteWelcome: string = 'Welcome to the website for Stallion Security';
	welcomeText: string = 
		`Bacon ipsum dolor amet t-bone rump prosciutto leberkas. Ham hock kielbasa andouille turkey drumstick frankfurter shank. Ham hock tri-tip tail shoulder meatloaf, pig ball tip turkey bresaola shankle beef kielbasa pastrami. Drumstick corned beef flank spare ribs jowl short ribs prosciutto turducken pork loin tongue cow. Meatloaf salami cupim boudin, chuck short loin t-bone drumstick.<br><br>
		
		Pork belly jowl sirloin pork. Porchetta short ribs chicken t-bone, andouille fatback biltong leberkas kielbasa sirloin chuck bacon. Prosciutto meatball sirloin chicken turkey shoulder doner frankfurter salami tail tenderloin pork boudin venison kielbasa. Tail short ribs bresaola pork belly beef. Jowl pastrami brisket kevin ball tip, bresaola meatloaf pork. Turducken fatback pork loin sausage frankfurter boudin jerky salami pig venison drumstick ground round beef ribs short loin tenderloin.<br><br>
		
		Cow salami jowl prosciutto jerky alcatra sirloin meatball tri-tip t-bone ribeye shoulder swine. Venison corned beef turducken pork tongue boudin cow ham hock pork loin tri-tip landjaeger picanha pancetta meatloaf. Tenderloin prosciutto ribeye ham hock. Ground round drumstick tongue pig pork loin cow t-bone beef biltong turducken. Fatback strip steak prosciutto short loin beef pancetta alcatra sausage drumstick pork belly tongue. Sirloin frankfurter ground round ribeye hamburger, tenderloin pork belly shank t-bone prosciutto strip steak shankle chicken. Brisket drumstick shoulder fatback ham hamburger picanha leberkas kielbasa prosciutto.<br>`;
	
	bannerImage: string = 'app/assets/running-horse.jpg';
	// bannerImage: string = 'app/assets/dawn-190055.jpg';
	
	@Input() scrollElement: HTMLElement;
	
	constructor(element: ElementRef) {
		this.hostElement = element.nativeElement;
	}
}