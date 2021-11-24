import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Learn'),
    icon: 'Swap',
    href: '/learn',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Why Ryoshi'),
        href: '/why',
      },
      {
        label: t('About'),
        href: '/about',
      },
      {
        label: t('Tokenomics'),
        href: '/tokenomics',
      },
      {
        label: t('Moonmap'),
        href: '/moonmap',
      },
      {
        label: t('Gallery'),
        href: '/gallery',
      },
      {
        type: DropdownMenuItemType.DIVIDER
      },
      {
        label: t('Audit'),
        href: '/audit',
        type: DropdownMenuItemType.EXTERNAL_LINK
      },
      {
        label: t('GoldPaper'),
        href: '/goldpaper',
        type: DropdownMenuItemType.EXTERNAL_LINK
      },
    ],
  },
  {
    label: t('Swap'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Farm'),
    href: '/farms',
    icon: 'Earn',
    items: [],
  },
  {
    label: t('NFT'),
    href: '/nft',
    icon: 'NFT',
    items: [],
  },
  {
    label: t('Play Game'),
    href: '/nft',
    icon: 'NFT',
    items: [],
  },
  {
    label: t('Community'),
    href: '/nft',
    icon: 'NFT',
    items: [],
  }
  // {
  //   label: t('NFT'),
  //   href: '/collectibles',
  //   icon: 'Nft',
  //   showOnMobile: false,
  //   showItemsOnMobile: false,
  //   items: [
  //     {
  //       label: t('Collectibles'),
  //       href: '/collectibles',
  //     },
  //   ],
  // },
  // {
  //   label: '',
  //   href: '/info',
  //   icon: 'More',
  //   hideSubNav: true,
  //   items: [
  //     {
  //       label: t('Info'),
  //       href: '/info',
  //     },
      // {
      //   label: t('IFO'),
      //   href: '/ifo',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Leaderboard'),
      //   href: '/teams',
      // },
  //     {
  //       type: DropdownMenuItemType.DIVIDER,
  //     },
  //     {
  //       label: t('Blog'),
  //       href: '',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //     {
  //       label: t('Docs'),
  //       href: '',
  //       type: DropdownMenuItemType.EXTERNAL_LINK,
  //     },
  //   ],
  // },
]

export default config
