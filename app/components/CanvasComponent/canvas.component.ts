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