import React from 'react';
import { Flex } from '@pancakeswap/uikit';
import styled from 'styled-components';

const styles = {
    title: {
        color: '#bebebe',
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "24px",
        marginBottom: "10px"
    },
    content: {
        color: '#bebebe',
        fontSize: "14px",
        lineHeight: "20px",
    },
    yellow: {
        color: "#f2ca66",
        cursor: "pointer",
        maxWidth: 160
    }
}

const GridPanel = styled.div`
    padding-top: 25px;
    display: grid;
    grid-template-columns: 98%;
    ${({theme}) => theme.mediaQueries.md} {
        grid-template-columns: 48% 48%;
    }
`;

const GridItem = styled.div`
    width: 98%;
    border-radius: 22px;
    border: 1px solid #f2ca66;
    padding: 20px;
    margin: 10px;

    ${({theme}) => theme.mediaQueries.md} {
        margin-left: 20px;
    }
`

const ContentDiv = styled.div`
    padding-left: 15px;
    overflow-wrap: anywhere;
`

const HowToInfo = () => {
    return (
        <Flex flexDirection="column">
            <span className='infoTitle'>How to Buy $RYOSHI</span>
            <span className='infoText'>Follow these steps to get started with Metamask right away</span>
            <GridPanel>
                <GridItem>
                    <Flex flexDirection="row">
                        <div className="number-circle">1</div>
                        <ContentDiv>
                            <div style={styles.title}>Create a MetaMask Wallet</div>
                            <div style={styles.content}>
                                $RYOSHI Token is available for purchase. Market leader in <span className='text-underline' style={styles.yellow}>BEP20</span> (Binance Smart Chain) wallets, <span className='text-underline' style={styles.yellow}>Metamask</span> is available <span className='text-underline' style={styles.yellow}>iOS</span> and <span style={styles.yellow}>Android</span> or visit <span style={styles.yellow}>metamask.io</span>
                            </div>
                        </ContentDiv>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection="row">
                        <div className="number-circle">2</div>
                        <ContentDiv>
                            <div style={styles.title}>$BNB to MetaMask</div>
                            <div style={styles.content}>
                                Either purchase $BNB through MetaMask or transfer from another Wallet (e.g. Coinbase or Binance) to MetaMask wallet.
                            </div>
                        </ContentDiv>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection="row">
                        <div className="number-circle">3</div>
                        <ContentDiv>
                            <div style={styles.title}>Stay with PancakeSwap</div>
                            <div style={styles.content}>
                                You can buy $RYOSHI on <span className='text-underline' style={styles.yellow}>RyoshiSwap</span> or <span className='text-underline' style={styles.yellow}>PancakeSwap</span> Contract: <span className='text-underline' style={styles.yellow}>0x0e5f989ce525acc4ee45506af91964f7f4c9f2e9</span>
                            </div>
                        </ContentDiv>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection="row">
                        <div className="number-circle">4</div>
                        <ContentDiv>
                            <div style={styles.title}>Swap $BNB for $RYOSHI</div>
                            <div style={styles.content}>
                                By connecting your Wallet, you are able to swap $BNB for $RYOSHI. Easy & Hassle free!
                            </div>
                        </ContentDiv>
                    </Flex>
                </GridItem>
            </GridPanel>
        </Flex>
    )
}

export default HowToInfo;