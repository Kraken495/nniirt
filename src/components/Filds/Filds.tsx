import React, {useState} from 'react';
import './Filds.css';
import {FildItem, ValueItem} from './fildItem/FildItem';
import {staticFilds, handleFilds} from './FildsData';
import {Footer} from '../Footer/Footer';
interface FildsProp {
  metod: string;
}
export const Filds = (props: FildsProp) => {
  const [values, setValues] = useState<ValueItem[]>([]);
  const getValues = (value: ValueItem) => {
    const fields = values;
    const find = fields.find((item) => item.id === value.id);
    if (find) {
      const newArray: ValueItem[] = fields.map((item) => {
        if (item.id === find.id) {
          return value;
        } else {
          return item;
        }
      });
      setValues(newArray);
    } else {
      fields.push(value);
      setValues(fields);
    }
  };
  const renderList = (list: FildItem[]) => {
    return list.map((item) => {
      return (
        <FildItem
          key={item.id}
          value={item.value}
          label={item.label}
          id={item.id}
          disabled={item.disabled}
          setValues={getValues}
        />
      );
    });
  };
  return (
    <div>
      <div className="FildsList">
        <div className="staticFilds list">{renderList(staticFilds)}</div>
        <div className="handleFilds list">{renderList(handleFilds)}</div>
      </div>
      <Footer fields={values} metod={props.metod} />
    </div>
  );
};
