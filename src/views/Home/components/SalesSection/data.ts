import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'CaribSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: '',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      // { src: 'pie', alt: 'Pie chart' },
      // { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with carib token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'CaribSwap will be more utilized to change the world.',
  bodyText: 'CRB token is at the heart of the CaribSwap ecosystem. Buy it, win it, farm it, spend it, stake it.',
  reverse: false,
  primaryButton: {
    // to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    to: '/swap?outputCurrency=0x2a6C4FA54167306C9bbA1D3bcE103B8F4543fA3B',
    text: 'Buy CRB',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/tokenomics/cake',
    text: '',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      // { src: 'bottom-right', alt: 'Small 3d pancake' },
      // { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'coin', alt: 'CRB token' },
      // { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
