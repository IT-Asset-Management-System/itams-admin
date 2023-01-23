export interface AssetModel {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Department {
  id: number;
  name: string;
}

export interface Manufacturer {
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

export interface License {
  id: number;
  name: string;
  purchase_cost: string;
  purchase_date: string;
  expiration_date: string;
  category: string;
  manufacturer: string;
  supplier: string;
}

export interface NewLicense {
  name: string;
  purchase_cost: string;
  purchase_date: string;
  expiration_date: string;
  categoryId: number;
  manufacturerId: number;
  supplierId: number;
}

export enum Actions {
  CREATE,
  UPDATE,
  CLONE,
}

export interface MenuItem {
  name: string;
  destination: string;
}
