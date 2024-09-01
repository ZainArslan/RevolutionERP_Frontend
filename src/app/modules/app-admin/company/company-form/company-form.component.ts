import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHeaderComponent } from 'app/layout/layouts/shared-ui/listing-header/listing-header.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { FormBasicInputComponent } from '../../../../layout/layouts/shared-ui/form-basic-input/form-basic-input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CompanyService } from '../company.service';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';
import { Organization } from '../company.interface';
import { SWALMIXIN } from 'app/core/services/mixin.service';

@Component({
    selector: 'app-company-form',
    standalone: true,
    imports: [
        CommonModule,
        ListingHeaderComponent,
        MatIconModule,
        FormsModule,
        MatFormFieldModule,
        TextFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FormBasicInputComponent,
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
    ],
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss'],
})
export class CompanyFormComponent implements OnInit {
    formFieldHelpers: string[] = [''];
    companyForm: FormGroup;
    viewInit: boolean = false;
    organizationsList: Organization[] = [];
    companyId: number;
    private _unsubscribeAll: Subject<void> = new Subject<void>();
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private companyService: CompanyService,
        private activatedRoute: ActivatedRoute
    ) {
        this.companyForm = this.fb.group({
            organizationId: ['', Validators.required],
            companyName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            companyCode: [''],
            registrationNo: [''],
            cityName: [''],
            province: [''],
            country: [''],
            status: [true],
        });
    }

    async ngOnInit() {
        const params = await firstValueFrom(this.activatedRoute.queryParams);
        if (params.id) {
            this.companyId = params.id;
            this.getDataById();
        }
        this.getAllOrganizations();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    getDataById() {
        this.companyService
            .getCompaniesById(this.companyId)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (resp) => {
                    console.log('resp: ', resp);
                },
                error: (err) => {
                    SWALMIXIN.fire({
                        icon: 'error',
                        title: 'Please add customer basic detail first',
                    });
                },
            });
    }

    getAllOrganizations() {
        this.companyService
            .getAllOrganizations()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (resp) => {
                    this.organizationsList = resp;
                    console.log('resp: ', resp);
                },
                error: (err) => {
                    SWALMIXIN.fire({
                        icon: 'error',
                        title: 'Please add customer basic detail first',
                    });
                },
            });
    }

    redirectToListing() {
        this.router.navigateByUrl('app-admin/company');
    }

    handleFormSubmit() {
        if (this.companyForm.invalid) {
            this.companyForm.markAllAsTouched();
            return;
        }

        this.companyService
            .saveCompany(this.companyForm.value)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (resp) => {
                    this.redirectToListing();
                },
                error: (err) => {
                    SWALMIXIN.fire({
                        icon: 'error',
                        title: 'Please add customer basic detail first',
                    });
                },
            });
    }
}
