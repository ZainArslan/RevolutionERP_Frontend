import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';

@Component({
    selector: 'app-form-basic-input',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
    ],
    templateUrl: './form-basic-input.component.html',
    styleUrls: ['./form-basic-input.component.scss'],
})
export class FormBasicInputComponent {
    @Input() label: string;
    @Input() formGroup: FormGroup;
    @Input() controlName: string;
    @Input() formFieldHelpers: string[];

    get formControl() {
        return this.formGroup.get(this.controlName);
    }

    getErrorMessage() {
        if (this.formControl.hasError('required')) {
            return 'You must enter a value';
        }
        return this.formControl.hasError('email') ? 'Not a valid email' : '';
    }
}
