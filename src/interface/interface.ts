export interface AssetModel {
  id: number;
  name: string;
  category: string;
  manufacturer: string;
  numOfAssets: number;
}

export interface NewAssetModel {
  name: string;
  categoryId: number;
  manufacturerId: number;
}

export interface Category {
  id: number;
  name: string;
  numOfAssets: number;
}

export interface NewCategory {
  name: string;
}

export interface Department {
  id: number;
  name: string;
  numOfAssets: number;
  numOfUsers: number;
  location: string;
}

export interface NewDepartment {
  name: string;
  locationId: number;
}

export interface Manufacturer {
  id: number;
  name: string;
  numOfAssets: number;
}

export interface NewManufacturer {
  name: string;
}

export interface Status {
  id: number;
  name: string;
  numOfAssets: number;
}

export interface NewStatus {
  name: string;
}

export interface Supplier {
  id: number;
  name: string;
  numOfAssets: number;
}

export interface NewSupplier {
  name: string;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  numOfDepartments: number;
}

export interface NewLocation {
  name: string;
  address: string;
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

export interface SourceCode {
  id: number;
  name: string;
  owner: string;
  description: string;
  isPrivate: string;
  url: string;
}

export interface NewSourceCode {
  name: string;
  owner: string;
  description: string;
  isPrivate: boolean;
  url: string;
}

export interface DigitalContent {
  id: number;
  name: string;
  owner: string;
  description: string;
  isPrivate: string;
  url: string;
}

export interface NewDigitalContent {
  name: string;
  owner: string;
  description: string;
  isPrivate: boolean;
  url: string;
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

export interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  department: string;
}

export interface NewUser {
  name: string;
  username: string;
  password: string;
  phone: string;
  departmentId: number;
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
