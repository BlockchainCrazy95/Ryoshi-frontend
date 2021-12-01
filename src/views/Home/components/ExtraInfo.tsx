import React from 'react'
import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

const InfoDiv = styled.div`
    padding-right: 10px;
    margin-bottom: 20px;
    ${({theme}) => theme.mediaQueries.sm} {
        margin-left: 20px;
    }
`

const ExtraInfo = () => {
    return (
        <Flex flex="1" flexDirection={["column","column","row"]}>
            <div style={{paddingRight: 10, marginBottom: 20}}>
                <Flex flexDirection="row">
                    <span className="infoTitle">46,422</span>
                    <div className="infoStatus"><div className="arrow-up">&nbsp;&nbsp;&nbsp;&nbsp;</div>10.53%</div>
                </Flex>
                <div className="infoSubTitle">BSC Holders</div>
                {/* <div className="infoText">A rapidly growing community with a common mission of going to the Moon</div> */}
            </div>
            <InfoDiv>
                <Flex flexDirection="row">
                    <span className="infoTitle">25,127</span>
                    <div className="infoStatus"><div className="arrow-up">&nbsp;&nbsp;&nbsp;&nbsp;</div>10.53%</div>
                </Flex>
                <div className="infoSubTitle">ETH Holders</div>
                {/* <div className="infoText">A rapidly growing community with a common mission of going to the Moon</div> */}
            </InfoDiv>
            {/* <div>
                <Flex flexDirection="row">
                    <span className="infoTitle">58.89%</span>
                    <span className="infoStatusIcon"><img src="/images/home/fire_1f525.png" alt="fire" style={{height:"26px"}}/></span>
                </Flex>
                <div className="infoSubTitle">Total Burn</div>
                <div className="infoText">Hall of the supply is burnt at launch, and 2% is burnt in each transaction</div>
            </div> */}
        </Flex>
    )
}

export default ExtraInfo;