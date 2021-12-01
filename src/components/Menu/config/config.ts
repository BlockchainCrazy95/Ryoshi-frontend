import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Learn'),
    icon: 'Resources',
    href: '/',
    showOnMobile: true,
    showItemsOnMobile: true,
    items: [
      {
        label: t('Why Ryoshi'),
        href: '#reason-info'
      },
      {
        label: t('About'),
        href: '#about-info'
      },
      {
        label: t('Tokenomics'),
        href: '#tokenomics-info'
      },
      {
        label: t('Moonmap'),
        href: '#moonmap-info'
      },
      {
        label: t('Gallery'),
        href: '#gallery-info'
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
    showOnMobile: true,
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Farm'),
    href: '/farms',
    icon: 'Farm',
    items: [],
    showOnMobile: true,
    showItemsOnMobile: false,
  },
  {
    label: t('NFT'),
    href: '/nft',
    icon: 'NftFilled',
    items: [],
    showOnMobile: true,
    showItemsOnMobile: false,
  },
  {
    label: t('Play Game'),
    href: '/nft',
    icon: 'TeamBattle',
    items: [],
    showOnMobile: true,
    showItemsOnMobile: false,
  },
  {
    label: t('Community'),
    href: '/nft',
    icon: 'Community',
    items: [],
    showOnMobile: true,
    showItemsOnMobile: false,
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
