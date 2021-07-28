import React, {useState} from 'react';
import StyleSettingsButton from './StyleSettingsButton';

const SelectSettingsButtonDemo = () => {
  const [value1, setValue1] = useState('Настройки');

  const options =
  [
    {name: 'Настройки', icon: 'home'},
  ];
  const justifyTemplate = (option: { icon: string | undefined;
    name: string | undefined;}) => {
    return (
      <i className={option.icon}><p className='main'>Настройки</p></i>

    );
  };
  return (
    <div>

      <div className="card">

        <StyleSettingsButton value={value1} options={options}
          onChange={(e) => setValue1(e.value)}
          itemTemplate={justifyTemplate}
          optionLabel='name'
        />


      </div>
    </div>
  );
};
export default SelectSettingsButtonDemo;
