import { Outlet } from "react-router-dom";
import AdminMenu from "./AdminMenu";

const AdminLayout = () => {
  return (
    <div className="admin-layout flex">
      <AdminMenu />
      <div className="admin-content flex-grow p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
