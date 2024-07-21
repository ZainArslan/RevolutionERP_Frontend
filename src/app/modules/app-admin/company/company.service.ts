import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, Organization } from './company.interface';
import { environment } from 'environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class CompanyService {
    constructor(private http: HttpClient) {}

    getCompanies() {
        const url = `${environment.apiUrl}Companys/GetAllCompanies`;
        return this.http.get<Company[]>(url);
    }

    getAllOrganizations() {
        return this.http.get<Organization[]>(
            `${environment.apiUrl}Organizations/GetAllOrganizations`
        );
    }

    saveComapny(Company: Company) {
        return this.http.post(`${environment.apiUrl}Companys/Insert`, Company);
    }
}
