import Dashboard from '../Dashboard';

import AddVehicle from '../funtions/Vehicle/AddVehicle';
import ManageVehicle from '../funtions/Vehicle/ManageVehicle';



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
    }

];

export default routes;