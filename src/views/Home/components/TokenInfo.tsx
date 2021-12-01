import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Heading, Link, Button, Image } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'

const infoButtons = [
  {
    fileUrl: 'marketcap',
    altText: 'Coinmarketcap',
    toUrl: '/'
  },{
    fileUrl: 'coingecko',
    altText: 'Coingecko',
    toUrl: '/'
  },{
    fileUrl: 'lbank',
    altText: 'LBank',
    toUrl: '/'
  },{
    fileUrl: 'hotbit',
    altText: 'Hotbit',
    toUrl: '/'
  },{
    fileUrl: 'pancakeswap',
    altText: 'Pancakeswap',
    toUrl: '/'
  },{
    fileUrl: 'probit',
    altText: 'Probit',
    toUrl: '/'
  },{
    fileUrl: 'uniswap',
    altText: 'Uniswap',
    toUrl: '/'
  },{
    fileUrl: 'shibaswap',
    altText: 'Shibaswap',
    toUrl: '/'
  }
];

const TokenInfo = () => {
  const { t } = useTranslation()

  return (
    <Flex flex="1" flexDirection="column" mb="35px">
      <Flex flex="1" flexDirection="column">
          <p style={{ color: '#ffffff', fontSize: 21 }}>Read our&nbsp;</p>
          <a style={{ color: '#f2ca66', fontSize: 21 }} href="/" target="_blank">
            Goldpaper, Audit
          </a>
        </Flex>
        <Flex style={{ marginTop: 20 }}>
          {infoButtons.map((info) => {
            return (
              <a key={info.fileUrl} href={info.toUrl} target="_blank" rel="noreferrer" style={{width: 50, height: 50}}>
                <img className='tokenInfoImg' src={`/images/tokenInfo/${info.fileUrl}.png`} alt={info.altText} />
              </a>
            )
          })}
        </Flex>
    </Flex>
  )
}

export default TokenInfo
