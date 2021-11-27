import React from 'react'
import styled from 'styled-components'
import every from 'lodash/every'
import { Stepper, Step, StepStatus, Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { Ifo } from 'config/constants/types'
import { WalletIfoData } from 'views/Ifos/types'
import { useTranslation } from 'contexts/Localization'
import useTokenBalance from 'hooks/useTokenBalance'
import Container from 'components/Layout/Container'
import { useProfile } from 'state/profile/hooks'

interface Props {
  ifo: Ifo
  walletIfoData: WalletIfoData
}

const Wrapper = styled(Container)`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: -24px;
    margin-right: -24px;
  }
`

const parse1 = [
    "- Ryoshi Token Contract Creation",
    "- Ryoshi Token Website Creation & Branding",
    "- Ryoshi Token ads & TG marketing",
    "- Ryoshi Token Stealth Launch",
    "- Yahoo Finance, Benzinga & Tech Bullion article submission",
    "- 1K Holders at launch",
    "- Twitter Influencer promos",
    "- Coinsniper, stocktwits, Coinhunters & Coinvote Ads",
    "- Dextool Trending",
    "- 3k Holders",
    "- List on CG",
    "- List on CMC"
];

const parse2 = [
    "- 10K Holders",
    "- List on Major exchange",
    "- Billboard & mainstream promotion tactics",
    "- Aggressive marketing on TG & Twitter",
    "- Celebrities & Influencer Shoutouts",
    "- Weekly AMA’S on appropriate platforms"
];

const parse3 = [
    "- Further Develop and expand our Eco system",
    "- List on more Major exchanges, starting with gate.io",
    "- Expand brand awareness and develop use case product",
    "- Develop NFT Collection",
    "- Contract Audit by Techrate"
];

const parse4 = [
    "Ryoshi Token will adapt accordingly to market incentives and community requirements to further fuel and develop the project in order to go mainstream"
]


const stepStatus = ["past", "past", "current", "future"];

const Moonmap: React.FC<Props> = ({ ifo, walletIfoData }) => {
  const { poolBasic, poolUnlimited } = walletIfoData
  const { hasProfile } = useProfile()
  const { t } = useTranslation()
  const { balance } = useTokenBalance(ifo.currency.address)
  const stepsValidationStatus = [
    hasProfile,
    balance.isGreaterThan(0),
    poolBasic.amountTokenCommittedInLP.isGreaterThan(0) || poolUnlimited.amountTokenCommittedInLP.isGreaterThan(0),
    poolBasic.hasClaimed || poolUnlimited.hasClaimed,
  ]

  const getStatusProp = (index: number): StepStatus => {
    const arePreviousValid = index === 0 ? true : every(stepsValidationStatus.slice(0, index), Boolean)
    if (stepsValidationStatus[index]) {
      return arePreviousValid ? 'past' : 'future'
    }
    return arePreviousValid ? 'current' : 'future'
  }

  const renderCardBody = (step: number) => {
    const isStepValid = stepsValidationStatus[step]
    switch (step) {
      case 0:
        return (
          <CardBody>
            <Heading as="h4" color={stepStatus[0]==="current"?"secondary":"textSubtle"} mb="16px">
              {t('Parse 1, Jul - Aug 2021')}
            </Heading>
            <Text color={stepStatus[0]==="current"?"secondary":"textInfo"} style={stepStatus[0]==="current"?{opacity: 0.7}:{}} small>
                {parse1.map((text) => {
                    return (<div key={text}>{text}</div>)
                })}
            </Text>
          </CardBody>
        )
      case 1:
        return (
          <CardBody>
            <Heading as="h4" color={stepStatus[1]==="current"?"secondary":"textSubtle"} mb="16px">
              {t('Phase 2, Sep - Oct 2021')}
            </Heading>
            <Text color={stepStatus[1]==="current"?"secondary":"textInfo"} style={stepStatus[1]==="current"?{opacity: 0.7}:{}} small>
              {parse2.map(text=>{
                  return <div>{text}</div>
              })}
            </Text>
          </CardBody>
        )
      case 2:
        return (
          <CardBody>
            <Heading as="h4" color={stepStatus[2]==="current"?"secondary":"textSubtle"} mb="16px">
              {t('Phase 3, Nov - Dec 2021')}
            </Heading>
            <Text color={stepStatus[2]==="current"?"secondary":"textInfo"} style={stepStatus[2]==="current"?{opacity: 0.7}:{}} small>
                {parse3.map(text=>{
                    return <div>{text}</div>
                })}
            </Text>
          </CardBody>
        )
      case 3:
        return (
          <CardBody>
            <Heading as="h4" color={stepStatus[3]==="current"?"secondary":"textSubtle"} mb="16px">
              {t('Phase 4, Feb 2022')}
            </Heading>
            <Text color={stepStatus[3]==="current"?"secondary":"textInfo"} style={stepStatus[3]==="current"?{opacity: 0.7}:{}} small>
                {parse4.map(text=>{
                    return <div>{text}</div>
                })}
            </Text>
          </CardBody>
        )
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <Heading as="h2" scale="xl" color="textSubtle" mb="24px" textAlign="center">
        {t('$RYOSHI Moonmap')}
      </Heading>
      <Stepper>
        {stepsValidationStatus.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Step key={index} index={index} status={stepStatus[index]}>
            <Card>{renderCardBody(index)}</Card>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  )
}

export default Moonmap
