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
  AllAssets,
  Profile,
  CreateAsset,
  ChangePassword,
  AllLicenses,
  CreateLicense,
} from './pages';
import AuthProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from '@mui/icons-material';
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
                  path=":id/edit"
                  element={<CreateAsset action={Actions.UPDATE} />}
                />
                <Route
                  path=":id/clone"
                  element={<CreateAsset action={Actions.CLONE} />}
                />
              </Route>
              <Route path="licenses">
                <Route index element={<AllLicenses />} />
                <Route
                  path="create"
                  element={<CreateLicense action={Actions.CREATE} />}
                />
                <Route
                  path=":id/edit"
                  element={<CreateLicense action={Actions.UPDATE} />}
                />
                <Route
                  path=":id/clone"
                  element={<CreateLicense action={Actions.CLONE} />}
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
