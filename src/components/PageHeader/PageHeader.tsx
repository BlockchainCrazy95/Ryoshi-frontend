import React from 'react'
import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import Container from '../Layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  // background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
  background: linear-gradient(139.73deg, #31b2d2 0%, #3d2a54 100%);
  //linear-gradient(360deg,#31b2d2 0%,#31b2d2 100%)
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
