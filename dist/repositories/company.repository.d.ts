import { DefaultCrudRepository } from '@loopback/repository';
import { Company, CompanyRelations } from '../models';
import { PostgresDataSource } from '../datasources';
export declare class CompanyRepository extends DefaultCrudRepository<Company, typeof Company.prototype.id, CompanyRelations> {
    constructor(dataSource: PostgresDataSource);
}
