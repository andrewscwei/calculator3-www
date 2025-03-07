/**
 * @file Configuration for both client and server environments.
 */

import dotenv from 'dotenv'

dotenv.config()

export default {
  // Version number.
  version: require('../package.json').version,

  // Build number.
  buildNumber: process.env.BUILD_NUMBER || 0,

  // Google Analytics ID (i.e. UA-XXXXXXXX-1)
  ga: 'UA-108117457-2',

  // Google Tag Manager ID (i.e. GTM-XXXXXXX)
  gtag: undefined,

  supportEmail: 'andrewscwei@gmail.com',

  supportSubjectLine: 'Pascal Support',

  appStoreUrl: 'https://apps.apple.com/app/id828838134',

  wideLayoutMinWidth: 700,

  // HTML metadata.
  meta: {
    // Title of the app.
    title: 'Pascal: 3-in-1 Calculator',

    // Short description of the app.
    description: require('../package.json').description,

    // Search keywords.
    keywords: require('../package.json').keywords,

    // App URL.
    url: require('../package.json').homepage,
  },

  // Supported locales. First locale is the default locale.
  locales: ['en'],
}
