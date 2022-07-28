import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {PurchaseSupplier, PurchaseSupplierRelations} from '../models';

export class PurchaseSupplierRepository extends DefaultCrudRepository<
  PurchaseSupplier,
  typeof PurchaseSupplier.prototype.id,
  PurchaseSupplierRelations
> {
  constructor(
    @inject('datasources.MySql') dataSource: MySqlDataSource,
  ) {
    super(PurchaseSupplier, dataSource);
  }
}
