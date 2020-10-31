import { ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵlistener, ɵɵresolveWindow, ɵsetClassMetadata, Directive, Input, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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
    RestWindowHeightDirective.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(ɵɵdirectiveInject(ElementRef)); };
    RestWindowHeightDirective.ɵdir = ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵɵresolveWindow);
        } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight" } });
    return RestWindowHeightDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(RestWindowHeightDirective, [{
        type: Directive,
        args: [{
                selector: '[polpRestWindowHeight]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { bottomOffset: [{
            type: Input
        }], minHeight: [{
            type: Input
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();

var PolpNgxDirectivesModule = /** @class */ (function () {
    function PolpNgxDirectivesModule() {
    }
    PolpNgxDirectivesModule.ɵmod = ɵɵdefineNgModule({ type: PolpNgxDirectivesModule });
    PolpNgxDirectivesModule.ɵinj = ɵɵdefineInjector({ factory: function PolpNgxDirectivesModule_Factory(t) { return new (t || PolpNgxDirectivesModule)(); }, imports: [[]] });
    return PolpNgxDirectivesModule;
}());
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
