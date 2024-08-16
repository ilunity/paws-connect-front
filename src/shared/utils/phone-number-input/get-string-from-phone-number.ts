import { PhoneNumber } from 'antd-phone-input';

export const getStringFromPhoneNumber = (phoneNUmberObject: PhoneNumber) => {
  return `+${phoneNUmberObject.countryCode}${phoneNUmberObject.areaCode}${phoneNUmberObject.phoneNumber}`;
};
