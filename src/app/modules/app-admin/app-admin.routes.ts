import { CompanyFormComponent } from './company/company-form/company-form.component';
import { Routes } from '@angular/router';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';

export default [
    {
        path: '',
        component: CompanyListingComponent,
    },
    {
        path: 'company-form',
        component: CompanyFormComponent,
    },
] as Routes;
