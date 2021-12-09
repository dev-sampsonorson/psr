import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [ReactiveFormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }