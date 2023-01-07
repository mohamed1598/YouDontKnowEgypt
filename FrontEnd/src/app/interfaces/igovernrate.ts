import { ILocation } from "./ilocation";

export interface IGovernrate {
    id?:number,
    name?:string,
    locations?:ILocation[],
    description?:string
}
