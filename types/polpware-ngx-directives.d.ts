import * as i0 from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';

/**
 * Defines a directive for setting the height of the element in question according
 * to a formula.
 *
 */
declare class RestWindowHeightDirective implements AfterViewInit {
    private el;
    bottomOffset: number;
    minHeight: number;
    fixedHeight: number;
    maxHeight: number;
    topOffset: number;
    containerClass: string;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    onResize(event: any): void;
    private computeHeight;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestWindowHeightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RestWindowHeightDirective, "[polpRestWindowHeight]", never, { "bottomOffset": { "alias": "bottomOffset"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; "fixedHeight": { "alias": "fixedHeight"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; "topOffset": { "alias": "topOffset"; "required": false; }; "containerClass": { "alias": "containerClass"; "required": false; }; }, {}, never, never, false, never>;
}

declare class PolpNgxDirectivesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PolpNgxDirectivesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PolpNgxDirectivesModule, [typeof RestWindowHeightDirective], never, [typeof RestWindowHeightDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PolpNgxDirectivesModule>;
}

export { PolpNgxDirectivesModule, RestWindowHeightDirective };
//# sourceMappingURL=polpware-ngx-directives.d.ts.map
