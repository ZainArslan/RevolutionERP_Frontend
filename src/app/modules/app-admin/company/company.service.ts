import { HttpClient, HttpParams } from '@angular/common/http';
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
        // return this.http.get<any>(url);
    }

    getCompaniesById(id: number) {
        let params = new HttpParams().set('id', id.toString());
        return this.http.get<any>(
            `${environment.apiUrl}Companys/GetCompanyById`,
            { params }
        );
    }

    getAllOrganizations() {
        return this.http.get<Organization[]>(
            `${environment.apiUrl}Organizations/GetAllOrganizations`
        );
    }

    saveCompany(Company: Company) {
        return this.http.post(`${environment.apiUrl}Companys/Insert`, Company);
    }

    deleteCompanyById(id: number) {
        return this.http.delete(`${environment.apiUrl}Companys/Delete`, {
            params: new HttpParams().set('id', id.toString()),
        });
    }
}
