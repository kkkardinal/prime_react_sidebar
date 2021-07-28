import styled from 'styled-components';
// import StyledPanelMenu from './PanelMenu.css';
import {Sidebar} from 'primereact/sidebar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const StyledSideBar = styled(Sidebar)`
width:253px;
.p-sidebar-content{
    padding-left:0px;
}
.p-sidebar-close.p-sidebar-icon.p-link{
    width:0px;
    heigth:0px;
}
p{
    // position:absolute;
    text-align:left;
    width:160px;
    margin-left:60px;
    margin-top:5px;
}

`;
export default StyledSideBar;
