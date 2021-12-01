import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'RyoshiSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CRB through yield farming or win it in the Lottery, then stake it in Rocket Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CaribSwap), NFTs, and more, on a platform you can trust.',
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
        title: `${t('Home')} | ${t('RyoshiSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('RyoshiSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('RyoshiSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('RyoshiSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('RyoshiSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('RyoshiSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('RyoshiSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('RyoshiSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('RyoshiSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('RyoshiSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('RyoshiSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('RyoshiSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('RyoshiSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('RyoshiSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('RyoshiSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('RyoshiSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('RyoshiSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('RyoshiSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('RyoshiSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('RyoshiSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('RyoshiSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('RyoshiSwap Info & Analytics')}`,
        description: 'View statistics for CaribSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('RyoshiSwap Info & Analytics')}`,
        description: 'View statistics for CaribSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('RyoshiSwap Info & Analytics')}`,
        description: 'View statistics for CaribSwap exchanges.',
      }
    default:
      return null
  }
}
