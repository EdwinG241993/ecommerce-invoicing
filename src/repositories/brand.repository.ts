import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Brand, BrandRelations} from '../models';

export class BrandRepository extends DefaultCrudRepository<
  Brand,
  typeof Brand.prototype.id,
  BrandRelations
> {
  constructor(
    @inject('datasources.MySql') dataSource: MySqlDataSource,
  ) {
    super(Brand, dataSource);
  }
}
