import React from 'react'
import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import HarvestCard from './HarvestCard'
import UserDetail from './UserDetail'

const StyledCard = styled(Box)`
  border-bottom: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-left: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-right: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-radius: ${({ theme }) => `0 0 ${theme.radii.card} ${theme.radii.card}`};
  background: ${({ theme }) =>
    theme.isDark
      ? '#f2ca66'
      : 'linear-gradient(180deg, #31b2d2 0%,  #31b2d2 42.04%, rgba(206, 236, 243, 0.9) 100%)'};
`

const UserBanner = () => {
  return (
    <StyledCard p={['16px', null, null, '24px']}>
      <Flex alignItems="center" justifyContent="center" flexDirection={['column', null, null, 'row']}>
        <Flex flex="1" mr={[null, null, null, '32px']}>
          <UserDetail />
        </Flex>
        <Flex flex="1" width={['100%', null, 'auto']}>
          <HarvestCard />
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default UserBanner
