import {Entity, model, property} from '@loopback/repository';

@model()
export class PurchaseSupplier extends Entity {
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
    type: 'string',
    required: true,
  })
  description_product: string;

  @property({
    type: 'number',
    required: true,
  })
  unit_value: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
  })
  total_value: number;

  @property({
    type: 'number',
    required: true,
  })
  iva: number;

  @property({
    type: 'number',
    default: 0,
  })
  discount?: number;

  @property({
    type: 'number',
    default: 0,
  })
  credit?: number;

  @property({
    type: 'string',
    required: true,
  })
  invoice_image: string;

  @property({
    type: 'string',
    default: "",
  })
  remarks?: string;


  constructor(data?: Partial<PurchaseSupplier>) {
    super(data);
  }
}

export interface PurchaseSupplierRelations {
  // describe navigational properties here
}

export type PurchaseSupplierWithRelations = PurchaseSupplier & PurchaseSupplierRelations;
