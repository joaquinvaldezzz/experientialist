const files = require('./files.cjs')

module.exports = {
  plugins: {
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: [...files],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
      keyframes: true,
      variables: true,
    },
    cssnano: {
      preset: [
        'default',
        {
          cssDeclarationSorter: false,
        },
      ],
    },
    'postcss-import': {},
    'postcss-sort-media-queries': {},
    tailwindcss: {},
  },
}
