module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-html/vue',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'font-family-no-duplicate-names': true,
        'no-duplicate-at-import-rules': true,
        'block-no-empty': true,
        'no-irregular-whitespace': true,
        'declaration-no-important': true,
        'length-zero-no-unit': true,
      },
    },
    {
      files: [`**/*.{vue,html}`],
      customSyntax: 'postcss-html',
    },
  ],
}
