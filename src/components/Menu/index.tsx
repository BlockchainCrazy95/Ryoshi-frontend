import React from 'react'
import { useLocation } from 'react-router'
import { Menu as UikitMenu, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components';
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useProfile } from 'state/profile/hooks'
import config from './config/config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import ExternalLinkSettings from './GlobalSettings/ExternalLinkSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'

const FooterLogoPanel = styled.div`
  background-image: url('/images/aArtboard-30.png');
  background-size: 100% auto;
  width: 130px;
  height: 130px;
  position: absolute;
  left: calc(50% - 65px);
  z-index: 2;
  transform: translate(0px, -190px);
  ${({theme}) => theme.mediaQueries.sm} {
    transform: translate(0px, -210px);
  }
  ${({theme}) => theme.mediaQueries.md} {
    transform: translate(0px, -235px);
  }
  ${({theme}) => theme.mediaQueries.xxl} {
    transform: translate(0px, -190px);
  }
  
`
const TopBar = styled.div`
  position: fixed;
  top: 0px;
  z-index: 10;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 42px;
  background-color: ${({theme}) => theme.colors.backgroundAlt};
  color: ${({theme}) => theme.colors.textSubtle}
`

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const { profile } = useProfile()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()

  const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })


  const footerTopContent = () => {
    const styles = {
      btn: {
        borderRadius: 10,
        border: "1px solid black",
        fontSize: "16px",
        lineHeight: "32px",
        padding: "10px 26px"
      }
    }
    return (
      <Flex flexDirection="column" justifyContent="center">
        <FooterLogoPanel />
        <div style={{textAlign:"center",fontSize:"21px",lineHeight:"35px",marginTop: 30, marginBottom: 25}}>Buy $RYOSHI</div>
        <div style={{textAlign:"center", marginBottom: 80}}>
          <a style={{marginRight: 15, ...styles.btn}} href="/">RyoshiSwap</a>
          <a style={{marginLeft: 15, ...styles.btn}} href="https://pancakeswap.finance/swap#/swap?inputCurrency=0x0e5f989ce525acc4ee45506af91964f7f4c9f2e9">PancakeSwap</a>
        </div>
      </Flex>
    )
  }

  const footerContent = () => {
    return (
      <Flex flexDirection="column" justifyContent="center">
        <div className="text-underline text-center">Frequently Asked Questions</div>
        <div style={{marginTop: 15}} className='text-center'>Copyright © 2021, Ryoshitoken.com. All rights reserved. Powered by <span className="text-underline">danilab.eu</span></div>
      </Flex>
    )
  }

  return (
    <>
    <UikitMenu
      userMenu={<UserMenu />}
      globalMenu={<ExternalLinkSettings />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={config(t)}
      subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      // footerLinks={footerLinks(t)}
      activeItem={activeMenuItem?.href}
      activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy CRB')}
      profile={{
        username: profile?.username,
        image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: !profile?.username,
      }}
      footerTopContent={footerTopContent()}
      footerContent={footerContent()}
      {...props}
    />
    </>
  )
}

export default Menu
