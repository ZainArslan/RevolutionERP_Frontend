import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, Organization } from './company.interface';
import { environment } from 'environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class CompanyService {
    constructor(private http: HttpClient) {}
    headers = new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });

    getCompanies() {
        const url = `${environment.apiUrl}Companys/GetAllCompanies`;
        return this.http.get<any>(url, { headers: this.headers });
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

    updateCompany(Company: Company) {
        return this.http.post(`${environment.apiUrl}Companys/Update`, Company);
    }

    deleteCompanyById(id: number, status: boolean) {
        return this.http.delete(
            `${environment.apiUrl}Companys/UpdateCompanyStatus`,
            {
                params: new HttpParams()
                    .set('id', id.toString())
                    .set('Status', status),
                headers: this.headers,
            }
        );
    }
}
