import {Entity, model, property} from '@loopback/repository';

@model()
export class SupplierCredit extends Entity {
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
  number_quotas: number;


  constructor(data?: Partial<SupplierCredit>) {
    super(data);
  }
}

export interface SupplierCreditRelations {
  // describe navigational properties here
}

export type SupplierCreditWithRelations = SupplierCredit & SupplierCreditRelations;
