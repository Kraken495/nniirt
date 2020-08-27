import React from 'react';
import {Input} from 'antd';
import './FildItem.css';
import {Selecting, valueProp} from './select/Selecting';
import {optionMap} from '../FildsData';
export interface ValueItem {
  id: number;
  measure: number;
  option: number;
}
export interface FildItem {
  label: string;
  value: valueProp;
  id?: number;
  disabled?: boolean;
  setValues?: (item: ValueItem) => void;
}

export const FildItem = (props: FildItem) => {
  const {label, value, id, disabled} = props;
  return (
    <div className="FildItem">
      <h1>{label}</h1>
      {disabled ? (
        <Input
          defaultValue={value.measure}
          disabled={disabled}
          allowClear={true}
          addonAfter={optionMap.get(value.option)}
        />
      ) : (
        <Selecting value={value} setValue={props.setValues} id={id} />
      )}
    </div>
  );
};
