import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Home = React.lazy(() => import("./views/Home/"));
const ProfilePage = React.lazy(() => import("./views/Profile"));
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<div>Register</div>} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="login" element={<Login />} />
            <Route path="turn" element={<div>Turn</div>} />
            <Route path="patients" element={<div>Patients</div>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
