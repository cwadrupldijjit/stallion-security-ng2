// import {Component} from 'angular2/core';
// import {LightningService} from '../../services/LightningService/lightning.service';
// @Component({
//     selector: 'lightning-border'
//     template: '<canvas id="lightning-border"></canvas>'
// })
// class CanvasComponent {
//     public redraw() {
//         this.context.beginPath();
//         this.context.moveTo(0, 5);
//         this.context.lineTo((this.canvas.width / 2 + 5), 5);
//         this.context.lineTo((this.canvas.width / 2 - 5), 15);
//         this.context.lineTo((this.canvas.width), 15);
//         this.context.strokeStyle = '#BD2809';
//         this.context.lineWidth = '10';
//         this.context.lineJoin = 'miter';
//         this.context.stroke();
//     }
//     public resizeCanvas() {
//         this.canvas.width = window.innerWidth;
//         this.canvas.height = 20;
//         this.redraw();
//     }
//     private canvas = document.getElementById('lightning-border');
//     private context = this.canvas.getContext('2d');
//     private initialize() {
//         window.addEventListener('resize', this.resizeCanvas.bind(this), false);
//         this.resizeCanvas();
//     }
//     constructor() {
//         var vm = this,
//             context = this.canvas.getContext('2d');
//         this.initialize()
//     }
// }
// export {CanvasComponent}; 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudC9jYW52YXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQyxzRkFBc0Y7QUFFdEYsZUFBZTtBQUNmLG1DQUFtQztBQUNuQywwREFBMEQ7QUFDMUQsS0FBSztBQUVMLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQywrREFBK0Q7QUFDL0QsZ0VBQWdFO0FBQ2hFLHdEQUF3RDtBQUV4RCxnREFBZ0Q7QUFDaEQseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUMzQyxpQ0FBaUM7QUFDakMsUUFBUTtBQUVSLDhCQUE4QjtBQUM5QixpREFBaUQ7QUFDakQsbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUN6QixRQUFRO0FBRVIsb0VBQW9FO0FBQ3BFLHNEQUFzRDtBQUN0RCw2QkFBNkI7QUFDN0Isa0ZBQWtGO0FBQ2xGLCtCQUErQjtBQUMvQixRQUFRO0FBRVIsc0JBQXNCO0FBQ3RCLHlCQUF5QjtBQUN6QixzREFBc0Q7QUFFdEQsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUixJQUFJO0FBRUosNEJBQTRCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL0NhbnZhc0NvbXBvbmVudC9jYW52YXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG4vLyBpbXBvcnQge0xpZ2h0bmluZ1NlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0xpZ2h0bmluZ1NlcnZpY2UvbGlnaHRuaW5nLnNlcnZpY2UnO1xyXG5cclxuLy8gQENvbXBvbmVudCh7XHJcbi8vICAgICBzZWxlY3RvcjogJ2xpZ2h0bmluZy1ib3JkZXInXHJcbi8vICAgICB0ZW1wbGF0ZTogJzxjYW52YXMgaWQ9XCJsaWdodG5pbmctYm9yZGVyXCI+PC9jYW52YXM+J1xyXG4vLyB9KVxyXG5cclxuLy8gY2xhc3MgQ2FudmFzQ29tcG9uZW50IHtcclxuLy8gICAgIHB1YmxpYyByZWRyYXcoKSB7XHJcbi8vICAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4vLyAgICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oMCwgNSk7XHJcbi8vICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbygodGhpcy5jYW52YXMud2lkdGggLyAyICsgNSksIDUpO1xyXG4vLyAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oKHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIDUpLCAxNSk7XHJcbi8vICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbygodGhpcy5jYW52YXMud2lkdGgpLCAxNSk7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJyNCRDI4MDknO1xyXG4vLyAgICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSAnMTAnO1xyXG4vLyAgICAgICAgIHRoaXMuY29udGV4dC5saW5lSm9pbiA9ICdtaXRlcic7XHJcbi8vICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vICAgICBwdWJsaWMgcmVzaXplQ2FudmFzKCkge1xyXG4vLyAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbi8vICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gMjA7XHJcbi8vICAgICAgICAgdGhpcy5yZWRyYXcoKTtcclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyAgICAgcHJpdmF0ZSBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlnaHRuaW5nLWJvcmRlcicpO1xyXG4vLyAgICAgcHJpdmF0ZSBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuLy8gICAgIHByaXZhdGUgaW5pdGlhbGl6ZSgpIHtcclxuLy8gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVDYW52YXMuYmluZCh0aGlzKSwgZmFsc2UpO1xyXG4vLyAgICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XHJcbi8vICAgICB9XHJcbiAgICBcclxuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgICAgIHZhciB2bSA9IHRoaXMsXHJcbi8vICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCB7Q2FudmFzQ29tcG9uZW50fTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
