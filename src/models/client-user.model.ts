import {Entity, model, property} from '@loopback/repository';

@model()
export class ClientUser extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  user: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<ClientUser>) {
    super(data);
  }
}

export interface ClientUserRelations {
  // describe navigational properties here
}

export type ClientUserWithRelations = ClientUser & ClientUserRelations;
