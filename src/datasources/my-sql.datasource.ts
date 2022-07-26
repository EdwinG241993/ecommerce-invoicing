import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MySql',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '',
  database: 'ecommercesysinv_bd'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MySqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MySql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MySql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
