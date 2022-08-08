import { useState } from "react";

import { Home } from "./pages/Home";
import { RegisterFormUI } from "./pages/RegisterFormUI";
import { LoginFormUI } from "./pages/LoginFormUI";
import { VerifyAccount } from "./pages/VerifyAccount";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { Dashboard } from "./pages/JobSeekers/Dashboard";
import { PageNotFound } from "./pages/PageNotFound";
import { AuthProvider } from "./context/AuthContext";
import { VerifyAccountUI } from "./pages/VerifyAccountUI";
import { UserProfile } from "./pages/JobSeekers/UserProfile";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { ResetEmail } from "./pages/ResetEmail";
import { NewEmail } from "./pages/NewEmail";

import { Layout } from "./pages/admin/layout/Layout";
import { Page } from "./pages/admin/layout/Page";
import { Dashboard as AdminDashboard } from "./pages/admin/pages/dashboard/Dashboard";

// loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const [pageTitle, setPageTitle] = useState(null);

  return (
    <Router>
      <div className="w-full max-w-[1440px] mx-auto">
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route
                path="/dashboard/profile"
                exact
                element={<UserProfile />}
              />
              <Route path="/dashboard" exact element={<Dashboard />} />
            </Route>

            <Route path="/login" element={<LoginFormUI />} />
            <Route path="/register" element={<RegisterFormUI />} />
            <Route path="/activate/:uid/:token" element={<VerifyAccount />} />
            <Route path="/verify" element={<VerifyAccountUI />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPassword />}
            />
            <Route path="/reset-email" element={<ResetEmail />} />
            <Route
              path="/email/reset/confirm/:uid/:token"
              element={<NewEmail />}
            />

            <Route path="/admin" element={<Layout pageTitle={pageTitle} />}>
              <Route
                index
                element={<AdminDashboard setPageTitle={setPageTitle} />}
              />
              <Route
                path=":page"
                element={<Page setPageTitle={setPageTitle} />}
              />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
