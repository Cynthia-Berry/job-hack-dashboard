import {Role} from "./Enums";

export interface Profile {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    profileImage: string,
    updatedAt: Date,
    createdAt: Date
    __v: number
}
export interface AdminProfile extends Profile{
    adminId: string,
    role: Role.ADMIN,
    adminVerified: boolean,
}