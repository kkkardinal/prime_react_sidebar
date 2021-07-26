import styled from 'styled-components';
// import StyledPanelMenu from './PanelMenu.css';
import {PanelMenu} from 'primereact/panelmenu';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const StyledMenu = styled(PanelMenu)`
        width: 253px;
       
        height: 200px;
        .p-menuitem-icon.asd{
          background-image: url(../../../assets/icons/Vector.svg);
          width: 19px;
          height: 21px;
          margin-left:10px;
      
        }
        .p-menuitem-text{
          margin-left:15px;
        }
      .p-panelmenu-icon.pi.pi-chevron-down{
      position:absolute;
      width: 35px;
      height: 17px;
      right:1px;
      }
      .p-panelmenu-icon.pi.pi-chevron-right{
        position:absolute;
        width: 35px;
        height: 17px;
        right:1px;
      }
      .p-component.p-panelmenu-header >a{
      
        border-radius:0px;
        color: #495057;
        background: #ffffff;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 17px;
        border:0px;
           
    }
    .p-panelmenu-content{
      border-radius:0px;
        color: #495057;
        background: #ffffff;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        border:0px;
    }

    .p-menuitem-link{
      margin-left:35px;
    }

.p-menuitem-icon.create{
  position:absolute;
  background-image: url(../../../assets/icons/rest.svg);
  width: 20px;
  height: 20px;
  margin-left:100px;
  margin-top:10px;
  
}
.p-panelmenu-content li:first-child {
  background: #BBDEFB4D;
  border-radius:6px;
  margin-left:55px;
  height:35px;
  
}
.p-panelmenu-content li:first-child 
 .p-menuitem-link .p-menuitem-text{
 position:absolute;
 left:60px;
 margin-top:10px;
 color: #2196F3;

 
}
`;
export default StyledMenu;
