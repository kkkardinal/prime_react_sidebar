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
    <div>
      <button className="mainButton">

        <img className="mainImg"src="../../assets/icons/Home.svg" alt="" />


        <h1> Главная</h1>


      </button>

      <StyledMenu model={items} />
      <button className="SettingsButton">

        <img src="../../assets/icons/clarity_settings-line.svg" alt="" />


        <p>Настройки</p>


      </button>
    </div>
  );
};
