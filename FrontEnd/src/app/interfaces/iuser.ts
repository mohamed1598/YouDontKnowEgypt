import { ILocation } from "./ilocation";

export interface IUser {
    email?:string,
    id?:number,
    isAdmin?:boolean,
    name?:string,
    password?:string,
    locations?:ILocation[]
}
