import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";


const Login = React.lazy(() => import("./components/Login"));
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Home = React.lazy(() => import("./views/Home/"));
const Register = React.lazy(() => import("./views/Register"));
const ProfilePage = React.lazy(() => import("./views/Profile"));
const SelectDate = React.lazy(() => import("./views/Profile/SelectDate"));

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="selectDate" element={<SelectDate />} />
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
