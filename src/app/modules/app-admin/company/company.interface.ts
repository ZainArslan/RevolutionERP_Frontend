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

export const dummyData: Company[] = [
    {
        companyId: 1,
        organizationId: 1,
        companyName: 'Testing',
        companyCode: 'string',
        registrationNo: 'string',
        email: 'string',
        phone: 'string',
        address: 'string',
        cityName: 1,
        province: 2,
        country: 2,
        status: true,
    },
    {
        companyId: 1,
        organizationId: 1,
        companyName: 'Testing',
        companyCode: 'string',
        registrationNo: 'string',
        email: 'string',
        phone: 'string',
        address: 'string',
        cityName: 1,
        province: 2,
        country: 2,
        status: true,
    },
    {
        companyId: 1,
        organizationId: 1,
        companyName: 'Testing',
        companyCode: 'string',
        registrationNo: 'string',
        email: 'string',
        phone: 'string',
        address: 'string',
        cityName: 1,
        province: 2,
        country: 2,
        status: true,
    },
    {
        companyId: 1,
        organizationId: 1,
        companyName: 'Testing',
        companyCode: 'string',
        registrationNo: 'string',
        email: 'string',
        phone: 'string',
        address: 'string',
        cityName: 1,
        province: 2,
        country: 2,
        status: true,
    },
];
