import { ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵlistener, ɵɵresolveWindow, ɵsetClassMetadata, Directive, Input, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

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
    RestWindowHeightDirective.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(ɵɵdirectiveInject(ElementRef)); };
    RestWindowHeightDirective.ɵdir = ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
            ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵɵresolveWindow);
        } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight", fixedHeight: "fixedHeight", maxHeight: "maxHeight", topOffset: "topOffset", containerClass: "containerClass" } });
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
