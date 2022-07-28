import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {ClientCredit, ClientCreditRelations} from '../models';

export class ClientCreditRepository extends DefaultCrudRepository<
  ClientCredit,
  typeof ClientCredit.prototype.id,
  ClientCreditRelations
> {
  constructor(
    @inject('datasources.MySql') dataSource: MySqlDataSource,
  ) {
    super(ClientCredit, dataSource);
  }
}
