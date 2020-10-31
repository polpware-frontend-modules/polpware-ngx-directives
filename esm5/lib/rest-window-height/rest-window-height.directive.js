import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Defines a directive for setting the height of the element in question according
 * to a formula.
 *
 */
var RestWindowHeightDirective = /** @class */ (function () {
    function RestWindowHeightDirective(el) {
        this.el = el;
        this.bottomOffset = 0;
        this.minHeight = 0;
    }
    RestWindowHeightDirective.prototype.ngAfterViewInit = function () {
        this.computeHeight();
    };
    RestWindowHeightDirective.prototype.onResize = function (event) {
        this.computeHeight();
    };
    RestWindowHeightDirective.prototype.computeHeight = function () {
        var nativeElement = this.el.nativeElement;
        var bodyRect = document.body.getBoundingClientRect(), elemRect = nativeElement.getBoundingClientRect();
        var offset = elemRect.top - bodyRect.top;
        var screenHeight = window.innerHeight;
        var height = screenHeight - offset - this.bottomOffset;
        height = (height > this.minHeight) ? height : this.minHeight;
        this.el.nativeElement.style.height = height + 'px';
    };
    RestWindowHeightDirective.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    RestWindowHeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight" } });
    return RestWindowHeightDirective;
}());
export { RestWindowHeightDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RestWindowHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[polpRestWindowHeight]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { bottomOffset: [{
            type: Input
        }], minHeight: [{
            type: Input
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtZGlyZWN0aXZlcy8iLCJzb3VyY2VzIjpbImxpYi9yZXN0LXdpbmRvdy1oZWlnaHQvcmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUY7Ozs7R0FJRztBQUNIO0lBUUksbUNBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSHpCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFFZSxDQUFDO0lBRXZDLG1EQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUdELDRDQUFRLEdBRFIsVUFDUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTyxpREFBYSxHQUFyQjtRQUNJLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBRTVDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFDbEQsUUFBUSxHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRXJELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUUzQyxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXhDLElBQUksTUFBTSxHQUFHLFlBQVksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUV2RCxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFN0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZELENBQUM7c0dBL0JRLHlCQUF5QjtrRUFBekIseUJBQXlCO2tIQUF6QixvQkFBZ0I7O29DQVY3QjtDQTRDQyxBQXJDRCxJQXFDQztTQWxDWSx5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUhyQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjthQUNyQzs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBUUwsWUFBWTttQkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBEZWZpbmVzIGEgZGlyZWN0aXZlIGZvciBzZXR0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgaW4gcXVlc3Rpb24gYWNjb3JkaW5nIFxuICogdG8gYSBmb3JtdWxhLlxuICogXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BvbHBSZXN0V2luZG93SGVpZ2h0XSdcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFdpbmRvd0hlaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgYm90dG9tT2Zmc2V0ID0gMDtcbiAgICBASW5wdXQoKSBtaW5IZWlnaHQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZUhlaWdodCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZUhlaWdodCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29tcHV0ZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBjb25zdCBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICBlbGVtUmVjdCA9IG5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbVJlY3QudG9wIC0gYm9keVJlY3QudG9wO1xuXG4gICAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBsZXQgaGVpZ2h0ID0gc2NyZWVuSGVpZ2h0IC0gb2Zmc2V0IC0gdGhpcy5ib3R0b21PZmZzZXQ7XG5cbiAgICAgICAgaGVpZ2h0ID0gKGhlaWdodCA+IHRoaXMubWluSGVpZ2h0KSA/IGhlaWdodCA6IHRoaXMubWluSGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIH1cblxuXG59XG4iXX0=