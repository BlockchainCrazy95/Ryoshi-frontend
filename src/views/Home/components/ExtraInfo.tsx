import React from 'react'
import { Flex } from '@pancakeswap/uikit'

const ExtraInfo = () => {
    return (
        <Flex flex="1" flexDirection={["column","column","row"]}>
            <div style={{paddingRight: 10, marginBottom: 20}}>
                <Flex flexDirection="row">
                    <span className="infoTitle">30,422</span>
                    <div className="infoStatus"><div className="arrow-up">&nbsp;&nbsp;&nbsp;&nbsp;</div>10.53%</div>
                </Flex>
                <div className="infoSubTitle">HODLers</div>
                <div className="infoText">A rapidly growing community with a common mission of going to the Moon</div>
            </div>
            <div>
                <Flex flexDirection="row">
                    <span className="infoTitle">58.89%</span>
                    <span className="infoStatusIcon"><img src="/images/home/fire_1f525.png" alt="fire" style={{height:"26px"}}/></span>
                </Flex>
                <div className="infoSubTitle">Total Burn</div>
                <div className="infoText">Hall of the supply is burnt at launch, and 2% is burnt in each transaction</div>
            </div>
        </Flex>
    )
}

export default ExtraInfo;