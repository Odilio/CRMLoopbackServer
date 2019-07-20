import { Entity } from '@loopback/repository';
export declare class Company extends Entity {
    name: string;
    id: number;
    cnpj: number;
    token?: string;
    constructor(data?: Partial<Company>);
}
export interface CompanyRelations {
}
export declare type CompanyWithRelations = Company & CompanyRelations;
