module.exports = {
  rules: {
    '@textlint-rule/no-unmatched-pair': true,
    apostrophe: true,
    'common-misspellings': true,
    diacritics: true,
    'stop-words': {
      severity: 'warning',
    },
    'write-good': {
      severity: 'warning',
    },
  },
  filters: {
    comments: true,
  },
};
