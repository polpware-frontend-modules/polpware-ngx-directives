import { ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Defines a directive for setting the height of the element in question according
 * to a formula.
 *
 */
export declare class RestWindowHeightDirective implements AfterViewInit {
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
    static ɵfac: i0.ɵɵFactoryDef<RestWindowHeightDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<RestWindowHeightDirective, "[polpRestWindowHeight]", never, { "bottomOffset": "bottomOffset"; "minHeight": "minHeight"; "fixedHeight": "fixedHeight"; "maxHeight": "maxHeight"; "topOffset": "topOffset"; "containerClass": "containerClass"; }, {}, never>;
}
