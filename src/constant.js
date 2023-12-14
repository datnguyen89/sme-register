// region Website config

export const THEME = {
  PRIMARY_COLOR: '#00B74F',
  COMPONENT_COLOR: '#00B74F',
  BORDER_RADIUS: 4,
}
export const REGEX_REGISTER = {
  TAX_CODE: /^\w{10,20}$/,
  COMPANY_NAME: /^[^~'`!@#$%^*()_+={}[\]|:;"<,>?\\/\t]*$/,
  LEGAL_FULLNAME: /^[^~'`!@#$%^&*()_\-+={}[\]|:;"<,>?\\/\t]*$/,
  PHONE: /^((\+[1-9]{1,4}[ -]*)|(\\([0-9]{2,3}\\)[ -]*)|([0-9]{2,4})[ -]*)*?[0-9]{3,4}?[ -]*[0-9]{3,4}?$/,
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
}



export const CARE_SOLUTIONS = [
  {
    label: 'Thẻ tín dụng',
    value: 'CREDIT_CARD',
  },
  {
    label: 'Thẻ ghi nợ',
    value: 'DEBIT_CARD',
  },
  {
    label: 'Ecompay Standard',
    value: 'ES',
  },
  {
    label: 'Ecompay Platinum',
    value: 'EP',
  },
  {
    label: 'Tap to phone & POS',
    value: 'POS',
  },
]
export const HEADER_FONT_SIZE_DESKTOP = '32px'
export const HEADER_FONT_SIZE_TABLET = '24px'
export const HEADER_FONT_SIZE_MOBILE = '18px'
export const TITLE_FONT_SIZE_DESKTOP = '28px'
export const TITLE_FONT_SIZE_TABLET = '20px'
export const TITLE_FONT_SIZE_MOBILE = '16px'
export const NORMAL_FONT_SIZE_DESKTOP = '18px'
export const NORMAL_FONT_SIZE_TABLET = '16px'
export const NORMAL_FONT_SIZE_MOBILE = '14px'
export const MENU_FONT_SIZE_DESKTOP = '20px'
export const MENU_FONT_SIZE_LAPTOP = '16px'
export const MENU_FONT_SIZE_TABLET = '14px'
export const MENU_FONT_SIZE_MOBILE = '12px'

export const CONTENT_PADDING_DESKTOP = '0 160px'
export const CONTENT_PADDING_LAPTOP = '0 80px'
export const CONTENT_PADDING_TABLET = '0 32px'
export const CONTENT_PADDING_MOBILE = '0 8px'
export const POS_PADDING_DESKTOP = '0 160px 0 0'
export const POS_PADDING_LAPTOP = '0 80px 0 0'
export const POS_PADDING_TABLET = '0 32px 0 0'
export const POS_PADDING_MOBILE = '0 8px 0 0'
// endregion
