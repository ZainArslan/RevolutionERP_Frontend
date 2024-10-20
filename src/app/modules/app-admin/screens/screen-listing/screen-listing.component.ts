import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHeaderComponent } from 'app/layout/layouts/shared-ui/listing-header/listing-header.component';
import { MatDialog } from '@angular/material/dialog';
import { AddModuleComponent } from '../add-module/add-module.component';
import { ImportsModule } from 'app/core/shared/primeNg-Imports';
import { MatImportsModule } from 'app/core/shared/mat-imports';
// import { AccordionModule } from 'primeng/accordion';
@Component({
    selector: 'app-screen-listing',
    standalone: true,
    imports: [
        CommonModule,
        ImportsModule,
        MatImportsModule,
        ListingHeaderComponent,
    ],
    templateUrl: './screen-listing.component.html',
    styleUrls: ['./screen-listing.component.scss'],
})
export class ScreenListingComponent {
    isAddingModule: boolean = false;

    constructor(public dialog: MatDialog) {
        console.log('is this component working ');
    }

    openModal(screenType): void {
        this.dialog.open(AddModuleComponent, {
            width: '500px',
            data: { screenType },
        });
    }
}
