import { PhoneNumber } from 'antd-phone-input';

export const phoneNumberValidator = (_: any, { valid }: PhoneNumber) => {
  if (valid?.()) {
    return Promise.resolve();
  }

  return Promise.reject('Некорректный номер телефона!');
};


// export const phoneNumberValidator = (_:any, value: ValidatorRule['validator']) => {
  // if (valid()) {
  //   return Promise.resolve();
  // }
  //
  // return Promise.reject('Некорректный номер телефона!');
// };


