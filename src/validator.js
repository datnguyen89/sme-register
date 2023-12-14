/** Use only with Antd Form */
/** Use only with Antd Form */
/** Currently validator will no longer working if using regex from outside 'validator' object */
import { REGEX_REGISTER } from './constant'

const validator = {
  validateCompanyName: (rule, input, callback) => {
    const regex = REGEX_REGISTER.COMPANY_NAME
    let value = input?.trim()
    if (!value) {
      callback('Vui lòng nhập tên doanh nghiệp')
    } else if (value?.length > 250) {
      callback('Tên doanh nghiệp không quá 250 ký tự')
    } else if (!regex.test(value)) {
      callback('Tên doanh nghiệp không hợp lệ')
    } else {
      callback()
    }
  },
  validateTaxCode: (rule, input, callback) => {
    const regex = REGEX_REGISTER.TAX_CODE
    let value = input?.trim()
    if (!value) {
      callback('Vui lòng nhập mã số thuế')
    } else if (!regex.test(value)) {
      callback('Mã số thuế từ 10 đến 20 ký tự')
    } else {
      callback()
    }
  },
  validateLegalFullName: (rule, input, callback) => {
    const regex = REGEX_REGISTER.LEGAL_FULLNAME
    let value = input?.trim()
    if (!value) {
      callback('Vui lòng nhập tên người liên hệ')
    } else if (value?.length > 200) {
      callback('Tên người liên hệ không quá 200 ký tự')
    } else if (!regex.test(value)) {
      callback('Tên người liên hệ không hợp lệ')
    } else {
      callback()
    }
  },
  validatePhoneNumber: (rule, input, callback) => {
    const regex = REGEX_REGISTER.PHONE
    let value = input?.trim()
    if (!value) {
      callback('Vui lòng nhập số điện thoại')
    } else if (value?.length < 10 || value?.length > 15) {
      callback('Số điện thoại từ 10 đến 15 ký tự')
    } else if (!regex.test(value)) {
      callback('Số điện thoại không hợp lệ')
    } else {
      callback()
    }
  },
  validateEmail: (rule, input, callback) => {
    const regex = REGEX_REGISTER.EMAIL
    let value = input?.trim()
    if (!value) {
      callback('Vui lòng nhập email')
    } else if (value?.length > 50) {
      callback('Email tối đa 50 ký tự')
    } else if (!regex.test(value)) {
      callback('Email không hợp lệ')
    } else {
      callback()
    }
  },
  validateProvince: (rule, input, callback) => {
    if (!input) {
      callback('Vui lòng chọn')
    } else {
      callback()
    }
  },
  validateDistrict: (rule, input, callback) => {
    if (!input) {
      callback('Vui lòng chọn')
    } else {
      callback()
    }
  },
  validateWards: (rule, input, callback) => {
    if (!input) {
      callback('Vui lòng chọn')
    } else {
      callback()
    }
  },
  validateActivitiesTime: (rule, input, callback) => {
    if (!input) {
      callback('Vui lòng chọn')
    } else {
      callback()
    }
  },
  validateRecentRevenue: (rule, input, callback) => {
    if (!input) {
      callback('Vui lòng chọn')
    } else {
      callback()
    }
  },
  validateCareSolutions: (rule, input, callback) => {
    if (!input) {
      callback('Vui lòng tích chọn')
    } else {
      callback()
    }
  },
  validateConfirm: (rule, input, callback) => {
    if (!input) {
      callback('Vui lòng tích chọn')
    } else {
      callback()
    }
  },
}

export default validator
