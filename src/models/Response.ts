import {Status} from "./Enums";

export interface ResponseAuth {
    token: string,
    message: string,
    status: Status,
}
export interface ResponseObj<T> {
    data: T,
    message: string,
    status: Status,
}
export interface ResponseArray<T> {
    data: T[],
    status: Status,
    message: string,
    pageNo: number,
    count: number,
    pages: number,

}




