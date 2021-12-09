import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PasswordStrengthModule } from '../password-strength';
import { RegisterComponent } from './register.component';



@NgModule({
    imports: [ReactiveFormsModule, PasswordStrengthModule],
    declarations: [RegisterComponent],
    exports: [RegisterComponent]
})
export class RegisterModule { }