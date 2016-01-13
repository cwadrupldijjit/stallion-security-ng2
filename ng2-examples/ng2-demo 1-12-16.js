// ---------------------------------------------- UI_TABS.TS
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UiPane, UiTabs, DiDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UiPane = (function () {
                function UiPane(viewContainer, templateRef) {
                    this.viewContainer = viewContainer;
                    this.templateRef = templateRef;
                    this._active = false;
                }
                Object.defineProperty(UiPane.prototype, "active", {
                    get: function () {
                        return this._active;
                    },
                    set: function (active) {
                        if (active == this._active)
                            return;
                        this._active = active;
                        if (active) {
                            this.viewContainer.createEmbeddedView(this.templateRef);
                        }
                        else {
                            this.viewContainer.remove(0);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], UiPane.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], UiPane.prototype, "active", null);
                UiPane = __decorate([
                    core_1.Directive({
                        selector: '[ui-pane]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
                ], UiPane);
                return UiPane;
            })();
            UiTabs = (function () {
                function UiTabs() {
                }
                UiTabs.prototype.select = function (pane) {
                    this.panes.toArray().forEach(function (p) { return p.active = p == pane; });
                };
                __decorate([
                    core_1.ContentChildren(UiPane), 
                    __metadata('design:type', core_1.QueryList)
                ], UiTabs.prototype, "panes", void 0);
                UiTabs = __decorate([
                    core_1.Component({
                        selector: 'ui-tabs',
                        template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"var pane of panes\"\n          (click)=\"select(pane)\"\n          role=\"presentation\" [class.active]=\"pane.active\">\n        <a href=\"javascript: false\">{{pane.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UiTabs);
                return UiTabs;
            })();
            // ---------------------------------------------- DI_DEMO.TS
            // import {Component} from 'angular2/core';
            // import {UiTabs, UiPane} from './ui_tabs';
            DiDemo = (function () {
                function DiDemo() {
                    this.details = [];
                    this.id = 0;
                }
                DiDemo.prototype.addDetail = function () {
                    this.id++;
                    this.details.push({
                        title: "Detail " + this.id,
                        text: "Some detail text for " + this.id + "..."
                    });
                };
                DiDemo.prototype.removeDetail = function (detail) {
                    this.details = this.details.filter(function (d) { return d !== detail; });
                };
                DiDemo = __decorate([
                    core_1.Component({
                        selector: 'di-demo',
                        template: "\n    <h4>Tabs Demo</h4>\n    <ui-tabs>\n      <template ui-pane title='Overview' active=\"true\">\n        You have {{details.length}} details.\n      </template>\n      <template *ngFor=\"#detail of details\" ui-pane [title]=\"detail.title\">\n        {{detail.text}} <br><br>\n        <button class=\"btn\" (click)=\"removeDetail(detail)\">Remove</button>\n      </template>\n      <template ui-pane title='Summary'>\n        Next last ID is {{id}}.\n      </template>\n    </ui-tabs>\n    <hr>\n    <button class=\"btn\" (click)=\"addDetail()\">Add Detail</button>\n    ",
                        directives: [UiTabs, UiPane]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DiDemo);
                return DiDemo;
            })();
            exports_1("DiDemo", DiDemo);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWRlbW8gMS0xMi0xNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nMi1kZW1vIDEtMTItMTYudHMiXSwibmFtZXMiOlsiVWlQYW5lIiwiVWlQYW5lLmNvbnN0cnVjdG9yIiwiVWlQYW5lLmFjdGl2ZSIsIlVpVGFicyIsIlVpVGFicy5jb25zdHJ1Y3RvciIsIlVpVGFicy5zZWxlY3QiLCJEaURlbW8iLCJEaURlbW8uY29uc3RydWN0b3IiLCJEaURlbW8uYWRkRGV0YWlsIiwiRGlEZW1vLnJlbW92ZURldGFpbCJdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSTVEO2dCQU1DQSxnQkFBbUJBLGFBQStCQSxFQUMxQ0EsV0FBd0JBO29CQURiQyxrQkFBYUEsR0FBYkEsYUFBYUEsQ0FBa0JBO29CQUMxQ0EsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQWFBO29CQUZ4QkEsWUFBT0EsR0FBWUEsS0FBS0EsQ0FBQ0E7Z0JBRUdBLENBQUNBO2dCQUNyQ0Qsc0JBQWFBLDBCQUFNQTt5QkFTbkJBO3dCQUNDRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtvQkFDckJBLENBQUNBO3lCQVhERixVQUFvQkEsTUFBZUE7d0JBQ2xDRSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxJQUFJQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTs0QkFBQ0EsTUFBTUEsQ0FBQ0E7d0JBQ25DQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQTt3QkFDdEJBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBOzRCQUNaQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO3dCQUN6REEsQ0FBQ0E7d0JBQUNBLElBQUlBLENBQUNBLENBQUNBOzRCQUNQQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDOUJBLENBQUNBO29CQUNGQSxDQUFDQTs7O21CQUFBRjtnQkFaREE7b0JBQUNBLFlBQUtBLEVBQUVBOzttQkFBQ0EseUJBQUtBLFVBQVNBO2dCQUl2QkE7b0JBQUNBLFlBQUtBLEVBQUVBOzs7bUJBQUtBLDBCQUFNQSxRQVFsQkE7Z0JBaEJGQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNWQSxRQUFRQSxFQUFFQSxXQUFXQTtxQkFDckJBLENBQUNBOzsyQkFrQkRBO2dCQUFEQSxhQUFDQTtZQUFEQSxDQUFDQSxBQXBCRCxJQW9CQztZQUNEO2dCQUFBRztnQkFrQkFDLENBQUNBO2dCQUhBRCx1QkFBTUEsR0FBTkEsVUFBT0EsSUFBWUE7b0JBQ2xCRSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFDQSxDQUFTQSxJQUFLQSxPQUFBQSxDQUFDQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxJQUFJQSxJQUFJQSxFQUFwQkEsQ0FBb0JBLENBQUNBLENBQUNBO2dCQUNuRUEsQ0FBQ0E7Z0JBSERGO29CQUFDQSxzQkFBZUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O21CQUFDQSx5QkFBS0EsVUFBb0JBO2dCQWRuREE7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsU0FBU0E7d0JBQ25CQSxRQUFRQSxFQUFFQSx1U0FTTkE7cUJBQ0pBLENBQUNBOzsyQkFNREE7Z0JBQURBLGFBQUNBO1lBQURBLENBQUNBLEFBbEJELElBa0JDO1lBRUQsNERBQTREO1lBRTVELDJDQUEyQztZQUMzQyw0Q0FBNEM7WUFDNUM7Z0JBQUFHO29CQXNCR0MsWUFBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBQ2ZBLE9BQUVBLEdBQVdBLENBQUNBLENBQUNBO2dCQVdoQkEsQ0FBQ0E7Z0JBVkFELDBCQUFTQSxHQUFUQTtvQkFDQ0UsSUFBSUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7b0JBQ1ZBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBO3dCQUNqQkEsS0FBS0EsRUFBRUEsWUFBVUEsSUFBSUEsQ0FBQ0EsRUFBSUE7d0JBQzFCQSxJQUFJQSxFQUFFQSwwQkFBd0JBLElBQUlBLENBQUNBLEVBQUVBLFFBQUtBO3FCQUMxQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLENBQUNBO2dCQUNERiw2QkFBWUEsR0FBWkEsVUFBYUEsTUFBTUE7b0JBQ2xCRyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxVQUFDQSxDQUFDQSxJQUFLQSxPQUFBQSxDQUFDQSxLQUFLQSxNQUFNQSxFQUFaQSxDQUFZQSxDQUFDQSxDQUFDQTtnQkFDekRBLENBQUNBO2dCQWpDRkg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDVkEsUUFBUUEsRUFBRUEsU0FBU0E7d0JBQ25CQSxRQUFRQSxFQUFFQSxna0JBZ0JOQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0E7cUJBQy9CQSxDQUFDQTs7MkJBY0RBO2dCQUFEQSxhQUFDQTtZQUFEQSxDQUFDQSxBQWxDRCxJQWtDQztZQWxDRCwyQkFrQ0MsQ0FBQSJ9