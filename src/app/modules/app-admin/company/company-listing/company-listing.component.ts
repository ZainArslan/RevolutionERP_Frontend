import { FuseConfirmationService } from '@fuse/services/confirmation';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListingHeaderComponent } from 'app/layout/layouts/shared-ui/listing-header/listing-header.component';
import { CompanyService } from '../company.service';
import { Subject, takeUntil  } from 'rxjs';
import { Company, displayedColumns } from '../company.interface';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SWALMIXIN } from 'app/core/services/mixin.service';
import { ImportsModule } from './../imports';

@Component({
    selector: 'app-company-listing',
    standalone: true,
    imports: [MatButtonModule,ImportsModule,ListingHeaderComponent],
    providers: [CompanyService],
    templateUrl: './company-listing.component.html',
    styleUrls: ['./company-listing.component.scss'],
})
export class CompanyListingComponent implements OnInit, OnDestroy {
    selectedStatus: any;
    filtersVisible: boolean = false;
    isLoadingData:boolean=false
    toggleFilters() {
        this.filtersVisible = !this.filtersVisible;
    }
    private _unsubscribeAll: Subject<void> = new Subject<void>();
    constructor(
        private companyService: CompanyService,
        private router: Router,
        private confirm: FuseConfirmationService
    ) {}
    companies: Company[] = [];
    displayedColumns: string[] = displayedColumns;

    ngOnInit(): void {
        this.getCompaniesData();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    getCompaniesData() {
        this.isLoadingData=true;
        this.companyService
            .getCompanies()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (resp) => {
                    console.log('resp: ', resp);
                    this.companies = resp;
                    this.isLoadingData=false;
                },
                error: (err) => {
                    this.isLoadingData=false;
                    SWALMIXIN.fire({
                        icon: 'error',
                        title: err?.error?.message||err.message,
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
                                    title: '',
                                });
                            },
                        });
                }
            });
    }
}
