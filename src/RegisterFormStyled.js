import styled from 'styled-components'

export const RegisterFormWrapper = styled.div`
  max-width: 820px;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    max-width: 90%;
  }

  .ant-form-item-no-colon {
    display: none !important;
  }
  .form-item-wrapper {
    position: relative;

    label {
      position: absolute;
      top: -4px;
      left: 24px;
      z-index: 1;
      font-weight: 600;
      background: #fff;
      padding: 0 8px 0 4px;
    }
  }
  .solutions-label {
    display: block;
    margin-bottom: 12px;
    font-weight: 600;
  }
  .gradient-btn {
    background: linear-gradient(270deg, rgb(0, 183, 79) -22.41%, rgb(29, 66, 137) 108.33%)
  }
`
export const CloseIcon = styled.div`
  position: absolute;
  top: 32px;
  transform: translateY(-50%);
  right: 24px;
  cursor: pointer;
`
export const FormHeader = styled.div`
  position: relative;
  text-align: center;
  .register-logo {
    height: 44px;
    @media only screen and (max-width: 480px) {
      height: 28px;
    }
  }
`

export const FormBody = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 16px;
  position: relative;
  .ant-input-lg, .ant-select-selector {
    font-size: 14px !important;
  }
`
export const RegisterTitle = styled.div`
  text-align: center;
  margin-bottom: 56px;  

  span {
    background: linear-gradient(270deg, #00B74F -22.41%, #1D4289 108.33%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
    margin-bottom: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    
    @media only screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
`