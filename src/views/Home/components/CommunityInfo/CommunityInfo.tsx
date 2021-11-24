import React from 'react';
import { Flex } from '@pancakeswap/uikit';
import styled from 'styled-components';
import CountryInfo from './CountryInfo';

const communities = [
    {
        flag: "Arabia", 
        name: "Arabia",
        telegram: "/"
    },
    {
        flag: "India",
        name: "India",
        telegram: "/"
    },
    {
        flag: "China",
        name: "China",
        telegram: "/"
    },
    {
        flag: "Russia",
        name: "Russia",
        telegram: "/"
    },
    {
        flag: "Brazil",
        name: "Brazil",
        telegram: "/"
    },
    {
        flag: "Indonesia",
        name: "Indonesia",
        telegram: "/"
    },
    {
        flag: "Philippines",
        name: "Philippines",
        telegram: "/"
    },
    {
        flag: "Turkey",
        name: "Turkey",
        telegram: "/"
    },
    {
        flag: "Germany",
        name: "Germany",
        telegram: "/"
    },
    {
        flag: "Iran",
        name: "Iran",
        telegram: "/"
    },
    {
        flag: "Romania",
        name: "România",
        telegram: "/"
    }
];

const GridPanel = styled(Flex)`
    margin-top: 60px;
    display: grid;
    grid-template-columns: 98%;

    ${({theme}) => theme.mediaQueries.xs} {
        grid-template-columns: 48% 48%;
    }
    
    ${({theme}) => theme.mediaQueries.sm} {
        grid-template-columns: 33% 33% 33%;
    }
    ${({theme}) => theme.mediaQueries.md} {
        grid-template-columns: 23% 23% 23% 23%;
        padding-left: 30px;
    }
`

const CommunityInfo = () => {
    return (
        <Flex flexDirection="column">
            <span className='infoTitle'>Want to Get Involved?</span>
            <span className='infoSubTitle'>Ryoshi is like no other token in existence</span>
            <span className='infoText'>The Ryoshi Token community includes tens of thousands of users, HODlers and enthusiasts all over the world; including Indonesia, China, Europe, North America, South America, Australia and Africaz</span>
            <GridPanel>
                {communities.map(community => {
                    return (
                        <CountryInfo key={community.name} info={community}/>
                    )
                })}
                
            </GridPanel>
        </Flex>
    )
}

export default CommunityInfo;