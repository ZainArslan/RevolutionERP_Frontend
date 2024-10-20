import { CompanyFormComponent } from './company/company-form/company-form.component';
import { Routes } from '@angular/router';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';
import { ScreenListingComponent } from './screens/screen-listing/screen-listing.component';

export default [
    {
        path: 'listing',
        component: CompanyListingComponent,
    },
    {
        path: 'company-form',
        component: CompanyFormComponent,
    },
    {
        path: 'screen-listing',
        component: ScreenListingComponent,
    },
] as Routes;
