import React from 'react';
import { Flex } from '@pancakeswap/uikit';
import styled from 'styled-components';

const styles = {
    title: {
        color: '#bebebe',
        fontWeight: 400,
        fontSize: "21px",
        lineHeight: "30px",
        marginBottom: "10px"
    },
    content: {
        color: '#bebebe',
        fontSize: "16px",
        lineHeight: "27px"
    },
    yellow: {
        color: "#f2ca66",
        cursor: "pointer"
    }
}

const GridPanel = styled(Flex)`
    padding-top: 25px;
    display: grid;
    ${({theme}) => theme.mediaQueries.md} {
        grid-template-columns: 48% 48%;
    }
`;

const GridItem = styled.div`
    width: calc(100% - 200px);
    border-radius: 22px;
    border: 1px solid #f2ca66;
    padding: 20px;
    margin: 10px;

    ${({theme}) => theme.mediaQueries.xs} {
        width: calc(100% - 150px);
    }
    ${({theme}) => theme.mediaQueries.sm} {
        width: calc(100% - 20px);
    }
`

const HowToInfo = () => {
    return (
        <Flex flexDirection="column">
            <span className='infoTitle'>How to Buy $RYOSHI</span>
            <span className='infoText'>Follow these steps to get started with Metamask right away</span>
            <GridPanel flexDirection="row">
                <GridItem>
                    <Flex flexDirection="row">
                        <div className="number-circle">1</div>
                        <div style={{paddingLeft: 15}}>
                            <div style={styles.title}>Create a MetaMask Wallet</div>
                            <div style={styles.content}>
                                $RYOSHI Token is available for purchase. Market leader in <span className='text-underline' style={styles.yellow}>BEP20</span> (Binance Smart Chain) wallets, <span className='text-underline' style={styles.yellow}>Metamask</span> is available <span className='text-underline' style={styles.yellow}>iOS</span> and <span style={styles.yellow}>Android</span> or visit <span style={styles.yellow}>metamask.io</span>
                            </div>
                        </div>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection="row">
                        <div className="number-circle">2</div>
                        <div style={{paddingLeft: 15}}>
                            <div style={styles.title}>$BNB to MetaMask</div>
                            <div style={styles.content}>
                                Either purchase $BNB through MetaMask or transfer from another Wallet (e.g. Coinbase or Binance) to MetaMask wallet.
                            </div>
                        </div>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection="row">
                        <div className="number-circle">3</div>
                        <div style={{paddingLeft: 15}}>
                            <div style={styles.title}>Stay with PancakeSwap</div>
                            <div style={styles.content}>
                                You can buy $RYOSHI on <span className='text-underline' style={styles.yellow}>RyoshiSwap</span> or <span className='text-underline' style={styles.yellow}>PancakeSwap</span> Contract: <span className='text-underline' style={styles.yellow}>0x0e5f989ce525acc4ee45506af91964f7f4c9f2e9</span>
                            </div>
                        </div>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex flexDirection="row">
                        <div className="number-circle">4</div>
                        <div style={{paddingLeft: 15}}>
                            <div style={styles.title}>Swap $BNB for $RYOSHI</div>
                            <div style={styles.content}>
                                By connecting your Wallet, you are able to swap $BNB for $RYOSHI. Easy & Hassle free!
                            </div>
                        </div>
                    </Flex>
                </GridItem>
            </GridPanel>
        </Flex>
    )
}

export default HowToInfo;