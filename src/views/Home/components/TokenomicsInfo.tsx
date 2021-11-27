import React from 'react';
import { Flex } from '@pancakeswap/uikit';
import styled from 'styled-components';

const aboutContents = [
    {
        subTitle: 'Deflationary Token',
        contents: [
            'DOGE’s biggest problem is that it’s an INFLATIONARY token. Infinite supply. Doge’s community is exceptionally strong, but the foundation upon which it’s built is weak. $RYOSHI is a DEFLATIONARY token. 42% of supply is locked in PancakeSwap. 50% of the entire supply was burnt at launch, while 2% of each transaction will be burnt hereafter. The larger the demand, the higher the amount of transactions. The higher the volume of transactions, the lower the supply. This creates a positive feedback loop that will launch $RYOSHI into the stratosphere.',
            'An 8% Dev Wallet will be kept for future developments, and community-driven projects.'
        ]
    }
];

const GridPanel = styled(Flex)`
    padding-top: 50px;
    display: grid;
    
    ${({ theme }) => theme.mediaQueries.xs} {
        grid-template-columns: 50% 50%;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
        
    }
`;

const GridItem = styled(Flex)`
    margin-bottom: 20px;
    margin-right: 20px;
`;

const TokenomicsInfo = () => {
    return (
        <Flex flexDirection={["column",null,null, "column"]}>
            <Flex flexDirection={["column", null, null, "row"]} style={{paddingRight: 25}}>
                <Flex flexDirection="column" flex="1">
                    <span className='infoTitle'>Tokenomics & Token Distribution</span>
                    {aboutContents.map((about) => {
                        return (
                            <div key={about.subTitle}>
                                <span className='infoSubTitle'>{about.subTitle}</span>
                                <div className='infoText'>
                                    {about.contents.map((content => {
                                        return (
                                            <p style={{marginBottom:0}}>{content}</p>
                                        )
                                    }))}
                                </div>
                            </div>
                        )
                    })}
                </Flex>
                <Flex flex="1"> </Flex>
            </Flex>
            <Flex flexDirection={["column", null, null, "row"]}>
                <GridPanel flexDirection="row">
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Token Name</span>
                        <span className='tokenInfoText'>- Ryoshi Token</span>
                    </GridItem>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Token Symbol</span>
                        <span className='tokenInfoText'>- $RYOSHI</span>
                    </GridItem>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Tokens Burnt</span>
                        <span className='tokenInfoText'>- 50% Burnt</span>
                    </GridItem>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Tokenomics</span>
                        <span className='tokenInfoText'>- 2% Burn Each Transfer / Buy / Sell</span>
                    </GridItem>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Total Supply</span>
                        <span className='tokenInfoText'>- 1,000,000,000,000,000</span>
                    </GridItem>
                </GridPanel>
                <GridPanel flexDirection="row" pl={["0px", null,null, "80px"]}>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Token Name</span>
                        <span className='tokenInfoText'>- Ryoshi Token</span>
                    </GridItem>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Token Symbol</span>
                        <span className='tokenInfoText'>- $RYOSHI</span>
                    </GridItem>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Tokens Burnt</span>
                        <span className='tokenInfoText'>- 50% Burnt</span>
                    </GridItem>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Tokenomics</span>
                        <span className='tokenInfoText'>- 2% Burn Each Transfer / Buy / Sell</span>
                    </GridItem>
                    <GridItem flex="1" flexDirection="column">
                        <span className='tokenInfoTitle'>Total Supply</span>
                        <span className='tokenInfoText'>- 1,000,000,000,000,000</span>
                    </GridItem>
                </GridPanel>
            </Flex>
        </Flex>
    )
}

export default TokenomicsInfo;