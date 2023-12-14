import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {CloseIcon, FormBody, RegisterFormWrapper, RegisterTitle} from './RegisterFormStyled'
import {Button, Checkbox, Col, Divider, Form, Input, message, Modal, Row, Select} from 'antd'
import validator from './validator.js'
import stringUtils from './stringUtils'
import {CloseOutlined} from "@ant-design/icons";
import ThemeProvider from "./ThemeProvider.js";


const RegisterForm = props => {
    const [form] = Form.useForm()

    const CARE_SOLUTIONS = [
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

    const {
        open,
        onClose,
        onError,
        onSuccess,
        services = CARE_SOLUTIONS
    } = props

    const [listProvince, setListProvince] = useState([])
    const [listDistrict, setListDistrict] = useState([])
    const [listWard, setListWard] = useState([])

    const resetProvince = () => {
        setListProvince([])
    }
    const resetDistrict = () => {
        setListDistrict([])
    }
    const resetWard = () => {
        setListWard([])
    }

    const [disabledButton, setDisabledButton] = useState(false)

    const handleSubmit = (e) => {
        console.log(e)
        setDisabledButton(true)
        // landingPageStore.register(e)
        //     .then(res => {
        //         if (res.statusCode == 200) {
        //             onSuccess(res)
        //         } else {
        //             onError(res)
        //         }
        //     })
        //     .catch(error => {
        //         onError(error.message)
        //     })
        //     .finally(() => setDisabledButton(false))
    }

    const handleChangeProvince = (e) => {
        if (!e) {
            resetDistrict()
            resetWard()
            return
        }
        resetWard()
        form.setFieldsValue({
            districtId: null,
            wardId: null,
        })
        // landingPageStore.getDistrict(e)
    }
    const handleChangeDistrict = (e) => {
        if (!e) {
            resetWard()
            return
        }
        form.setFieldsValue({
            wardId: null,
        })
        // landingPageStore.getWard(e)
    }
    const handleClickClose = () => {
        onClose()
    }

    useEffect(() => {
        // landingPageStore.getProvince()
    }, [])

    useEffect(() => {
        if (!open) {
            resetProvince()
            resetDistrict()
            resetWard()
            form.resetFields()
        }
    }, [open])
    return (
        <Modal
            width={820}
            footer={false}
            open={open}>
            <ThemeProvider>
                <RegisterFormWrapper>
                    <FormBody>
                        <RegisterTitle>
                            <span>THÔNG TIN ĐĂNG KÝ</span>
                            <CloseIcon onClick={handleClickClose}>
                                <CloseOutlined style={{color: '#E10600'}} />
                            </CloseIcon>
                        </RegisterTitle>
                        <Form
                            onFinish={handleSubmit}
                            colon={false}
                            size={'large'}
                            layout={'vertical'}
                            form={form}>
                            <Row gutter={[24, 0]}>
                                <Col className={'form-item-wrapper'} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <label htmlFor={'companyName'}>Tên doanh nghiệp</label>
                                    <Form.Item
                                        rules={[{validator: validator.validateCompanyName}]}
                                        label={'Tên doanh nghiệp'} name={'companyName'}>
                                        <Input placeholder={'Nhập tên doanh nghiệp'} autoComplete={'off'}/>
                                    </Form.Item>
                                </Col>
                                <Col className={'form-item-wrapper'} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <label htmlFor={'taxCode'}>Mã số thuế</label>
                                    <Form.Item
                                        rules={[{validator: validator.validateTaxCode}]}
                                        label={'Mã số thuế'} name={'taxCode'}>
                                        <Input placeholder={'Nhập mã số thuế'} autoComplete={'off'}/>
                                    </Form.Item>
                                </Col>
                                <Col className={'form-item-wrapper'} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <label htmlFor={'legalFullName'}>Tên người liên hệ</label>
                                    <Form.Item
                                        rules={[{validator: validator.validateLegalFullName}]}
                                        label={'Tên người liên hệ'} name={'legalFullName'}>
                                        <Input placeholder={'Nhập tên người liên hệ'} autoComplete={'off'}/>
                                    </Form.Item>
                                </Col>
                                <Col className={'form-item-wrapper'} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <label htmlFor={'legalEmail'}>Email người liên hệ</label>
                                    <Form.Item
                                        rules={[{validator: validator.validateEmail}]}
                                        label={'Email người liên hệ'} name={'legalEmail'}>
                                        <Input placeholder={'Nhập email người liên hệ'} autoComplete={'off'}/>
                                    </Form.Item>
                                </Col>
                                <Col className={'form-item-wrapper'} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                    <label htmlFor={'phoneNumber'}>Số điện thoại</label>
                                    <Form.Item
                                        rules={[{validator: validator.validatePhoneNumber}]}
                                        label={'Số điện thoại'} name={'phoneNumber'}>
                                        <Input placeholder={'Nhập số điện thoại'} autoComplete={'off'}/>
                                    </Form.Item>
                                </Col>
                                <Col className={'form-item-wrapper'} xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                                    <label htmlFor={'provinceId'}>Tỉnh/Thành phố</label>
                                    <Form.Item
                                        rules={[{validator: validator.validateProvince}]}
                                        label={'Tỉnh/Thành phố'} name={'provinceId'}>
                                        <Select
                                            showSearch
                                            onChange={handleChangeProvince}
                                            optionFilterProp={'name'}
                                            style={{width: '100%'}}
                                            placeholder={'Chọn Tỉnh/Thành phố'}>
                                            {
                                                listProvince && listProvince.map(item =>
                                                    <Select.Option
                                                        key={item.provinceId}
                                                        name={`${item.description} ${stringUtils.removeVietnameseCharMark(item.description)}`}
                                                        value={item.provinceId}>
                                                        {item.description}
                                                    </Select.Option>,
                                                )
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col className={'form-item-wrapper'} xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                                    <label htmlFor={'districtId'}>Quận/Huyện</label>
                                    <Form.Item
                                        rules={[{validator: validator.validateDistrict}]}
                                        label={'Quận/Huyện'} name={'districtId'}>
                                        <Select
                                            showSearch
                                            onChange={handleChangeDistrict}
                                            optionFilterProp={'name'}
                                            style={{width: '100%'}}
                                            placeholder={'Chọn Quận/Huyện'}>
                                            {
                                                listDistrict && listDistrict.map(item =>
                                                    <Select.Option
                                                        key={item.districtId}
                                                        name={`${item.description} ${stringUtils.removeVietnameseCharMark(item.description)}`}
                                                        value={item.districtId}>
                                                        {item.description}
                                                    </Select.Option>,
                                                )
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col className={'form-item-wrapper'} xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                                    <label htmlFor={'wardId'}>Phường/Xã</label>
                                    <Form.Item
                                        rules={[{validator: validator.validateWards}]}
                                        label={'Phường/Xã'} name={'wardId'}>
                                        <Select
                                            showSearch
                                            optionFilterProp={'name'}
                                            style={{width: '100%'}}
                                            placeholder={'Chọn Phường/Xã'}>
                                            {
                                                listWard && listWard.map(item =>
                                                    <Select.Option
                                                        key={item.wardId}
                                                        name={`${item.description} ${stringUtils.removeVietnameseCharMark(item.description)}`}
                                                        value={item.wardId}>
                                                        {item.description}
                                                    </Select.Option>,
                                                )
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <span className={'solutions-label'}>Dịch vụ quan tâm</span>
                                    <Form.Item
                                        rules={[{validator: validator.validateCareSolutions}]}
                                        name={'careSolutions'} valuePropName={'checked'}>
                                        <Checkbox.Group style={{width: '100%'}}>
                                            <Row style={{width: '100%'}} justify={'space-between'} gutter={[8, 8]}>
                                                {
                                                    services.map(item =>
                                                        <Col key={item.value} xxl={6} xl={6} lg={6} md={8} sm={24}
                                                             xs={24}>
                                                            <Checkbox value={item.value}>{item.label}</Checkbox>
                                                        </Col>,
                                                    )
                                                }
                                            </Row>
                                        </Checkbox.Group>
                                    </Form.Item>
                                </Col>
                                <Col className={'form-item-wrapper'} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Divider dashed style={{borderColor: 'green', margin: '0 0 16px 0'}}/>
                                </Col>
                                <Col className={''} xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Form.Item
                                        rules={[{validator: validator.validateConfirm}]}
                                        name={'confirm'} valuePropName={'checked'}>
                                        <Checkbox>
                                            Bằng việc đăng ký thông tin này, tôi đồng ý mở tài khoản doanh nghiệp tại
                                            VPBank và nhận các thông
                                            báo liên quan từ VPBank
                                        </Checkbox>
                                    </Form.Item>
                                </Col>
                                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                                    <Form.Item>
                                        <Button
                                            disabled={disabledButton}
                                            style={{marginTop: 16}}
                                            className={'gradient-btn'}
                                            type={'primary'} htmlType={'submit'} block>
                                            Gửi thông tin
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </FormBody>
                </RegisterFormWrapper>
            </ThemeProvider>
        </Modal>
    )
}

RegisterForm.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    services: PropTypes.array
}

export default RegisterForm