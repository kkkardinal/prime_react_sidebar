import {NavLink} from 'react-router-dom';
import React from 'react';
import Menu from '../atoms/PanelMenu';
import SelectButtonDemo from '../atoms/Button';
import SelectSettingsButtonDemo from '../atoms/SettingsButton';
// import StyledSideBar from './StyledSideBar';


const SideBar = () =>{
  return (

    <nav className="mainMenu">

      <div className="mainPageItem">

        <NavLink to="/mainpage"><SelectButtonDemo/></NavLink>
      </div>

      <div className="interviewItem">
        <NavLink to="/interview" activeClassName="activeMenu">

          <Menu/>

        </NavLink>
      </div>

      <div className="settingsItem">

        <NavLink to="/settings"><SelectSettingsButtonDemo/></NavLink>
      </div>
    </nav>

  );
};

export default SideBar;
