export interface Company {
    companyId: number;
    organizationId: number;
    companyName: string;
    companyCode: string;
    registrationNo: string;
    email: string;
    phone: string;
    address: string;
    cityName: number;
    province: number;
    country: number;
    status: boolean;
    CompanyImage?:string;
    ReferencePersonName?:string;
    Password?:string;
    FirstName?:string;
    LastName?:string;
    LoginUserId?:string;
}

export interface Organization {
    organizationId: number;
    organizationName: string;
    organizationCode: string;
    registrationNo: string;
    email: string;
    phone: string;
    address: string;
    cityId: number;
    provinceId: number;
    countryId: number;
    status: boolean;
}

export const displayedColumns: string[] = [
    'companyName',
    'companyCode',
    'registrationNo',
    'email',
    'phone',
    'address',
    'status',
    'action',
];
