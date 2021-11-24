import React from 'react';
import { Flex } from '@pancakeswap/uikit'

const aboutContents = [
    {
        subTitle: 'It’s $RYOSHI’s time',
        contents: [
            'If 2021 taught the crypto world anything, it’s that community-driven meme tokens are in HIGH demand. The PEOPLE want control of their token, and strong communities of HODLers can be built that have each other’s back.',
            'That’s why $RYOSHI has stepped out of the shadows. See, $RYOSHI is SHIBA’s older, wiser father. He’s proud of everything his son has accomplished, but is pretty bummed about the fact that so many people missed their chance to get on the moon rocket.',
            'RYOSHI has created a decentralized, deflationary, community token that is by the people, for the people. $RYOSHI solves the SIGNIFICANT issues of DOGE and SHIBA — while maintaining the same meme community energy that allowed both assets to rise dramatically.'
        ]
    },
    {
        subTitle: 'Low Fees',
        contents: ['One of the major drawbacks of SHIB, and likely the reason the token has stalled out since its initial rise, is the high transaction fees associated with the Ethereum Blockchain upon which it is built. Being a BEP20 token built on the Binance Smart Chain allows $RYOSHI to have TINY transaction fees.']
    },
    {
        subTitle: 'Transparency',
        contents: ['An engaged, voracious community deserves full transparency from the asset they love. That’s why $RYOSHI is now, and will continue to be the most transparent meme token on the market.']
    }
];

const AboutInfo = () => {

    return (
        <Flex flexDirection={["column", null, null, "row"]}>
            <Flex flex="1" flexDirection="row" alignItems="center"
                width={["80%", null, null, "100%"]}
                ml={["10%", null, null, "0"]}
            >
                <img src="/images/home/section-about-image.png" alt="AboutImage" />
            </Flex>
            <Flex flex="1" flexDirection="column" style={{paddingLeft: 25}}>
                <span className='infoTitle'>About $RYOSHI</span>
                {aboutContents.map((about) => {
                    return (
                        <div key={about.subTitle}>
                            <span className='infoSubTitle'>{about.subTitle}</span>
                            <div className='infoText'>
                                {about.contents.map((content => {
                                    return (
                                        <p>{content}</p>
                                    )
                                }))}
                            </div>
                        </div>
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default AboutInfo;