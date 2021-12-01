import React from 'react'
import { Flex, Button, Text, IconButton, CogIcon } from '@pancakeswap/uikit'

const ExternalLinkSettings = () => {
    return (
        <Flex style={{marginRight: "20px"}}>
            <a className="topSocialLink" href="https://www.reddit.com/r/RyoshiTokenBSC" target="_blank" rel="noreferrer">
                <div className="topSocialDiv">
                    <img className='topSocialIcon' src="/images/external/reddit-icon.svg" alt="Reddit" style={{paddingTop: "2px"}}/>
                </div>
            </a>
            <a className="topSocialLink" href="https://t.co/E8u0GkUXP4?amp=1" target="_blank" rel="noreferrer">
                <div className="topSocialDiv">
                    <img className='topSocialIcon' src="/images/external/discord-icon.svg" alt="Discord"/>
                </div>
            </a>
            <a className="topSocialLink" href="https://twitter.com/TokenRyoshi" target="_blank" rel="noreferrer">
                <div className="topSocialDiv">
                    <img className='topSocialIcon' src="/images/external/twitter-icon.svg" alt="Twitter"/>
                </div>
            </a>
            <a className="topSocialLink" href="https://t.me/ryoshitokenofficial" target="_blank" rel="noreferrer">
                <div className="topSocialDiv">
                    <img className='topSocialIcon' src="/images/external/telegram-icon.svg" alt="Telegram"/>
                </div>
            </a>
        </Flex> 

    )
}

export default ExternalLinkSettings;