import React, {useState} from 'react';
import StyledSideBar from './styledSideBar';
// import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import SelectButtonDemo from '../atoms/Button';

const SidebarDemo = () => {
  const [visibleLeft, setVisibleLeft] = useState(true);


  return (
    <div>
      <div className="card">
        <StyledSideBar
          visible={visibleLeft} onHide={() => setVisibleLeft(true)}
        >
          <SelectButtonDemo/>
          {/* <h3>Left Sidebar</h3> */}
        </StyledSideBar>


      </div>
    </div>
  );
};
export default SidebarDemo;
