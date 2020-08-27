import React from 'react';
import {Button, message} from 'antd';
import './Footer.css';
import {ValueItem} from '../Filds/fildItem/FildItem';
interface FooterProp {
  fields: ValueItem[];
  metod: string;
}
export const Footer = (props: FooterProp) => {
  const setFields = () => {
    message.success('Fields were update');
    message.info('You use the ' + props.metod);
    console.log(props.fields);
  };
  const pullValues = () => {
    const param = {
      content: 'Already updated',
      top: 200,
    };
    message.success({...param});
  };
  return (
    <div className="Footer">
      <Button key="0" onClick={pullValues} size="large">
        Pull values
      </Button>
      <Button key="1" onClick={setFields} type="primary" size="large">
        Set values
      </Button>
    </div>
  );
};
