import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {ClientUser, ClientUserRelations} from '../models';

export class ClientUserRepository extends DefaultCrudRepository<
  ClientUser,
  typeof ClientUser.prototype.id,
  ClientUserRelations
> {
  constructor(
    @inject('datasources.MySql') dataSource: MySqlDataSource,
  ) {
    super(ClientUser, dataSource);
  }
}
