export interface Category {
  id: number;
  name: string;
}

export interface Manufacturer {
  id: number;
  name: string;
}

export interface Supplier {
  id: number;
  name: string;
}

export interface NewAsset {
  name: string;
  status: string;
  purchase_cost: number;
  categoryId: number;
  manufacturerId: number;
  supplierId: number;
}

export enum Actions {
  CREATE,
  UPDATE,
  CLONE,
}
