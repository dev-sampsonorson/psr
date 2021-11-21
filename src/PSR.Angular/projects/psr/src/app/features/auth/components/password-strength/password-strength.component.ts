import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, QueryList, Renderer2, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PasswordService } from '../../services/password.service';

@Component({
    selector: 'app-password-strength',
    templateUrl: './password-strength.component.html',
    styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit, AfterViewInit {
    @ViewChildren('chunk') chunkEls!: QueryList<ElementRef>;
    @Input('password-control') passwordControl!: FormControl;
    private defaultColor: string = '#ddd';
    private colors: string[] = ['darkred', 'orangered', 'orange', 'yellowgreen', '#ddd'];

    constructor(private pwdService: PasswordService, private renderer: Renderer2) { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.passwordControl.valueChanges.pipe(
            debounceTime(200),
            distinctUntilChanged()
        ).subscribe((value: string) => {
            const colorIndex = this.getColorIndex(this.pwdService.checkStrength(value));

            // reset bg color            

            this.chunkEls.forEach((item, index) => {
                this.renderer.setStyle(item.nativeElement, 'background-color', this.defaultColor);

                if (colorIndex === -1 || index <= colorIndex) {
                    this.renderer.setStyle(item.nativeElement, 'background-color', this.colors[colorIndex]);
                }
            })
        });
    }

    private getColorIndex(score: number) {
        const index = [10, 20, 30, 40].indexOf(score);
        return index === -1 ? (this.colors.length - 1) : index;
    }

}
