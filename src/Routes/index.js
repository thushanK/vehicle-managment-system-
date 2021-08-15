import Dashboard from '../Dashboard';

import AddVehicle from '../funtions/Vehicle/AddVehicle';
import ManageVehicle from '../funtions/Vehicle/ManageVehicle';
import DeleteVehicle from '../funtions/Vehicle/DeleteVehicle';
import EditVehicle from '../funtions/Vehicle/EditVehicle';

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
    }

];

export default routes;