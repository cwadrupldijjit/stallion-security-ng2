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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9MaWdodG5pbmdTZXJ2aWNlL2xpZ2h0bmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkxpZ2h0bmluZ1NlcnZpY2UiLCJMaWdodG5pbmdTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiTGlnaHRuaW5nU2VydmljZS5yZWRyYXciLCJMaWdodG5pbmdTZXJ2aWNlLnJlc2l6ZUNhbnZhcyIsIkxpZ2h0bmluZ1NlcnZpY2UuaW5pdGlhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBNEJJQTtvQkFDSUMsSUFBSUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBRXBCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxRQUFRQSxDQUFDQSxvQkFBb0JBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUN6REEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBRXRDQSxJQUFJQSxDQUFDQSxVQUFVQSxFQUFFQSxDQUFBQTtnQkFDckJBLENBQUNBO2dCQWpDTUQsaUNBQU1BLEdBQWJBO29CQUNJRSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtvQkFDekJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO29CQUMxQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3BEQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDckRBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLENBQUNBO29CQUU3Q0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsV0FBV0EsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBQ3JDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDNUJBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLEdBQUdBLE9BQU9BLENBQUNBO29CQUNoQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7Z0JBQzFCQSxDQUFDQTtnQkFFTUYsdUNBQVlBLEdBQW5CQTtvQkFDSUcsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7b0JBQ3RDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDeEJBLElBQUlBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBSU1ILHFDQUFVQSxHQUFqQkE7b0JBQ0lJLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsRUFBRUEsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZFQSxJQUFJQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQTtnQkFDeEJBLENBQUNBO2dCQTFCTEo7b0JBQUNBLGlCQUFVQSxFQUFFQTs7cUNBb0NaQTtnQkFBREEsdUJBQUNBO1lBQURBLENBcENBLEFBb0NDQSxJQUFBO1lBRU8sK0NBQWdCIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9MaWdodG5pbmdTZXJ2aWNlL2xpZ2h0bmluZy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuY2xhc3MgTGlnaHRuaW5nU2VydmljZSB7XHJcbiAgICBwdWJsaWMgcmVkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKDAsIDUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oKHRoaXMuY2FudmFzLndpZHRoIC8gMiArIDUpLCA1KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKCh0aGlzLmNhbnZhcy53aWR0aCAvIDIgLSA1KSwgMTUpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oKHRoaXMuY2FudmFzLndpZHRoKSwgMTUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICcjQkQyODA5JztcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gMTA7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVKb2luID0gJ21pdGVyJztcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyByZXNpemVDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAyMDtcclxuICAgICAgICB0aGlzLnJlZHJhdygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUNhbnZhcy5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHRcdFxyXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2FudmFzJylbMF07XHJcblx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TGlnaHRuaW5nU2VydmljZX07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
