import { Directive, ElementRef, Input, HostListener } from '@angular/core';
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
var RestWindowHeightDirective = /** @class */ (function () {
    function RestWindowHeightDirective(el) {
        this.el = el;
        this.bottomOffset = 0;
        this.minHeight = 0;
        this.fixedHeight = 0;
        this.maxHeight = 0;
        this.topOffset = 0;
        this.containerClass = '';
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
        var bodyRect;
        if (this.containerClass) {
            var p = findAncestorByClass(nativeElement, this.containerClass);
            bodyRect = p.getBoundingClientRect();
        }
        else {
            bodyRect = document.body.getBoundingClientRect();
        }
        var elemRect = nativeElement.getBoundingClientRect();
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
        } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight", fixedHeight: "fixedHeight", maxHeight: "maxHeight", topOffset: "topOffset", containerClass: "containerClass" } });
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
        }], containerClass: [{
            type: Input
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtZGlyZWN0aXZlcy8iLCJzb3VyY2VzIjpbImxpYi9yZXN0LXdpbmRvdy1oZWlnaHQvcmVzdC13aW5kb3ctaGVpZ2h0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBaUIsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUYsU0FBUyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsR0FBVztJQUN4QyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUU7UUFDckIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEIsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixNQUFNO1NBQ1Q7S0FDSjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSDtJQVlJLG1DQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVB6QixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUVTLENBQUM7SUFFdkMsbURBQWUsR0FBZjtRQUFBLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUdELDRDQUFRLEdBRFIsVUFDUyxLQUFLO1FBRGQsaUJBS0M7UUFIRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8saURBQWEsR0FBckI7UUFDSSxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1Qyx3QkFBd0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDN0QsT0FBTztTQUNWO1FBRUQsSUFBSSxRQUFpQixDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFNLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xFLFFBQVEsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN4QzthQUFNO1lBQ0gsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNwRDtRQUVELElBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRXZELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUUzQyxJQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBRXhDLElBQUksTUFBTSxHQUFHLFlBQVksR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRXhFLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUU3RCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZELENBQUM7c0dBdkRRLHlCQUF5QjtrRUFBekIseUJBQXlCO2tIQUF6QixvQkFBZ0I7O29DQXBCN0I7Q0E4RUMsQUE3REQsSUE2REM7U0ExRFkseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FIckMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQVVMLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmZ1bmN0aW9uIGZpbmRBbmNlc3RvckJ5Q2xhc3MoZWwsIGNsczogc3RyaW5nKSB7XG4gICAgd2hpbGUgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbDtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIGEgZGlyZWN0aXZlIGZvciBzZXR0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgaW4gcXVlc3Rpb24gYWNjb3JkaW5nIFxuICogdG8gYSBmb3JtdWxhLlxuICogXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3BvbHBSZXN0V2luZG93SGVpZ2h0XSdcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFdpbmRvd0hlaWdodERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgYm90dG9tT2Zmc2V0ID0gMDtcbiAgICBASW5wdXQoKSBtaW5IZWlnaHQgPSAwO1xuICAgIEBJbnB1dCgpIGZpeGVkSGVpZ2h0ID0gMDtcbiAgICBASW5wdXQoKSBtYXhIZWlnaHQgPSAwO1xuICAgIEBJbnB1dCgpIHRvcE9mZnNldCA9IDA7XG4gICAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZUhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZUhlaWdodCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbXB1dGVIZWlnaHQoKSB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIC8vIENhc2UgMTogZml4ZWQgSGVpZ2h0IFxuICAgICAgICBpZiAodGhpcy5maXhlZEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZml4ZWRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJvZHlSZWN0OiBET01SZWN0O1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXJDbGFzcykge1xuICAgICAgICAgICAgY29uc3QgcCA9IGZpbmRBbmNlc3RvckJ5Q2xhc3MobmF0aXZlRWxlbWVudCwgdGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgICAgICAgICBib2R5UmVjdCA9IHAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5UmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtUmVjdCA9IG5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbVJlY3QudG9wIC0gYm9keVJlY3QudG9wO1xuXG4gICAgICAgIGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgICBsZXQgaGVpZ2h0ID0gc2NyZWVuSGVpZ2h0IC0gb2Zmc2V0IC0gdGhpcy5ib3R0b21PZmZzZXQgLSB0aGlzLnRvcE9mZnNldDtcblxuICAgICAgICBoZWlnaHQgPSAoaGVpZ2h0ID4gdGhpcy5taW5IZWlnaHQpID8gaGVpZ2h0IDogdGhpcy5taW5IZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMubWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHQgPSAoaGVpZ2h0ID4gdGhpcy5tYXhIZWlnaHQpID8gdGhpcy5tYXhIZWlnaHQgOiBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB9XG5cblxufVxuIl19