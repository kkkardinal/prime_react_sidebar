import {PanelMenuProps} from 'primereact/panelmenu';
import React from 'react';
import StyledMenu from './StyledMenu';
// import {PanelMenu} from 'primereact/panelmenu';


const Menu: React.FC<PanelMenuProps> = (props: PanelMenuProps) => {
  const itemsForMenu = [
    {

      label: 'Опросы',
      icon: 'asd',

      items: [
        {
          label: 'Создать опрос',
          icon: 'create',

        },
        {
          label: 'Мои опросы',
          // icon: 'pi pi-fw pi-trash',
        },
        {
          label: 'Архивные опросы',
          // icon: 'pi pi-fw pi-external-link',
        },
        {
          label: 'Шаблоны',
          // icon: 'pi pi-fw pi-external-link',
        },
      ],
    },


  ];
  return (
    <>

      <StyledMenu model={itemsForMenu} />

    </>
  );
};

export default Menu;
