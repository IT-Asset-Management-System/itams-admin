export interface AssetModel {
  id: number;
  name: string;
}

export interface Department {
  id: number;
  name: string;
}

export interface Status {
  id: number;
  name: string;
}

export interface Supplier {
  id: number;
  name: string;
}

export interface Asset {
  id: number;
  name: string;
  assetModel: string;
  department: string;
  supplier: string;
  status: string;
}

export interface NewAsset {
  name: string;
  purchase_cost: number;
  assetModelId: number;
  departmentId: number;
  statusId: number;
  supplierId: number;
}

export enum Actions {
  CREATE,
  UPDATE,
  CLONE,
}
