import type { SiteFactoryRecipe } from '@/design/factory/types'

export const SITE_FACTORY_RECIPE: SiteFactoryRecipe = {
  brandPack: 'editorial',
  navbar: 'compact-bar',
  footer: 'columns-footer',
  homeLayout: 'editorial-home',
  motionPack: 'editorial-soft',
  primaryTask: 'mediaDistribution',
  enabledTasks: ['mediaDistribution', 'article', 'listing', 'profile'],
  taskLayouts: {
    mediaDistribution: 'article-editorial',
    article: 'article-editorial',
    listing: 'listing-directory',
    profile: 'profile-business',
    image: 'image-portfolio',
    sbm: 'sbm-curation',
    classified: 'classified-market',
  },
}
