// export interface User {
//     id: string;
//     name: string;
//     email: string;
//     avatar?: string;
//     status?: string;
// }


export interface User {
    userID: number;
    avatar: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    organizationID: number;
    companyID: number;
    createdDate: string;
    modifiedDate: string;
    createdByUserId: number;
    modifiedByUserId: number;
    revision: number;
    rowVersion: string;
    isActive: boolean;
    name?: string;
}
