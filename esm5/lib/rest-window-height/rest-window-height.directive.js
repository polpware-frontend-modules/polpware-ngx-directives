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
        this.fixedHeight = 0;
        this.maxHeight = 0;
        this.topOffset = 0;
    }
    RestWindowHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.computeHeight();
        });
    };
    RestWindowHeightDirective.prototype.onResize = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.computeHeight();
        });
    };
    RestWindowHeightDirective.prototype.computeHeight = function () {
        var nativeElement = this.el.nativeElement;
        // Case 1: fixed Height 
        if (this.fixedHeight) {
            this.el.nativeElement.style.height = this.fixedHeight + 'px';
            return;
        }
        var bodyRect = document.body.getBoundingClientRect(), elemRect = nativeElement.getBoundingClientRect();
        var offset = elemRect.top - bodyRect.top;
        var screenHeight = window.innerHeight;
        var height = screenHeight - offset - this.bottomOffset - this.topOffset;
        height = (height > this.minHeight) ? height : this.minHeight;
        if (this.maxHeight) {
            height = (height > this.maxHeight) ? this.maxHeight : height;
        }
        this.el.nativeElement.style.height = height + 'px';
    };
    RestWindowHeightDirective.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    RestWindowHeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight", fixedHeight: "fixedHeight", maxHeight: "maxHeight", topOffset: "topOffset" } });
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
        }], fixedHeight: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], topOffset: [{
            type: Input
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtZGlyZWN0aXZlcy8iLCJzb3VyY2VzIjpbImxpYi9yZXN0LXdpbmRvdy1oZWlnaHQvcmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUY7Ozs7R0FJRztBQUNIO0lBV0ksbUNBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTnpCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsY0FBUyxHQUFHLENBQUMsQ0FBQztJQUVlLENBQUM7SUFFdkMsbURBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELDRDQUFRLEdBRFIsVUFDUyxLQUFLO1FBRGQsaUJBS0M7UUFIRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8saURBQWEsR0FBckI7UUFDSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1Qyx3QkFBd0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDN0QsT0FBTztTQUNWO1FBRUQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUNsRCxRQUFRLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFckQsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBRTNDLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFeEMsSUFBSSxNQUFNLEdBQUcsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFeEUsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTdELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkQsQ0FBQztzR0EvQ1EseUJBQXlCO2tFQUF6Qix5QkFBeUI7a0hBQXpCLG9CQUFnQjs7b0NBVjdCO0NBNERDLEFBckRELElBcURDO1NBbERZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBSHJDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2FBQ3JDOztrQkFHSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFVTCxZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIERlZmluZXMgYSBkaXJlY3RpdmUgZm9yIHNldHRpbmcgdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCBpbiBxdWVzdGlvbiBhY2NvcmRpbmcgXG4gKiB0byBhIGZvcm11bGEuXG4gKiBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcG9scFJlc3RXaW5kb3dIZWlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXN0V2luZG93SGVpZ2h0RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKSBib3R0b21PZmZzZXQgPSAwO1xuICAgIEBJbnB1dCgpIG1pbkhlaWdodCA9IDA7XG4gICAgQElucHV0KCkgZml4ZWRIZWlnaHQgPSAwO1xuICAgIEBJbnB1dCgpIG1heEhlaWdodCA9IDA7XG4gICAgQElucHV0KCkgdG9wT2Zmc2V0ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZUhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZUhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXB1dGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIC8vIENhc2UgMTogZml4ZWQgSGVpZ2h0IFxuICAgICAgICBpZiAodGhpcy5maXhlZEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZml4ZWRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgZWxlbVJlY3QgPSBuYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGVsZW1SZWN0LnRvcCAtIGJvZHlSZWN0LnRvcDtcblxuICAgICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgbGV0IGhlaWdodCA9IHNjcmVlbkhlaWdodCAtIG9mZnNldCAtIHRoaXMuYm90dG9tT2Zmc2V0IC0gdGhpcy50b3BPZmZzZXQ7XG5cbiAgICAgICAgaGVpZ2h0ID0gKGhlaWdodCA+IHRoaXMubWluSGVpZ2h0KSA/IGhlaWdodCA6IHRoaXMubWluSGVpZ2h0O1xuXG4gICAgICAgIGlmICh0aGlzLm1heEhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gKGhlaWdodCA+IHRoaXMubWF4SGVpZ2h0KSA/IHRoaXMubWF4SGVpZ2h0IDogaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgfVxuXG5cbn1cbiJdfQ==