export interface Login {
    email: string;
    password: string;
}
export interface AdminLogin {
    adminId: string;
    password: string;
}

export interface CompanyLogin {
    companyId: string,
    password: string
}
export interface Registration {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
}
export interface CompanyRegistration extends Registration {
    name: string,
    website: string,
}

export interface RegistrationResponse {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    updatedAt: Date,
    createdAt: Date
}

export interface AdminRegistrationResponse extends RegistrationResponse{
    adminId: string
}
export interface CompanyRegistrationResponse extends RegistrationResponse{
    companyId: string,
    name: string,
    website: string,
}
