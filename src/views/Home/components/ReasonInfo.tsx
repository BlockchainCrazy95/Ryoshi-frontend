import React from 'react';
import { Flex } from '@pancakeswap/uikit';
import styled from 'styled-components';

const styles = {
    panel: {
        border: "1px solid #f2ca66",
        borderRadius: 22
    },
    leftImg: {
        padding: 30
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
                        <img style={styles.leftImg} src="/images/home/why/strong-community-vector.svg" alt="String Community"/>
                        <div style={styles.content}>
                            <div className='infoSubTitle'>Strong Community</div>
                            <div className='infoText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                    </InfoPanel>
                    <Flex flex="1" flexDirection="column">
                        <InfoPanel flex="1" flexDirection="row" p="20px" m={["0px 0px 30px 0px",null, null, "0px 0px 30px 20px"]} alignItems="center">
                            <Flex flex="1">
                                <img src="/images/home/why/low-transaction-fees-vectro.svg" alt="Low TransactionFee"/>
                            </Flex>
                            <Flex flex="2" style={{paddingLeft: 25}} flexDirection="column">
                                <div className='infoSubTitle'>Low Transaction Fees</div>
                                <div className='infoText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </Flex>
                        </InfoPanel>
                        <InfoPanel flex="1" flexDirection="row" p="20px" m={["0px 0px 30px 0px",null,null, "0px 0px 30px 20px"]} alignItems="center">
                            <Flex flex="1">
                                <img src="/images/home/why/nft-vector.svg" alt="Nft & Art"/>
                            </Flex>
                            <Flex flex="2" style={{paddingLeft: 25}} flexDirection="column">
                                <div className='infoSubTitle'>NFT’s & Art</div>
                                <div className='infoText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </Flex>
                        </InfoPanel>
                        <InfoPanel flex="1" flexDirection="row" p="20px" m={["0px 0px 30px 0px",null,null, "0px 0px 30px 20px"]} alignItems="center">
                            <Flex flex="1">
                                <img src="/images/home/why/safu-vector.svg" alt="SAFU"/>
                            </Flex>
                            <Flex flex="2" style={{paddingLeft: 25}} flexDirection="column">
                                <div className='infoSubTitle'>SAFU</div>
                                <div className='infoText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            </Flex>
                        </InfoPanel>
                    </Flex>
                </Flex>
            </div>
        </Flex>
    )
}

export default ReasonInfo;