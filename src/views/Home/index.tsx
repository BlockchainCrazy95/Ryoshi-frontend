import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { Flex } from '@pancakeswap/uikit'
import useGetWalletIfoData from 'views/Ifos/hooks/v2/useGetWalletIfoData'
import { ifosConfig } from 'config/constants'
import Hero from './components/Hero'
import TokenInfo from './components/TokenInfo'
import ExtraInfo from './components/ExtraInfo'
import PartnershipInfo from './components/PartnershipInfo'
import AboutInfo from './components/AboutInfo'
import TokenomicsInfo from './components/TokenomicsInfo'
import ArtGallerySection from './components/ArtGallerySection'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import HowToInfo from './components/HowToInfo'
import CommunityInfo from './components/CommunityInfo/CommunityInfo'
import ReasonInfo from './components/ReasonInfo'
import DiscoverSection from './components/DiscoverSection'
import Moonmap from './components/Moonmap'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const CircleEffectPanel = styled.div`
  background-color: #1c1c1c;
  background-image: url('/images/home/yellow.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  height: 80px;

  ${({theme}) => theme.mediaQueries.sm} {
    height: 160px;
  }
  
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const activeIfo = ifosConfig.find((ifo) => ifo.isActive)
  const walletIfoData = useGetWalletIfoData(activeIfo);

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        // background={
        //   theme.isDark
        //     ? 'radial-gradient(103.12% 50% at 70% 30%, #31b2d2 0%, #14111b 100%)'
        //     : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
        // }
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
      >
        {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <Hero />
        <Flex flexDirection={["column", "column", null, "row"]}>
          <TokenInfo />
          <ExtraInfo />
        </Flex>
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0 }}
      >
        <PartnershipInfo/>
      </PageSection>
      
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0 }}
      >
        <AboutInfo />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0 }}
      >
        <ReasonInfo />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0 }}
      >
        <TokenomicsInfo />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0 }}
      >
        <Moonmap ifo={activeIfo} walletIfoData={walletIfoData} />
      </PageSection>
      <CircleEffectPanel/>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0, backgroundImage: "url('./images/home/bg-nft.png')", backgroundSize: 'cover', height: 1240 }}
      >
        <DiscoverSection />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0 }}
      >
        <ArtGallerySection />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0 }}
      >
        <HowToInfo />
      </PageSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background="#1c1c1c"
        index={2}
        hasCurvedDivider={false}
        style={{ padding: 0 }}
      >
        <CommunityInfo />
      </PageSection>
    </>
  )
}

export default Home
