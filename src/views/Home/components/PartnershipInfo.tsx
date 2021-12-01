import React from 'react'
import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

const GridPanel = styled(Flex)`
    display: grid;
    grid-template-columns: 48% 48%;
    ${({theme}) => theme.mediaQueries.sm} {
        grid-template-columns: 24% 24% 24% 24%;
    }
`

const PartnerPanel = styled(Flex)`
    border-radius: 22px;
    border: 1px solid #f2ca66;
    justify-content: center;
    margin: 25px 20px 0px 20px;
    text-align: center;
    min-height: 95px;
    padding: 32px 0px;
    display: inline-block;

    ${({ theme }) => theme.mediaQueries.sm} {
        
    }

    ${({ theme }) => theme.mediaQueries.md} {
        
    }
`;

const partnerships = [
    {
        altText: "Tech Times",
        fileUrl: 'tech-times',
        link: "https://www.techtimes.com/articles/267822/20211110/ryoshi-token-the-revolutionary-meme-token-that-has-it-all.htm",
        styles: {
            width: "40%"
        }
    }, /* {
        altText: "Yahoo News",
        fileUrl: 'yahoo-news',
        styles:{
            width: "60%"
        }
    }, */
    {
        altText: "Tech Bullion",
        fileUrl: 'tech-bullion',
        link: "https://techbullion.com/ryoshi-token-the-revolutionary-meme-token-that-has-it-all/",
        styles: {
            width: "80%"
        }
    },{
        altText: "Yahoo Finance",
        fileUrl: 'yahoo-finance',
        link: "https://finance.yahoo.com/news/ryoshi-revolutionary-community-driven-entertainment-074000885.html?.tsrc=fin-srch",
        styles: {
            width: "60%"
        }
    },{
        altText: "Market Watch",
        fileUrl: 'market-watch',
        link: "https://www.marketwatch.com/press-release/ryoshi-a-revolutionary-community-driven-entertainment-token-2021-11-11?tesla=y",
        styles: {
            width: "90%",
            paddingTop: "3%"
        }
    }
];

const PartnershipInfo = () => {
    return (
        <Flex flex="1" flexDirection="column">
            <div className="infoText">$RYOSHI in the Media</div>
            <GridPanel>
                {partnerships.map((partnership) => {
                    return (
                        <PartnerPanel key={partnership.altText}>
                            <a href={partnership.link} target="_blank" rel="noreferrer">
                                <img style={partnership.styles} src={`/images/home/partnership/${partnership.fileUrl}.svg`} alt={partnership.altText} />
                            </a>
                        </PartnerPanel>
                    )
                })}
            </GridPanel>
        </Flex>
    )
}

export default PartnershipInfo;