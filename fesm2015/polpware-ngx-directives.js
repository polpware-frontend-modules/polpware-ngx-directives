import { ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵlistener, ɵɵresolveWindow, ɵsetClassMetadata, Directive, Input, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

/**
 * Defines a directive for setting the height of the element in question according
 * to a formula.
 *
 */
class RestWindowHeightDirective {
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
        if (this.fixedHeight) {
            this.el.nativeElement.style.height = this.fixedHeight + 'px';
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
RestWindowHeightDirective.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(ɵɵdirectiveInject(ElementRef)); };
RestWindowHeightDirective.ɵdir = ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵɵresolveWindow);
    } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight", fixedHeight: "fixedHeight", maxHeight: "maxHeight", topOffset: "topOffset" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RestWindowHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[polpRestWindowHeight]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { bottomOffset: [{
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

class PolpNgxDirectivesModule {
}
PolpNgxDirectivesModule.ɵmod = ɵɵdefineNgModule({ type: PolpNgxDirectivesModule });
PolpNgxDirectivesModule.ɵinj = ɵɵdefineInjector({ factory: function PolpNgxDirectivesModule_Factory(t) { return new (t || PolpNgxDirectivesModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PolpNgxDirectivesModule, { declarations: [RestWindowHeightDirective], exports: [RestWindowHeightDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PolpNgxDirectivesModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    RestWindowHeightDirective
                ],
                imports: [],
                exports: [RestWindowHeightDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-directives
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PolpNgxDirectivesModule, RestWindowHeightDirective };
//# sourceMappingURL=polpware-ngx-directives.js.map
