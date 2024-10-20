import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
    MAT_DIALOG_DATA,
    MatDialogContent,
    MatDialogModule,
    MatDialogRef,
    MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Basic_tasks } from 'app/core/shared/basic_tasks';
import { MatImportsModule } from 'app/core/shared/mat-imports';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'app-add-module',
    standalone: true,
    imports: [CommonModule, MatImportsModule],
    templateUrl: './add-module.component.html',
    styleUrls: ['./add-module.component.scss'],
})
export class AddModuleComponent
    extends Basic_tasks
    implements OnInit, OnDestroy
{
    moduleForm: FormGroup;
    typesOptions: string[] = ['basic', 'group', 'collapsable'];

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<AddModuleComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: { screenType: 'submodule' | 'module' | 'screen' }
    ) {
        super();
        this.moduleForm = fb.group({
            title: ['', Validators.required],
            type: ['basic', Validators.required],
            subtitle: [''],
            icon: [''],
            link: [''],
        });
    }

    ngOnInit() {
        console.log('what is daaL ', this.data);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    onSubmit() {
        console.log('submitting ', this.moduleForm);
        console.log('submitting ', this.moduleForm.value);
        if (this.data.screenType == 'module') {
            this.showSuccessMessage('Success message');
        }
    }

    AddModule() {
        console.log('create api for adding module');

        // this.companyService
        //     .deleteCompanyById(id, status)
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe({
        //         next: (resp) => {
        //             console.log('resp: ', resp);
        //         },
        //         error: (err) => {
        //             SWALMIXIN.fire({
        //                 icon: 'error',
        //                 title: err?.error?.message || err.message,
        //             });
        //         },
        //     });
    }

    onCancel() {
        this.dialogRef.close();
        this.showErrorMessage('error on closing');
    }
}
