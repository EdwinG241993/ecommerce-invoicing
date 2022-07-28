import {Entity, model, property} from '@loopback/repository';

@model()
export class ClientCredit extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  state: number;

  @property({
    type: 'number',
    required: true,
  })
  balance: number;

  @property({
    type: 'number',
    required: true,
  })
  deposit: number;

  @property({
    type: 'number',
    required: true,
  })
  qoute_number: number;


  constructor(data?: Partial<ClientCredit>) {
    super(data);
  }
}

export interface ClientCreditRelations {
  // describe navigational properties here
}

export type ClientCreditWithRelations = ClientCredit & ClientCreditRelations;
