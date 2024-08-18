import { FuseConfirmationService } from '@fuse/services/confirmation';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHeaderComponent } from 'app/layout/layouts/shared-ui/listing-header/listing-header.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from '../company.service';
import { Subject, takeUntil } from 'rxjs';
import { Company, displayedColumns } from '../company.interface';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SWALMIXIN } from 'app/core/services/mixin.service';
import { Button } from 'app/layout/primeng/app/components/button/button';

@Component({
    selector: 'app-company-listing',
    standalone: true,
    imports: [
        CommonModule,
        ListingHeaderComponent,
        MatTableModule,
        HttpClientModule,
        MatButtonModule,
        Button
    ],
    templateUrl: './company-listing.component.html',
    styleUrls: ['./company-listing.component.scss'],
})
export class CompanyListingComponent implements OnInit, OnDestroy {
    private _unsubscribeAll: Subject<void> = new Subject<void>();
    constructor(
        private companyService: CompanyService,
        private router: Router,
        private confirm: FuseConfirmationService
    ) { }
    companies: Company[] = [];
    displayedColumns: string[] = displayedColumns;

    ngOnInit(): void {
        // this.companies = dummyData;
        this.getCompaniesData();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    getCompaniesData() {
        this.companyService
            .getCompanies()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (resp) => {
                    this.companies = resp;
                },
                error: (err) => {
                    console.log("err: ", err);

                    SWALMIXIN.fire({
                        icon: 'error',
                        title: 'Please add customer basic detail first',
                    });
                },
            });
    }

    goToForm(id?) {
        if (id)
            this.router.navigate(['app-admin/company/company-form'], {
                queryParams: { id },
            });
        else this.router.navigateByUrl('app-admin/company/company-form');
    }

    deleteCompany(id: number) {
        this.confirm
            .open()
            .afterClosed()
            .subscribe((res) => {
                if (res == 'confirmed') {
                    this.companyService
                        .deleteCompanyById(id)
                        .pipe(takeUntil(this._unsubscribeAll))
                        .subscribe({
                            next: (resp) => {
                                console.log('resp: ', resp);
                            },
                            error: (err) => {
                                SWALMIXIN.fire({
                                    icon: 'error',
                                    title: err?.error.error,
                                });
                            },
                        });
                }
            });
    }
}
