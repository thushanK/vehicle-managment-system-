import Dashboard from '../Dashboard';

import AddVehicle from '../funtions/Vehicle/AddVehicle';
import ManageVehicle from '../funtions/Vehicle/ManageVehicle';
import DeleteVehicle from '../funtions/Vehicle/DeleteVehicle';
import EditVehicle from '../funtions/Vehicle/EditVehicle';
import ViewVehicle from '../funtions/Vehicle/ViewVehicle';

import AddUser from '../funtions/User/AddUser';

let routes = [

    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        exact: true,
    },
    {
        path: "/vehicle/add",
        name: "AddVehicle",
        component: AddVehicle,
        exact: true,
    },
    {
        path: "/vehicle/manage",
        name: "ManageVehicle",
        component: ManageVehicle,
        exact: true,
    },
    {
        path: "/vehicle/delete/:id",
        name: "DeleteVehicle",
        component: DeleteVehicle,
        exact: true,
    },
    {
        path: "/vehicle/edit/:id",
        name: "EditVehicle",
        component: EditVehicle,
        exact: true,
    },
    {
        path: "/vehicle/view/:id",
        name: "ViewVehicle",
        component: ViewVehicle,
        exact: true,
    },
    {
        path: "/users/add",
        name: "AddUser",
        component: AddUser,
        exact: true,
    }

];

export default routes;