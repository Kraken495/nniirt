import {FildItem} from './fildItem/FildItem';

export const staticFilds: FildItem[] = [
  {
    label: 'Resulting value 1',
    value: {measure: 1, option: 1},
    id: 1,
    disabled: true,
  },
  {
    label: 'Resulting value 2',
    value: {measure: 2, option: 1000},
    id: 2,
    disabled: true,
  },
  {
    label: 'Resulting value 3',
    value: {measure: 3, option: 1000},
    id: 3,
    disabled: true,
  },
  {
    label: 'Resulting value 4',
    value: {measure: 4, option: 1},
    id: 4,
    disabled: true,
  },
  {
    label: 'Resulting value 5',
    value: {measure: 5, option: 1},
    id: 5,
    disabled: true,
  },
];
export const handleFilds: FildItem[] = [
  {label: 'Set value 1', value: {measure: 1, option: 1}, id: 1},
  {label: 'Set value 2', value: {measure: 2, option: 1000}, id: 2},
  {label: 'Set value 3', value: {measure: 3, option: 1000}, id: 3},
  {label: 'Set value 4', value: {measure: 4, option: 1}, id: 4},
  {label: 'Set value 5', value: {measure: 5, option: 1}, id: 5},
];
export const optionMap = new Map([
  [1, 'V'],
  [1000, 'KV'],
  [1000000, 'MV'],
]);
