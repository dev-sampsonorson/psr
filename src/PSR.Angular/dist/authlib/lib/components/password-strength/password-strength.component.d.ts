import { AfterViewInit, ElementRef, OnInit, QueryList, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordService } from '../../services/password.service';
import * as i0 from "@angular/core";
export declare class PasswordStrengthComponent implements OnInit, AfterViewInit {
    private pwdService;
    private renderer;
    chunkEls: QueryList<ElementRef>;
    passwordControl: FormControl;
    private defaultColor;
    private colors;
    constructor(pwdService: PasswordService, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private getColorIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<PasswordStrengthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PasswordStrengthComponent, "app-password-strength", never, { "passwordControl": "password-control"; }, {}, never, never>;
}
