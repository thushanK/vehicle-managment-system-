import Dashboard from '../Dashboard';

import AddVehicle from '../funtions/Vehicle/AddVehicle';



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
    }

];

export default routes;