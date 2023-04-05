import React from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  NavLink,
} from "react-router-dom";
import GroupPage from "./pages/GroupPage";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import UserPage from "./pages/UserPage";
import NavMenu from "./components/NavMenu/NavMenu";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <UserForm />
        <UsersSection /> */}
        <NavMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register/users" element={<RegisterPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/groups" element={<GroupPage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
