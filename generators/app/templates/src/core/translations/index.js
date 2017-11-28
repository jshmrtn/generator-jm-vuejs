import Vue from 'vue';
import VueI18n from 'vue-i18n';
import {
  defaultLanguage,
  languages,
} from 'Src/client.config.json';

Vue.use(VueI18n);

const messages = {};

for (const language of languages) {
  // eslint-disable-next-line
  messages[language] = require(`./${language}.json`);
}

const i18n = new VueI18n({
  locale: defaultLanguage,
  fallbackLocale: defaultLanguage,
  messages,
});

export default i18n;
