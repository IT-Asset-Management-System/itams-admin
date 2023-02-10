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

export interface Deprecation {
  id: number;
  name: string;
  months: number;
  category: string;
}

export interface NewDeprecation {
  name: string;
  months: number;
  categoryId: number;
}

export interface Notification {
  name: string;
  type: string;
  expiration_date: string;
}

export enum CheckType {
  CHECKIN = 'checkin',
  CHECKOUT = 'checkout',
}

export interface Asset {
  id: number;
  name: string;
  assetModel: string;
  department: string;
  purchase_date: string;
  purchase_cost: number;
  current_cost: number;
  supplier: string;
  status: string;
  username: string;
  check_type: CheckType;
}

export interface NewAsset {
  name: string;
  purchase_cost: number;
  purchase_date: string;
  assetModelId: number;
  departmentId: number;
  statusId: number;
  supplierId: number;
}

export interface CheckoutAsset {
  assetId: number;
  statusId: number;
  userId: number;
  checkout_date: string;
  checkout_note: string;
}

export interface CheckinAsset {
  assetId: number;
  statusId: number;
  departmentId: number;
  checkin_date: string;
  checkin_note: string;
}

export interface AssetQuery {
  assetModelId?: number;
  departmentId?: number;
  statusId?: number;
  supplierId?: number;
}

export interface AssetMaintenance {
  id: number;
  asset_id: string;
  asset_name: string;
  supplier: string;
  start_date: string;
  end_date: string;
  cost: number;
  note: string;
}

export interface NewAssetMaintenance {
  assetId: number;
  supplierId: number;
  start_date: string;
  end_date: string;
  cost: number;
  note: string;
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
  email: string;
  birthday: string;
  department: string;
}

export interface NewUser {
  name: string;
  username: string;
  password: string;
  phone: string;
  email: string;
  birthday: string;
  departmentId: number;
}

export interface Inventory {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  department: string;
  note: string;
}

export interface NewInventory {
  name: string;
  start_date: string;
  end_date: string;
  departmentId: number;
  note: string;
}

export interface AssetToInventory {
  id: number;
  asset_name: string;
  asset_id: number;
  purchase_date: string;
  purchase_cost: string;
  old_cost: number;
  old_status: string;
  new_cost: number;
  new_status: string;
  check: string;
}

export interface UpdateAssetToInventory {
  assetId: number;
  new_cost: number;
  newStatusId: number;
  check: boolean;
}

export enum Actions {
  CREATE,
  UPDATE,
  CLONE,
}

export interface RequestAsset {
  id: number;
  name: string;
  username: string;
  assetModel: string;
  date: string;
  note: string;
  status: string;
}

export interface AcceptRequest {
  id: number;
  assetId: number;
}

export enum RequestAssetStatus {
  REQUESTED = 'Requested',
  REJECTED = 'Rejected',
  ACCEPTED = 'Accepted',
}

export interface MenuItem {
  name: string;
  destination: string;
}
