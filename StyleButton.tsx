import styled from 'styled-components';
import {SelectButton} from 'primereact/selectbutton';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const StyleButton = styled(SelectButton)`
i{
    font-style: normal;
    width: 23px;
    height: 21px;
    // background-image: url(../../../assets/icons/Home.svg);
}
}

.p-button.p-component.p-highlight{
    width: 253px;
    height: 56.21px;
    background: linear-gradient(91.94deg, #07C2EB 0.29%, #0984DE 100%);
    color: white;
    border: none;
    font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 17px;
   
} 
.main{
    position:absolute;
    left:71px;
    top:5px;
  }
  .p-button.p-component.p-highlight .home{
   width:23px;
    background-image: url(../../../assets/icons/HomeActive.svg);

}
.p-button.p-component.p-highlight .list{

    width:19px;
    height:22px;
     background-image: url(../../../assets/icons/ListActive.svg);
 
 }
 .p-button.p-component.p-highlight .plus{

    position:absolute;
    width:20px;
    height:20px;  
    margin-left:200px;
    background-image: url(../../../assets/icons/rest.svg);
 
 }
  .plusKey{
    position:absolute;
    text-align:left;
    width:160px;
    margin-left:-140px;
    margin-top:3px;
}


 .p-button.p-component.p-highlight .settings{
    width:26px;
    height:26px;
     background-image: url(../../../assets/icons/SettingsActive.svg);
 
 }
.p-button.p-component{
    width: 253px;
    height: 56.21px;
    color: #495057, 100%;
    border: none;
    font-family: Open Sans;
font-style: normal;

font-size: 16px;
line-height: 17px;
}
.p-button.p-component .home{
    width:24px;
    height:24px;
     background-image: url(../../../assets/icons/Home.svg);
 
 }
 .p-button.p-component .list{
    width:19px;
    height:22px;
     background-image: url(../../../assets/icons/List.svg);
 
 }
 .p-button.p-component .plus{
    position:absolute;
    width:20px;
    height:20px;  
    margin-left:200px;
    margin-top:3px;

     background-image: url(../../../assets/icons/rest.svg);
 
 }
 .p-button.p-component .settings{
    width:26px;
    height:26px;
     background-image: url(../../../assets/icons/Settings.svg);
 
 }
`;
export default StyleButton;
