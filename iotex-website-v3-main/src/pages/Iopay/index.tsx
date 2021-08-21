import IopayPc from './Pc'
import IopayMobile from './Mobile'
import React from 'react'
import { browser } from '../../lib/bowser'

const Iopay = () => {
   const isDesktop = browser.getPlatformType() !== 'mobile'
   return isDesktop ?  <IopayPc /> : <IopayMobile />
}

export default Iopay