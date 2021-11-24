import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CaribSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CARIB through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CaribSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('CaribSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('CaribSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('CaribSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('CaribSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('CaribSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('CaribSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('CaribSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('CaribSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('CaribSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('CaribSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('CaribSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('CaribSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('CaribSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('CaribSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('CaribSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('CaribSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('CaribSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('CaribSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('CaribSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('CaribSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('CaribSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('CaribSwap Info & Analytics')}`,
        description: 'View statistics for CaribSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('CaribSwap Info & Analytics')}`,
        description: 'View statistics for CaribSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('CaribSwap Info & Analytics')}`,
        description: 'View statistics for CaribSwap exchanges.',
      }
    default:
      return null
  }
}
