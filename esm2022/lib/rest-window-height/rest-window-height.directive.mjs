import { Directive, Input, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
function findAncestorByClass(el, cls) {
    while (el.parentElement) {
        el = el.parentElement;
        if (el.classList.contains(cls)) {
            break;
        }
    }
    return el;
}
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
        this.containerClass = '';
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
        if (this.fixedHeight) {
            this.el.nativeElement.style.height = this.fixedHeight + 'px';
            return;
        }
        let bodyRect;
        if (this.containerClass) {
            const p = findAncestorByClass(nativeElement, this.containerClass);
            bodyRect = p.getBoundingClientRect();
        }
        else {
            bodyRect = document.body.getBoundingClientRect();
        }
        const elemRect = nativeElement.getBoundingClientRect();
        const offset = elemRect.top - bodyRect.top;
        const screenHeight = window.innerHeight;
        let height = screenHeight - offset - this.bottomOffset - this.topOffset;
        height = (height > this.minHeight) ? height : this.minHeight;
        if (this.maxHeight) {
            height = (height > this.maxHeight) ? this.maxHeight : height;
        }
        this.el.nativeElement.style.height = height + 'px';
    }
    static { this.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight", fixedHeight: "fixedHeight", maxHeight: "maxHeight", topOffset: "topOffset", containerClass: "containerClass" } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestWindowHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[polpRestWindowHeight]'
            }]
    }], () => [{ type: i0.ElementRef }], { bottomOffset: [{
            type: Input
        }], minHeight: [{
            type: Input
        }], fixedHeight: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], topOffset: [{
            type: Input
        }], containerClass: [{
            type: Input
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BvbHB3YXJlL25neC1kaXJlY3RpdmVzL3NyYy9saWIvcmVzdC13aW5kb3ctaGVpZ2h0L3Jlc3Qtd2luZG93LWhlaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBNkIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUYsU0FBUyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsR0FBVztJQUN4QyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QixFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDN0IsTUFBTTtRQUNWLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUlILE1BQU0sT0FBTyx5QkFBeUI7SUFTbEMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFQekIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFFUyxDQUFDO0lBRXZDLGVBQWU7UUFDWCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELFFBQVEsQ0FBQyxLQUFLO1FBQ1YsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxhQUFhO1FBQ2pCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzVDLHdCQUF3QjtRQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQzdELE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxRQUFpQixDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxHQUFHLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEUsUUFBUSxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3pDLENBQUM7YUFBTSxDQUFDO1lBQ0osUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNyRCxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFdkQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBRTNDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFeEMsSUFBSSxNQUFNLEdBQUcsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFeEUsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTdELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNqRSxDQUFDO1FBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZELENBQUM7MEZBdkRRLHlCQUF5QjtvRUFBekIseUJBQXlCO1lBQXpCLHNHQUFBLG9CQUFnQiwrQkFBUzs7O2lGQUF6Qix5QkFBeUI7Y0FIckMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7MkNBR1ksWUFBWTtrQkFBcEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBV04sUUFBUTtrQkFEUCxZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5mdW5jdGlvbiBmaW5kQW5jZXN0b3JCeUNsYXNzKGVsLCBjbHM6IHN0cmluZykge1xuICAgIHdoaWxlIChlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogRGVmaW5lcyBhIGRpcmVjdGl2ZSBmb3Igc2V0dGluZyB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGluIHF1ZXN0aW9uIGFjY29yZGluZyBcbiAqIHRvIGEgZm9ybXVsYS5cbiAqIFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1twb2xwUmVzdFdpbmRvd0hlaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RXaW5kb3dIZWlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBJbnB1dCgpIGJvdHRvbU9mZnNldCA9IDA7XG4gICAgQElucHV0KCkgbWluSGVpZ2h0ID0gMDtcbiAgICBASW5wdXQoKSBmaXhlZEhlaWdodCA9IDA7XG4gICAgQElucHV0KCkgbWF4SGVpZ2h0ID0gMDtcbiAgICBASW5wdXQoKSB0b3BPZmZzZXQgPSAwO1xuICAgIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVIZWlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVIZWlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wdXRlSGVpZ2h0KCkge1xuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICAvLyBDYXNlIDE6IGZpeGVkIEhlaWdodCBcbiAgICAgICAgaWYgKHRoaXMuZml4ZWRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmZpeGVkSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBib2R5UmVjdDogRE9NUmVjdDtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBmaW5kQW5jZXN0b3JCeUNsYXNzKG5hdGl2ZUVsZW1lbnQsIHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgICAgICAgICAgYm9keVJlY3QgPSBwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbVJlY3QgPSBuYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGVsZW1SZWN0LnRvcCAtIGJvZHlSZWN0LnRvcDtcblxuICAgICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgbGV0IGhlaWdodCA9IHNjcmVlbkhlaWdodCAtIG9mZnNldCAtIHRoaXMuYm90dG9tT2Zmc2V0IC0gdGhpcy50b3BPZmZzZXQ7XG5cbiAgICAgICAgaGVpZ2h0ID0gKGhlaWdodCA+IHRoaXMubWluSGVpZ2h0KSA/IGhlaWdodCA6IHRoaXMubWluSGVpZ2h0O1xuXG4gICAgICAgIGlmICh0aGlzLm1heEhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gKGhlaWdodCA+IHRoaXMubWF4SGVpZ2h0KSA/IHRoaXMubWF4SGVpZ2h0IDogaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgfVxuXG5cbn1cbiJdfQ==