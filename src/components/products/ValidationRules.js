import validator from 'validator';
import { required, isNegativeOrZero } from '../../validations/Validatiors';
export const ValidationRules = [
  {
    field: 'name',
    method: required,
    message: 'Please provide name.'
  },
  {
    field: 'name',
    method: validator.isInt,
    message: 'Only string allowed.'
  },
  {
    field: 'quantity',
    method: required,
    message: 'Please Enter quantity.'
  },
  {
    field: 'price',
    method: required,
    message: 'Please provide price.'
  },
  {
    field: 'quantity',
    method: isNegativeOrZero,
    message: "Quantity can't be negative or zero."
  },
  {
    field: 'price',
    method: isNegativeOrZero,
    message: "Price can't be negative or zero."
  }
];
