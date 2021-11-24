import React from 'react';
import { Flex } from '@pancakeswap/uikit';

const styles = {
    title: {
        fontSize: "38px",
        lineHeight: "48px",
        fontWeight: 500,
        marginTop: 50,
        paddingRight: 10
    },
    content: {
        fontSize: "21px",
        lineHeight: "35px",
        marginTop: 20,
        paddingRight: 10
    },
    btn:{
        backgroundColor: "#000",
        borderRadius: 14,
        fontSize: "18px",
        lineHeight: "64px",
        color: "#f2ca66",
        width: 150,
        marginTop: 70
    }
}

const DiscoverSection = () => {
    return (
        <>
        <div className='discoverBack'>
            <Flex flexDirection="row">
                <Flex flex="1"><></></Flex>
                <Flex flex={["10", null, null, "1"]} flexDirection="column">
                    <div style={styles.title}>Discover, collect, and sell exclusive $RYOSHI NFTs</div>
                    <div style={styles.content}>You can sell them to other collectors or keep them all to yourself</div>
                    <button style={styles.btn} type="button">Discover</button>
                </Flex>
            </Flex>
        </div>
        </>
    )
}

export default DiscoverSection;