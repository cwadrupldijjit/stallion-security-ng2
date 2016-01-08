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
    var LightningService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LightningService = (function () {
                function LightningService() {
                    this.canvas = document.getElementById('lightning-border');
                    this.context = this.canvas.getContext('2d');
                    var vm = this, context = this.canvas.getContext('2d');
                    this.initialize();
                }
                LightningService.prototype.redraw = function () {
                    this.context.beginPath();
                    this.context.moveTo(0, 5);
                    this.context.lineTo((this.canvas.width / 2 + 5), 5);
                    this.context.lineTo((this.canvas.width / 2 - 5), 15);
                    this.context.lineTo((this.canvas.width), 15);
                    this.context.strokeStyle = '#BD2809';
                    this.context.lineWidth = '10';
                    this.context.lineJoin = 'miter';
                    this.context.stroke();
                };
                LightningService.prototype.resizeCanvas = function () {
                    this.canvas.width = window.innerWidth;
                    this.canvas.height = 20;
                    this.redraw();
                };
                LightningService.prototype.initialize = function () {
                    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
                    this.resizeCanvas();
                };
                LightningService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LightningService);
                return LightningService;
            })();
            exports_1("LightningService", LightningService);
        }
    }
});
//# sourceMappingURL=lightning.service.js.map