import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {SupplierCredit, SupplierCreditRelations} from '../models';

export class SupplierCreditRepository extends DefaultCrudRepository<
  SupplierCredit,
  typeof SupplierCredit.prototype.id,
  SupplierCreditRelations
> {
  constructor(
    @inject('datasources.MySql') dataSource: MySqlDataSource,
  ) {
    super(SupplierCredit, dataSource);
  }
}
