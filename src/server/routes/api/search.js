const { cloneDeep, filter, take } = require('lodash');
const languages = require('../../json/languages.json');

const simpleQueryLanguages = (req, res) => {
  const query = req.query.q;
  const limit = req.query.limit || 12;
  const weighted = filter(
    cloneDeep(languages).map((v) => {
      const lang = { ...v };
      lang.searchValue = Object.values(lang).join('|').toLowerCase();
      lang.searchWeight = lang.searchValue.indexOf(query.toLowerCase());
      return lang;
    }),
    (v) => v.searchWeight >= 0,
  ).sort((a, b) => a.searchWeight - b.searchWeight);

  return res
    .status(200)
    .json(take(weighted, limit));
};

module.exports = {
  simpleQueryLanguages,
};
