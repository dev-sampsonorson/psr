import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ISkillCategory, ISkillSubCategory } from '../../skill.model';

@Component({
    selector: 'app-skill-filter',
    templateUrl: './skill-filter.component.html',
    styleUrls: ['./skill-filter.component.scss']
})
export class SkillFilterComponent implements OnInit {

    @Input() categories: ISkillCategory[] = [];

    public subCategories: ISkillSubCategory[] = [];
    public isSubcategoryDisabled = true;
    public form: FormGroup | undefined;

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {

        this.form = this.fb.group({
            category: ['', [Validators.required]],
            subCategory: ['', [Validators.required]]
        });
    }

    filterSkillsHandler(): void {

    }

}
