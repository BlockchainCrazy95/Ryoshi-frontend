import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { Heading, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; highlightColor: string }> = ({
  headingText,
  bodyText,
  highlightColor,
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  const { t } = useTranslation()
  const split = headingText.split(' ')
  console.log("111 split = ", split)
  const lastWord = split.pop()
  
  console.log('111 lastWord = ', lastWord)
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '64px']}
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading scale="lg">{remainingWords}</Heading>
      ) : (
        <Heading scale="xl">{remainingWords}</Heading>
      )}
      <Heading color={highlightColor} scale="xl" mb="24px">
        {t(lastWord)}
      </Heading>
      <Text color="textSubtle">{t(bodyText)}</Text>
    </Flex>
  )
}

export default StatCardContent
