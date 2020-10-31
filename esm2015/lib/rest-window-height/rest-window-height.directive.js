import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Defines a directive for setting the height of the element in question according
 * to a formula.
 *
 */
export class RestWindowHeightDirective {
    constructor(el) {
        this.el = el;
        this.bottomOffset = 0;
        this.minHeight = 0;
    }
    ngAfterViewInit() {
        this.computeHeight();
    }
    onResize(event) {
        this.computeHeight();
    }
    computeHeight() {
        const nativeElement = this.el.nativeElement;
        const bodyRect = document.body.getBoundingClientRect(), elemRect = nativeElement.getBoundingClientRect();
        const offset = elemRect.top - bodyRect.top;
        const screenHeight = window.innerHeight;
        let height = screenHeight - offset - this.bottomOffset;
        height = (height > this.minHeight) ? height : this.minHeight;
        this.el.nativeElement.style.height = height + 'px';
    }
}
RestWindowHeightDirective.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
RestWindowHeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtZGlyZWN0aXZlcy8iLCJzb3VyY2VzIjpbImxpYi9yZXN0LXdpbmRvdy1oZWlnaHQvcmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUY7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyx5QkFBeUI7SUFLbEMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIekIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLENBQUMsQ0FBQztJQUVlLENBQUM7SUFFdkMsZUFBZTtRQUNYLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBR0QsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVPLGFBQWE7UUFDakIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFFNUMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUNsRCxRQUFRLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFckQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBRTNDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFeEMsSUFBSSxNQUFNLEdBQUcsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRXZELE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUU3RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkQsQ0FBQzs7a0dBL0JRLHlCQUF5Qjs4REFBekIseUJBQXlCOzhHQUF6QixvQkFBZ0I7O2tEQUFoQix5QkFBeUI7Y0FIckMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQVFMLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRGVmaW5lcyBhIGRpcmVjdGl2ZSBmb3Igc2V0dGluZyB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGluIHF1ZXN0aW9uIGFjY29yZGluZyBcbiAqIHRvIGEgZm9ybXVsYS5cbiAqIFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twb2xwUmVzdFdpbmRvd0hlaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RXaW5kb3dIZWlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpIGJvdHRvbU9mZnNldCA9IDA7XG4gICAgQElucHV0KCkgbWluSGVpZ2h0ID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmNvbXB1dGVIZWlnaHQoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICB0aGlzLmNvbXB1dGVIZWlnaHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXB1dGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgZWxlbVJlY3QgPSBuYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGVsZW1SZWN0LnRvcCAtIGJvZHlSZWN0LnRvcDtcblxuICAgICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgbGV0IGhlaWdodCA9IHNjcmVlbkhlaWdodCAtIG9mZnNldCAtIHRoaXMuYm90dG9tT2Zmc2V0O1xuXG4gICAgICAgIGhlaWdodCA9IChoZWlnaHQgPiB0aGlzLm1pbkhlaWdodCkgPyBoZWlnaHQgOiB0aGlzLm1pbkhlaWdodDtcblxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB9XG5cblxufVxuIl19