import React from 'react';
import { Flex } from '@pancakeswap/uikit';
import styled from 'styled-components';

const styles = {
    panel: {
        border: "1px solid #f2ca66",
        borderRadius: 22
    },
    leftImg: {
        padding: "10% 10% 3% 10%"
    },
    content: {
        padding: "0px 40px 20px 40px"
    }
}

const InfoPanel = styled(Flex)`
    border: 1px solid #f2ca66;
    border-radius: 22px;
`

const ReasonInfo = () => {
    return (
        <Flex flexDirection="column">
            <span className='infoTitle'>Why $RYOSHI?</span>
            <span className='infoText' style={{marginTop: 20}}>Trusted by thousands of people</span>
            <div style={{marginTop: 40}}>
                <Flex flexDirection={["column", null, null, "row"]}>
                    <InfoPanel flex="1" flexDirection="column" mr={["0px", null, null, "20px"]} mb="30px">
                        <img style={styles.leftImg} src="/images/home/why/community.png" alt="String Community"/>
                        <div style={styles.content}>
                            <div className='infoSubTitle'>Strong, Vibrant & Supportive Community</div>
                            <div className='reasonInfoText'>RYOSHI community is strong and we have investors that strongly believe that this project will reach 1B MarketCap.
RYOSHI is 100% community driven With RYOSHI, the community will be taking the meme game to a whole other level. FRESHNFTs,MEMES,ART,and MUSIC—EVERYDAY.
</div>
                        </div>
                    </InfoPanel>
                    <Flex flex="1" flexDirection="column"> 
                        <InfoPanel flex="1" flexDirection="row" p="20px" m={["0px 0px 30px 0px",null, null, "0px 0px 30px 20px"]}>
                            {/* <Flex flex="1">
                                <img src="/images/home/why/low-transaction-fees-vectro.svg" alt="Low TransactionFee"/>
                            </Flex> */}
                            <Flex style={{paddingLeft: 20}} flexDirection="column">
                                <div className='infoSubTitle'>LOW transaction fees </div>
                                <div className='reasonInfoText'>RYOSHI came to solve the problems of high gas fees that Shiba is facing. Being on the BSC network, our investors can enjoy minimal gas fees.
2% Fee will be deducted from every transaction which will burn the tokens and increase the demand.
</div>
                            </Flex>
                        </InfoPanel>
                        <InfoPanel flex="1" flexDirection="row" p="20px" m={["0px 0px 30px 0px",null,null, "0px 0px 30px 20px"]}>
                            {/* <Flex flex="1">
                                <img src="/images/home/why/nft-vector.svg" alt="Nft & Art"/>
                            </Flex> */}
                            <Flex flex="1" style={{paddingLeft: 20}} flexDirection="column">
                                <div className='infoSubTitle'>Safe Investment</div>
                                <div className='reasonInfoText'>Liquidity is locked for good immediately after launch. LP tokens were sent to burnt address which means the liquidity could never be pulled out to insure our investors peace of mind.</div>
                            </Flex>
                        </InfoPanel>
                        <InfoPanel flex="1" flexDirection="row" p="20px" m={["0px 0px 30px 0px",null,null, "0px 0px 30px 20px"]}>
                            {/* <Flex flex="1">
                                <img src="/images/home/why/safu-vector.svg" alt="SAFU"/>
                            </Flex> */}
                            <Flex flex="1" style={{paddingLeft: 20}} flexDirection="column">
                                <div className='infoSubTitle'>NFTs & ART</div>
                                <div className='reasonInfoText'>Art is definitely one of the best forms of expression. That’s why NFT’s will be a huge part of our project. RYOSHI Token will create & sell NFT’s & Collectables  on our exclusive market place.</div>
                            </Flex>
                        </InfoPanel>
                    </Flex>
                </Flex>
            </div>
        </Flex>
    )
}

export default ReasonInfo;