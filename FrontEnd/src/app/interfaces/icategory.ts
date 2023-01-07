import { ILocation } from "./ilocation";

export interface ICategory {
    id?:number,
    name?:string,
    locations?:ILocation[]
}
