(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-directives', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-directives'] = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

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
        RestWindowHeightDirective.ɵfac = function RestWindowHeightDirective_Factory(t) { return new (t || RestWindowHeightDirective)(core.ɵɵdirectiveInject(core.ElementRef)); };
        RestWindowHeightDirective.ɵdir = core.ɵɵdefineDirective({ type: RestWindowHeightDirective, selectors: [["", "polpRestWindowHeight", ""]], hostBindings: function RestWindowHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core.ɵɵlistener("resize", function RestWindowHeightDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, core.ɵɵresolveWindow);
            } }, inputs: { bottomOffset: "bottomOffset", minHeight: "minHeight", fixedHeight: "fixedHeight", maxHeight: "maxHeight", topOffset: "topOffset" } });
        return RestWindowHeightDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(RestWindowHeightDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[polpRestWindowHeight]'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { bottomOffset: [{
                type: core.Input
            }], minHeight: [{
                type: core.Input
            }], fixedHeight: [{
                type: core.Input
            }], maxHeight: [{
                type: core.Input
            }], topOffset: [{
                type: core.Input
            }], onResize: [{
                type: core.HostListener,
                args: ['window:resize', ['$event']]
            }] }); })();

    var PolpNgxDirectivesModule = /** @class */ (function () {
        function PolpNgxDirectivesModule() {
        }
        PolpNgxDirectivesModule.ɵmod = core.ɵɵdefineNgModule({ type: PolpNgxDirectivesModule });
        PolpNgxDirectivesModule.ɵinj = core.ɵɵdefineInjector({ factory: function PolpNgxDirectivesModule_Factory(t) { return new (t || PolpNgxDirectivesModule)(); }, imports: [[]] });
        return PolpNgxDirectivesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(PolpNgxDirectivesModule, { declarations: [RestWindowHeightDirective], exports: [RestWindowHeightDirective] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PolpNgxDirectivesModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        RestWindowHeightDirective
                    ],
                    imports: [],
                    exports: [RestWindowHeightDirective]
                }]
        }], null, null); })();

    exports.PolpNgxDirectivesModule = PolpNgxDirectivesModule;
    exports.RestWindowHeightDirective = RestWindowHeightDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-directives.umd.js.map
