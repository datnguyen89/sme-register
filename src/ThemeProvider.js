import React from 'react'
import viVN from 'antd/locale/vi_VN'
import enUS from 'antd/locale/en_US'
import moment from 'moment'
import 'dayjs/locale/vi'
import 'dayjs/locale/en'
import {ConfigProvider, theme} from 'antd'
import {THEME} from './constant'

moment.locale('vi')


const ThemeProvider = props => {
  const { children } = props

  const { defaultAlgorithm, darkAlgorithm } = theme

  return (
    <ConfigProvider
      locale={language === 'vi' ? viVN : enUS}
      theme={{
        algorithm: defaultAlgorithm ,
        token: {
          colorPrimary: THEME.PRIMARY_COLOR,
          borderRadius: THEME.BORDER_RADIUS,
          colorLink: THEME.PRIMARY_COLOR,
          colorLinkHover: THEME.PRIMARY_COLOR,
          colorLinkActive: THEME.PRIMARY_COLOR,
          fontFamily: 'SVN-Gilroy',
        },
        components: {

        },
      }}
    >
      <>
        {children}
      </>
    </ConfigProvider>
  )
}

ThemeProvider.propTypes = {}

export default ThemeProvider
