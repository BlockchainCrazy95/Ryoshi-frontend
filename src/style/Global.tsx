import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'DM Sans', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .section1Text {
    color: #FFFFFF;
  }

  .text1 {
    color: #FFFFFF;
    font-size: 21px;
    margin-bottom: 35px;
  }

  .tokenInfoImg {
    padding-right: 10px;
  }

  .topSocialLink {
    width: 32px;
    height: 32px;
    margin-left: 3px;
    margin-right: 3px;
  }
  .topSocialDiv {
    background-color: rgba(255, 255, 255, 0.10);
    border-radius: 5px;
  }
  .topSocialIcon {
    padding: 5px;
    margin-top: 4px;
    margin-left: 2px;
  }

  .arrow-up {
    display: inline;
    border-radius: 5px;
    text-align: center;
    background-color: transparent;
    background-image: url(/images/icons/caret-up-solid.svg);
    background-repeat: no-repeat;
    color: #000;
    padding-right: 2px;
    background-position: 0px 0px;
    background-size: 18px 18px;
  }
  .arrow-down {
    display: inline;
    border-radius: 5px;
    text-align: center;
    background-color: transparent;
    background-image: url(/images/icons/caret-down-solid.svg);
    background-repeat: no-repeat;
    color: #000;
    padding-right: 2px;
    background-position: 0px 3px;
    background-size: 18px 18px;
  }

  .infoTitle {
    color: #fff;
    font-size: 38px;
    line-height: 48px;
  }
  .infoStatus {
    display: inline;
    background-color: #f2ca66;
    border-radius: 3px;
    font-size: 16px;
    line-height: 20px;
    margin: 14px 0px 8px 15px;
    padding: 3px 10px 3px 6px;
    user-select: none;
  }
  .infoStatusIcon {
    margin: 8px 0px 8px 0px;
    padding: 3px 10px;
    user-select: none;
  }
  .infoSubTitle {
    font-size: 21px;
    line-height: 35px;
    margin-top: 8px;
    color: #bebebe;
    font-weight: 300;
  }
  .infoText {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 27px;
    color: #bebebe;
  }

  .infoText > p {
    margin-bottom: 30px;
  }

  .aboutInfoPanel {
    margin-top: 10px;
  }

  .mediaTitle {
    color: #bebebe;
  }

  .partnershipImg{
    height: 20px;
  }

  .tokenInfoTitle {
    font-size: 21px;
    line-height: 35px;
    font-weight: 500;
    color: #bebebe;
    padding-bottom: 5px;
  }
  .tokenInfoText {
    font-family: 'DM Sans', sans-serif;
    color: #bebebe;
    font-size: 16px;
    line-height: 22px;    
  }

  .artSubmitBtn {
    display: inline;
    width: 15%;
    border-radius: 10px;
    border: 1px solid #f2ca66;
    padding: 10px 0px;
    text-align: center;
    background-color: transparent;
    color: #f2ca66;
  }
  .artArrowNav{
    display: inline;
  }
  .artPreviousBtn {
    border-radius: 5px;
    border: 1px solid #f2ca66;
    margin: 0px 20px;
    text-align: center;
    background-color: transparent;
    background-image: url(/images/icons/caret-left-solid.svg);
    background-repeat: no-repeat;
    color: #f2ca66;
    width: 38px;
    height: 38px;
    background-position: 0px 3px;
    background-size: 30px 30px;
  }
  .artPreviousBtn:hover, .artPreviousBtn:active {
    background-color: #f2ca66;
    background-image: url('/images/icons/caret-left-solid-black.svg');
  }
  
  .artNextBtn {
    border-radius: 5px;
    border: 1px solid #f2ca66;
    margin: 0px 50px 0px 0px;
    text-align: center;
    background-color: transparent;
    background-image: url(/images/icons/caret-right-solid.svg);
    background-repeat: no-repeat;
    color: #f2ca66;
    width: 38px;
    height: 38px;
    background-position: 4px 3px;
    background-size: 30px 30px;
  }
  .artNextBtn:hover, .artNextBtn:active {
    background-color: #f2ca66;
    background-image: url('/images/icons/caret-right-solid-black.svg');
  }

  .artImage {
    padding: 10px 20px 10px 20px;
  }

  .number-circle {
    background-color: #f2ca66;
    border-radius: 15px;
    font-size: 20px;
    line-height: 20px;
    min-width: 30px;
    height: 30px;
    padding-top: 5px;
    text-align: center;
    user-select: none;
  }
  .text-underline{
    text-decoration: underline;
  }

  .discoverBack {
    background: transparent linear-gradient(180deg, #F2CA66 0%, #F2CA66E6 45%, #F2CA660D 92%, #F2CA6600 100%) 0% 0% no-repeat padding-box;
    height: 520px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0
  }
  .text-center {
    text-align: center;
  }

  .footer-logo{
    background-image: url('/images/aArtboard-30.png');
    background-size: 100% auto;
    width: 130px;
    height: 130px;
    position: absolute;
    left: calc(50% - 65px);
    transform: translate(0px, -210px);
    z-index: 2;
  }
`

export default GlobalStyle
