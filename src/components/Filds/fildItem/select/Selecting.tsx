import React, {useState, useEffect} from 'react';
import './Selecting.css';
import {Select, Input} from 'antd';
const {Option} = Select;
interface SelectingProp {
  setValue: any;
  value: valueProp;
  id?: number;
}
export interface valueProp {
  measure: number;
  option: number;
}
export const Selecting = (props: SelectingProp) => {
  const {setValue, value} = props;
  const [valueSelected, setValueSelected] = useState<valueProp>({
    measure: 0,
    option: 1,
  });
  useEffect(() => {
    props.setValue({...valueSelected, id: props.id});
  }, [valueSelected]);
  const selectMeasure = (
    <Select
      defaultValue={valueSelected.option}
      className="select-after"
      onChange={(e) => setValueSelected({...valueSelected, option: e})}
    >
      <Option value={1}>V</Option>
      <Option value={1000}>KV</Option>
      <Option value={1000000}>MV</Option>
    </Select>
  );
  return (
    <Input
      className="selectMesure"
      placeholder={'Select the value'}
      onChange={(e) =>
        setValueSelected({...valueSelected, measure: Number(e.target.value)})
      }
      addonAfter={selectMeasure}
      type="number"
      min={0}
      allowClear={true}
    />
  );
};
