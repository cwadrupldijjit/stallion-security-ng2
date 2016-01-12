// ---------------------------------------------- UI_TABS.TS

import {Component, Directive, Input, QueryList,
ViewContainerRef, TemplateRef, ContentChildren} from 'angular2/core';
@Directive({
	selector: '[ui-pane]'
})
/*export*/ class UiPane {
	@Input() title: string;
	private _active: boolean = false;
	constructor(public viewContainer: ViewContainerRef,
		public templateRef: TemplateRef) { }
	@Input() set active(active: boolean) {
		if (active == this._active) return;
		this._active = active;
		if (active) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainer.remove(0);
		}
	}
	get active(): boolean {
		return this._active;
	}
}
@Component({
	selector: 'ui-tabs',
	template: `
    <ul class="nav nav-tabs">
      <li *ngFor="var pane of panes"
          (click)="select(pane)"
          role="presentation" [class.active]="pane.active">
        <a href="javascript: false">{{pane.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    `
})
/*export*/ class UiTabs {
	@ContentChildren(UiPane) panes: QueryList<UiPane>;
	select(pane: UiPane) {
		this.panes.toArray().forEach((p: UiPane) => p.active = p == pane);
	}
}

// ---------------------------------------------- DI_DEMO.TS

// import {Component} from 'angular2/core';
// import {UiTabs, UiPane} from './ui_tabs';
@Component({
	selector: 'di-demo',
	template: `
    <h4>Tabs Demo</h4>
    <ui-tabs>
      <template ui-pane title='Overview' active="true">
        You have {{details.length}} details.
      </template>
      <template *ngFor="#detail of details" ui-pane [title]="detail.title">
        {{detail.text}} <br><br>
        <button class="btn" (click)="removeDetail(detail)">Remove</button>
      </template>
      <template ui-pane title='Summary'>
        Next last ID is {{id}}.
      </template>
    </ui-tabs>
    <hr>
    <button class="btn" (click)="addDetail()">Add Detail</button>
    `,
    directives: [UiTabs, UiPane]
})
export class DiDemo {
	//   details: Detail[] = [];
	id: number = 0;
	addDetail() {
		this.id++;
		this.details.push({
			title: `Detail ${this.id}`,
			text: `Some detail text for ${this.id}...`
		});
	}
	removeDetail(detail) {
		this.details = this.details.filter((d) => d !== detail);
	}
}