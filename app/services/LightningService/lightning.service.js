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
                    var vm = this;
                    this.canvas = document.getElementsByTagName('canvas')[0];
                    this.context = this.canvas.getContext('2d');
                    this.initialize();
                }
                LightningService.prototype.redraw = function () {
                    this.context.beginPath();
                    this.context.moveTo(0, 5);
                    this.context.lineTo((this.canvas.width / 2 + 5), 5);
                    this.context.lineTo((this.canvas.width / 2 - 5), 15);
                    this.context.lineTo((this.canvas.width), 15);
                    this.context.strokeStyle = '#BD2809';
                    this.context.lineWidth = 10;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRuaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWdodG5pbmcuc2VydmljZS50cyJdLCJuYW1lcyI6WyJMaWdodG5pbmdTZXJ2aWNlIiwiTGlnaHRuaW5nU2VydmljZS5jb25zdHJ1Y3RvciIsIkxpZ2h0bmluZ1NlcnZpY2UucmVkcmF3IiwiTGlnaHRuaW5nU2VydmljZS5yZXNpemVDYW52YXMiLCJMaWdodG5pbmdTZXJ2aWNlLmluaXRpYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQTRCSUE7b0JBQ0lDLElBQUlBLEVBQUVBLEdBQUdBLElBQUlBLENBQUNBO29CQUVwQkEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsUUFBUUEsQ0FBQ0Esb0JBQW9CQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDekRBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUV0Q0EsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQUE7Z0JBQ3JCQSxDQUFDQTtnQkFqQ01ELGlDQUFNQSxHQUFiQTtvQkFDSUUsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsRUFBRUEsQ0FBQ0E7b0JBQ3pCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDMUJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO29CQUNwREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3JEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFFN0NBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFdBQVdBLEdBQUdBLFNBQVNBLENBQUNBO29CQUNyQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBQzVCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxHQUFHQSxPQUFPQSxDQUFDQTtvQkFDaENBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBRU1GLHVDQUFZQSxHQUFuQkE7b0JBQ0lHLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBO29CQUN0Q0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBQ3hCQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDbEJBLENBQUNBO2dCQUlNSCxxQ0FBVUEsR0FBakJBO29CQUNJSSxNQUFNQSxDQUFDQSxnQkFBZ0JBLENBQUNBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO29CQUN2RUEsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkExQkxKO29CQUFDQSxpQkFBVUEsRUFBRUE7O3FDQW9DWkE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQUFDQSxBQXBDRCxJQW9DQztZQUVPLCtDQUFnQiJ9