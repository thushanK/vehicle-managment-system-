import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu , SidebarHeader , SidebarContent , SidebarFooter } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable , faPlusSquare , faAddressBook, faAtom, faTachometerAlt, faGlobe, faHome, faChalkboard, faAd, faChartBar, faCheckSquare, faRecycle } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Sidebar = ({activemenu, submenu}) => {
  return (
    <ProSidebar  breakPoint={'md'}> 
     <SidebarContent>
    <Menu iconShape="round">

    <MenuItem 
        active={activemenu === 'DASHBOARD'} 
        icon={<FontAwesomeIcon icon={faTachometerAlt} />}>
          Dashboard<Link to="/" />
      </MenuItem>
      <SubMenu  defaultOpen={activemenu === 'VEHICLE'} title="Vehicle" icon={<FontAwesomeIcon icon={faAddressBook} />}>
        <MenuItem active={submenu === 'ADD_VEHICLE'} >
            Add Student<Link to="/vehicle/add" />
        </MenuItem>
        <MenuItem active={submenu === 'MANAGE_Vehicle'}>
            Manage Student<Link to="/vehicle/manage" />
        </MenuItem>
      </SubMenu>

      

      <MenuItem 
        active={activemenu === 'SETTING'} 
        icon={<FontAwesomeIcon icon={faAtom} />}>
          SETTING<Link to="/setting" />
      </MenuItem>
    </Menu>
    </SidebarContent>
  </ProSidebar>
  );
}

export default Sidebar;
