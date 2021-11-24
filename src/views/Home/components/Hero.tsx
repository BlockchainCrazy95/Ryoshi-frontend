import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex, Heading, Link, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }  
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  // animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`

const imagePath = '/images/home/'
const imageSrc = 'section-first-image'

const starsImage: CompositeImageProps = {
  path: '/images/home/',
  attributes: [
    // { src: 'star-l', alt: '3D Star' },
    // { src: 'star-r', alt: '3D Star' },
    { src: '', alt: '' },
  ],
}

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column', null, null, 'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xxl" color="secondary" mb="24px" className="section1Text">
            {t('RYOSHI is SHIBA’s older, wiser father')}
          </Heading>
          <p className="infoText" style={{marginBottom: 25}}>Decentralized, deflationary, community token that is by the people, for the people</p>
          {/* <Heading scale="md" mb="24px">
            {t('Earn, Borrow & Lend, Play')}
          </Heading> */}
          <Flex>
            {/* {!account && <ConnectWalletButton mr="8px" />} */}
            <Link style={{marginRight: 16}} href="/swap">
              <Button variant="primary">{t('Buy on RyoshiSwap')}</Button>
            </Link>
            <Link href="/swap">
              <Button variant="secondary">{t('Explore $RYOSHI')}</Button>
            </Link>
          </Flex>
        </Flex>
        <Flex
          height={['80%', null, null, '100%']}
          width={['80%', null, null, '100%']}
          pt={['35px', '35px', '35px', null]}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('Lunar bunny')} />
          </BunnyWrapper>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
