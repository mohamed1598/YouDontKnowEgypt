import { ICategory } from "./icategory";
import { IGovernrate } from "./igovernrate";
import { IUser } from "./iuser";

export interface ILocation {
    id?:number;
    approved?:boolean,
    categoryId?:number,
    createDate?:Date,
    description?:string,
    governorateId?:number,
    name?:string,
    updateDate?:Date,
    userId?:number,
    category?:ICategory,
    governorate?:IGovernrate,
    user?:IUser
}
