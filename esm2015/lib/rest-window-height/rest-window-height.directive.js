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
        this.fixedHeight = 0;
        this.maxHeight = 0;
        this.topOffset = 0;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.computeHeight();
        });
    }
    onResize(event) {
        setTimeout(() => {
            this.computeHeight();
        });
    }
    computeHeight() {
        const nativeElement = this.el.nativeElement;
        // Case 1: fixed Height 
        if (this.maxHeight) {
            this.el.nativeElement.style.height = this.maxHeight + 'px';
            return;
        }
        const bodyRect = document.body.getBoundingClientRect(), elemRect = nativeElement.getBoundingClientRect();
        const offset = elemRect.top - bodyRect.top;
        const screenHeight = window.innerHeight;
        let height = screenHeight - offset - this.bottomOffset - this.topOffset;
        height = (height > this.minHeight) ? height : this.minHeight;
        if (this.maxHeight) {
            height = (height > this.maxHeight) ? this.maxHeight : height;
        }
        this.el.nativeElement.style.height = height + 'px';
    }
}
RestWindowHeightDirective.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
RestWindowHeightDirective.ɵdir = i0.ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight", fixedHeight: "fixedHeight", maxHeight: "maxHeight", topOffset: "topOffset" } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtZGlyZWN0aXZlcy8iLCJzb3VyY2VzIjpbImxpYi9yZXN0LXdpbmRvdy1oZWlnaHQvcmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUY7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyx5QkFBeUI7SUFRbEMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFOekIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBRWUsQ0FBQztJQUV2QyxlQUFlO1FBQ1gsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCxRQUFRLENBQUMsS0FBSztRQUNWLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sYUFBYTtRQUNqQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1Qyx3QkFBd0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDM0QsT0FBTztTQUNWO1FBRUQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUNsRCxRQUFRLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFckQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBRTNDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFeEMsSUFBSSxNQUFNLEdBQUcsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFeEUsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTdELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDaEU7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkQsQ0FBQzs7a0dBL0NRLHlCQUF5Qjs4REFBekIseUJBQXlCOzhHQUF6QixvQkFBZ0I7O2tEQUFoQix5QkFBeUI7Y0FIckMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQVVMLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogRGVmaW5lcyBhIGRpcmVjdGl2ZSBmb3Igc2V0dGluZyB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGluIHF1ZXN0aW9uIGFjY29yZGluZyBcbiAqIHRvIGEgZm9ybXVsYS5cbiAqIFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twb2xwUmVzdFdpbmRvd0hlaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RXaW5kb3dIZWlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpIGJvdHRvbU9mZnNldCA9IDA7XG4gICAgQElucHV0KCkgbWluSGVpZ2h0ID0gMDtcbiAgICBASW5wdXQoKSBmaXhlZEhlaWdodCA9IDA7XG4gICAgQElucHV0KCkgbWF4SGVpZ2h0ID0gMDtcbiAgICBASW5wdXQoKSB0b3BPZmZzZXQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlSGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICAgIG9uUmVzaXplKGV2ZW50KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlSGVpZ2h0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29tcHV0ZUhlaWdodCgpIHtcbiAgICAgICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgLy8gQ2FzZSAxOiBmaXhlZCBIZWlnaHQgXG4gICAgICAgIGlmICh0aGlzLm1heEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubWF4SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJvZHlSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgIGVsZW1SZWN0ID0gbmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCBvZmZzZXQgPSBlbGVtUmVjdC50b3AgLSBib2R5UmVjdC50b3A7XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIGxldCBoZWlnaHQgPSBzY3JlZW5IZWlnaHQgLSBvZmZzZXQgLSB0aGlzLmJvdHRvbU9mZnNldCAtIHRoaXMudG9wT2Zmc2V0O1xuXG4gICAgICAgIGhlaWdodCA9IChoZWlnaHQgPiB0aGlzLm1pbkhlaWdodCkgPyBoZWlnaHQgOiB0aGlzLm1pbkhlaWdodDtcblxuICAgICAgICBpZiAodGhpcy5tYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IChoZWlnaHQgPiB0aGlzLm1heEhlaWdodCkgPyB0aGlzLm1heEhlaWdodCA6IGhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIH1cblxuXG59XG4iXX0=