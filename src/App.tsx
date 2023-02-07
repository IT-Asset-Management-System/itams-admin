import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import {
  PrivateWrapper,
  PrivateWrapperForLogin,
} from './components/PrivateWrapper';
import {
  Login,
  Layout,
  NoPage,
  Profile,
  ChangePassword,
  AllAssets,
  CreateAsset,
  AllRequestAssets,
  AcceptRequest,
  AllAssetMaintenances,
  CreateAssetMaintenance,
  AllLicenses,
  CreateLicense,
  AllUsers,
  CreateUser,
  ImportAssets,
  AllStatuses,
  DetailedStatus,
  CreateStatus,
  AllAssetModels,
  CreateAssetModel,
  AllCategories,
  CreateCategory,
  AllManufacturers,
  CreateManufacturer,
  AllSuppliers,
  CreateSupplier,
  AllDepartments,
  CreateDepartment,
  AllLocations,
  CreateLocation,
  AllDeprecations,
  CreateDeprecation,
  AllSourceCodes,
  CreateSourceCode,
  AllDigitalContents,
  CreateDigitalContent,
  Dashboard,
} from './pages';
import AuthProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Actions } from './interface/interface';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateWrapper />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="hardware">
                <Route index element={<AllAssets />} />
                <Route
                  path="create"
                  element={<CreateAsset action={Actions.CREATE} />}
                />
                <Route
                  path=":assetId/edit"
                  element={<CreateAsset action={Actions.UPDATE} />}
                />
                <Route
                  path=":assetId/clone"
                  element={<CreateAsset action={Actions.CLONE} />}
                />
              </Route>
              <Route path="request-assets">
                <Route index element={<AllRequestAssets />} />
                <Route
                  path=":requestAssetId/accept"
                  element={<AcceptRequest />}
                />
              </Route>
              <Route path="maintenances">
                <Route index element={<AllAssetMaintenances />} />
                <Route
                  path="create"
                  element={<CreateAssetMaintenance action={Actions.CREATE} />}
                />
                <Route
                  path=":assetMaintenanceId/edit"
                  element={<CreateAssetMaintenance action={Actions.UPDATE} />}
                />
              </Route>
              <Route path="source-code">
                <Route index element={<AllSourceCodes />} />
                <Route
                  path="create"
                  element={<CreateSourceCode action={Actions.CREATE} />}
                />
                <Route
                  path=":sourceCodeId/edit"
                  element={<CreateSourceCode action={Actions.UPDATE} />}
                />
                <Route
                  path=":sourceCodeId/clone"
                  element={<CreateSourceCode action={Actions.CLONE} />}
                />
              </Route>
              <Route path="digital-content">
                <Route index element={<AllDigitalContents />} />
                <Route
                  path="create"
                  element={<CreateDigitalContent action={Actions.CREATE} />}
                />
                <Route
                  path=":digitalContentId/edit"
                  element={<CreateDigitalContent action={Actions.UPDATE} />}
                />
                <Route
                  path=":digitalContentId/clone"
                  element={<CreateDigitalContent action={Actions.CLONE} />}
                />
              </Route>
              <Route path="licenses">
                <Route index element={<AllLicenses />} />
                <Route
                  path="create"
                  element={<CreateLicense action={Actions.CREATE} />}
                />
                <Route
                  path=":licenseId/edit"
                  element={<CreateLicense action={Actions.UPDATE} />}
                />
                <Route
                  path=":licenseId/clone"
                  element={<CreateLicense action={Actions.CLONE} />}
                />
              </Route>
              <Route path="users">
                <Route index element={<AllUsers />} />
                <Route
                  path="create"
                  element={<CreateUser action={Actions.CREATE} />}
                />
                <Route
                  path=":userId/edit"
                  element={<CreateUser action={Actions.UPDATE} />}
                />
                <Route
                  path=":userId/clone"
                  element={<CreateUser action={Actions.CLONE} />}
                />
              </Route>
              <Route path="import">
                <Route index element={<ImportAssets />} />
              </Route>
              <Route path="statuses">
                <Route index element={<AllStatuses />} />
                <Route
                  path="create"
                  element={<CreateStatus action={Actions.CREATE} />}
                />
                <Route path=":statusId" element={<DetailedStatus />} />
                <Route
                  path=":statusId/edit"
                  element={<CreateStatus action={Actions.UPDATE} />}
                />
                <Route
                  path=":statusId/clone"
                  element={<CreateStatus action={Actions.CLONE} />}
                />
              </Route>
              <Route path="models">
                <Route index element={<AllAssetModels />} />
                <Route
                  path="create"
                  element={<CreateAssetModel action={Actions.CREATE} />}
                />
                <Route
                  path=":modelId/edit"
                  element={<CreateAssetModel action={Actions.UPDATE} />}
                />
                <Route
                  path=":modelId/clone"
                  element={<CreateAssetModel action={Actions.CLONE} />}
                />
              </Route>
              <Route path="categories">
                <Route index element={<AllCategories />} />
                <Route
                  path="create"
                  element={<CreateCategory action={Actions.CREATE} />}
                />
                <Route
                  path=":categoryId/edit"
                  element={<CreateCategory action={Actions.UPDATE} />}
                />
                <Route
                  path=":categoryId/clone"
                  element={<CreateCategory action={Actions.CLONE} />}
                />
              </Route>
              <Route path="manufacturers">
                <Route index element={<AllManufacturers />} />
                <Route
                  path="create"
                  element={<CreateManufacturer action={Actions.CREATE} />}
                />
                <Route
                  path=":manufacturerId/edit"
                  element={<CreateManufacturer action={Actions.UPDATE} />}
                />
                <Route
                  path=":manufacturerId/clone"
                  element={<CreateManufacturer action={Actions.CLONE} />}
                />
              </Route>
              <Route path="suppliers">
                <Route index element={<AllSuppliers />} />
                <Route
                  path="create"
                  element={<CreateSupplier action={Actions.CREATE} />}
                />
                <Route
                  path=":supplierId/edit"
                  element={<CreateSupplier action={Actions.UPDATE} />}
                />
                <Route
                  path=":supplierId/clone"
                  element={<CreateSupplier action={Actions.CLONE} />}
                />
              </Route>
              <Route path="departments">
                <Route index element={<AllDepartments />} />
                <Route
                  path="create"
                  element={<CreateDepartment action={Actions.CREATE} />}
                />
                <Route
                  path=":departmentId/edit"
                  element={<CreateDepartment action={Actions.UPDATE} />}
                />
                <Route
                  path=":departmentId/clone"
                  element={<CreateDepartment action={Actions.CLONE} />}
                />
              </Route>
              <Route path="locations">
                <Route index element={<AllLocations />} />
                <Route
                  path="create"
                  element={<CreateLocation action={Actions.CREATE} />}
                />
                <Route
                  path=":locationId/edit"
                  element={<CreateLocation action={Actions.UPDATE} />}
                />
                <Route
                  path=":locationId/clone"
                  element={<CreateLocation action={Actions.CLONE} />}
                />
              </Route>
              <Route path="deprecations">
                <Route index element={<AllDeprecations />} />
                <Route
                  path="create"
                  element={<CreateDeprecation action={Actions.CREATE} />}
                />
                <Route
                  path=":deprecationId/edit"
                  element={<CreateDeprecation action={Actions.UPDATE} />}
                />
              </Route>
              <Route path="account">
                <Route path="profile" element={<Profile />} />
                <Route path="password" element={<ChangePassword />} />
              </Route>
            </Route>
          </Route>
          <Route element={<PrivateWrapperForLogin />}>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" autoClose={2500} />
    </AuthProvider>
  );
}

export default App;
