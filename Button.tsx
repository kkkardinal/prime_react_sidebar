import React, {useState} from 'react';
import StyleButton from './StyleButton';

const SelectButtonDemo = () => {
  const [value1, setValue1] = useState('Главная');

  const options =
  [
    {name: 'Главная', icon: 'home', key: ''},
    {name: 'Опросы', icon: 'list', key: ''},
    {name: 'Создать опрос', icon: 'plus', key: 'plusKey'},
    {name: 'Мои опросы', icon: '', key: ''},
    {name: 'Архивные опросы', icon: '', key: ''},
    {name: 'Шаблоны', icon: '', key: ''},
    {name: 'Настройки', icon: 'settings', key: ''},

  ];
  const justifyTemplate = (option: { icon: string | undefined;
    name: string | undefined; key: string | undefined;}) => {
    return (
      <i className={option.icon}>
        <p className={option.key}>{option.name}</p>
      </i>


    );
  };

  return (
    <div>

      <div className="card">

        <StyleButton value={value1} options={options}
          onChange={(e) => setValue1(e.value)}

          itemTemplate={justifyTemplate}

        >

        </StyleButton>

      </div>
    </div>
  );
};
export default SelectButtonDemo;
