import { Outlet } from "react-router-dom";
import AdminHeader from "../Components/AdminHeader";

const AdminLayout = () => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;