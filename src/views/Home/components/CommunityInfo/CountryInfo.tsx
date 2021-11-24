import React from 'react';
import { Flex } from '@pancakeswap/uikit';

const styles = {
    panel: {
        display: 'inline-block',
        marginBottom: 40
    },
    countryName: {
        color: "#bebebe",
        fontSize: "21px",
        lineHeight: "35px"
    },
    yellow: {
        fontSize: "16px",
        lineHeight: "27px",
        color: "#f2ca66"
    }
}

const CountryInfo = (props) => {
    const { info } = props;
    return (
        <div style={styles.panel}>
            <Flex >
                <img src={`/images/home/community/${info.flag}-flag.svg`} alt={info.name} />
                <Flex flexDirection="column" justifyContent="center" style={{paddingTop: 10}}>
                    <div className='infoSubTitle'>{info.name}</div>
                    <span className='text-underline' style={styles.yellow}>Telegram</span>
                </Flex>
            </Flex>
        </div>
    )
}

export default CountryInfo;