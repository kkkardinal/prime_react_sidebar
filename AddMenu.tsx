

import React from 'react';
import StyledMenu from './AddMenu.styled';

export const Button = () => {
  const items = [
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

        },
        {
          label: 'Архивные опросы',

        },
        {
          label: 'Шаблоны',

        },
      ],
    },


  ];
  return (
    <>

      <StyledMenu model={items} />

    </>
  );
};
