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
import { Organization, UploadEvent } from '../company.interface';
import { FileUploadModule } from 'primeng/fileupload';
import { SWALMIXIN } from 'app/core/services/mixin.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
// import { ImportsModule } from './../imports';

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
        FileUploadModule,
        ToastModule,
        // ImportsModule
    ],
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.scss'],
    providers: [MessageService]
})
export class CompanyFormComponent implements OnInit {
    formFieldHelpers: string[] = [''];
    companyForm: FormGroup;
    viewInit: boolean = false;
    organizationsList: Organization[] = [];
    companyId: number;
    primaryUserForm: FormGroup;
    private _unsubscribeAll: Subject<void> = new Subject<void>();
    selectedImage: string | ArrayBuffer | null = null;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private companyService: CompanyService,
        private activatedRoute: ActivatedRoute,
        private messageService: MessageService
    ) {
        this.companyForm = this.fb.group({
            organizationId: ['', Validators.required],
            companyName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            companyCode: [''],
            referencePersonName: [''],
            registrationNo: [''],
            cityName: [''],
            province: [''],
            country: [''],
            status: [true],
        });
        this.primaryUserForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            password: ['', Validators.required],
        })
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
                        title: err?.error.message || err?.message,
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
                        title: err?.error.message || err?.message,
                    });
                },
            });
    }

    redirectToListing() {
        this.router.navigateByUrl('app-admin/company');
    }

    handleFormSubmit() {

        if (this.notValidated()) return
        let payload = this.getPayload();

        this.companyService
            .saveCompany(payload)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (resp) => {
                    this.redirectToListing();
                },
                error: (err) => {
                    SWALMIXIN.fire({
                        icon: 'error',
                        title: err?.error.message || err?.message,
                    });
                },
            });
    }

    notValidated() {
        if (this.companyForm.invalid) {
            this.companyForm.markAllAsTouched();
            this.primaryUserForm.markAllAsTouched();
            return true;
        }
        if (this.primaryUserForm.invalid && !this.companyId) {
            return true;
        }

        if (!this.selectedImage) {
            SWALMIXIN.fire({
                icon: 'error',
                title: "Company image is required",
            });
            return true;
        }
        return false
    }

    getPayload() {
        let payload;
        console.log("uploaded files: ", this.selectedImage);
        if (this.companyId) {
            payload = this.companyForm.value
        } else {
            payload = { ...this.companyForm.value, ...this.primaryUserForm.value, companyImage: this.selectedImage?.toString()?.split(',')[1] }
        }


        return payload;
    }


    onFileChange(event: any): void {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                this.selectedImage = reader.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select an image file.');
        }
    }
}
