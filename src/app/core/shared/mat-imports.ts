import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatDialogModule,
    ],
    exports: [
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        TextFieldModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatDialogModule
    ],
})
export class MatImportsModule {}
